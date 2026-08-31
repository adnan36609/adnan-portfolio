"use client";

import React from "react";
import { Stat } from "@/types";

interface StatsProps {
  stats: Stat[];
}

export function Stats({ stats }: StatsProps) {
  return (
    <section className="py-8 border-y border-muted-700/60 bg-base-850/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold font-mono text-contrast tracking-tight">
                {stat.value}
                <span className="text-muted-400 text-2xl font-light">{stat.suffix}</span>
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-muted-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
