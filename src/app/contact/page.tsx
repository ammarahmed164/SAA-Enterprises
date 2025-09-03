
'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const fadeIn = (delay = 0, duration = 0.5) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      delay,
      duration,
      ease: [0.6, 0.05, 0.01, 0.9]
    }
  },
});

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const contactInfo = [
    { icon: Mail, label: 'Email', value: 'support@medishop.com', href: 'mailto:support@medishop.com' },
    { icon: Phone, label: 'Phone', value: '+1 (800) 555-0199', href: 'tel:+18005550199' },
    { icon: MapPin, label: 'Address', value: '123 Medical Plaza, Suite 456, Medville, MD 54321' },
];

export default function ContactPage() {
  return (
    <div className="overflow-hidden">
        <motion.section 
            className="bg-muted/40 pt-24 pb-20 md:pt-32 md:pb-28"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container text-center">
                <motion.h1 variants={fadeIn()} initial="hidden" animate="visible" className="text-4xl md:text-6xl font-extrabold tracking-tighter text-primary">Get In Touch</motion.h1>
                <motion.p variants={fadeIn(0.1)} initial="hidden" animate="visible" className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                    We're here to help with any questions you may have about our products, orders, or services.
                </motion.p>
            </div>
        </motion.section>

        <motion.section 
            className="py-16 lg:py-24"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16">
                    <motion.div variants={fadeIn(0)} className="space-y-8">
                        <h2 className="text-3xl font-bold tracking-tight">Contact Information</h2>
                        <div className="space-y-6">
                        {contactInfo.map((item) => (
                            <div key={item.label} className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                                    <item.icon className="w-6 h-6"/>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">{item.label}</h3>
                                    {item.href ? (
                                        <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">{item.value}</a>
                                    ) : (
                                        <p className="text-muted-foreground">{item.value}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                        </div>
                         <div className="aspect-video w-full rounded-lg overflow-hidden border shadow-sm">
                            <Image src="https://picsum.photos/800/450?random=map" alt="Map to our location" width={800} height={450} className="w-full h-full object-cover" data-ai-hint="map location" />
                        </div>
                    </motion.div>
                    
                    <motion.div variants={fadeIn(0.2)}>
                        <Card className="p-8 shadow-lg">
                            <CardContent className="p-0">
                                <h2 className="text-3xl font-bold tracking-tight mb-6">Send us a Message</h2>
                                <form className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="first-name">First Name</Label>
                                            <Input id="first-name" placeholder="John" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="last-name">Last Name</Label>
                                            <Input id="last-name" placeholder="Doe" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="john.doe@example.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Subject</Label>
                                        <Input id="subject" placeholder="Question about an order" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea id="message" placeholder="Please type your message here..." rows={5} />
                                    </div>
                                    <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Send Message</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    </div>
  );
}
