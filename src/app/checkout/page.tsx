
'use client'

import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { CreditCard, Lock, AlertTriangle } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";

export default function CheckoutPage() {
  const { items, cartTotal, cartCount } = useCart();
  const { user } = useAuth();

  if (cartCount === 0) {
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

  return (
    <div className="container py-12">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-center">Checkout</h1>
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Shipping Information</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2 space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="you@example.com" defaultValue={user?.email} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" placeholder="Doe" />
              </div>
              <div className="sm:col-span-2 space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="123 Medical Lane" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="Healthcare City" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zip">ZIP Code</Label>
                <Input id="zip" placeholder="12345" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><CreditCard className="h-5 w-5" /> Payment Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="card-number">Card Number</Label>
                <Input id="card-number" placeholder="**** **** **** 1234" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input id="expiry" placeholder="MM/YY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="123" />
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
                    
                    {!user ? (
                        <div className="mt-6 bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-lg p-4 text-sm">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="h-5 w-5 mt-0.5" />
                                <div>
                                    <p className="font-semibold">Please log in to complete your purchase.</p>
                                    <p className="mt-1">You must have an account to place an order.</p>
                                    <Button asChild size="sm" className="mt-3">
                                        <Link href="/login">Login or Create Account</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Button size="lg" className="w-full mt-6" disabled={!user}>
                            <Lock className="mr-2 h-4 w-4" />
                            Pay ${(cartTotal + 5).toFixed(2)}
                        </Button>
                    )}
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
