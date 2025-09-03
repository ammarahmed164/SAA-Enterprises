
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, ShieldCheck, Truck } from 'lucide-react';
import { products, categories } from '@/lib/data';
import ProductCard from '@/components/product-card';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, 0.01, 0.9]
    }
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <motion.section 
        className="w-full bg-background"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="container grid lg:grid-cols-2 gap-10 items-center py-24 md:py-32">
            <div className="space-y-6">
                <motion.h1 
                    variants={fadeIn}
                    className="text-4xl md:text-6xl font-extrabold tracking-tighter"
                >
                    Unique Finds for Your Lifestyle
                </motion.h1>
                <motion.p 
                    variants={fadeIn}
                    className="max-w-lg text-lg text-muted-foreground"
                >
                    Discover curated collections of unique and stylish products that enhance your everyday life.
                </motion.p>
                <motion.div 
                    variants={fadeIn}
                    className="flex flex-col sm:flex-row items-start gap-4"
                >
                    <Button asChild size="lg" className="transition-transform hover:scale-105">
                        <Link href="/products">Explore Products</Link>
                    </Button>
                    <Button asChild size="lg" variant="ghost" className="text-primary hover:bg-primary/5 transition-transform hover:scale-105">
                        <Link href="/products">New Arrivals <ArrowRight className="ml-2 h-5 w-5" /></Link>
                    </Button>
                </motion.div>
            </div>
            <motion.div 
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
              variants={{
                hidden: { opacity: 0, scale: 0.8, rotate: -5 },
                visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
            >
               <Image
                    src="https://picsum.photos/800/600?random=hero"
                    alt="Stylish lifestyle products"
                    fill
                    className="object-cover"
                    priority
                    data-ai-hint="lifestyle products"
                />
            </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="py-16 lg:py-24 bg-muted/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.div variants={fadeIn} className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Shop Our Collections</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Find exactly what you need from our curated selections, each with its own unique style and purpose.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <motion.div variants={fadeIn} key={category.name}>
                <Link href={`/products?category=${category.slug}`}>
                  <Card className="overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 border-2 border-transparent hover:border-primary">
                    <CardContent className="p-0">
                      <div className="aspect-square relative bg-background">
                        <Image
                          src={category.image}
                          alt={category.name}
                          fill
                          className="object-contain p-6 group-hover:scale-110 transition-transform duration-500 ease-in-out"
                          data-ai-hint={category.dataAiHint}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      </div>
                      <div className="p-4 bg-background">
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
        className="py-16 lg:py-24 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.div variants={fadeIn} className="flex justify-between items-baseline mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
              <p className="mt-2 text-muted-foreground">Top-rated and bestselling items from our catalog.</p>
            </div>
            <Button asChild variant="link" className="text-primary hidden sm:flex text-base">
              <Link href="/products">View All Products <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map(product => (
               <motion.div key={product.id} variants={fadeIn}>
                  <ProductCard product={product} />
               </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="py-16 lg:py-24 bg-muted/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeIn} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://picsum.photos/800/600?random=team"
              alt="Happy customers"
              fill
              className="object-cover"
              data-ai-hint="happy customers"
            />
          </motion.div>
          <motion.div variants={fadeIn}>
            <h2 className="text-3xl font-bold tracking-tight">Why Choose MediShop?</h2>
            <p className="text-muted-foreground text-lg mt-4">
              We're committed to providing not just products, but solutions. Our dedication to quality, innovation, and customer satisfaction sets us apart.
            </p>
            <ul className="space-y-6 mt-8">
              <li className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-full"><CheckCircle className="h-6 w-6 text-primary shrink-0" /></div>
                <div>
                  <h4 className="font-semibold text-lg">Uncompromising Quality</h4>
                  <p className="text-muted-foreground mt-1">Every product is vetted for quality and compliance with our standards.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                 <div className="p-2 bg-primary/10 rounded-full"><Truck className="h-6 w-6 text-primary shrink-0" /></div>
                <div>
                  <h4 className="font-semibold text-lg">Fast & Reliable Shipping</h4>
                  <p className="text-muted-foreground mt-1">Get what you need, when you need it, with our efficient logistics network.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                 <div className="p-2 bg-primary/10 rounded-full"><ShieldCheck className="h-6 w-6 text-primary shrink-0" /></div>
                <div>
                  <h4 className="font-semibold text-lg">Secure Shopping</h4>
                  <p className="text-muted-foreground mt-1">Our team and our AI assistant are here to help you 24/7.</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
