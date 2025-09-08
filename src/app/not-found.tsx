// app/not-found.tsx
'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Loader2 } from 'lucide-react';

const NotFoundContent = dynamic(
  () => import('@/components/NotFoundContent'),
  { ssr: false } // <- disable server-side rendering
);

export default function NotFoundPage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-[calc(100vh-200px)] items-center justify-center">
          <Loader2 className="h-16 w-16 animate-spin text-primary" />
        </div>
      }
    >
      <NotFoundContent />
    </Suspense>
  );
}


