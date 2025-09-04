
'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

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
    <div className="bg-background text-foreground min-h-screen">
        <motion.section 
            className="pt-24 pb-16 md:pt-32 md:pb-24 text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer()}
        >
            <div className="container">
                <motion.h1 variants={fadeIn('down')} className="text-4xl md:text-6xl font-extrabold tracking-tighter text-primary">Contact Us</motion.h1>
                <motion.p variants={fadeIn('down', 0.1)} className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    We're here to help. Reach out with questions, comments, or for support.
                </motion.p>
            </div>
        </motion.section>

        <motion.section 
            className="pb-16 lg:pb-24"
            variants={staggerContainer()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className="container">
                <div className="grid lg:grid-cols-3 gap-12 bg-muted/40 p-8 md:p-12 rounded-2xl border">
                    {/* Contact Form */}
                    <motion.div 
                        variants={fadeIn('right')}
                        className="lg:col-span-2"
                    >
                        <h2 className="text-3xl font-bold tracking-tight mb-6">Send a Message</h2>
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
                            <Button type="submit" size="lg" className="w-full sm:w-auto text-base font-bold group">
                                Send Message <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                        </form>
                    </motion.div>

                     {/* Contact Info */}
                    <motion.div 
                        variants={fadeIn('left', 0.2)}
                        className="lg:col-span-1 space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight mb-6">Contact Details</h2>
                            <div className="space-y-6">
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
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
        
        <motion.section
            className="container pb-16 lg:pb-24"
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true, amount: 0.2}}
            transition={{duration: 0.8}}
        >
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl border">
                <iframe
                    className="w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d-77.036870!3d38.907192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM4jCsDU0JzI1LjkiTiA3N8KwMDInMTIuNyJX!5e0!3m2!1sen!2sus!4v1622559600000!5m2!1sen!2sus"
                    allowFullScreen={false}
                    loading="lazy"
                    title="Our Location"
                ></iframe>
            </div>
        </motion.section>
    </div>
  );
}
