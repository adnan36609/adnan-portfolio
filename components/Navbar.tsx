"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface NavbarProps {
  logo?: string;
}

export function Navbar({ logo = "ADNAN" }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const navLinks = [
    { label: "ABOUT", href: "#about" },
    { label: "PROJECTS", href: "#projects" },
    { label: "SKILLS", href: "#skills" },
    { label: "CONTACT", href: "#contact" },
  ];

  const ratios = useRef<Record<string, number>>({});

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.current[entry.target.id] = entry.isIntersecting
            ? entry.intersectionRatio
            : 0;
        });

        const mostVisible = Object.entries(ratios.current).reduce(
          (best, [id, ratio]) =>
            ratio > best.ratio ? { id, ratio } : best,
          { id: "", ratio: 0 }
        );

        if (mostVisible.ratio > 0) {
          setActiveSection(mostVisible.id);
        }
      },
      {
        rootMargin: "-100px 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const linkClasses = (href: string) => {
    const isActive = activeSection === href.replace("#", "");

    return `group relative text-xs font-mono tracking-widest transition-colors duration-200 ${
      isActive
        ? "text-contrast"
        : "text-muted-400 hover:text-contrast"
    }`;
  };

  const mobileLinkClasses = (href: string) => {
    const isActive = activeSection === href.replace("#", "");

    return `group block py-2 border-b border-muted-800 transition-all duration-200 ${
      isActive
        ? "text-contrast"
        : "text-muted-300 hover:text-contrast"
    }`;
  };

  const ThemeToggle = () => (
    <button
      onClick={toggleTheme}
      role="switch"
      aria-checked={theme === "light"}
      aria-label="Toggle light/dark theme"
      className={`group relative w-11 h-6 rounded-full flex items-center px-1 border transition-colors duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base-900 ${
        theme === "light"
          ? "bg-accent/10 border-accent"
          : "bg-muted-800 border-muted-700 hover:border-muted-600"
      }`}
    >
      <Sun
        className={`absolute left-1 w-3 h-3 transition-all duration-300 ${
          theme === "light"
            ? "opacity-0 scale-50"
            : "opacity-40 text-muted-500 scale-100"
        }`}
      />

      <Moon
        className={`absolute right-1 w-3 h-3 transition-all duration-300 ${
          theme === "light"
            ? "opacity-40 text-accent/60 scale-100"
            : "opacity-0 scale-50"
        }`}
      />

      <div
        className={`relative z-10 w-4 h-4 rounded-full flex items-center justify-center shadow-sm transition-all duration-300 ease-out group-active:scale-90 ${
          theme === "light"
            ? "translate-x-5 bg-accent"
            : "translate-x-0 bg-muted-400 group-hover:bg-muted-300"
        }`}
      >
        {theme === "light" ? (
          <Sun className="w-2.5 h-2.5 text-base-950" />
        ) : (
          <Moon className="w-2.5 h-2.5 text-base-900" />
        )}
      </div>
    </button>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-base-900/95 backdrop-blur-md border-b border-muted-800">

      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="#hero"
          className="group text-accent font-display font-extrabold text-1xl tracking-tighter transition-all duration-200 hover:-translate-y-0.5 hover:opacity-80"
        >
          {logo}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive =
              activeSection === link.href.replace("#", "");

            return (
              <Link
                key={link.label}
                href={link.href}
                className={linkClasses(link.href)}
              >
                {link.label}

                {/* Animated underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ease-out ${
                    isActive
                      ? "w-full opacity-100"
                      : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-4">

          {/* Resume */}
          {/* <Link
            href="#contact"
            className="group hidden sm:inline-flex items-center gap-1.5 px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-base-950 transition-all duration-200 font-mono text-xs font-bold tracking-wider"
          >
            <span>RESUME</span>

            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link> */}

          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-contrast border border-muted-700 rounded transition-all duration-200 hover:border-accent hover:text-accent active:scale-90"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4 transition-transform duration-200" />
            ) : (
              <Menu className="w-4 h-4 transition-transform duration-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden bg-base-900 border-b border-muted-800 transition-all duration-300 ease-out ${
          mobileMenuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-6 py-6 space-y-4 font-mono text-xs">

          {navLinks.map((link, index) => (
            <div
              key={link.label}
              className={`transition-all duration-300 ${
                mobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-2 opacity-0"
              }`}
              style={{
                transitionDelay: mobileMenuOpen
                  ? `${index * 50}ms`
                  : "0ms",
              }}
            >
              <Link
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={mobileLinkClasses(link.href)}
              >
                <span className="flex items-center justify-between">
                  {link.label}

                  <ArrowUpRight
                    className="w-3.5 h-3.5 opacity-0 -translate-x-1 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
                  />
                </span>
              </Link>
            </div>
          ))}

          {/* Mobile Resume */}
          <div
            className={`transition-all duration-300 ${
              mobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-2 opacity-0"
            }`}
            style={{
              transitionDelay: mobileMenuOpen ? "200ms" : "0ms",
            }}
          >
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="group inline-flex items-center gap-1.5 w-full justify-center py-2.5 mt-2 border border-accent text-accent font-bold transition-all duration-200 hover:bg-accent hover:text-base-950"
            >
              {/* <span>RESUME</span> */}

              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Theme */}
          <div
            className={`flex items-center justify-between pt-2 transition-all duration-300 ${
              mobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-2 opacity-0"
            }`}
            style={{
              transitionDelay: mobileMenuOpen ? "250ms" : "0ms",
            }}
          >
            <span className="text-muted-400 tracking-widest">
              THEME
            </span>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}