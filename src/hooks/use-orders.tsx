
'use client';

import { createContext, useContext, useState, useMemo, useEffect, type ReactNode, useCallback } from 'react';
import type { Order, CartItem } from '@/lib/types';
import { useAuth } from './use-auth';

type NewOrderPayload = {
  items: CartItem[];
  total: number;
}

type OrdersContextType = {
  orders: Order[];
  addOrder: (payload: NewOrderPayload) => void;
  clearOrders: () => void;
};

const OrdersContext = createContext<OrdersContextType | undefined>(undefined);

const ORDERS_DB_KEY = 'userOrdersDatabase';

type OrdersDatabase = {
  [userId: string]: Order[];
}

const getOrdersDatabase = (): OrdersDatabase => {
    try {
        const db = localStorage.getItem(ORDERS_DB_KEY);
        return db ? JSON.parse(db) : {};
    } catch (error) {
        console.error("Failed to parse orders database from localStorage", error);
        return {};
    }
}

const saveOrdersDatabase = (db: OrdersDatabase) => {
    try {
        localStorage.setItem(ORDERS_DB_KEY, JSON.stringify(db));
    } catch (error) {
        console.error("Failed to save orders database to localStorage", error);
    }
}

export function OrdersProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (user) {
      const db = getOrdersDatabase();
      setOrders(db[user.id] || []);
    } else {
      setOrders([]);
    }
  }, [user]);

  const addOrder = useCallback((payload: NewOrderPayload) => {
    if (!user) return;

    const newOrder: Order = {
      id: new Date().getTime().toString(),
      date: new Date().toISOString(),
      status: 'Pending',
      total: payload.total,
      items: payload.items,
    };
    
    const db = getOrdersDatabase();
    const userOrders = db[user.id] || [];
    const updatedUserOrders = [...userOrders, newOrder];
    
    const updatedDb = { ...db, [user.id]: updatedUserOrders };
    saveOrdersDatabase(updatedDb);
    setOrders(updatedUserOrders);
  }, [user]);
  
  const clearOrders = useCallback(() => {
    if (!user) return;
    const db = getOrdersDatabase();
    if (db[user.id]) {
      delete db[user.id];
      saveOrdersDatabase(db);
    }
    setOrders([]);
  }, [user]);

  const value = useMemo(() => ({ orders, addOrder, clearOrders }), [orders, addOrder, clearOrders]);

  return <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>;
}

export function useOrders() {
  const context = useContext(OrdersContext);
  if (context === undefined) {
    throw new Error('useOrders must be used within an OrdersProvider');
  }
  return context;
}
