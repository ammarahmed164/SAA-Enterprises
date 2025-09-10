"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ThankYouClient() {
  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-200px)] py-12">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Card className="w-full max-w-lg text-center shadow-2xl">
          <CardHeader>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 10 }}
            >
              <CheckCircle className="mx-auto h-20 w-20 text-green-500" />
            </motion.div>
            <CardTitle className="text-3xl font-extrabold mt-6">Thank You for Your Order!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Your order has been placed successfully. A confirmation email will be sent to you shortly.
            </p>
            <p className="text-muted-foreground">
              We appreciate your business!
            </p>
            <div className="flex justify-center gap-4 pt-4">
               <Button asChild size="lg">
                    <Link href="/products">
                        <ShoppingBag className="mr-2 h-5 w-5"/>
                        Continue Shopping
                    </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                    <Link href="/orders">View Your Orders</Link>
                </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
