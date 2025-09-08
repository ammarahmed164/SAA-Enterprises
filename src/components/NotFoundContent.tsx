'use client';

import { AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

export default function NotFoundContent() {
  const [error, setError] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Client-side pe hi URL params check karo
    const searchParams = new URLSearchParams(window.location.search);
    setError(searchParams.get('error'));
  }, []);

  // Server-side rendering ke time loading state show karo
  if (!isClient) {
    return (
      <div className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center text-center p-4">
        <div className="h-24 w-24 bg-gray-200 animate-pulse rounded-full mb-6"></div>
        <div className="h-12 w-64 bg-gray-200 animate-pulse rounded mb-4"></div>
        <div className="h-6 w-80 bg-gray-200 animate-pulse rounded mb-8"></div>
        <div className="h-12 w-40 bg-gray-200 animate-pulse rounded"></div>
      </div>
    );
  }

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