'use client'; // 🔑 client-only

import { AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

export default function NotFoundContent() {
  return (
    <div className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center text-center p-4">
      <AlertTriangle className="h-24 w-24 text-primary mb-6" />
      <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
        404 | Page Not Found
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      <Button asChild>
        <Link href="/">Go to Homepage</Link>
      </Button>
    </div>
  );
}

