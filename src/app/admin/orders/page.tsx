// src/app/admin/orders/page.tsx
export const dynamic = "force-dynamic";

import OrdersClient from "./OrdersClient";

export default function OrdersPage() {
  return <OrdersClient />;
}
