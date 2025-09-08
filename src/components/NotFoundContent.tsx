
'use client';

import { AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

export default function NotFoundContent() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // This check avoids a hydration mismatch by ensuring the dynamic rendering of the button
    // only happens on the client-side after the initial server render.
    if (!isClient) {
        return (
            <div className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center text-center p-4">
                <AlertTriangle className="h-24 w-24 text-primary mb-6" />
                <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
                    404 | Page Not Found
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md">
                    Sorry, the page you are looking for doesn’t exist or has been moved.
                </p>
                {/* Render a placeholder or nothing for the button on the server */}
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

            <Button asChild>
                <Link href="/">
                    Go to Homepage
                </Link>
            </Button>
        </div>
    );
}
