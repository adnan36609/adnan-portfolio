"use client";

import { motion } from "motion/react";
import React from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  scale?: number;
  blur?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  delay = 0,
  duration = 0.6,
  y = 30,
  x = 0,
  scale = 1,
  blur = 0,
  className = "",
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y,
        x,
        scale,
        filter: `blur(${blur}px)`,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}