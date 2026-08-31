"use client";

import React from "react";

import {
  ArrowUpRight,
  Mail,
  Phone,
  Github,
  Linkedin,
  Send,
  Instagram,
} from "lucide-react";

import { PortfolioData } from "@/data/portfolio";

import { ScrollReveal } from "@/components/ScrollReveal";

interface ContactProps {
  profile: PortfolioData["profile"];
  contactCta: PortfolioData["contactCta"];
}

export function Contact({ profile, contactCta }: ContactProps) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = React.useState(false);

  const [status, setStatus] = React.useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSending(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setStatus("Message sent successfully.");
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  const whatsappNumber = contactCta.whatsappNumber.replace(/\D/g, "");

  return (
    <section
      id="contact"
      className="bg-base-900 border-b border-muted-800"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">

        <div className="py-24 sm:py-32">

          {/* Section Header */}
          <div className="border-b border-muted-800 pb-10 mb-16">

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">

              {/* Header Title */}
              <div>

                <ScrollReveal y={20}>
                  <div className="font-mono text-accent text-xs font-bold uppercase tracking-widest mb-5">
                    GET IN TOUCH
                  </div>
                </ScrollReveal>

                <ScrollReveal y={35} delay={0.08}>
                  <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.9] text-contrast">
                    LET&apos;S
                    <br />
                    <span className="text-accent">BUILD.</span>
                  </h2>
                </ScrollReveal>

              </div>

              {/* Subheadline */}
              <ScrollReveal y={25} delay={0.16}>
                <p className="text-muted-400 text-sm sm:text-base leading-relaxed max-w-md lg:pb-2">
                  {contactCta.subheadline}
                </p>
              </ScrollReveal>

            </div>
          </div>

          {/* Main Contact Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">

            {/* Left: Contact Information */}
            <div className="lg:col-span-5 space-y-12">

              {/* Contact Information */}
              <ScrollReveal y={30}>
                <div>

                  <div className="font-mono text-[11px] font-bold uppercase tracking-widest text-muted-500 mb-6">
                    Contact Information
                  </div>

                  <div className="space-y-5">

                    {/* Email */}
                    <ScrollReveal y={20} delay={0.08}>
                      <a
                        href={`mailto:${contactCta.email}`}
                        className="group flex items-center gap-4"
                      >
                        <div className="w-12 h-12 bg-base-850 border border-muted-800 flex items-center justify-center shrink-0 group-hover:border-accent transition-colors duration-200">
                          <Mail className="w-5 h-5 text-accent" />
                        </div>

                        <div className="min-w-0">
                          <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-500 mb-1">
                            Email
                          </div>

                          <div className="text-contrast text-sm sm:text-base truncate group-hover:text-accent transition-colors">
                            {contactCta.email}
                          </div>
                        </div>

                        <ArrowUpRight className="w-4 h-4 text-muted-600 ml-auto group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </a>
                    </ScrollReveal>

                    {/* WhatsApp */}
                    <ScrollReveal y={20} delay={0.16}>
                      <a
                        href={`https://wa.me/${whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4"
                      >
                        <div className="w-12 h-12 bg-base-850 border border-muted-800 flex items-center justify-center shrink-0 group-hover:border-accent transition-colors duration-200">
                          <Phone className="w-5 h-5 text-accent" />
                        </div>

                        <div>
                          <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-500 mb-1">
                            WhatsApp
                          </div>

                          <div className="text-contrast text-sm sm:text-base group-hover:text-accent transition-colors">
                            {contactCta.whatsappNumber}
                          </div>
                        </div>

                        <ArrowUpRight className="w-4 h-4 text-muted-600 ml-auto group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </a>
                    </ScrollReveal>

                  </div>
                </div>
              </ScrollReveal>

              {/* Social Links */}
              <ScrollReveal y={30} delay={0.12}>
                <div>

                  <div className="font-mono text-[11px] font-bold uppercase tracking-widest text-muted-500 mb-5">
                    Connect With Me
                  </div>

                  <div className="flex items-center gap-3">

                    {/* GitHub */}
                    <a
                      href={profile.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="group w-11 h-11 bg-base-850 border border-muted-800 flex items-center justify-center text-contrast hover:border-accent hover:text-accent transition-all duration-200"
                    >
                      <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </a>

                    {/* LinkedIn */}
                    <a
                      href={profile.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="group w-11 h-11 bg-base-850 border border-muted-800 flex items-center justify-center text-contrast hover:border-accent hover:text-accent transition-all duration-200"
                    >
                      <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </a>

                    {/* Instagram */}
                    <a
                      href={profile.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="group w-11 h-11 bg-base-850 border border-muted-800 flex items-center justify-center text-contrast hover:border-accent hover:text-accent transition-all duration-200"
                    >
                      <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </a>

                  </div>
                </div>
              </ScrollReveal>

              {/* Availability */}
              <ScrollReveal y={25} delay={0.18}>
                <div className="border-l-2 border-accent pl-5">

                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-500 mb-2">
                    Current Status
                  </div>

                  <div className="flex items-center gap-2 text-sm text-contrast">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    Open to SDE internships
                  </div>

                </div>
              </ScrollReveal>

            </div>

            {/* Right: Message Form */}
            <ScrollReveal
              y={35}
              x={25}
              duration={0.7}
              className="lg:col-span-7"
            >
              <div className="bg-base-850 border border-muted-800 p-6 sm:p-8">

                {/* Form Header */}
                <ScrollReveal y={20}>
                  <div className="flex items-center justify-between mb-5">

                    <div>
                      <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-500 mb-2">
                        DIRECT MESSAGE
                      </div>

                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-contrast">
                        Send a message
                      </h3>
                    </div>

                    <Send className="w-5 h-5 text-accent" />

                  </div>
                </ScrollReveal>

                <form onSubmit={handleSubmit} className="space-y-3">

                  {/* Name */}
                  <ScrollReveal y={15} delay={0.08}>
                    <div className="space-y-1.5">

                      <label
                        htmlFor="name"
                        className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-500"
                      >
                        Your Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Hi! I'm..."
                        className="w-full bg-base-900 border border-muted-800 px-4 py-3.5 text-sm text-contrast placeholder:text-muted-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
                      />

                    </div>
                  </ScrollReveal>

                  {/* Email */}
                  <ScrollReveal y={15} delay={0.14}>
                    <div className="space-y-1.5">

                      <label
                        htmlFor="email"
                        className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-500"
                      >
                        Your Email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full bg-base-900 border border-muted-800 px-4 py-3.5 text-sm text-contrast placeholder:text-muted-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
                      />

                    </div>
                  </ScrollReveal>

                  {/* Message */}
                  <ScrollReveal y={15} delay={0.20}>
                    <div className="space-y-1.5">

                      <label
                        htmlFor="message"
                        className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-500"
                      >
                        Message
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Hello, I'd like to talk about..."
                        className="w-full bg-base-900 border border-muted-800 px-4 py-2.5 text-sm text-contrast placeholder:text-muted-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all resize-none"
                      />

                    </div>
                  </ScrollReveal>

                  {/* Submit */}
                  <ScrollReveal y={15} delay={0.26}>
                    <button
                      type="submit"
                      disabled={isSending}
                      className="group w-full inline-flex items-center justify-center gap-2 py-3 bg-accent text-base-950 font-mono text-xs sm:text-sm font-bold tracking-wider hover:bg-accent-hover transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <span>
                        {isSending ? "SENDING..." : "SEND MESSAGE"}
                      </span>

                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </ScrollReveal>

                  {/* Status */}
                  {status && (
                    <p
                      className={`text-center font-mono text-xs ${
                        status.includes("successfully")
                          ? "text-accent"
                          : "text-red-400"
                      }`}
                    >
                      {status}
                    </p>
                  )}

                </form>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </div>
    </section>
  );
}