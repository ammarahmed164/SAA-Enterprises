
'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';

const fadeIn = (direction = 'up', delay = 0) => ({
  hidden: { 
    opacity: 0, 
    y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
    x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    x: 0,
    transition: {
      delay,
      duration: 0.6,
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


const contactInfo = [
    { icon: Mail, label: 'Email Us', value: 'support@medishop.com', href: 'mailto:support@medishop.com' },
    { icon: Phone, label: 'Call Us', value: '+1 (800) 555-0199', href: 'tel:+18005550199' },
    { icon: MapPin, label: 'Our Address', value: '123 Medical Plaza, Suite 456, Medville, MD 54321' },
];

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen overflow-hidden">
        <motion.section 
            className="pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-to-br from-background via-blue-50 to-orange-50"
            initial="hidden"
            animate="visible"
            variants={staggerContainer()}
        >
            <div className="container text-center">
                <motion.h1 variants={fadeIn('down')} className="text-4xl md:text-6xl font-extrabold tracking-tighter bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Get In Touch</motion.h1>
                <motion.p variants={fadeIn('down', 0.1)} className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Have a question or need assistance? We're here to help. Reach out to us, and we'll get back to you as soon as possible.
                </motion.p>
            </div>
        </motion.section>

        <motion.section 
            className="py-16 lg:py-24"
            variants={staggerContainer()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className="container">
                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Contact Form */}
                    <motion.div 
                        variants={fadeIn('right')}
                        className="lg:col-span-3"
                    >
                        <Card className="p-8 shadow-2xl rounded-2xl border-0 hover:shadow-primary/10 transition-shadow duration-500">
                            <CardHeader className="p-0 mb-6">
                                <CardTitle className="text-3xl font-bold tracking-tight">Send a Message</CardTitle>
                                <CardDescription>Fill out the form and our team will get back to you shortly.</CardDescription>
                            </CardHeader>
                            <CardContent className="p-0">
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
                                    <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-base font-bold group">
                                        Send Message <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>

                     {/* Contact Info & Map */}
                    <motion.div 
                        variants={fadeIn('left', 0.2)}
                        className="lg:col-span-2 space-y-8"
                    >
                        <Card className="shadow-xl rounded-2xl border-0">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold">Contact Details</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {contactInfo.map((item) => (
                                    <div key={item.label} className="flex items-start gap-4 group">
                                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
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
                            </CardContent>
                        </Card>
                        <Card className="shadow-xl rounded-2xl border-0 overflow-hidden">
                            <div className="aspect-video w-full">
                                <Image src="https://picsum.photos/800/450?random=map" alt="Map to our location" width={800} height={450} className="w-full h-full object-cover" data-ai-hint="map location" />
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    </div>
  );
}
