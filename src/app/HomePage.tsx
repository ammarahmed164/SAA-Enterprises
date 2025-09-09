
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ShieldCheck, Truck, Award, Sparkles, Youtube } from 'lucide-react';
import { products } from '@/lib/data';
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


function HomeComponent() {
  const whyChooseUsItems = [
    { icon: Award, title: 'Superior Quality', description: 'Meticulously crafted scrubs using the finest fabrics for durability and comfort.' },
    { icon: Sparkles, title: 'Modern Designs', description: 'Professional, functional, and stylish apparel for the modern healthcare hero.' },
    { icon: ShieldCheck, title: 'Trusted Reliability', description: 'Every product meets the highest standards for safety and performance in the field.' },
    { icon: Truck, title: 'Fast Shipping', description: 'Quick and reliable delivery to get you the gear you need, when you need it.' },
  ];

  return (
    <div className="flex flex-col overflow-hidden bg-background text-foreground">

       {/* New Hero Section */}
       <motion.section
        className="w-full bg-gradient-to-br from-gray-100 to-blue-50"
        initial="hidden"
        animate="visible"
        variants={staggerContainer()}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh] items-center">
            <motion.div variants={fadeIn('right')} className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center">
              <motion.div 
                className="relative w-full h-full p-4"
                animate={{ 
                  y: ["0%", "-4%", "0%"],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-tr from-orange-400 via-blue-500 to-teal-400 animate-pulse">
                  <Image
                    src={products[0].image}
                    alt={products[0].name}
                    width={800}
                    height={800}
                    className="object-contain drop-shadow-2xl w-full h-full"
                    data-ai-hint={products[0].dataAiHint}
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
            <motion.div variants={fadeIn('left', 0.2)} className="p-8 md:p-16 text-center md:text-left">
              <motion.p variants={fadeIn('down', 0.4)} className="text-sm uppercase tracking-widest font-semibold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Signature SAA Collection
              </motion.p>
              <motion.h1 
                variants={fadeIn('down', 0.6)}
                className="text-4xl md:text-6xl font-bold tracking-tight text-primary leading-tight"
              >
                Comfort. Quality. Ready for Anything.
              </motion.h1>
              <motion.p 
                variants={fadeIn('up', 0.8)}
                className="mt-6 text-muted-foreground text-lg max-w-md mx-auto md:mx-0"
              >
                Our signature scrubs are crafted for healthcare professionals who value strength and sophistication. Engineered for performance, this is more than a uniform—it’s a statement.
              </motion.p>
              <motion.div 
                variants={fadeIn('up', 1)}
                className="mt-8"
              >
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 group text-base px-8 py-6 shadow-lg">
                  <Link href="/products">
                    Shop The Collection <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Featured Products Section */}
      <motion.section 
        className="py-16 lg:py-24 bg-gradient-to-b from-blue-50 to-orange-50"
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
              plugins={[
                Autoplay({
                  delay: 2000,
                  stopOnInteraction: true,
                  stopOnMouseEnter: true,
                }),
              ]}
              className="w-full"
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

      {/* Hero Section */}
       <motion.section
        className="relative w-full h-screen min-h-[700px] flex items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={staggerContainer()}
      >
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Modern scrubs"
          fill
          className="object-cover"
          priority
          data-ai-hint="surgical operating room"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4">
          <motion.div 
            variants={staggerContainer(0.3, 0.2)}
            className="max-w-2xl text-left bg-black/30 backdrop-blur-lg border border-white/20 rounded-2xl p-8 md:p-12"
          >
            <motion.p 
              variants={fadeIn('down')}
              className="text-sm uppercase tracking-widest text-white/80 font-semibold mb-4"
            >
              Unmatched Comfort & Style
            </motion.p>
            <motion.h1 
              variants={fadeIn('down', 0.2)}
              className="text-4xl md:text-6xl font-bold tracking-tight text-white"
            >
              Elevate Your Professional Look
            </motion.h1>
            <motion.p 
              variants={fadeIn('up', 0.4)}
              className="mt-6 text-white/90 text-lg"
            >
              Discover our premium collection of scrubs, designed for the modern healthcare professional. Engineered for performance, comfort, and durability.
            </motion.p>
            <motion.div 
              variants={fadeIn('up', 0.6)}
              className="mt-8"
            >
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 transform hover:scale-105 group text-lg px-8 py-6 shadow-lg">
                <Link href="/products">
                  Shop The Collection <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
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
                      src="https://www.youtube-nocookie.com/embed/6JBtgw1Ib2Q?controls=0&modestbranding=1&rel=0&showinfo=0&autoplay=1&mute=1&loop=1&playlist=6JBtgw1Ib2Q"
                      title="Promotional Video"
                      frameBorder="0"
                      allow="autoplay; encrypted-media; picture-in-picture"
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
        className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-orange-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer()}
      >
        <div className="container">
          <motion.div 
            variants={staggerContainer(0.2, 0.1)}
            className="text-center mb-12"
          >
            <motion.h2 
              variants={fadeIn('down')} 
              className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            >
              Why Choose SAA Enterprises?
            </motion.h2>
            <motion.p 
              variants={fadeIn('up', 0.1)}
              className="mt-3 text-muted-foreground max-w-2xl mx-auto"
            >
              Precision, quality, and reliability you can depend on for every shift.
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsItems.map((item, index) => (
              <motion.div variants={fadeIn('up', index * 0.1)} key={item.title}>
                 <Card className="relative text-center p-8 flex flex-col items-center h-full bg-card shadow-lg transition-all duration-300 border-transparent group overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                    <div className="absolute top-0 left-0 w-0 h-0 transition-all duration-500 ease-out bg-primary/10 group-hover:w-full group-hover:h-full"></div>
                    <div className="absolute inset-0 w-full h-full border-2 border-transparent group-hover:border-primary/20 rounded-lg transition-all duration-300"></div>

                    <motion.div 
                      className="relative z-10 p-5 bg-primary/10 rounded-full mb-5 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
                    >
                        <item.icon className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                    </motion.div>
                    <div className="relative z-10">
                      <h3 className="font-semibold text-xl mb-2 text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground text-sm flex-grow">{item.description}</p>
                    </div>
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

import { Suspense } from 'react';

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeComponent />
    </Suspense>
  );
}
