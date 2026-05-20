"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [particles, setParticles] = useState<
    { id: number; top: number; left: number; duration: number; delay: number }[]
  >([]);

  useEffect(() => {
    // Defer state update by a tick to prevent the synchronous cascading render warning
    const timer = setTimeout(() => {
      const generatedParticles = Array.from({ length: 25 }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: Math.random() * 10 + 15,
        delay: Math.random() * 5,
      }));
      setParticles(generatedParticles);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Orb 1 - Top Left */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] rounded-full bg-cyan-600/20 blur-[100px] md:blur-[140px]"
        animate={{
          x: ["0%", "15%", "0%"],
          y: ["0%", "20%", "0%"],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orb 2 - Middle Right */}
      <motion.div
        className="absolute top-[20%] right-[-10%] w-[70vw] h-[70vw] md:w-[50vw] md:h-[50vw] rounded-full bg-blue-700/20 blur-[100px] md:blur-[140px]"
        animate={{
          x: ["0%", "-15%", "0%"],
          y: ["0%", "-10%", "0%"],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orb 3 - Bottom Left */}
      <motion.div
        className="absolute bottom-[-20%] left-[10%] w-[60vw] h-[60vw] md:w-[45vw] md:h-[45vw] rounded-full bg-teal-600/15 blur-[100px] md:blur-[140px]"
        animate={{
          x: ["0%", "25%", "0%"],
          y: ["0%", "-15%", "0%"],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Tiny floating particles (stars/dust) */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-cyan-200/50 rounded-full blur-[0.5px]"
          style={{
            top: `${particle.top}%`,
            left: `${particle.left}%`,
          }}
          animate={{
            y: ["0px", "-80px", "0px"],
            x: ["0px", "30px", "0px"],
            opacity: [0.1, 0.7, 0.1],
            scale: [0.8, 1.5, 0.8],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}
