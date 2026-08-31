"use client";

import React from "react";

import { PortfolioData } from "@/data/portfolio";

import { ScrollReveal } from "@/components/ScrollReveal";

interface SkillsProps {
  skillsRows: PortfolioData["skillsRows"];
}

export function Skills({ skillsRows }: SkillsProps) {
  return (
    <section
      id="skills"
      className="py-24 bg-base-900 border-b border-muted-800"
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 space-y-2">

        {skillsRows.map((row, idx) => (
          <ScrollReveal
            key={row.number}
            y={30}
            delay={idx * 0.08}
            duration={0.6}
          >
            <div className="group py-8 sm:py-10 border-b border-muted-800 flex flex-col md:flex-row md:items-baseline justify-between gap-6 hover:border-muted-600 transition-colors">

              {/* Left: Number & Category Title */}
              <div className="flex items-center gap-4 md:w-[30%] lg:w-1/4 shrink-0">

                <span className="font-mono text-accent text-sm font-bold">
                  {row.number}
                </span>

                <h3 className="font-display font-bold text-2xl sm:text-3xl text-contrast tracking-tight">
                  {row.category}
                </h3>

                {row.hasIndicator && (
                  <span className="w-2.5 h-2.5 rounded-full bg-accent inline-block" />
                )}

              </div>

              {/* Right: Items separated by slashes */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs sm:text-sm text-muted-300 md:w-[70%] lg:w-3/4">

                {row.items.map((item, idx) => (
                  <React.Fragment key={item}>

                    <span className="hover:text-contrast transition-colors cursor-default">
                      {item}
                    </span>

                    {idx < row.items.length - 1 && (
                      <span className="text-muted-700 font-light">
                        /
                      </span>
                    )}

                  </React.Fragment>
                ))}

              </div>

            </div>
          </ScrollReveal>
        ))}

      </div>
    </section>
  );
}