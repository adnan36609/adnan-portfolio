import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#00FF66",
          hover: "#00E05A",
          muted: "rgba(0, 255, 102, 0.15)",
        },
        base: {
          950: "rgb(var(--color-base-950) / <alpha-value>)",
          900: "rgb(var(--color-base-900) / <alpha-value>)",
          850: "rgb(var(--color-base-850) / <alpha-value>)",
          800: "rgb(var(--color-base-800) / <alpha-value>)",
        },
        contrast: {
          DEFAULT: "rgb(var(--color-contrast) / <alpha-value>)",
          off: "rgb(var(--color-contrast-off) / <alpha-value>)",
        },
        muted: {
          400: "rgb(var(--color-muted-400) / <alpha-value>)",
          500: "rgb(var(--color-muted-500) / <alpha-value>)",
          600: "rgb(var(--color-muted-600) / <alpha-value>)",
          700: "rgb(var(--color-muted-700) / <alpha-value>)",
          800: "rgb(var(--color-muted-800) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-syne)", "var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;