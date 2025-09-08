
'use client';

import { createContext, useContext, useState, useMemo, useEffect, type ReactNode, useCallback } from 'react';
import type { Order, CartItem } from '@/lib/types';
import { useAuth } from './use-auth';
import { db } from '@/lib/firebase';
import { collection, addDoc, query, where, onSnapshot, serverTimestamp, orderBy } from 'firebase/firestore';

type NewOrderPayload = {
  items: CartItem[];
  total: number;
}

type OrdersContextType = {
  orders: Order[];
  loading: boolean;
  addOrder: (payload: NewOrderPayload) => Promise<void>;
};

const OrdersContext = createContext<OrdersContextType | undefined>(undefined);

export function OrdersProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.uid) {
      setLoading(true);
      const ordersRef = collection(db, "orders");
      // Query without orderBy to avoid needing a composite index. We will sort on the client.
      const q = query(ordersRef, where("userId", "==", user.uid));
      
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const userOrders: Order[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          userOrders.push({
            id: doc.id,
            ...data,
            // Convert Firestore Timestamp to ISO string date
            date: data.createdAt?.toDate().toISOString() || new Date().toISOString(),
          } as Order);
        });
        
        // Sort the orders on the client-side by date, descending
        userOrders.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        setOrders(userOrders);
        setLoading(false);
      }, (error) => {
        console.error("Error fetching orders: ", error);
        setLoading(false);
      });

      return () => unsubscribe();
    } else {
      setOrders([]);
      setLoading(false);
    }
  }, [user]);

  const addOrder = useCallback(async (payload: NewOrderPayload) => {
    if (!user) throw new Error("User must be logged in to place an order.");

    const newOrder = {
      userId: user.uid,
      userName: user.name,
      userEmail: user.email,
      orderItems: payload.items,
      totalAmount: payload.total,
      status: 'Pending',
      createdAt: serverTimestamp(),
    };
    
    await addDoc(collection(db, 'orders'), newOrder);

  }, [user]);
  
  const value = useMemo(() => ({ orders, loading, addOrder }), [orders, loading, addOrder]);

  return <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>;
}

export function useOrders() {
  const context = useContext(OrdersContext);
  if (context === undefined) {
    throw new Error('useOrders must be used within an OrdersProvider');
  }
  return context;
}
