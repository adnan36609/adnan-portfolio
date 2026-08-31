import type { Metadata } from "next";
import { Inter, Syne, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ADNAN-Portfilio",
  description:
    "I build modern full-stack and AI-powered web applications with React, Next.js and Node.js.",
  keywords: [
    "Full-Stack Developer",
    "AI Enthusiast",
    "Next.js",
    "React",
    "Node.js",
    "Supabase",
    "API Integration",
  ],
  authors: [{ name: "Mohd Adnan" }],
  openGraph: {
    title: "Full-Stack Developer",
    description: "I build full-stack AI-powered products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} ${spaceGrotesk.variable} ${mono.variable}`}
    >
      <body className="bg-base-900 text-contrast min-h-screen antialiased selection:bg-accent selection:text-base-950 font-sans cursor-default">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}