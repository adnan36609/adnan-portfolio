import { PortfolioData } from "@/types";

export const portfolioData: PortfolioData = {
  profile: {
    name: "MOHD ADNAN",
    preferredName: "ADNAN",
    title: "Full-Stack Developer",

    logo: "ADNAN",

    role: "Full-Stack Developer",

    subBarLeft: "OPEN TO SDE INTERNSHIPS",

    subBarRight: "WEB DEVELOPER / INDIA / 2026",

    headline: {
      line1: "I BUILD",
      line2: "FULL-STACK",
      line3Outline: "AI-POWERED",
      line4Accent: "PRODUCTS.",
    },

    bio: "I build functional, scalable AI-driven web applications with React, Next.js and Node.js.",

    bioShort: "Building scalable, AI-driven web applications.",

    bioLong:
      "I turn ideas into functional, scalable AI-driven web applications with React, Next.js and Node.js.",

    avatarUrl: "/intern.jpeg",

    badgePills: ["WEB", "AI", "PRODUCTS"],

    captionBadge: "MOHD ADNAN",

    location: "India",

    timezone: "Asia/Kolkata",

    status: {
      available: true,
      text: "OPEN TO SDE INTERNSHIPS",
    },

    socials: {
      email: "adnan36609@gmail.com",
      whatsapp: "+917388068867",
      github: "https://github.com/adnan36609",
      linkedin: "https://www.linkedin.com/in/mohd-adnan-124965284/",
      instagram: "https://www.instagram.com/adnan36609/",
    },
  },

  projects: [
    {
      number: "01",
      title: "PricePilot",
      category: "PRICE INTELLIGENCE / WEB APPLICATION",

      description:
        "A price tracking platform that monitors products across e-commerce websites, maintains price history, and sends alerts when tracked prices drop.",
      fullDescription:
        "PricePilot is a full-stack price intelligence platform built to automate product price tracking. Users can submit a product URL, after which Firecrawl extracts the product details and current price. The application stores tracked products and their historical prices in Supabase, allowing users to monitor price changes over time through interactive charts. A scheduled price-checking system continuously monitors tracked products and triggers email notifications when prices fall below the user's target.",

      tags: [
        "Next.js",
        "React",
        "Supabase",
        "Firecrawl",
        "Recharts",
        "Resend",
        "Tailwind CSS",
      ],

      image: "/pricepilot.png",

      liveUrl: "https://getpricepilot.vercel.app",

      githubUrl: "https://github.com/adnan36609/Price-Pilot",

      reverse: false,

      stats: {
        SCRAPING: "FIRECRAWL",
        DATABASE: "SUPABASE",
        ALERTS: "EMAIL",
      },

      highlights: [
        "Built automated product extraction from e-commerce URLs using Firecrawl.",
        "Implemented persistent product and price-history storage with Supabase.",
        "Added interactive price-history visualization using Recharts.",
        "Implemented scheduled price monitoring through a cron endpoint.",
        "Integrated email notifications for price-drop alerts using Resend.",
      ],
    },
    {
      number: "02",
      title: "Wanderlust",
      category: "FULL-STACK / TRAVEL MARKETPLACE",

      description:
        "An Airbnb-inspired full-stack travel marketplace where users can discover, create, edit, and review property listings with image uploads, authentication, and interactive maps.",

      fullDescription:
        "Wanderlust is a full-stack travel accommodation platform built with Node.js, Express, MongoDB, and EJS. Users can browse property listings, create and manage their own listings, upload images through Cloudinary, leave reviews, and explore locations through interactive maps. The application uses Passport for authentication, MongoDB-backed sessions, Joi for request validation, and custom authorization middleware to protect listing and review operations.",

      tags: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "EJS",
        "Passport.js",
        "Cloudinary",
        "Mapbox",
        "Joi",
      ],

      image: "/wanderlust.png",

      liveUrl: "https://wanderlust-project-rcag.onrender.com/listings",

      githubUrl: "https://github.com/adnan36609/Wanderlust-Project",

      reverse: true,

      stats: {
        BACKEND: "EXPRESS.JS",
        DATABASE: "MONGODB",
        AUTH: "PASSPORT.JS",
      },

      highlights: [
        "Implemented complete CRUD workflows for travel property listings.",
        "Built authentication and authorization using Passport.js and protected ownership-based operations.",
        "Integrated Cloudinary with Multer for persistent property image uploads.",
        "Added interactive location mapping using Mapbox.",
        "Implemented reviews with Joi validation and author-level authorization.",
        "Used MongoDB-backed sessions for persistent user sessions.",
      ],
    },
    {
      number: "03",
      title: "Portfolio",
      category: "FRONTEND / DEVELOPER PORTFOLIO",
      description:
        "A modern developer portfolio designed to showcase my projects, technical skills, and experience through a responsive, interactive interface with polished motion and micro-interactions.",

      fullDescription:
        "A modern personal portfolio built to present my engineering work, technical skills, and projects in a clean, interactive experience. The site uses reusable React components, responsive layouts, scroll-based animations, project detail modals, and a structured data-driven architecture to keep content maintainable and presentation consistent.",

      tags: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Motion",
        "Lucide",
      ],

      image: "/portfolio.png",

      liveUrl: "YOUR_PORTFOLIO_URL",
      githubUrl: "YOUR_GITHUB_REPO_URL",

      reverse: false,

      stats: {
        FRAMEWORK: "NEXT.JS",
        UI: "REACT + TAILWIND",
        ANIMATION: "MOTION",
      },

      highlights: [
        "Built a responsive portfolio using reusable React and Next.js components.",
        "Implemented scroll-triggered reveal animations and interactive micro-interactions.",
        "Added project detail modals with technology, architecture, and engineering highlights.",
        "Structured portfolio content separately from UI components for easier maintenance.",
        "Optimized the interface for responsive layouts across desktop and mobile devices.",
      ],
    },
  ],

  skillsRows: [
    {
      number: "01",
      category: "Languages",
      items: [
        "C++",
        "Python",
        "JavaScript",
        "TypeScript",
        "SQL",
        "HTML",
        "CSS",
      ],
    },

    {
      number: "02",
      category: "Frontend",
      // hasIndicator: true,
      items: ["React", "Next.js", "Tailwind CSS", "Shadcn UI"],
    },

    {
      number: "03",
      category: "Backend & Data",
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "MongoDB",
        "Mongoose",
        "Supabase",
      ],
    },

    {
      number: "04",
      category: "Tools & APIs",
      items: [
        "Git",
        "GitHub",
        "API Integration",
        "Authentication",
        "Firecrawl",
      ],
    },
  ],

  experience: [],

  education: [],

  testimonials: [],

  contactCta: {
    headline: "Contact",
    subheadline:
      "Open to internships, collaborations, and opportunities to build meaningful products and solve challenging problems.",
    email: "adnan36609@gmail.com",
    whatsappNumber: "+917388068867",
    githubUrl: "https://github.com/adnan36609",
    linkedinUrl: "https://www.linkedin.com/in/mohd-adnan-124965284/",
    footerCopyright: "© 2026 MOHD ADNAN",
  },
};
