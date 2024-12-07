"use client";

import { motion } from "framer-motion";
import { Headphones, Wand2 } from "lucide-react";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background pt-20 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container px-4 mx-auto text-center"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center mb-6 space-x-2"
        >
          <Headphones className="h-12 w-12 text-primary" />
          <Wand2 className="h-8 w-8 text-primary/70" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
        >
          Free Text to Speech
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          Transform your text into lifelike speech in seconds. Professional-grade voice synthesis, completely free with a quick ad view.
        </motion.p>
      </motion.div>
    </div>
  );
}