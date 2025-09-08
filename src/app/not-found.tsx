'use client';

import { Suspense } from 'react';
import NotFoundContent from '@/components/NotFoundContent';
import { Loader2 } from 'lucide-react';

export default function NotFound() {
  return (
    <Suspense fallback={
      <div className="flex h-[calc(100vh-200px)] items-center justify-center">
        <Loader2 className="h-16 w-16 animate-spin text-primary" />
      </div>
    }>
      <NotFoundContent />
    </Suspense>
  );
}

