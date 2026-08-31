"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { PortfolioData } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { motion } from "motion/react";

interface HeroProps {
  profile: PortfolioData["profile"];
}

export function Hero({ profile }: HeroProps) {
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setTilt({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative pt-24 pb-20 overflow-hidden bg-base-900 border-b border-muted-800"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 overflow-hidden">
        {/* Sub-bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 py-4 border-b border-muted-800 text-[11px] font-mono tracking-widest text-muted-400 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-accent inline-block" />
            <span className="text-contrast font-medium">
              {profile.subBarLeft}
            </span>
          </div>
          <div className="text-muted-500 uppercase tracking-widest">
            {profile.subBarRight}
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-8 items-center">
          {/* Left Column: Massive Headline & Bio */}
          <div className="xl:col-span-7 relative z-30 min-w-0">
            {/* Main Headline */}
            <h1 className="font-display font-black text-[clamp(2rem,10vw,4.5rem)] tracking-[-0.04em] leading-[0.9] select-none">
              {/* Line 1 */}
              <motion.span
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block text-contrast whitespace-nowrap"
              >
                {profile.headline.line1}
              </motion.span>

              {/* Line 2 */}
              <motion.span
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block text-accent ml-4 sm:ml-28 whitespace-nowrap"
              >
                {profile.headline.line2}
              </motion.span>

              {/* Line 3 */}
              <motion.span
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block stroke-text tracking-wide whitespace-nowrap"
              >
                {profile.headline.line3Outline}
              </motion.span>

              {/* Line 4 */}
              <motion.span
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block text-contrast ml-2 sm:ml-12 whitespace-nowrap"
              >
                {profile.headline.line4Accent}
              </motion.span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.22,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-muted-300 text-sm sm:text-base max-w-xl font-sans font-normal leading-relaxed mt-8"
            >
              I build modern full-stack and AI-powered web applications with
              React, Next.js and Node.js.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-wrap items-center gap-4 pt-2 mt-4"
            >
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-base-950 font-mono text-xs font-bold tracking-wider hover:bg-accent-hover transition-colors"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowDownRight className="w-4 h-4 text-base-950" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-muted-700 text-contrast font-mono text-xs font-bold tracking-wider hover:border-contrast transition-colors"
              >
                <span>LET'S CONNECT</span>
                <ArrowUpRight className="w-4 h-4 text-contrast" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Offset Portrait Card */}
          <div className="xl:col-span-5 flex justify-center xl:justify-end">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] pb-4 pr-4">
              {/* Yellow Background Offset Rectangle */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 16, y: 16 }}
                transition={{
                  duration: 0.6,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 bg-accent -z-0"
              />

              {/* Main Photo Frame */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.65,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative w-full h-full bg-base-850 border border-muted-800 overflow-hidden z-10 transition-transform duration-300 ease-out"
                style={{
                  transform: `translate(${tilt.x * 4}px, ${tilt.y * 4}px)`,
                }}
              >
                <Image
                  src={profile.avatarUrl}
                  alt={profile.name}
                  fill
                  className="object-cover grayscale contrast-125 transition-all duration-700"
                  priority
                />

                {/* Bottom Caption Pill */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute bottom-3 left-3 right-3 bg-base-950/95 border border-muted-800 py-2 px-3 text-center font-mono text-[10px] sm:text-[11px] tracking-widest text-contrast font-semibold z-20"
                >
                  {profile.captionBadge}
                </motion.div>
              </motion.div>

              {/* Black Overlay Badge: WEB / AI / PRODUCTS */}
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.48,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute bottom-[5rem] -right-4 bg-base-950/95 border-l-2 border-accent px-4 py-3 font-mono text-[11px] font-bold tracking-wider leading-relaxed z-20"
              >
                <div className="text-contrast">WEB</div>
                <div className="text-accent">AI</div>
                <div className="text-contrast">PRODUCTS</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
