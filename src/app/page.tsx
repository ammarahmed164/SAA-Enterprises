
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ShieldCheck, Truck, Award, Sparkles, Youtube } from 'lucide-react';
import { products, categories } from '@/lib/data';
import ProductCard from '@/components/product-card';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import React from 'react';

const fadeIn = (direction = 'up', delay = 0) => ({
  hidden: { 
    opacity: 0, 
    y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
    x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
  },
  visible: { 
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

const staggerContainer = (staggerChildren = 0.15, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});


export default function Home() {
  const featuredProductsPlugin = React.useRef(
      Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  const heroPlugin = React.useRef(
      Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  const whyChooseUsItems = [
    { icon: Award, title: 'Superior Quality', description: 'Meticulously crafted scrubs using the finest fabrics for durability and comfort.' },
    { icon: Sparkles, title: 'Modern Designs', description: 'Professional, functional, and stylish apparel for the modern healthcare hero.' },
    { icon: ShieldCheck, title: 'Trusted Reliability', description: 'Every product meets the highest standards for safety and performance in the field.' },
    { icon: Truck, title: 'Fast Shipping', description: 'Quick and reliable delivery to get you the gear you need, when you need it.' },
  ];

  return (
    <div className="flex flex-col overflow-hidden bg-slate-50 text-foreground">

      {/* Hero Section */}
      <motion.section 
        className="relative w-full h-[85vh] min-h-[600px] text-white"
        initial="hidden"
        animate="visible"
        variants={fadeIn('down')}
      >
        <Carousel
          plugins={[heroPlugin.current]}
          className="w-full h-full"
          opts={{ loop: true }}
          onMouseEnter={heroPlugin.current.stop}
          onMouseLeave={heroPlugin.current.reset}
        >
          <CarouselContent className="h-full">
            {categories.map((category, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="relative w-full h-full">
                   <div className="absolute inset-0 bg-black/40 z-10"></div>
                  <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      data-ai-hint={category.dataAiHint}
                  />
                  <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center">
                      <motion.h1 
                          key={category.name}
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                          className="text-4xl md:text-7xl font-extrabold tracking-tighter" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}>
                          {category.name}
                      </motion.h1>
                      <motion.p
                          key={`${category.name}-p`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
                          className="max-w-2xl mt-4 text-lg md:text-xl text-white/90"
                          style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.6)' }}
                      >
                          Discover unparalleled comfort and style, designed for medical professionals who demand the best.
                      </motion.p>
                      <motion.div
                        key={`${category.name}-btn`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.7, ease: 'backOut' }}
                        className="mt-8"
                      >
                        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 transition-transform hover:scale-105 shadow-lg text-lg px-8 py-6">
                            <Link href={`/products?category=${category.slug}`}>Explore {category.name}</Link>
                        </Button>
                      </motion.div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </motion.section>

      {/* Featured Products Section */}
      <motion.section 
        className="py-16 lg:py-24 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer()}
      >
        <div className="container">
          <motion.div variants={fadeIn('up')} className="flex flex-col sm:flex-row justify-between items-baseline mb-12">
            <div className="text-center sm:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-primary">Featured Products</h2>
              <p className="mt-2 text-muted-foreground">Top-rated and bestselling items from our catalog.</p>
            </div>
            <Button asChild variant="link" className="text-primary hidden sm:flex text-base hover:text-accent mt-4 sm:mt-0">
              <Link href="/products">View All Products <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </motion.div>

          <motion.div variants={fadeIn('up', 0.2)}>
            <Carousel
              plugins={[featuredProductsPlugin.current]}
              className="w-full"
              onMouseEnter={featuredProductsPlugin.current.stop}
              onMouseLeave={featuredProductsPlugin.current.reset}
              opts={{
                loop: true,
                align: 'start',
              }}
            >
              <CarouselContent className="-ml-4">
                {products.slice(0, 8).map((product, index) => (
                  <CarouselItem key={index} className="pl-4 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <ProductCard product={product} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </motion.div>
           <div className="text-center mt-8 sm:hidden">
              <Button asChild variant="outline">
                  <Link href="/products">View All Products</Link>
              </Button>
            </div>
        </div>
      </motion.section>
      
      {/* Video Section */}
       <motion.section 
          className="py-16 lg:py-24 bg-gradient-to-br from-orange-50 via-white to-blue-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer()}
        >
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeIn('right')} className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Quality You Can See & Feel
                </span>
              </h2>
              <p className="text-muted-foreground text-lg">
                We believe that performance and presentation go hand-in-hand. Watch our video to see the craftsmanship, durability, and thoughtful design that goes into every SAA Scrub, ensuring you look and feel your best.
              </p>
               <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 transition-all duration-300 transform hover:scale-105">
                <Link href="/about">
                  <Youtube className="mr-2 h-5 w-5" />
                  Learn More About Us
                </Link>
              </Button>
            </motion.div>
             <motion.div
                variants={fadeIn('left', 0.2)}
                className="relative"
              >
                <Card className="overflow-hidden shadow-2xl hover:shadow-primary/20 transition-all duration-500 transform hover:-translate-y-2 rounded-2xl border-0 group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-1000 animate-pulse"></div>
                  <motion.div 
                    className="aspect-video bg-black rounded-2xl relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <iframe
                      className="w-full h-full rounded-2xl"
                      src="https://www.youtube.com/embed/6JBtgw1Ib2Q?controls=0&modestbranding=1&rel=0&showinfo=0&autoplay=1&mute=1&loop=1&playlist=6JBtgw1Ib2Q"
                      title="Promotional Video"
                      frameBorder="0"
                      allow="autoplay; encrypted-media;"
                      allowFullScreen
                    ></iframe>
                  </motion.div>
                </Card>
              </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section 
        className="py-16 lg:py-24 bg-slate-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer()}
      >
        <div className="container">
          <motion.div variants={fadeIn('up')} className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Why Choose SAA Scrubs?</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Precision, quality, and reliability you can depend on for every shift.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsItems.map((item, index) => (
              <motion.div variants={fadeIn('up', index * 0.1)} key={item.title}>
                 <Card className="text-center p-8 flex flex-col items-center h-full bg-card shadow-lg hover:shadow-accent/10 transition-all duration-300 border-border/50 transform hover:-translate-y-2">
                    <div className="p-5 bg-accent/10 rounded-full mb-5 transition-transform duration-300 transform group-hover:scale-110">
                        <item.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm flex-grow">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Final CTA */}
      <motion.section 
        className="py-20 lg:py-28 bg-gradient-to-r from-primary to-accent text-primary-foreground"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn('up')}
      >
        <div className="container text-center">
            <motion.h2 variants={fadeIn('up', 0.1)} className="text-3xl md:text-4xl font-bold tracking-tight">Ready to Elevate Your Workwear?</motion.h2>
            <motion.p variants={fadeIn('up', 0.2)} className="mt-4 text-lg max-w-3xl mx-auto text-primary-foreground/80">
                Explore our comprehensive catalog of premium scrubs and surgical supplies. Find the perfect fit for your needs and experience the SAA difference.
            </motion.p>
            <motion.div variants={fadeIn('up', 0.3)} className="mt-8">
                 <Button asChild size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-transform hover:scale-105 shadow-xl text-base px-10 py-6">
                    <Link href="/products">Browse The Full Collection</Link>
                </Button>
            </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
