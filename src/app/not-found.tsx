export const dynamic = "force-dynamic"; // ❌ don't prerender at build

export default function NotFound() {
  return (
    <main className="flex h-screen items-center justify-center flex-col">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>
    </main>
  );
}
