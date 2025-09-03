
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Stethoscope, Microscope, Syringe, HeartPulse } from 'lucide-react';
import { products, categories } from '@/lib/data';
import ProductCard from '@/components/product-card';
import { motion } from 'framer-motion';

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: [0.6, 0.05, 0.01, 0.9]
    }
  },
});

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Home() {
  const whyChooseUsItems = [
    { icon: Stethoscope, title: 'Precision Instruments', description: 'Top-tier surgical tools for unparalleled accuracy and reliability in every procedure.' },
    { icon: Microscope, title: 'Advanced Diagnostics', description: 'Cutting-edge diagnostic equipment to ensure accurate and timely patient assessments.' },
    { icon: Syringe, title: 'Sterile Consumables', description: 'A complete range of sterile, single-use products that meet the highest safety standards.' },
    { icon: HeartPulse, title: 'Patient Care Solutions', description: 'Innovative products designed to enhance patient comfort and improve recovery outcomes.' },
  ];

  return (
    <div className="flex flex-col overflow-hidden">
      <motion.section 
        className="relative w-full bg-background pt-24 pb-20 md:pt-32 md:pb-28"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="absolute inset-0 bg-grid-slate-200/40 [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
        <div className="container relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6 text-center lg:text-left">
                <motion.h1 
                    variants={fadeIn()}
                    className="text-4xl md:text-6xl font-extrabold tracking-tighter"
                >
                    Advancing Surgical Excellence.
                </motion.h1>
                <motion.p 
                    variants={fadeIn(0.1)}
                    className="max-w-lg text-lg text-muted-foreground mx-auto lg:mx-0"
                >
                    Your trusted partner for high-quality surgical instruments, equipment, and supplies.
                </motion.p>
                <motion.div 
                    variants={fadeIn(0.2)}
                    className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                >
                    <Button asChild size="lg" className="transition-transform hover:scale-105 shadow-lg shadow-primary/20">
                        <Link href="/products">Shop All Products</Link>
                    </Button>
                </motion.div>
            </div>
            <motion.div 
              className="relative aspect-[4/3]"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 } }
              }}
            >
               <Image
                    src="https://picsum.photos/800/600?random=surgery"
                    alt="Advanced surgical equipment"
                    fill
                    className="object-cover rounded-2xl shadow-2xl"
                    priority
                    data-ai-hint="surgical equipment"
                />
            </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="py-16 lg:py-24 bg-muted/40"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.div variants={fadeIn()} className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Why Choose MediShop?</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Precision, quality, and reliability you can depend on for every surgical procedure.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsItems.map((item, index) => (
              <motion.div variants={fadeIn(index * 0.1)} key={item.title}>
                 <Card className="text-center p-6 flex flex-col items-center h-full hover:shadow-lg transition-shadow duration-300">
                    <div className="p-4 bg-primary/10 rounded-full mb-4">
                        <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm flex-grow">{item.description}</p>
                </Card>
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
          <motion.div variants={fadeIn()} className="flex justify-between items-baseline mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
              <p className="mt-2 text-muted-foreground">Top-rated and bestselling items from our catalog.</p>
            </div>
            <Button asChild variant="link" className="text-primary hidden sm:flex text-base hover:text-accent">
              <Link href="/products">View All Products <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map(product => (
               <motion.div key={product.id} variants={fadeIn()}>
                  <ProductCard product={product} />
               </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="py-16 lg:py-24 bg-primary text-primary-foreground"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container text-center">
            <motion.h2 variants={fadeIn()} className="text-3xl font-bold tracking-tight">Ready to Equip Your Practice?</motion.h2>
            <motion.p variants={fadeIn(0.1)} className="mt-4 text-lg max-w-3xl mx-auto text-primary-foreground/80">
                Explore our comprehensive catalog of surgical supplies or get in touch with our specialists to find the perfect solutions for your needs.
            </motion.p>
            <motion.div variants={fadeIn(0.2)} className="mt-8">
                 <Button asChild size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-transform hover:scale-105 shadow-lg">
                    <Link href="/products">Browse Our Catalog</Link>
                </Button>
            </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
