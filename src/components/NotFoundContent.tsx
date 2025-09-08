export default function NotFoundContent() {
    return (
      <div className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center text-center p-4">
        <svg
          className="h-24 w-24 text-primary mb-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
          />
        </svg>
  
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
          404 | Page Not Found
        </h1>
  
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>
  
        <a
          href="/"
          className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/80 transition"
        >
          Go to Homepage
        </a>
      </div>
    );
  }
  
