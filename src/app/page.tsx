
import { Suspense } from 'react';
import HomePage from './HomePage';
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePage />
    </Suspense>
  );
}
