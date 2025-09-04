
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
        className="bg-muted/40 py-20 md:py-28 text-center"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="container">
            <motion.h1 variants={fadeIn()} className="text-4xl md:text-6xl font-extrabold tracking-tighter text-primary">About SAA Scrubs</motion.h1>
            <motion.p variants={fadeIn(0.1)} className="mt-4 max-w-4xl mx-auto text-lg text-muted-foreground">
              Welcome to SAA Scrubs, your trusted partner in high-quality medical apparel and surgical items. As a leading manufacturer and supplier, we are proud to offer our exclusive "SAA" brand of scrubs, designed to meet the rigorous demands of the healthcare industry.
            </motion.p>
             <motion.div variants={fadeIn(0.2)} className="mt-8 max-w-4xl mx-auto text-lg space-y-4 text-muted-foreground text-left">
                 <p>
                    At SAA Scrubs, we understand that medical professionals need more than just a uniform—they need comfortable, durable, and functional workwear that performs under pressure. Our commitment is to provide meticulously crafted scrubs that combine superior quality with a professional aesthetic. We take pride in overseeing every step of the manufacturing process, from selecting the finest fabrics to ensuring precision in every stitch, to guarantee that each garment meets our high standards.
                </p>
                <p>
                    In addition to our premium SAA brand scrubs, we offer a comprehensive range of surgical items, catering to the diverse needs of hospitals, clinics, and individual practitioners. Our goal is to be a one-stop solution for all your medical apparel and supply needs, providing products that enhance safety, comfort, and efficiency in the workplace.
                </p>
                 <p>
                    At SAA Scrubs, our mission is to support the heroes of healthcare with the best possible gear. We are dedicated to providing excellent products and exceptional service, building lasting relationships with our clients who trust us to deliver quality and reliability with every order. 
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
          <motion.div variants={fadeIn()} className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Our Story in Motion</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              Watch our journey and see our commitment to excellence in action.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn(0.2)}
            className="max-w-4xl mx-auto"
          >
            <Card className="overflow-hidden shadow-2xl hover:shadow-primary/20 transition-all duration-500 transform hover:-translate-y-2 rounded-lg">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
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
        className="py-16 lg:py-24 bg-muted/40"
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
        className="py-16 lg:py-24"
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
                 <Card className="text-center p-6 flex flex-col items-center h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-muted/40">
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
        className="py-16 lg:py-24 bg-muted/40"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.div variants={fadeIn()} className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Meet Our Leadership</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">The experienced mind guiding SAA Scrubs forward.</p>
          </motion.div>
          <div className="flex justify-center">
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

    