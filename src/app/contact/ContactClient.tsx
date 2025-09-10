"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import emailjs from 'emailjs-com';

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
  { icon: Mail, label: 'Email Us', value: 'info@saa-scrubs.com', href: 'mailto:info@saa-scrubs.com' },
  { icon: Phone, label: 'Call Us', value: '+92 314 2949734', href: 'tel:+923142949734' },
  { icon: MapPin, label: 'Our Address', value: 'Shop No# 4, Plot SB-2/65, Al Maskan Building, Near CIA Flats, Lucky Star Saddar Karachi' },
];

export default function ContactClient() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_mqd1ywc",   // 👈 service ID  
      "template_7dojjxq",  // 👈 template ID 
      {
        email: form.email,       // 👈 template ka variable
        message: form.message,   // 👈 template ka variable
      },
      "-46k9s2mWIu3yffC9"    // 👈 public key 
    )
    .then(() => {
      setLoading(false);
      setStatus("✅ Message sent successfully!");
      setForm({ firstName: "", lastName: "", email: "", subject: "", message: "" });
    })
    .catch((error) => {
      console.error(error);
      setLoading(false);
      setStatus("❌ Failed to send message. Try again later.");
    });
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="relative bg-gradient-to-br from-orange-100 via-background to-blue-100 overflow-hidden"
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

      {/* Contact Form Section */}
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" value={form.firstName} onChange={handleChange} placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" value={form.lastName} onChange={handleChange} placeholder="Doe" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={form.email} onChange={handleChange} placeholder="john.doe@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" value={form.subject} onChange={handleChange} placeholder="Question about an order" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" value={form.message} onChange={handleChange} placeholder="Please type your message here..." rows={5} required />
                </div>
                <Button type="submit" size="lg" disabled={loading} className="w-full sm:w-auto text-base font-bold group">
                  {loading ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </form>
              {status && <p className="mt-4 text-center">{status}</p>}
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

      {/* Map Section */}
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.836458034882!2d67.02701957593609!3d24.86942917792263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e6b48503cc5%3A0x948add2f15e8b264!2sLucky%20Star%20Bus%20Stop!5e0!3m2!1sen!2s!4v1718884976722!5m2!1sen!2s"
            allowFullScreen={false}
            loading="lazy"
            title="Our Location"
          ></iframe>
        </div>
      </motion.section>
    </div>
  );
}
