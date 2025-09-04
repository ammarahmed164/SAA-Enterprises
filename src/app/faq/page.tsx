
'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from 'framer-motion';
import { HelpCircle } from "lucide-react";

const faqItems = [
    {
        question: "What are your shipping options?",
        answer: "We offer several shipping options to meet your needs, including standard, expedited, and overnight shipping. Costs and delivery times vary depending on the option selected and your location. You can see all available options during checkout."
    },
    {
        question: "How do I track my order?",
        answer: "Once your order has shipped, you will receive an email with a tracking number and a link to the carrier's website. You can also find tracking information in your order history by logging into your account on our website."
    },
    {
        question: "What is your return policy?",
        answer: "We accept returns on most items within 30 days of delivery. Items must be in their original condition and packaging. To initiate a return, please visit our returns portal or contact our customer support team for assistance."
    },
    {
        question: "Do you offer international shipping?",
        answer: "Yes, we ship to many countries around the world. International shipping rates and times vary by destination. Please note that customers are responsible for any customs fees, duties, or taxes imposed by their country."
    },
    {
        question: "How can I contact customer support?",
        answer: "Our customer support team is here to help! You can reach us via email at support@saa-enterprises.com, by phone at +92 314 2949734, or through the contact form on our website. We strive to respond to all inquiries within 24 hours."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express), as well as PayPal and other secure payment gateways. All transactions are encrypted for your security."
    }
]

export default function FAQPage() {
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
