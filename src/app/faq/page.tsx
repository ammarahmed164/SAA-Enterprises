import { Suspense } from "react";
import FaqClient from "./FaqClient";
export const dynamic = "force-dynamic";

export default function FAQPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FaqClient />
    </Suspense>
  )
}
