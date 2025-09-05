
'use client';

import { createContext, useContext, useState, useMemo, useEffect, type ReactNode } from 'react';
import type { Order, CartItem } from '@/lib/types';

type NewOrderPayload = {
  items: CartItem[];
  total: number;
}

type OrdersContextType = {
  orders: Order[];
  addOrder: (payload: NewOrderPayload) => void;
};

const OrdersContext = createContext<OrdersContextType | undefined>(undefined);

export function OrdersProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    try {
      const savedOrders = localStorage.getItem('userOrders');
      if (savedOrders) {
        setOrders(JSON.parse(savedOrders));
      }
    } catch (error) {
      console.error("Failed to parse orders from localStorage", error);
      setOrders([]);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('userOrders', JSON.stringify(orders));
    } catch (error) {
       console.error("Failed to save orders to localStorage", error);
    }
  }, [orders]);

  const addOrder = (payload: NewOrderPayload) => {
    const newOrder: Order = {
      id: new Date().getTime().toString(),
      date: new Date().toISOString(),
      status: 'Pending',
      total: payload.total,
      items: payload.items,
    };
    setOrders(prevOrders => [...prevOrders, newOrder]);
  };

  const value = useMemo(() => ({ orders, addOrder }), [orders]);

  return <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>;
}

export function useOrders() {
  const context = useContext(OrdersContext);
  if (context === undefined) {
    throw new Error('useOrders must be used within an OrdersProvider');
  }
  return context;
}
