
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
      {/* New Hero Section */}
      <motion.section 
        className="relative bg-gradient-to-br from-accent/10 to-primary/10 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={staggerContainer()}
      >
        <div className="container relative z-10 py-20 md:py-28">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <motion.div variants={fadeIn('right')} className="space-y-4 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-primary">Get in Touch</h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto md:mx-0">
                        Have questions? We'd love to hear from you. Our team is ready to assist you with all your inquiries.
                    </p>
                </motion.div>
                <motion.div variants={fadeIn('left', 0.2)} className="hidden md:flex justify-center items-center">
                    <div className="relative w-72 h-72">
                      <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl"></div>
                      <Mail className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 text-primary/20" strokeWidth={1} />
                      <Phone className="absolute top-10 left-10 w-24 h-24 text-accent/20 animate-pulse" strokeWidth={1.5}/>
                      <Send className="absolute bottom-12 right-8 w-20 h-20 text-primary/30 animate-pulse" style={{animationDelay: '1s'}} strokeWidth={1.5}/>
                    </div>
                </motion.div>
            </div>
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
                      className="lg:col-span-3 bg-card p-8 rounded-2xl border shadow-lg"
                  >
                      <h2 className="text-3xl font-bold tracking-tight mb-8">Send Us a Message</h2>
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
                      className="lg:col-span-2 space-y-8"
                  >
                      <div>
                          <h2 className="text-3xl font-bold tracking-tight mb-8">Contact Details</h2>
                          <div className="space-y-8">
                              {contactInfo.map((item) => (
                                  <div key={item.label} className="flex items-start gap-4 group">
                                      <div className="flex-shrink-0 w-14 h-14 bg-primary/10 text-primary rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                                          <item.icon className="w-7 h-7"/>
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
