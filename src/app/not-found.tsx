'use client'; // 🔑 Make this a pure client component

import NotFoundContent from '@/components/NotFoundContent';
import { Suspense } from 'react';
import { Loader2 } from 'lucide-react';

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

