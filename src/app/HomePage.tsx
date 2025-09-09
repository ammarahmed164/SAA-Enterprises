
'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Zap, Heart } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';

import { Button } from '@/components/ui/button';
import { products, categories } from '@/lib/data';
import ProductCard from '@/components/product-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from '@/components/ui/card';

const fadeIn = (direction = 'up', delay = 0) => ({
  hidden: { 
    opacity: 0, 
    y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
    x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0,
  },
  show: { 
    opacity: 1, 
    y: 0,
    x: 0,
    transition: {
      delay,
      duration: 0.8,
      ease: [0.6, 0.05, 0.01, 0.9]
    }
  },
});

const staggerContainer = (staggerChildren = 0.2, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});


export default function HomePage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-br from-blue-100 via-orange-50 to-rose-100 dark:from-blue-900/20 dark:via-orange-900/10 dark:to-rose-900/20 overflow-hidden"
        variants={staggerContainer()}
        initial="hidden"
        animate="show"
      >
        <div className="container py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeIn('right')} className="space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Style, Comfort, & Quality
                </span>
                <br />
                For Your Lifestyle.
              </h1>
              <p className="text-lg text-muted-foreground">
                Discover our curated collection of premium unisex products. Designed for durability, comfort, and modern style, perfect for every aspect of your life.
              </p>
              <Button asChild size="lg" className="group">
                <Link href="/products">
                  Shop Now <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
            <motion.div 
              variants={fadeIn('left', 0.2)}
              className="relative h-80 md:h-96"
            >
               <motion.div
                className="absolute inset-0"
                animate={{
                    y: [0, -15, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
              >
                  <Image
                    src="/product1Din.png"
                    alt="Hero Product"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                    data-ai-hint="medical scrub"
                  />
               </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Categories Section */}
       <motion.section
        className="py-16 lg:py-24"
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container">
          <motion.div variants={fadeIn('up')} className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Shop by Category</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Explore our collections, tailored for your unique needs and preferences.</p>
          </motion.div>
          <motion.div 
            variants={staggerContainer(0.1)}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {categories.map((category) => (
              <motion.div variants={fadeIn('up')} key={category.slug}>
                <Link href={`/products?category=${category.slug}`}>
                  <Card className="overflow-hidden group relative text-center flex flex-col items-center justify-end h-96">
                     <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        data-ai-hint={category.dataAiHint}
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                     <div className="relative z-10 p-6 text-white w-full">
                       <h3 className="text-2xl font-bold tracking-tight">{category.name}</h3>
                       <p className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Shop Now &rarr;</p>
                     </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      

      {/* Featured Products */}
      <motion.section 
        className="py-16 lg:py-24 bg-muted/30"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer()}
      >
        <div className="container">
           <motion.div variants={fadeIn('up')} className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Handpicked for you. Check out our most popular items.</p>
          </motion.div>
          
          <motion.div variants={fadeIn('up', 0.2)}>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                  stopOnInteraction: true,
                  stopOnMouseEnter: true,
                })
              ]}
              className="w-full"
            >
              <CarouselContent>
                {products.slice(0, 8).map((product) => (
                  <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <div className="p-1">
                      <ProductCard product={product} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex"/>
              <CarouselNext className="hidden sm:flex"/>
            </Carousel>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section 
        className="py-16 lg:py-24"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer()}
      >
        <div className="container">
          <motion.div variants={fadeIn('up')} className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Why Choose SAA Enterprises?</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Uncompromising on quality, focused on your needs.</p>
          </motion.div>
          <motion.div 
            variants={staggerContainer(0.1)}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { icon: ShoppingBag, title: "Premium Quality", desc: "Every item is crafted from the finest materials for durability and comfort." },
              { icon: Zap, title: "Modern Designs", desc: "Stay stylish with our modern, functional, and unisex product designs." },
              { icon: Heart, title: "Customer Focused", desc: "We are dedicated to providing excellent service and a seamless shopping experience." },
            ].map((feature, i) => (
              <motion.div variants={fadeIn('up')} key={i}>
                <Card className="p-8 text-center h-full">
                  <div className="inline-block p-4 bg-primary/10 text-primary rounded-full mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
       <motion.section
        className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground"
        variants={fadeIn()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">Ready to Elevate Your Style?</h2>
          <p className="mt-3 max-w-2xl mx-auto text-lg opacity-90">
            Join thousands of satisfied customers who trust SAA Enterprises for their lifestyle needs.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8">
            <Link href="/products">Explore All Products</Link>
          </Button>
        </div>
      </motion.section>
    </div>
  );
}
