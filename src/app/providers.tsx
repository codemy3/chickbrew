'use client';

import { Toaster } from 'react-hot-toast';
import { CartProvider } from '@/context/useCart';
import type { ReactNode } from 'react';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      {children}
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#2A1F10',
            color: '#F9F6F1',
            border: '1px solid rgba(212, 175, 55, 0.25)',
          },
        }}
      />
    </CartProvider>
  );
}