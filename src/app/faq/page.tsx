'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from 'framer-motion';
import { HelpCircle } from "lucide-react";
import { Suspense } from "react";

const faqItems = [
    {
        question: "What services does your company offers?",
        answer: "Our company specializes in consulting, product development, and customer support. We tailor our services to fit the unique needs of businesses across various sectors, helping them grow and succeed in a competitive market."
    },
    {
        question: "How can I Contact customer Support?",
        answer: "You can reach our customer support team by emailing info@saa-scrubs.com, calling +92 314 2949734, or using the live chat on our website. Our dedicated team is available 24/7 to assist with any inquiries or issues. We’re committed to providing prompt and effective solutions to ensure your satisfaction."
    },
    {
        question: "What is your Return Policy?",
        answer: "We offer a 30-day return policy for all products. Items must be in their original condition, unused, and include the receipt or proof of purchase. Refunds are processed within 5-7 business days of receiving the returned item."
    }
]

function FAQPageComponent() {
  return (
    <div className="bg-background text-foreground">
       <motion.section 
        className="relative bg-gradient-to-br from-blue-100 via-background to-orange-100 py-20 md:py-28 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <HelpCircle className="mx-auto h-16 w-16 text-primary mb-4" />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="py-16 lg:py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="container max-w-4xl">
            <Accordion type="single" collapsible className="w-full space-y-4">
                {faqItems.map((item, index) => (
                    <AccordionItem value={`item-${index}`} key={index} className="border-b-0">
                       <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.1 * index, duration: 0.5 }}
                       >
                        <AccordionTrigger className="text-left text-lg font-semibold p-6 bg-muted/50 hover:bg-muted rounded-lg transition-all text-foreground hover:no-underline">
                            {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="p-6 text-base text-muted-foreground bg-card rounded-b-lg">
                            {item.answer}
                        </AccordionContent>
                      </motion.div>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
      </motion.section>
    </div>
  );
}


export default function FAQPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FAQPageComponent />
    </Suspense>
  )
}
