
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users, Target, ShieldCheck, HeartPulse, Building, Lightbulb, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
    },
  },
};

const teamMembers = [
  { name: 'Dr. Evelyn Reed', role: 'Founder & CEO', image: 'https://picsum.photos/400/400?random=1', dataAiHint:"person photo" },
  { name: 'Dr. Marcus Thorne', role: 'Chief Medical Officer', image: 'https://picsum.photos/400/400?random=2', dataAiHint:"person photo" },
  { name: 'Aria Chen', role: 'Head of Operations', image: 'https://picsum.photos/400/400?random=3', dataAiHint:"person photo" },
  { name: 'Leo Martinez', role: 'Lead Product Designer', image: 'https://picsum.photos/400/400?random=4', dataAiHint:"person photo" },
];

const values = [
    { icon: HeartPulse, title: 'Patient-Centric', description: 'Our primary focus is always on the well-being and safety of the patient.'},
    { icon: Lightbulb, title: 'Innovation', description: 'We relentlessly pursue new technologies and ideas to advance surgical care.'},
    { icon: ShieldCheck, title: 'Uncompromising Quality', description: 'Every product we offer meets the highest standards of quality and reliability.'},
    { icon: Users, title: 'Collaboration', description: 'We partner with healthcare professionals to develop solutions that truly meet their needs.'},
];

const timeline = [
    { year: '2010', event: 'MediShop is founded with a mission to improve surgical outcomes.', icon: Building },
    { year: '2014', event: 'Introduced our first line of proprietary sterile instruments.', icon: Lightbulb },
    { year: '2018', event: 'Expanded operations to serve healthcare systems nationwide.', icon: TrendingUp },
    { year: '2023', event: 'Launched our AI-powered inventory management system for partners.', icon: Target },
]

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      <motion.section 
        className="bg-muted/40 pt-24 pb-20 md:pt-32 md:pb-28"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="container text-center">
            <motion.h1 variants={fadeIn()} className="text-4xl md:text-6xl font-extrabold tracking-tighter text-primary">About MediShop</motion.h1>
            <motion.p variants={fadeIn(0.1)} className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                Pioneering the future of surgical supplies with a commitment to quality, innovation, and the professionals we serve.
            </motion.p>
        </div>
      </motion.section>

      <motion.section
        className="py-16 lg:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeIn()}>
                <Image
                    src="https://picsum.photos/800/600?random=mission"
                    alt="Our Mission"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-xl"
                    data-ai-hint="teamwork collaboration"
                />
            </motion.div>
            <motion.div variants={fadeIn(0.2)} className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
                <p className="text-muted-foreground text-lg">
                    To empower healthcare professionals with the highest quality surgical tools and supplies, fostering an environment where they can perform at their best and ensure optimal patient outcomes. We believe that by providing reliable and innovative products, we can play a vital role in advancing medical procedures worldwide.
                </p>
            </motion.div>
        </div>
      </motion.section>
      
       <motion.section 
        className="py-16 lg:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.div variants={fadeIn()} className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight">Our Journey</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Tracing the path of our commitment to surgical excellence.</p>
          </motion.div>
          <div className="relative">
             <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2" aria-hidden="true"></div>
             <motion.div variants={staggerContainer} className="space-y-16">
                {timeline.map((item, index) => (
                    <div key={item.year} className="flex items-center justify-center relative">
                       <div className="flex flex-col items-center w-full">
                          <motion.div 
                            variants={fadeIn(index * 0.2)}
                            className="w-full flex items-center"
                            style={{
                              flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                            }}
                          >
                            <div className="w-5/12">
                                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                                    <h3 className="font-bold text-lg mb-1">{item.year}</h3>
                                    <p className="text-muted-foreground">{item.event}</p>
                                </Card>
                            </div>
                            <div className="w-2/12 flex justify-center">
                                <div className="z-10 bg-background p-2 rounded-full border-2 border-primary">
                                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-5/12"></div>
                          </motion.div>
                       </div>
                    </div>
                ))}
             </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="py-16 lg:py-24 bg-muted/40"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.div variants={fadeIn()} className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Our Core Values</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">The principles that guide every decision we make.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, index) => (
              <motion.div variants={fadeIn(index * 0.1)} key={item.title}>
                 <Card className="text-center p-6 flex flex-col items-center h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-background/50">
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
        className="py-16 lg:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.div variants={fadeIn()} className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Meet Our Leadership</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">The experienced minds guiding MediShop forward.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div variants={fadeIn(index * 0.1)} key={member.name} className="text-center">
                <div className="relative aspect-square w-full max-w-[250px] mx-auto mb-4 overflow-hidden rounded-full shadow-lg">
                  <Image src={member.image} alt={member.name} data-ai-hint={member.dataAiHint} fill className="object-cover" />
                </div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

    </div>
  );
}
