"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatInProps {
  children: ReactNode;
  delay?: number;
}

export default function FloatIn({ children, delay = 0 }: FloatInProps) {
  return (
    <motion.div
      // 1. Initial State (Invisible and shifted down)
      initial={{ opacity: 0, y: 50 }}
      
      // 2. State when it comes into the viewport
      whileInView={{ opacity: 1, y: 0 }}
      
      // 3. Animation settings
      transition={{ 
        duration: 0.8, 
        delay: delay, 
        ease: "easeOut" 
      }}
      
      // 4. Viewport settings (once: true means it won't re-animate if you scroll up and down)
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}