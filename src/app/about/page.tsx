
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users, Target, ShieldCheck, HeartPulse, Building, Lightbulb, TrendingUp, Handshake, UsersRound, CalendarDays } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

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
  { name: 'M.Faisal Shah', role: 'Founder & CEO', image: '/faisal.png', dataAiHint:"person photo" },
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
];

const facts = [
    { icon: Handshake, number: '500+', label: 'Happy Clients' },
    { icon: UsersRound, number: '50+', label: 'Team Members' },
    { icon: CalendarDays, number: '10+', label: 'Years in Business' },
];

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <motion.section 
        className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20 md:py-28"
        initial="hidden"
        animate="visible"
        variants={staggerContainer()}
      >
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeIn('right')} className="space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  About SAA Scrubs
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Pioneering the future of medical apparel with a commitment to quality, innovation, and the healthcare professionals we serve.
              </p>
            </motion.div>
            <motion.div 
              variants={fadeIn('left', 0.2)}
              animate={{
                  y: [0, -20, 0],
              }}
              transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
              }}
              className="relative h-80 md:h-96"
            >
               <motion.div 
                  className="w-full h-full p-1 bg-gradient-to-br from-primary via-accent to-orange-400 rounded-lg shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="w-full h-full overflow-hidden rounded-md border-0 bg-gradient-to-br from-blue-50 to-orange-50 p-4">
                    <div className="relative w-full h-full">
                      <Image
                        src="/product1Din.png"
                        alt="About SAA Scrubs"
                        fill
                        className="object-contain drop-shadow-2xl"
                        priority
                        data-ai-hint="medical scrub"
                      />
                    </div>
                  </Card>
               </motion.div>
            </motion.div>
          </div>
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
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <motion.div variants={fadeIn('right')} className="space-y-6 lg:col-span-2">
              <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-teal-500 to-sky-500 bg-clip-text text-transparent">
                    Your Trusted Partner in Healthcare Apparel
                </span>
              </h2>
              <div className="text-muted-foreground space-y-4 text-justify">
                 <p>
                    Welcome to SAA Scrubs, your trusted partner in high-quality medical apparel and surgical items. As a leading manufacturer and supplier, we are proud to offer our exclusive "SAA" brand of scrubs, designed to meet the rigorous demands of the healthcare industry.
                 </p>
                 <p>
                    At SAA Scrubs, we understand that medical professionals need more than just a uniform—they need comfortable, durable, and functional workwear that performs under pressure. Our commitment is to provide meticulously crafted scrubs that combine superior quality with a professional aesthetic. We take pride in overseeing every step of the manufacturing process, from selecting the finest fabrics to ensuring precision in every stitch, to guarantee that each garment meets our high standards.
                 </p>
              </div>
            </motion.div>
             <motion.div
                variants={fadeIn('left', 0.2)}
                className="lg:col-span-3"
              >
                <Card className="overflow-hidden shadow-2xl hover:shadow-primary/20 transition-all duration-500 transform hover:-translate-y-2 rounded-2xl border-0">
                  <motion.div 
                    className="aspect-video bg-black rounded-2xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <iframe
                      className="w-full h-full rounded-2xl"
                      src="https://www.youtube.com/embed/6JBtgw1Ib2Q"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </motion.div>
                </Card>
              </motion.div>
          </div>
           <div className="text-muted-foreground space-y-4 mt-8 text-justify">
             <p>
                In addition to our premium SAA brand scrubs, we offer a comprehensive range of surgical items, catering to the diverse needs of hospitals, clinics, and individual practitioners. Our goal is to be a one-stop solution for all your medical apparel and supply needs, providing products that enhance safety, comfort, and efficiency in the workplace.
             </p>
             <p>
                At SAA Scrubs, our mission is to support the heroes of healthcare with the best possible gear. We are dedicated to providing excellent products and exceptional service, building lasting relationships with our clients who trust us to deliver quality and reliability with every order.
             </p>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="py-16 lg:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer()}
      >
        <div className="container">
          <motion.div variants={fadeIn('up')} className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-primary">Facts and Figures</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">A quick look at our journey and impact.</p>
          </motion.div>
          <motion.div 
            variants={staggerContainer(0.1)}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {facts.map((fact, index) => (
              <motion.div variants={fadeIn('up')} key={index}>
                <Card className="text-center p-8 h-full bg-card shadow-lg flex flex-col items-center justify-center">
                  <fact.icon className="h-12 w-12 text-accent mb-4" />
                  <p className="text-4xl font-extrabold text-primary">{fact.number}</p>
                  <p className="text-muted-foreground mt-1">{fact.label}</p>
                </Card>
              </motion.div>
            ))}
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
            <h2 className="text-3xl font-bold tracking-tight text-primary">Our Values</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and our commitment to the healthcare community.
            </p>
          </motion.div>
          <motion.div 
            variants={staggerContainer(0.1)}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((item, index) => (
              <motion.div variants={fadeIn('up')} key={item.title}>
                 <Card className="text-center p-6 h-full hover:shadow-accent/10 hover:shadow-lg transition-shadow duration-300 bg-card border-border/50 flex flex-col items-center">
                    <div className="p-4 bg-accent/10 rounded-full mb-4 inline-block">
                        <item.icon className="h-8 w-8 text-accent" />
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
        className="py-16 lg:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer()}
      >
        <div className="container">
          <motion.div variants={fadeIn('up')} className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-primary">Our History</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Tracing the path of our commitment to surgical excellence.</p>
          </motion.div>
          <div className="relative max-w-5xl mx-auto">
              <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border"></div>
              <motion.div 
                className="space-y-16"
                variants={staggerContainer()}
              >
                {timeline.map((item, index) => (
                    <motion.div 
                      key={item.year} 
                      variants={fadeIn(index % 2 === 0 ? 'left' : 'right')}
                      className="flex items-center relative"
                    >
                        <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left order-2'}`}>
                          <p className="font-bold text-2xl text-primary mb-1">{item.year}</p>
                          <p className="text-muted-foreground">{item.event}</p>
                        </div>
                        <div className="w-1/2 flex justify-center absolute left-1/2 -translate-x-1/2">
                           <div className="z-10 w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center border-4 border-background">
                                <item.icon className="h-8 w-8" />
                            </div>
                        </div>
                         <div className={`w-1/2 ${index % 2 === 0 ? 'order-2' : ''}`}></div>
                    </motion.div>
                ))}
              </motion.div>
          </div>
        </div>
      </motion.section>
      
      <motion.section
        className="py-16 lg:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer()}
      >
        <div className="container">
          <motion.div variants={fadeIn('up')} className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-primary">Executive Board</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">The experienced mind guiding SAA Scrubs forward.</p>
          </motion.div>
          <div className="flex justify-center">
            {teamMembers.map((member, index) => (
              <motion.div variants={fadeIn('up', index * 0.1)} key={member.name} className="text-center group">
                <motion.div 
                    className="relative w-64 h-64 mx-auto mb-4 overflow-hidden rounded-full shadow-lg transition-all duration-500"
                    whileHover={{ scale: 1.05, shadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
                >
                  <Image src={member.image} alt={member.name} data-ai-hint={member.dataAiHint} fill className="object-cover" />
                </motion.div>
                <h3 className="font-bold text-3xl tracking-tight mt-6">{member.name}</h3>
                <p className="text-accent text-xl font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

    </div>
  );

    