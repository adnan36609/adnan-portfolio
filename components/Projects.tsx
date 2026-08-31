"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PortfolioData } from "@/data/portfolio";
import { ProjectModal } from "./ProjectModal";
import { ScrollReveal } from "@/components/ScrollReveal";

interface ProjectsProps {
  projects: PortfolioData["projects"];
}

export function Projects({ projects }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<
    PortfolioData["projects"][number] | null
  >(null);

  return (
    <>
      <section
        id="projects"
        className="py-24 bg-base-900 border-b border-muted-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-20">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row items-start justify-start gap-12 md:gap-[16rem] pb-8 border-b border-muted-800">
            <ScrollReveal y={20}>
              <div className="font-mono text-accent text-xs font-bold uppercase tracking-widest">
                SELECTED PROJECTS
              </div>
            </ScrollReveal>

            <ScrollReveal y={30} delay={0.08}>
              <h2 className="font-display text-4xl sm:text-4xl lg:text-4xl text-contrast max-w-4xl leading-tight">
                Here are some of my recent projects. Each project was carefully
                crafted with attention to detail, performance and user experience.
              </h2>
            </ScrollReveal>
          </div>

          {/* Project Cards */}
          <div className="space-y-24">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
              >
                {/* Screenshot Card */}
                <ScrollReveal
                  y={35}
                  x={project.reverse ? 25 : -25}
                  scale={0.94}
                  blur={10}
                  delay={0.05}
                  duration={0.8}
                  className={`lg:col-span-6 ${
                    project.reverse ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="relative aspect-[16/10] bg-base-850 border border-muted-800 overflow-hidden group cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:border-muted-600"
                  >
                    {/* Project Image */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover opacity-90 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
                    />

                    {/* Subtle Hover Overlay */}
                    <div className="absolute inset-0 bg-base-950/0 transition-colors duration-500 group-hover:bg-base-950/10 pointer-events-none" />

                    {/* VIEW LIVE Button */}
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="group/live absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-5 py-2.5 bg-accent text-base-950 font-mono text-xs font-bold tracking-wider shadow-lg z-20 transition-all duration-300 hover:bg-accent-hover hover:-translate-y-1"
                    >
                      <span>VIEW LIVE</span>

                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5" />
                    </Link>
                  </div>
                </ScrollReveal>

                {/* Text Info */}
                <div
                  className={`lg:col-span-6 ${
                    project.reverse ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="space-y-5">
                    {/* Project Number */}
                    {project.number && (
                      <ScrollReveal y={15} delay={0.02}>
                        <span className="font-mono text-accent text-xs font-bold">
                          {project.number}
                        </span>
                      </ScrollReveal>
                    )}

                    {/* Project Title */}
                    <ScrollReveal y={20} delay={0.08}>
                      <h3 className="group/title font-display font-bold text-3xl sm:text-5xl text-contrast tracking-tight transition-colors duration-300 hover:text-accent">
                        {project.title}
                      </h3>
                    </ScrollReveal>

                    {/* Description */}
                    <ScrollReveal y={20} delay={0.14}>
                      <p className="text-muted-300 text-sm sm:text-base leading-relaxed font-sans font-light">
                        {project.description}
                      </p>
                    </ScrollReveal>

                    {/* Tech Tags */}
                    <ScrollReveal y={15} delay={0.20}>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted-400 pt-2">
                        {project.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="flex items-center gap-2 transition-colors duration-200 hover:text-contrast"
                          >
                            <span className="text-muted-600">&bull;</span>
                            <span>{tag}</span>
                          </span>
                        ))}
                      </div>
                    </ScrollReveal>

                    {/* Explore Project */}
                    <ScrollReveal y={15} delay={0.26}>
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="group/explore inline-flex items-center gap-2 font-mono text-xs font-bold tracking-wider text-contrast border-b border-contrast pb-0.5 transition-all duration-200 hover:text-accent hover:border-accent"
                        >
                          <span>EXPLORE PROJECT</span>

                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/explore:translate-x-0.5 group-hover/explore:-translate-y-0.5" />
                        </button>
                      </div>
                    </ScrollReveal>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}