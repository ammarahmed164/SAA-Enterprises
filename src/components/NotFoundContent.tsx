'use client';

import { AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

export default function NotFoundContent() {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Client-side pe hi URL params check karo
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      setError(searchParams.get('error'));
    }
  }, []);

  return (
    <div className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center text-center p-4">
      <AlertTriangle className="h-24 w-24 text-primary mb-6" />
      <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
        404 | Page Not Found
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      {error && (
        <div className="mb-8 p-4 bg-red-100 dark:bg-red-900/20 border border-red-400 rounded-md">
          <p className="font-semibold text-red-600 dark:text-red-400">
            Error Details: {error}
          </p>
        </div>
      )}

      <Button asChild>
        <Link href="/">
          Go to Homepage
        </Link>
      </Button>
    </div>
  );
}