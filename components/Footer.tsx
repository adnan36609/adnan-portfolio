"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

interface FooterProps {
  copyright?: string;
}

export function Footer({ copyright }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const displayCopyright = copyright ?? `© ${currentYear} MOHD ADNAN`;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-8 bg-base-900 border-t border-muted-800 text-[11px] font-mono text-muted-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <div>{displayCopyright}</div>

        {/* Tagline */}
        <div className="text-muted-400 text-center">
          Designed and built with intent.
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-1 hover:text-accent transition-colors"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
}