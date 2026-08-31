"use client";

import React from "react";

import { ScrollReveal } from "@/components/ScrollReveal";

import { ArrowUpRight } from "lucide-react";

interface AboutProps {}

export function About({}: AboutProps) {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-base-900 border-b border-muted-800"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-24 pb-10 border-b border-muted-800">

          <ScrollReveal y={20}>
            <div className="font-mono text-accent text-xs font-bold uppercase tracking-widest shrink-0">
              ABOUT ME
            </div>
          </ScrollReveal>

          <ScrollReveal y={30} delay={0.08}>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-contrast leading-tight max-w-4xl">
              I build <span className="text-accent">full-stack products</span>{" "}
              that combine thoughtful interfaces and practical AI.
            </h2>
          </ScrollReveal>

        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pt-12">

          {/* Left */}
          <div className="lg:col-span-5">

            <ScrollReveal y={25}>
              <div className="font-mono text-xs text-muted-500 uppercase tracking-widest mb-4">
                WHO I AM
              </div>
            </ScrollReveal>

            <ScrollReveal y={30} delay={0.08}>
              <h3 className="font-display font-bold text-3xl sm:text-4xl text-contrast leading-tight">
                Full-Stack Developer.
                <br />
                <span className="text-accent">AI Enthusiast.</span>
              </h3>
            </ScrollReveal>

            {/* Availability */}
            <ScrollReveal y={20} delay={0.16}>
              <div className="flex flex-wrap items-center gap-5 pt-8">
                <span className="font-mono text-xs text-muted-400">
                  INDIA
                </span>

                <span className="text-muted-700">/</span>

                <span className="flex items-center gap-2 font-mono text-xs text-muted-400">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  Open to opportunities
                </span>
              </div>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal y={20} delay={0.24}>
              <div className="pt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-wider text-contrast border-b border-contrast pb-1 hover:text-accent hover:border-accent transition-colors"
                >
                  <span>LET&apos;S CONNECT</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </ScrollReveal>

          </div>

          {/* Right */}
          <div className="lg:col-span-7 space-y-6">

            <ScrollReveal y={30}>
              <p className="text-muted-300 text-sm sm:text-base leading-relaxed font-light">
                I&apos;m a B.Tech CSE student at IIIT Bhopal, focused on building
                modern full-stack and AI-powered web applications. I enjoy working
                across the stack, from crafting responsive interfaces and APIs to
                working with databases, authentication, and third-party services.
              </p>
            </ScrollReveal>

            <ScrollReveal y={30} delay={0.12}>
              <p className="text-muted-300 text-sm sm:text-base leading-relaxed font-light">
                I&apos;m particularly interested in turning ideas into useful
                products, understanding how systems work behind the interface, and
                continuously improving my engineering fundamentals through
                hands-on projects. I&apos;m currently looking for opportunities to
                contribute to real-world software and grow as an engineer.
              </p>
            </ScrollReveal>

          </div>

        </div>
      </div>
    </section>
  );
}