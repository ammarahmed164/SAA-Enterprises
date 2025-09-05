
'use client';

import { useParams, notFound, useRouter } from 'next/navigation';
import { useOrders } from '@/hooks/use-orders';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, FileText, Truck, Package, CreditCard, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/hooks/use-auth';

export default function OrderDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params;
  const { orders, loading: ordersLoading } = useOrders();
  const { user, loading: authLoading } = useAuth();

  const order = orders.find(o => o.id === id);

  useEffect(() => {
    if (!authLoading && !user) {
        router.push('/login');
    }
  }, [authLoading, user, router]);

  if (ordersLoading || authLoading) {
    return <div className="container py-24 text-center"><Loader2 className="h-12 w-12 animate-spin mx-auto" /></div>
  }
  
  if (!order && !ordersLoading) {
    notFound();
  }
  
  if (!order) {
    return null;
  }

  const subtotal = order.orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 5.00; // Assuming a fixed shipping cost

  return (
    <div className="bg-muted/30 min-h-screen">
      <div className="container py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button variant="outline" asChild>
              <Link href="/orders">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to My Orders
              </Link>
            </Button>
          </div>
          
          <Card className="overflow-hidden shadow-lg">
            <CardHeader className="bg-muted/50 p-6 border-b">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                  <div>
                    <h1 className="text-2xl font-bold tracking-tight">Order Details</h1>
                    <p className="text-muted-foreground">Order ID: <span className="font-mono text-primary">#{order.id.slice(0, 7)}</span></p>
                  </div>
                   <Badge
                      variant={order.status === 'Delivered' ? 'default' : 'secondary'}
                      className={cn(
                          'w-fit text-base px-4 py-2',
                          order.status === 'Delivered' && 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-200',
                          order.status === 'Shipped' && 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 border-blue-200',
                          order.status === 'Pending' && 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 border-yellow-200'
                      )}
                    >
                      {order.status}
                    </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-6 grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h2 className="text-lg font-semibold flex items-center gap-2"><Package className="h-5 w-5 text-primary" /> Items Ordered</h2>
                <div className="space-y-4">
                  {order.orderItems.map(item => (
                    <div key={item.id} className="flex items-center gap-4">
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-white border">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain"
                          sizes="80px"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                        <p className="text-sm text-muted-foreground">${item.price.toFixed(2)} each</p>
                      </div>
                      <p className="ml-auto font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                  <h2 className="text-lg font-semibold flex items-center gap-2"><CreditCard className="h-5 w-5 text-primary" /> Payment Summary</h2>
                   <Card className="bg-muted/50">
                    <CardContent className="p-4 space-y-3">
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Shipping</span>
                            <span>${shipping.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-muted-foreground">
                            <span>Taxes</span>
                            <span>Calculated at checkout</span>
                        </div>
                         <Separator className="my-2" />
                        <div className="flex justify-between font-bold text-lg">
                            <span>Total</span>
                            <span>${order.totalAmount.toFixed(2)}</span>
                        </div>
                    </CardContent>
                   </Card>

                    <div className="space-y-2">
                        <h3 className="font-semibold text-muted-foreground">Placed On</h3>
                        <p>{new Date(order.date).toLocaleString()}</p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-semibold text-muted-foreground">Shipping Address</h3>
                        <p>123 Medical Lane, Healthcare City, 12345</p>
                    </div>
              </div>
            </CardContent>
            <CardFooter className="bg-muted/50 p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">Thank you for your purchase!</p>
              <div className="flex gap-3">
                <Button variant="outline">
                  <FileText className="mr-2 h-4 w-4" />
                  View Invoice
                </Button>
                 {order.status === 'Shipped' && (
                    <Button>
                        <Truck className="mr-2 h-4 w-4"/>
                        Track Package
                    </Button>
                )}
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
