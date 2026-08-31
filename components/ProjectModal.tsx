"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "@/types";
import { X, ExternalLink, Github, Check } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Escape key + prevent background scrolling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  // Modal scroll progress
  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;

      const maxScroll = scrollHeight - clientHeight;

      if (maxScroll <= 0) {
        setScrollProgress(0);
        setIsScrolled(false);
        return;
      }

      setScrollProgress(scrollTop / maxScroll);
      setIsScrolled(scrollTop > 20);
    };

    container.addEventListener("scroll", handleScroll);

    // Set initial state
    handleScroll();

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
        >
          {/* Modal */}
          <motion.div
            className="relative w-full max-w-3xl max-h-[90vh] bg-base-900 border border-muted-700 rounded-lg shadow-2xl overflow-hidden flex flex-col font-sans text-contrast"
            onClick={(e) => e.stopPropagation()}
            initial={{
              opacity: 0,
              scale: 0.94,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: 20,
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Scroll Progress */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-[2px] bg-muted-800 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className="h-full bg-accent origin-left"
                style={{
                  scaleX: scrollProgress,
                }}
              />
            </motion.div>

            {/* Header */}
            <motion.div
              className={`flex items-center justify-between px-6 py-4 border-b transition-colors duration-300 ${
                isScrolled
                  ? "border-muted-600 bg-base-850/95"
                  : "border-muted-700 bg-base-850"
              }`}
              initial={{
                opacity: 0,
                y: -8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.08,
                duration: 0.35,
              }}
            >
              <div className="font-mono text-xs text-muted-400">
                // PROJECT SPEC · {project.number ?? "00"}
              </div>

              <motion.button
                onClick={onClose}
                className="group p-1.5 rounded text-muted-400 hover:text-contrast hover:bg-base-800 transition-colors"
                aria-label="Close modal"
                whileHover={{
                  rotate: 90,
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <X className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Scrollable Content */}
            <div
              ref={scrollRef}
              className="p-5 sm:p-6 overflow-y-auto space-y-6"
            >
              {/* Project Image */}
              <motion.div
                className="relative w-full h-56 sm:h-72 rounded-md overflow-hidden bg-base-950 border border-muted-700 group"
                initial={{
                  opacity: 0,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: 0.12,
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <motion.div
                  className="absolute inset-0"
                  initial={{
                    scale: 1.08,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  transition={{
                    delay: 0.12,
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </motion.div>

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-base-950/40 via-transparent to-transparent pointer-events-none" />

                {/* Category */}
                <motion.div
                  className="absolute top-3 left-3 px-2.5 py-1 rounded bg-base-900/90 backdrop-blur-sm border border-muted-700 text-[11px] font-mono text-contrast"
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.35,
                    duration: 0.35,
                  }}
                >
                  {project.category}
                </motion.div>
              </motion.div>

              {/* Title + Links */}
              <motion.div
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-muted-700 pb-5"
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.22,
                  duration: 0.4,
                }}
              >
                <h2 className="text-xl sm:text-2xl font-bold font-sans tracking-tight">
                  {project.title}
                </h2>

                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-base-800 border border-muted-700 text-xs font-mono hover:text-contrast hover:border-muted-500 transition-colors"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source</span>
                    </motion.a>
                  )}

                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group/live inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-contrast text-base-950 text-xs font-mono font-semibold hover:bg-contrast-subtle transition-colors"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <span>Live Preview</span>
                      <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5" />
                    </motion.a>
                  )}
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                className="space-y-2"
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.28,
                  duration: 0.4,
                }}
              >
                <h3 className="font-mono text-xs text-muted-500 uppercase tracking-wider">
                  System Architecture & Overview
                </h3>

                <p className="text-muted-300 text-sm leading-relaxed font-light">
                  {project.fullDescription}
                </p>
              </motion.div>

              {/* Stats */}
              {project.stats && (
                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-3 gap-3"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.07,
                        delayChildren: 0.32,
                      },
                    },
                  }}
                >
                  {Object.entries(project.stats).map(([key, value]) => (
                    <motion.div
                      key={key}
                      className="p-3 rounded bg-base-850 border border-muted-700 text-center font-mono transition-colors duration-300 hover:border-muted-500"
                      variants={{
                        hidden: {
                          opacity: 0,
                          y: 12,
                        },
                        visible: {
                          opacity: 1,
                          y: 0,
                        },
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={{
                        y: -2,
                      }}
                    >
                      <div className="text-sm font-semibold text-contrast">
                        {value}
                      </div>

                      <div className="text-[10px] text-muted-500 uppercase tracking-widest mt-0.5">
                        {key}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Highlights */}
              {project.highlights && (
                <motion.div
                  className="space-y-2"
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.4,
                    duration: 0.4,
                  }}
                >
                  <h3 className="font-mono text-xs text-muted-500 uppercase tracking-wider">
                    Key Engineering Highlights
                  </h3>

                  <motion.ul
                    className="space-y-2"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.06,
                        },
                      },
                    }}
                  >
                    {project.highlights.map((highlight, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-2.5 text-xs text-muted-300 font-light"
                        variants={{
                          hidden: {
                            opacity: 0,
                            x: -8,
                          },
                          visible: {
                            opacity: 1,
                            x: 0,
                          },
                        }}
                      >
                        <Check className="w-4 h-4 text-contrast shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              )}

              {/* Technologies */}
              <motion.div
                className="space-y-2 pt-2"
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.46,
                  duration: 0.4,
                }}
              >
                <h3 className="font-mono text-xs text-muted-500 uppercase tracking-wider">
                  Technologies Utilized
                </h3>

                <motion.div
                  className="flex flex-wrap gap-1.5"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.04,
                      },
                    },
                  }}
                >
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-base-800 border border-muted-700 text-[11px] font-mono text-muted-300 transition-colors duration-200 hover:text-contrast hover:border-muted-500"
                      variants={{
                        hidden: {
                          opacity: 0,
                          scale: 0.9,
                        },
                        visible: {
                          opacity: 1,
                          scale: 1,
                        },
                      }}
                      transition={{
                        duration: 0.25,
                        ease: "easeOut",
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}