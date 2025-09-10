import { notFound } from 'next/navigation';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import type { Order } from '@/lib/types';
import OrderDetailClient from './OrderDetailClient';

async function getOrder(id: string): Promise<Order | undefined> {
    try {
        const orderRef = doc(db, 'orders', id);
        const orderSnap = await getDoc(orderRef);

        if (!orderSnap.exists()) {
            return undefined;
        }

        const data = orderSnap.data();
        return {
            id: orderSnap.id,
            ...data,
            date: data.createdAt?.toDate().toISOString() || new Date().toISOString(),
        } as Order;
    } catch (error) {
        console.error("Failed to fetch order:", error);
        return undefined;
    }
}

export default async function OrderDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const order = await getOrder(id);

  if (!order) {
    notFound();
  }

  return <OrderDetailClient order={order} />;
}
