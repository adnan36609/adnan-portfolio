"use client";

import React, { useState, useEffect } from "react";
import { Search, X, ArrowRight, CornerDownLeft } from "lucide-react";
import { PortfolioData } from "@/types";
import { useToast } from "./Toast";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
}

export function CommandPalette({
  isOpen,
  onClose,
  data,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIdx, setSelectedIdx] = useState(0);
  const { showToast } = useToast();

  const actions = [
    {
      title: "Jump to Hero / Top",
      category: "Navigation",
      execute: () => {
        document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      title: "Jump to About & Background",
      category: "Navigation",
      execute: () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      title: "Jump to Skills Matrix",
      category: "Navigation",
      execute: () => {
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      title: "Jump to Projects Showcase",
      category: "Navigation",
      execute: () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      title: "Jump to Experience Timeline",
      category: "Navigation",
      execute: () => {
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      title: "Open Interactive CLI Terminal",
      category: "Interactive",
      execute: () => {
        document.getElementById("terminal")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      title: "Jump to Contact Form",
      category: "Navigation",
      execute: () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      title: `Copy Email Address (${data.profile.socials.email})`,
      category: "Action",
      execute: () => {
        navigator.clipboard.writeText(data.profile.socials.email);
        showToast("Copied email address to clipboard.", "success");
      },
    },
    ...data.projects.map((p) => ({
      title: `Project: ${p.title}`,
      category: "Projects",
      execute: () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      },
    })),
  ];

  const filtered = actions.filter(
    (a) =>
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery("");
      }
      if (!isOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIdx((prev) => (prev < filtered.length - 1 ? prev + 1 : prev));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIdx((prev) => (prev > 0 ? prev - 1 : 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filtered[selectedIdx]) {
          filtered[selectedIdx].execute();
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, filtered, selectedIdx]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-base-900 border border-muted-700 rounded-lg shadow-2xl overflow-hidden font-sans text-contrast"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-muted-700 bg-base-850">
          <Search className="w-4 h-4 text-muted-400 mr-3 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIdx(0);
            }}
            placeholder="Type a command or jump to section..."
            className="w-full bg-transparent outline-none text-sm font-mono text-contrast placeholder:text-muted-500"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded text-muted-500 hover:text-contrast"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-2 max-h-72 overflow-y-auto space-y-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-xs font-mono text-muted-500">
              No matching commands or actions found.
            </div>
          ) : (
            filtered.map((action, idx) => (
              <div
                key={idx}
                onClick={() => {
                  action.execute();
                  onClose();
                }}
                onMouseEnter={() => setSelectedIdx(idx)}
                className={`flex items-center justify-between px-3 py-2.5 rounded text-xs font-mono cursor-pointer transition-colors ${
                  selectedIdx === idx
                    ? "bg-base-800 text-contrast border border-muted-600"
                    : "text-muted-300 hover:bg-base-850 border border-transparent"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <ArrowRight className="w-3.5 h-3.5 text-muted-500" />
                  <span>{action.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-muted-500">
                    {action.category}
                  </span>
                  {selectedIdx === idx && (
                    <CornerDownLeft className="w-3 h-3 text-muted-400" />
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-2 bg-base-950 border-t border-muted-700/80 text-[10px] font-mono text-muted-500">
          <div>
            Use <kbd className="px-1 py-0.5 bg-base-800 rounded border border-muted-700">↑</kbd>{" "}
            <kbd className="px-1 py-0.5 bg-base-800 rounded border border-muted-700">↓</kbd> to navigate,{" "}
            <kbd className="px-1 py-0.5 bg-base-800 rounded border border-muted-700">↵</kbd> to select
          </div>
          <div>
            <kbd className="px-1 py-0.5 bg-base-800 rounded border border-muted-700">ESC</kbd> to close
          </div>
        </div>
      </div>
    </div>
  );
}
