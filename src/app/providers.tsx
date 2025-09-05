
'use client';

import type { ReactNode } from 'react';
import { CartProvider } from '@/hooks/use-cart';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/hooks/use-auth';
import { OrdersProvider } from '@/hooks/use-orders';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <CartProvider>
        <OrdersProvider>
          {children}
          <Toaster />
        </OrdersProvider>
      </CartProvider>
    </AuthProvider>
  );
}
