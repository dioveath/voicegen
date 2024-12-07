"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the free service work?",
    answer: "Our service is completely free to use. Simply watch a short advertisement before each conversion, and you'll get access to premium-quality text-to-speech conversion."
  },
  {
    question: "What languages are supported?",
    answer: "We support multiple languages including English, Spanish, French, German, Italian, and many more. Each language comes with various accent options."
  },
  {
    question: "Is there a limit to how much text I can convert?",
    answer: "There's no limit to the amount of text you can convert. Each conversion requires watching a short ad, after which you can convert as much text as you need."
  },
  {
    question: "Can I use the generated audio commercially?",
    answer: "Yes, all generated audio is free for both personal and commercial use. No attribution required."
  }
];

export function FAQ() {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions about our text-to-speech service.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}