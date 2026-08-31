export interface Profile {
  name: string;
  preferredName: string;
  title: string;

  logo: string;
  role: string;
  subBarLeft: string;
  subBarRight: string;

  headline: {
    line1: string;
    line2: string;
    line3Outline: string;
    line4Accent: string;
  };

  bio: string;
  bioShort: string;
  bioLong: string;

  avatarUrl: string;
  badgePills: string[];
  captionBadge: string;

  location: string;
  timezone: string;

  status: {
    available: boolean;
    text: string;
  };

  socials: {
    email: string;
    whatsapp: string;
    github: string;
    linkedin: string;
    instagram: string;
  };
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

export interface SkillRow {
  number: string;
  category: string;
  hasIndicator?: boolean;
  items: string[];
}

export interface Project {
  number?: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  tags: string[];
  image: string;
  liveUrl: string;
  githubUrl?: string;
  reverse?: boolean;
  stats?: Record<string, string>;
  highlights?: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements?: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  title: string;
  avatar: string;
}

export interface PortfolioData {
  profile: Profile;
  skillsRows: SkillRow[];
  projects: Project[];
  experience: ExperienceItem[];
  education: EducationItem[];
  testimonials: TestimonialItem[];

  contactCta: {
    headline: string;
    subheadline: string;
    email: string;
    whatsappNumber: string;
    githubUrl: string;
    linkedinUrl: string;
    footerCopyright: string;
  };
}
