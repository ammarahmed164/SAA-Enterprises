
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users, Target, ShieldCheck, HeartPulse, Building, Lightbulb, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const fadeIn = (direction = 'up', delay = 0, duration = 0.5) => ({
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
      duration,
      ease: [0.6, 0.05, 0.01, 0.9]
    }
  },
});

const staggerContainer = (staggerChildren = 0.2, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

const teamMembers = [
  { name: 'Dr. Evelyn Reed', role: 'Founder & CEO', image: 'https://picsum.photos/400/400?random=1', dataAiHint:"person photo" },
];

const values = [
    { icon: HeartPulse, title: 'Patient-Centric', description: 'Our primary focus is always on the well-being and safety of the patient.'},
    { icon: Lightbulb, title: 'Innovation', description: 'We relentlessly pursue new technologies and ideas to advance surgical care.'},
    { icon: ShieldCheck, title: 'Uncompromising Quality', description: 'Every product we offer meets the highest standards of quality and reliability.'},
    { icon: Users, title: 'Collaboration', description: 'We partner with healthcare professionals to develop solutions that truly meet their needs.'},
];

const timeline = [
    { year: '2010', event: 'SAA Scrubs is founded with a mission to improve surgical outcomes.', icon: Building },
    { year: '2014', event: 'Introduced our first line of proprietary sterile instruments.', icon: Lightbulb },
    { year: '2018', event: 'Expanded operations to serve healthcare systems nationwide.', icon: TrendingUp },
    { year: '2023', event: 'Launched our AI-powered inventory management system for partners.', icon: Target },
]

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden bg-background">
      <motion.section 
        className="relative pt-28 pb-20 md:pt-40 md:pb-28 text-center bg-gradient-to-b from-primary/5 to-transparent"
        initial="hidden"
        animate="visible"
        variants={staggerContainer(0.3)}
      >
        <div className="container relative z-10">
            <motion.h1 variants={fadeIn('down')} className="text-4xl md:text-6xl font-extrabold tracking-tighter text-primary">About SAA Scrubs</motion.h1>
            <motion.p variants={fadeIn('up', 0.1)} className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
                Welcome to SAA Scrubs, your trusted partner in high-quality medical apparel and surgical items.
            </motion.p>
        </div>
      </motion.section>

      <motion.section
        className="py-16 lg:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer()}
      >
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeIn('right')}
              className="relative aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://picsum.photos/800/1000?random=medical"
                alt="Medical professionals"
                fill
                className="object-cover"
                data-ai-hint="medical professional"
              />
            </motion.div>
            <motion.div variants={fadeIn('left')} className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-primary">Our Commitment to Excellence</h2>
              <div className="text-muted-foreground space-y-4 text-lg">
                <p>
                  At SAA Scrubs, we understand that medical professionals need more than just a uniform—they need comfortable, durable, and functional workwear that performs under pressure. Our commitment is to provide meticulously crafted scrubs that combine superior quality with a professional aesthetic.
                </p>
                <p>
                  We take pride in overseeing every step of the manufacturing process, from selecting the finest fabrics to ensuring precision in every stitch, to guarantee that each garment meets our high standards.
                </p>
                <p>
                  Our mission is to support the heroes of healthcare with the best possible gear. We are dedicated to providing excellent products and exceptional service, building lasting relationships with our clients who trust us to deliver quality and reliability with every order.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-16 lg:py-24 bg-gradient-to-b from-accent/5 to-transparent"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer()}
      >
        <div className="container">
          <motion.div variants={fadeIn('up')} className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight">Our Story in Motion</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Watch our journey and see our commitment to excellence in action.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.2)}
            className="max-w-4xl mx-auto"
          >
            <Card className="overflow-hidden shadow-2xl hover:shadow-primary/20 transition-all duration-500 transform hover:-translate-y-2 rounded-2xl border-0">
              <div className="aspect-video bg-black rounded-t-2xl">
                <iframe
                  className="w-full h-full rounded-t-2xl"
                  src="https://www.youtube.com/embed/6JBtgw1Ib2Q"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.section>
      
       <motion.section 
        className="py-16 lg:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer()}
      >
        <div className="container">
          <motion.div variants={fadeIn('up')} className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight">Our Journey</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Tracing the path of our commitment to surgical excellence.</p>
          </motion.div>
          <motion.div 
            variants={staggerContainer(0.3)}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {timeline.map((item, index) => (
                <motion.div key={item.year} variants={fadeIn('up', index * 0.1)}>
                    <Card className="p-6 h-full text-center hover:shadow-lg transition-shadow duration-300 border-border/60 bg-card flex flex-col items-center">
                        <div className="mb-4">
                            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                                <item.icon className="h-8 w-8" />
                            </div>
                        </div>
                        <h3 className="font-bold text-2xl text-primary mb-2">{item.year}</h3>
                        <p className="text-muted-foreground flex-grow">{item.event}</p>
                    </Card>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="py-16 lg:py-24 bg-primary/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer()}
      >
        <div className="container">
          <motion.div variants={fadeIn('up')} className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Our Core Values</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">The principles that guide every decision we make.</p>
          </motion.div>
          <motion.div 
            variants={staggerContainer(0.1)}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((item, index) => (
              <motion.div variants={fadeIn('up')} key={item.title}>
                 <Card className="text-left p-6 h-full hover:shadow-accent/10 hover:shadow-lg transition-shadow duration-300 bg-card border-border/50">
                    <div className="p-3 bg-accent/10 rounded-lg mb-4 inline-block">
                        <item.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm flex-grow">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      
      <motion.section
        className="py-16 lg:py-24 bg-gradient-to-t from-accent/5 to-transparent"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer()}
      >
        <div className="container">
          <motion.div variants={fadeIn('up')} className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Meet Our Leadership</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">The experienced mind guiding SAA Scrubs forward.</p>
          </motion.div>
          <div className="flex justify-center">
            {teamMembers.map((member, index) => (
              <motion.div variants={fadeIn('up', index * 0.1)} key={member.name} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full shadow-lg transition-all duration-500 group-hover:shadow-primary/20 group-hover:scale-105">
                  <Image src={member.image} alt={member.name} data-ai-hint={member.dataAiHint} fill className="object-cover" />
                </div>
                <h3 className="font-bold text-2xl tracking-tight">{member.name}</h3>
                <p className="text-primary text-lg font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

    </div>
  );
}
