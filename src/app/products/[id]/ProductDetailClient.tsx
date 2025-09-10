'use client';

import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useState, useRef, type MouseEvent } from 'react';
import { Star, Plus, Minus, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';
import ProductCard from '@/components/product-card';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { Product } from '@/lib/types';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1], // easeOutQuint
    },
  },
};

const sizes = ['Small', 'Medium', 'Large'];

export default function ProductDetailClient({ product, relatedProducts }: { product: Product, relatedProducts: Product[] }) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const { toast } = useToast();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isZoomVisible, setIsZoomVisible] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  const [activeImage, setActiveImage] = useState(product.images[0] || product.image);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "You must choose a size before adding to the cart.",
        variant: "destructive",
      });
      return;
    }
    addItem({ id: product.id, name: product.name, price: product.price, image: product.image }, quantity);
    toast({
      title: `${quantity} x ${product.name} added`,
      description: `Size: ${selectedSize}. Item(s) have been added to your cart.`,
      action: <Button variant="link" size="sm">View Cart</Button>,
    });
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const xPercent = (x / rect.width) * 100;
      const yPercent = (y / rect.height) * 100;
      
      setZoomPosition({ x: xPercent, y: yPercent });
    }
  };

  return (
    <div className="container py-12 md:py-16">
      <motion.div 
        className="grid md:grid-cols-2 gap-12 items-start"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="flex flex-col-reverse md:flex-row gap-4 sticky top-24">
          <div className="flex md:flex-col gap-3 justify-center">
            {product.images.map((img, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "relative w-16 h-16 rounded-md overflow-hidden border-2 transition-all duration-300",
                  activeImage === img ? "border-primary shadow-lg" : "border-transparent hover:border-primary/50"
                )}
                onClick={() => setActiveImage(img)}
              >
                <Image
                  src={img}
                  alt={`${product.name} thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </motion.button>
            ))}
          </div>
          <div className="flex-1">
            <motion.div 
                key={activeImage}
                variants={imageVariants}
                className="aspect-square relative rounded-lg overflow-hidden border shadow-lg group cursor-crosshair"
                ref={imageRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsZoomVisible(true)}
                onMouseLeave={() => setIsZoomVisible(false)}
            >
                <Image
                  src={activeImage}
                  alt={product.name}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  data-ai-hint={product.dataAiHint}
                  priority
                />
                <AnimatePresence>
                {isZoomVisible && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="absolute inset-0 pointer-events-none rounded-lg overflow-hidden"
                        style={{
                            backgroundImage: `url(${activeImage})`,
                            backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '250%',
                        }}
                    />
                )}
                </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="space-y-6">
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
          <p className="text-muted-foreground whitespace-pre-line">{product.longDescription}</p>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Size</h3>
              <div className="flex items-center gap-2">
                {sizes.map(size => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? 'default' : 'outline'}
                    onClick={() => setSelectedSize(size)}
                    className="transition-all duration-200"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>
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
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="mt-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-bold tracking-tight mb-8">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
        </div>
      </motion.div>
    </div>
  );
}
