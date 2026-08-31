"use client";

import React, { useState } from "react";
import { ExperienceItem, EducationItem } from "@/types";
import { Briefcase, GraduationCap } from "lucide-react";

interface ExperienceProps {
  experience: ExperienceItem[];
  education: EducationItem[];
}

export function Experience({ experience, education }: ExperienceProps) {
  const [tab, setTab] = useState<"work" | "education">("work");

  return (
    <section id="experience" className="py-24 border-b border-muted-700/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-4">
            <div className="font-mono text-xs text-muted-500 uppercase tracking-widest">
              // 04. CHRONOLOGY & HISTORY
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-contrast font-sans">
              Career Timeline & Milestones
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex rounded-md bg-base-800 p-1 border border-muted-700 w-fit">
            <button
              onClick={() => setTab("work")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded text-xs font-mono transition-all ${
                tab === "work"
                  ? "bg-contrast text-base-950 font-semibold"
                  : "text-muted-400 hover:text-contrast"
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Experience</span>
            </button>
            <button
              onClick={() => setTab("education")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded text-xs font-mono transition-all ${
                tab === "education"
                  ? "bg-contrast text-base-950 font-semibold"
                  : "text-muted-400 hover:text-contrast"
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="relative border-l border-muted-700 pl-6 sm:pl-8 ml-2 sm:ml-4 space-y-10">
          {tab === "work" ? (
            experience.map((item, idx) => (
              <div key={idx} className="relative space-y-3">
                {/* Marker Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-base-900 border-2 border-contrast" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="font-mono text-base font-semibold text-contrast">
                      {item.role}
                    </h3>
                    <div className="text-xs font-mono text-muted-400">
                      {item.company} &middot;{" "}
                      <span className="text-muted-500">{item.location}</span>
                    </div>
                  </div>
                  <div className="text-xs font-mono px-2.5 py-1 rounded bg-base-800 border border-muted-700 text-muted-400 w-fit">
                    {item.period}
                  </div>
                </div>

                <p className="text-muted-300 text-sm font-light leading-relaxed">
                  {item.description}
                </p>

                {item.achievements && (
                  <ul className="space-y-1.5 pt-1">
                    {item.achievements.map((ach, aIdx) => (
                      <li
                        key={aIdx}
                        className="text-xs text-muted-400 flex items-start gap-2 font-sans font-light"
                      >
                        <span className="text-muted-500 font-mono">&gt;</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-base-850 border border-muted-700 text-[10px] font-mono text-muted-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))
          ) : (
            education.map((item, idx) => (
              <div key={idx} className="relative space-y-2">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-base-900 border-2 border-contrast" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="font-mono text-base font-semibold text-contrast">
                      {item.degree}
                    </h3>
                    <div className="text-xs font-mono text-muted-400">
                      {item.institution}
                    </div>
                  </div>
                  <div className="text-xs font-mono px-2.5 py-1 rounded bg-base-800 border border-muted-700 text-muted-400 w-fit">
                    {item.period}
                  </div>
                </div>
                <p className="text-muted-300 text-sm font-light leading-relaxed">
                  {item.details}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
