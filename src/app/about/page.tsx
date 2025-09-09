
import { Suspense } from 'react';
import AboutPageContent from './AboutPageContent';

export default function AboutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AboutPageContent />
    </Suspense>
  );
}
