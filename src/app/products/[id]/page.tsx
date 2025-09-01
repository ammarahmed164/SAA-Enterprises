'use client';

import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useState } from 'react';
import { Star, Plus, Minus, CheckCircle } from 'lucide-react';
import { products } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';
import ProductCard from '@/components/product-card';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const { toast } = useToast();

  const product = products.find(p => p.id === params.id);

  if (!product) {
    notFound();
  }
  
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem({ id: product.id, name: product.name, price: product.price, image: product.image }, quantity);
    toast({
      title: `${quantity} x ${product.name} added`,
      description: "Item(s) have been added to your cart.",
      action: <Button variant="link" size="sm">View Cart</Button>,
    });
  };

  return (
    <div className="container py-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="aspect-square relative rounded-lg overflow-hidden border shadow-lg">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              data-ai-hint={product.dataAiHint}
            />
          </div>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{product.name}</h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span>{product.category}</span>
              <Separator orientation="vertical" className="h-4" />
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span>{product.rating} ({product.reviews} reviews)</span>
              </div>
            </div>
          </div>
          <p className="text-3xl font-bold text-primary">${product.price.toFixed(2)}</p>
          <p className="text-muted-foreground">{product.longDescription}</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-md">
              <Button variant="ghost" size="icon" onClick={() => setQuantity(q => Math.max(1, q - 1))}>
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button variant="ghost" size="icon" onClick={() => setQuantity(q => q + 1)}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button size="lg" onClick={handleAddToCart} className="flex-1">Add to Cart</Button>
          </div>
          <div className="space-y-2 pt-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="font-medium">In Stock</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="font-medium">Ships within 24 hours</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-24">
        <h2 className="text-2xl font-bold tracking-tight mb-8">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
        </div>
      </div>
    </div>
  );
}
