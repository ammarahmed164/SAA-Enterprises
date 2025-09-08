
'use client'

import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { CreditCard, Lock, AlertTriangle, Loader2 } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { useOrders } from "@/hooks/use-orders";
import { useEffect } from "react";

const checkoutSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
  address: z.string().min(1, { message: "Address is required." }),
  city: z.string().min(1, { message: "City is required." }),
  zip: z.string().min(1, { message: "ZIP code is required." }),
  cardNumber: z.string().min(1, { message: "Card number is required." }),
  expiry: z.string().min(1, { message: "Expiry date is required." }),
  cvc: z.string().min(1, { message: "CVC is required." }),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const { items, cartTotal, cartCount, clearCart } = useCart();
  const { addOrder } = useOrders();
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      email: user?.email || '',
      firstName: user?.name?.split(' ')[0] || '',
      lastName: user?.name?.split(' ')[1] || '',
      address: '',
      city: '',
      zip: '',
      cardNumber: '',
      expiry: '',
      cvc: '',
    },
    mode: 'onChange', // Validate on change to enable button as user types
  });

  const { formState: { isValid, isSubmitting } } = form;

  useEffect(() => {
    if (!authLoading && user) {
        form.reset({
            email: user.email || '',
            firstName: user.name?.split(' ')[0] || '',
            lastName: user.name?.split(' ')[1] || '',
        });
    }
  }, [user, authLoading, form]);


  if (authLoading) {
     return <div className="container py-24 text-center"><Loader2 className="h-12 w-12 animate-spin mx-auto" /></div>
  }

  if (!user) {
    router.push('/login');
    return null;
  }

  if (cartCount === 0 && !isSubmitting) {
    return (
      <div className="container py-24 text-center">
          <h1 className="text-3xl font-bold">Your cart is empty</h1>
          <p className="mt-2 text-muted-foreground">Add items to your cart to proceed to checkout.</p>
          <Button asChild className="mt-6">
              <Link href="/products">Continue Shopping</Link>
          </Button>
      </div>
    );
  }

  const onSubmit = async (data: CheckoutFormValues) => {
    try {
        await addOrder({
            items: items,
            total: cartTotal + 5,
        });
        clearCart();
        router.push('/thank-you');
    } catch (error) {
        console.error("Failed to place order:", error);
        // Optionally, show a toast notification for the error
    }
  };

  return (
    <div className="container py-12">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-center">Checkout</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Shipping Information</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="you@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                   <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="sm:col-span-2">
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Input placeholder="123 Medical Lane" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                   <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input placeholder="Healthcare City" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="zip"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ZIP Code</FormLabel>
                        <FormControl>
                          <Input placeholder="12345" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><CreditCard className="h-5 w-5" /> Payment Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <FormField
                    control={form.control}
                    name="cardNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Card Number</FormLabel>
                        <FormControl>
                          <Input placeholder="**** **** **** 1234" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <FormField
                      control={form.control}
                      name="expiry"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Expiry Date</FormLabel>
                          <FormControl>
                            <Input placeholder="MM/YY" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div>
                     <FormField
                      control={form.control}
                      name="cvc"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>CVC</FormLabel>
                          <FormControl>
                            <Input placeholder="123" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-8">
              <Card className="sticky top-24">
                  <CardHeader>
                      <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <div className="space-y-4">
                          {items.map(item => (
                              <div key={item.id} className="flex items-center justify-between">
                                  <div className="flex items-center gap-4">
                                      <div className="relative w-16 h-16 rounded-md overflow-hidden">
                                          <Image src={item.image} alt={item.name} fill className="object-cover"/>
                                      </div>
                                      <div>
                                          <p className="font-medium">{item.name}</p>
                                          <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                                      </div>
                                  </div>
                                  <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                              </div>
                          ))}
                      </div>
                      <Separator className="my-4" />
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Subtotal</span>
                          <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Shipping</span>
                          <span>$5.00</span>
                        </div>
                         <div className="flex justify-between text-muted-foreground">
                          <span>Taxes</span>
                          <span>Calculated at next step</span>
                        </div>
                        <Separator/>
                         <div className="flex justify-between font-bold text-lg">
                          <span>Total</span>
                          <span>${(cartTotal + 5).toFixed(2)}</span>
                        </div>
                      </div>
                      
                      <Button type="submit" size="lg" className="w-full mt-6" disabled={!isValid || isSubmitting}>
                        {isSubmitting ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            <Lock className="mr-2 h-4 w-4" />
                        )}
                        {isSubmitting ? 'Placing Order...' : `Pay ${(cartTotal + 5).toFixed(2)}`}
                      </Button>
                  </CardContent>
              </Card>
          </div>
        </form>
      </Form>
    </div>
  );
}
