"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Content Creator",
    text: "This service has revolutionized my content creation process. The natural-sounding voices are perfect for my videos."
  },
  {
    name: "David Chen",
    role: "Educational Publisher",
    text: "We use this for our educational materials. The quality is outstanding, and the simple ad-supported model makes it accessible."
  },
  {
    name: "Maria Garcia",
    role: "Podcast Producer",
    text: "The best free TTS service I've found. Perfect for creating quick voice-overs and previews."
  }
];

export function Testimonials() {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Join thousands of satisfied users who trust our service for their text-to-speech needs.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 h-full bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
              <blockquote className="text-lg mb-4">&ldquo;{testimonial.text}&rdquo;</blockquote>
              <footer>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </footer>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}