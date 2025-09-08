
'use client';

import { createContext, useContext, useState, useMemo, useEffect, type ReactNode, useCallback } from 'react';
import { auth, db } from '@/lib/firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  type User as FirebaseUser 
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import type { User, StoredUser } from '@/lib/types';

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (email: string, password?: string) => Promise<boolean>;
  logout: () => void;
  signup: (userData: Omit<StoredUser, 'id' | 'password'> & { password?: string }) => Promise<boolean>;
  error: string | null;
  clearError: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
      if (firebaseUser) {
        try {
          const userDocRef = doc(db, "users", firebaseUser.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            setUser({
                uid: firebaseUser.uid,
                ...userDoc.data()
              } as User);
          } else {
            // Fallback for when the user doc doesn't exist yet.
            setUser({ uid: firebaseUser.uid, email: firebaseUser.email!, name: firebaseUser.displayName || firebaseUser.email });
          }
        } catch (e) {
            console.error("Failed to fetch user document, using auth data as fallback:", e);
             // If there's an error (e.g., Firestore not set up), use auth data as a fallback.
            setUser({ uid: firebaseUser.uid, email: firebaseUser.email!, name: firebaseUser.displayName || firebaseUser.email });
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
  

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const signup = useCallback(async (userData: Omit<StoredUser, 'id'>): Promise<boolean> => {
    clearError();
    if (!userData.password) {
        setError("Password is required.");
        return false;
    }
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
      const firebaseUser = userCredential.user;
      
      // Create a user document in Firestore to store additional info
      await setDoc(doc(db, "users", firebaseUser.uid), {
        name: userData.name,
        email: userData.email,
      });

      return true;
    } catch (err: any) {
      if (err.code === 'auth/email-already-in-use') {
        setError('This email account already created.');
      } else {
        setError(err.message);
      }
      return false;
    } finally {
      setLoading(false);
    }
  }, [clearError]);

  const login = useCallback(async (email: string, password?: string): Promise<boolean> => {
     clearError();
     if (!password) {
        setError("Password is required.");
        return false;
    }
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch (err: any)
      {
      const friendlyMessage = err.code === 'auth/invalid-credential' 
        ? 'Invalid email or password. Please try again.'
        : err.message;
      setError(friendlyMessage);
      return false;
    } finally {
      setLoading(false);
    }
  }, [clearError]);

  const logout = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      await signOut(auth);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const value = useMemo(() => ({ user, loading, login, logout, signup, error, clearError }), [user, loading, login, logout, signup, error, clearError]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
