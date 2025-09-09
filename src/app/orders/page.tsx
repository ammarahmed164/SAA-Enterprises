
"use client";

import Link from 'next/link';
import { useOrders } from '@/hooks/use-orders';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ShoppingBag, Truck, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function OrdersPage() {
  const { orders, loading: ordersLoading } = useOrders();
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!authLoading && !user) {
        router.push('/login');
    }
  }, [authLoading, user, router]);

  if (authLoading || ordersLoading) {
    return <div className="container py-24 text-center"><Loader2 className="h-12 w-12 animate-spin mx-auto" /></div>
  }

  if (orders.length === 0) {
    return (
        <div className="container py-24 text-center">
            <ShoppingBag className="mx-auto h-24 w-24 text-muted-foreground/50" />
            <h1 className="mt-8 text-3xl font-bold">You have no orders yet</h1>
            <p className="mt-2 text-muted-foreground">When you place an order, it will appear here.</p>
            <Button asChild className="mt-6">
                <Link href="/products">Start Shopping</Link>
            </Button>
        </div>
    )
  }

  return (
    <div className="bg-muted/30">
        <div className="container py-12 md:py-16">
        <div className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">Your Orders</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Review your past purchases, check their status, and track your deliveries.
            </p>
        </div>

        <div className="space-y-8">
            {orders.map(order => (
            <Card key={order.id} className="overflow-hidden shadow-lg hover:shadow-primary/10 transition-shadow duration-300">
                <CardHeader className="bg-muted/50 p-4 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-sm w-full'>
                        <div>
                            <p className="text-muted-foreground font-semibold">ORDER ID</p>
                            <p className="font-mono text-primary">#{order.id.slice(0,6)}</p>
                        </div>
                        <div>
                            <p className="text-muted-foreground font-semibold">DATE PLACED</p>
                            <p>{new Date(order.date).toLocaleDateString()}</p>
                        </div>
                        <div>
                            <p className="text-muted-foreground font-semibold">TOTAL AMOUNT</p>
                            <p className="font-bold">${order.totalAmount.toFixed(2)}</p>
                        </div>
                        <div>
                            <p className="text-muted-foreground font-semibold">STATUS</p>
                             <Badge variant={order.status === 'Delivered' ? 'default' : 'secondary'}
                                className={cn(
                                    'w-fit',
                                    order.status === 'Delivered' && 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-200',
                                    order.status === 'Shipped' && 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 border-blue-200',
                                    order.status === 'Pending' && 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 border-yellow-200'
                                )}
                                >
                                {order.status}
                            </Badge>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-4 md:p-6">
                    <div className="space-y-4">
                    {order.orderItems.map(item => (
                        <div key={item.id} className="flex items-center gap-4">
                            <div className="relative w-20 h-20 rounded-md overflow-hidden bg-muted">
                                <Image 
                                    src={item.image} 
                                    alt={item.name} 
                                    fill 
                                    className="object-contain"
                                    sizes="80px"
                                />
                            </div>
                            <div>
                                <p className="font-semibold">{item.name}</p>
                                <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                            </div>
                            <p className="ml-auto font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                    ))}
                    </div>
                </CardContent>
                <CardFooter className="bg-muted/50 p-4 md:p-6 flex justify-end gap-3">
                    <Button variant="outline" asChild>
                      <Link href={`/orders/${order.id}`}>
                        <ArrowRight className="mr-2 h-4 w-4"/>
                        View Details
                      </Link>
                    </Button>
                    {order.status === 'Shipped' && (
                        <Button>
                            <Truck className="mr-2 h-4 w-4"/>
                            Track Package
                        </Button>
                    )}
                </CardFooter>
            </Card>
            ))}
        </div>
        </div>
    </div>
  );
}
