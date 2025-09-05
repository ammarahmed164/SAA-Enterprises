
'use client';

import { createContext, useContext, useState, useMemo, useEffect, type ReactNode, useCallback } from 'react';
import type { User, StoredUser } from '@/lib/types';

const USERS_STORAGE_KEY = 'registeredUsers';
const AUTH_USER_STORAGE_KEY = 'authUser';

type AuthContextType = {
  user: User | null;
  login: (email: string, password?: string) => Promise<boolean>;
  logout: () => void;
  signup: (userData: Omit<StoredUser, 'id' | 'password'> & { password?: string }) => Promise<boolean>;
  error: string | null;
  clearError: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const getStoredUsers = (): StoredUser[] => {
  try {
    const users = localStorage.getItem(USERS_STORAGE_KEY);
    return users ? JSON.parse(users) : [];
  } catch (error) {
    console.error("Failed to parse users from localStorage", error);
    return [];
  }
};

const setStoredUsers = (users: StoredUser[]) => {
  try {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  } catch (error) {
    console.error("Failed to save users to localStorage", error);
  }
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem(AUTH_USER_STORAGE_KEY);
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch (e) {
      console.error("Failed to parse auth user from localStorage", e);
      setUser(null);
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const signup = useCallback(async (userData: Omit<StoredUser, 'id'>): Promise<boolean> => {
    const users = getStoredUsers();
    if (users.some(u => u.email === userData.email)) {
      setError("An account with this email already exists.");
      return false;
    }

    const newUser: StoredUser = {
      id: Date.now().toString(),
      ...userData
    };
    
    setStoredUsers([...users, newUser]);
    setError(null);
    return true;
  }, []);

  const login = useCallback(async (email: string, password?: string): Promise<boolean> => {
    const users = getStoredUsers();
    const foundUser = users.find(u => u.email === email);

    if (!foundUser || (password && foundUser.password !== password)) {
      setError("Invalid email or password.");
      return false;
    }

    const loggedInUser: User = { id: foundUser.id, name: foundUser.name, email: foundUser.email };
    setUser(loggedInUser);
    try {
      localStorage.setItem(AUTH_USER_STORAGE_KEY, JSON.stringify(loggedInUser));
      setError(null);
    } catch (e) {
      console.error("Failed to save auth user to localStorage", e);
      setError("Could not complete login.");
      return false;
    }
    return true;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setError(null);
    try {
      localStorage.removeItem(AUTH_USER_STORAGE_KEY);
    } catch (error) {
      console.error("Failed to remove user from localStorage", error);
    }
  }, []);

  const value = useMemo(() => ({ user, login, logout, signup, error, clearError }), [user, login, logout, signup, error, clearError]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
