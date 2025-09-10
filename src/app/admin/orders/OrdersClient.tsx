
"use client";

import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import type { Order } from '@/lib/types';
import { Loader2, ShieldAlert, PackageCheck, Package, PackageX, ChevronDown } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function OrdersClient() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      router.push('/login');
      return;
    }
    if (user.role !== 'admin') {
      setLoading(false);
      return;
    };

    const ordersRef = collection(db, "orders");
    const q = query(ordersRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const fetchedOrders = snapshot.docs.map(doc => {
          const data = doc.data() as Partial<Order>;
          return {
            id: doc.id,
            ...data,
            date: data.createdAt?.toDate().toISOString() || new Date().toISOString(),
          } as Order;
        });
        setOrders(fetchedOrders);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching orders:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [user, authLoading, router]);

  const handleStatusUpdate = async (orderId: string, status: Order['status']) => {
    const orderRef = doc(db, 'orders', orderId);
    try {
      await updateDoc(orderRef, { status });
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  if (authLoading) {
    return (
      <div className="flex h-[calc(100vh-200px)] items-center justify-center">
        <Loader2 className="h-16 w-16 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) return null; // router.push handle karega

  if (loading) {
    return (
      <div className="flex h-[calc(100vh-200px)] items-center justify-center">
        <Loader2 className="h-16 w-16 animate-spin text-primary" />
      </div>
    );
  }

  if (user?.role !== 'admin') {
    return (
      <div className="container py-16 text-center">
        <ShieldAlert className="mx-auto h-24 w-24 text-destructive" />
        <h1 className="mt-8 text-3xl font-bold">Access Denied</h1>
        <p className="mt-2 text-muted-foreground">
          You do not have permission to view this page.
        </p>
        <Button onClick={() => router.push('/')} className="mt-6">
          Go to Homepage
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-muted/30 min-h-screen">
      <div className="container py-12 md:py-16">
        <Card>
          <CardHeader>
            <CardTitle>Admin Order Management</CardTitle>
            <CardDescription>
              View and manage all customer orders in real-time.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-mono text-xs">{order.id}</TableCell>
                    <TableCell>{order.userEmail}</TableCell>
                    <TableCell className="text-right font-medium">
                      ${order.totalAmount.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge
                        variant={order.status === 'Delivered' ? 'default' : 'secondary'}
                        className={cn(
                          'w-fit',
                          order.status === 'Delivered' &&
                            'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-200',
                          order.status === 'Shipped' &&
                            'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 border-blue-200',
                          order.status === 'Pending' &&
                            'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 border-yellow-200'
                        )}
                      >
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{new Date(order.date).toLocaleString()}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm">
                            Update Status <ChevronDown className="ml-2 h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            disabled={order.status === 'Pending'}
                            onClick={() => handleStatusUpdate(order.id, 'Pending')}
                          >
                            <PackageX className="mr-2 h-4 w-4" /> Pending
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            disabled={order.status === 'Shipped'}
                            onClick={() => handleStatusUpdate(order.id, 'Shipped')}
                          >
                            <Package className="mr-2 h-4 w-4" /> Shipped
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            disabled={order.status === 'Delivered'}
                            onClick={() => handleStatusUpdate(order.id, 'Delivered')}
                          >
                            <PackageCheck className="mr-2 h-4 w-4" /> Delivered
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {orders.length === 0 && (
              <div className="text-center py-16 text-muted-foreground">
                <p>No orders found.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
