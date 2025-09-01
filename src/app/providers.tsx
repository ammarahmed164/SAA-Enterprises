'use client';

import type { ReactNode } from 'react';
import { CartProvider } from '@/hooks/use-cart';
import { Toaster } from '@/components/ui/toaster';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      {children}
      <Toaster />
    </CartProvider>
  );
}
