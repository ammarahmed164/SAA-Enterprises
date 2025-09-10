import { Suspense } from "react";
import FaqClient from "./FaqClient";

export default function FAQPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FaqClient />
    </Suspense>
  )
}
