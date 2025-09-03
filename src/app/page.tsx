
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, ShieldCheck, Truck } from 'lucide-react';
import { products, categories } from '@/lib/data';
import ProductCard from '@/components/product-card';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative w-full bg-muted/30"
      >
        <div className="container grid lg:grid-cols-2 gap-12 items-center py-20 md:py-32">
            <div className="relative z-10">
                <motion.h1 
                    variants={itemVariants}
                    className="text-4xl md:text-6xl font-extrabold tracking-tighter !font-headline"
                >
                    Unique Finds for Your Lifestyle
                </motion.h1>
                <motion.p 
                    variants={itemVariants}
                    className="mt-4 max-w-lg text-lg text-muted-foreground"
                >
                    Discover curated collections of unique and stylish products that enhance your everyday life.
                </motion.p>
                <motion.div 
                    variants={itemVariants}
                    className="mt-8 flex flex-col sm:flex-row items-center gap-4"
                >
                    <Button asChild size="lg" className="transition-transform hover:scale-105">
                        <Link href="/products">Explore Products</Link>
                    </Button>
                    <Button asChild size="lg" variant="ghost" className="text-primary hover:bg-primary/5 transition-transform hover:scale-105">
                        <Link href="/products">New Arrivals <ArrowRight className="ml-2" /></Link>
                    </Button>
                </motion.div>
            </div>
            <motion.div 
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="relative aspect-square"
            >
               <Image
                    src="https://picsum.photos/800/800?random=hero"
                    alt="Stylish lifestyle products"
                    fill
                    className="object-contain"
                    priority
                    data-ai-hint="lifestyle products"
                />
            </motion.div>
        </div>
      </motion.section>

      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="py-16 lg:py-24 bg-background"
      >
        <div className="container">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Shop Our Collections</h2>
            <p className="mt-2 text-muted-foreground">Find exactly what you need from our curated selections.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {categories.map((category) => (
              <motion.div variants={itemVariants} key={category.name}>
                <Link href={`/products?category=${category.slug}`}>
                  <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="aspect-square relative">
                        <Image
                          src={category.image}
                          alt={category.name}
                          fill
                          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 ease-in-out"
                          data-ai-hint={category.dataAiHint}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      </div>
                      <div className="p-4 border-t bg-background">
                        <h3 className="font-semibold text-lg text-center">{category.name}</h3>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="py-16 lg:py-24 bg-muted/30"
      >
        <div className="container">
          <motion.div variants={itemVariants} className="flex justify-between items-baseline mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
              <p className="mt-2 text-muted-foreground">Top-rated and bestselling items from our catalog.</p>
            </div>
            <Button asChild variant="link" className="text-primary hidden sm:flex">
              <Link href="/products">View All <ArrowRight className="ml-2" /></Link>
            </Button>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="py-16 lg:py-24 bg-background"
      >
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="order-2 md:order-1">
            <h2 className="text-3xl font-bold tracking-tight">Why Choose MediShop?</h2>
            <p className="text-muted-foreground text-lg mt-4">
              We're committed to providing not just products, but solutions. Our dedication to quality, innovation, and customer satisfaction sets us apart.
            </p>
            <ul className="space-y-6 mt-8">
              <li className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-full"><CheckCircle className="h-6 w-6 text-primary shrink-0" /></div>
                <div>
                  <h4 className="font-semibold">Uncompromising Quality</h4>
                  <p className="text-muted-foreground text-sm">Every product is vetted for quality and compliance with our standards.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                 <div className="p-2 bg-primary/10 rounded-full"><Truck className="h-6 w-6 text-primary shrink-0" /></div>
                <div>
                  <h4 className="font-semibold">Fast & Reliable Shipping</h4>
                  <p className="text-muted-foreground text-sm">Get what you need, when you need it, with our efficient logistics network.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                 <div className="p-2 bg-primary/10 rounded-full"><ShieldCheck className="h-6 w-6 text-primary shrink-0" /></div>
                <div>
                  <h4 className="font-semibold">Secure Shopping</h4>
                  <p className="text-muted-foreground text-sm">Our team and our AI assistant are here to help you 24/7.</p>
                </div>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants} className="order-1 md:order-2">
            <Image
              src="https://picsum.photos/800/600?random=team"
              alt="Happy customers"
              width={800}
              height={600}
              className="rounded-lg shadow-xl"
              data-ai-hint="happy customers"
            />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
