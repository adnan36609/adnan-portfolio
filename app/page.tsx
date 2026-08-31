"use client";

import React from "react";

import { portfolioData } from "@/data/portfolio";

import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
// import { ScrollProgress } from "@/components/ScrollProgress";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-base-900 text-contrast selection:bg-accent selection:text-base-950 font-sans">
      <CustomCursor />

      {/* <ScrollProgress /> */}

      <Navbar logo={portfolioData.profile.logo} />

      <main className="relative z-10">
        <Hero profile={portfolioData.profile} />

        <About />

        <Projects projects={portfolioData.projects} />

        <Skills skillsRows={portfolioData.skillsRows} />

        <Contact
          profile={portfolioData.profile}
          contactCta={portfolioData.contactCta}
        />
      </main>

      <Footer />
    </div>
  );
}