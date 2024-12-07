"use client";

import { motion } from "framer-motion";
import { Mic, Zap, Globe2, Heart } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Natural Voice",
    description: "Advanced AI technology delivers human-like speech with perfect pronunciation and intonation."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get your audio in seconds. Quick processing ensures you're never kept waiting."
  },
  {
    icon: Globe2,
    title: "Multiple Languages",
    description: "Support for various languages and accents to reach a global audience."
  },
  {
    icon: Heart,
    title: "Free Forever",
    description: "No hidden fees or subscriptions. Just watch a brief ad and convert as much text as you want."
  }
];

export function Features() {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Why Choose Our Service?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Professional-grade text-to-speech conversion with features that set us apart.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 rounded-xl bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors"
          >
            <feature.icon className="h-12 w-12 text-primary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}