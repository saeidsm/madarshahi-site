export type Language = 'en' | 'fa';

export interface LinkItem {
  label: string;
  url: string;
}

export interface ProjectItem {
  title: string;
  year: string;
  description: string;
  link?: string;
  image?: string;
  images?: string[]; // For sliders
  videoEmbed?: string; // For Aparat scripts
  isHighlight?: boolean; // For the main startup
}

export interface JobItem {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  link?: string;
}

export interface PublicationItem {
  title: string;
  authors?: string;
  publisher?: string;
  year?: string;
  link?: string;
  type: 'book' | 'paper' | 'article';
  description?: string;
  image?: string;
}

export interface TeachingItem {
  title: string;
  year: string;
  role: string;
  description: string;
  type: 'seminar' | 'course' | 'workshop';
  attendees?: string;
  location?: string;
  videoEmbed?: string;
  image?: string;
  link?: string;
}

export interface ContentData {
  nav: {
    home: string;
    about: string;
    experience: string;
    projects: string;
    inventions: string;
    startups: string;
    teaching: string;
    publications: string;
    civil: string;
    education: string;
  };
  hero: {
    name: string;
    role: string;
    tagline: string;
    downloadCv: string;
    printCv: string;
  };
  about: {
    title: string;
    text: string;
  };
  experience: {
    title: string;
    items: JobItem[];
  };
  education: {
    title: string;
    items: EducationItem[];
  };
  projects: {
    title: string;
    items: ProjectItem[];
  };
  startups: {
    title: string;
    items: ProjectItem[];
  };
  inventions: {
    title: string;
    items: ProjectItem[];
  };
  teaching: {
    title: string;
    items: TeachingItem[];
  };
  publications: {
    title: string;
    items: PublicationItem[];
  };
  civil: {
    title: string;
    items: ProjectItem[];
  };
  contact: {
    title: string;
    emailLabel: string;
    linkedinLabel: string;
    aparatLabel: string;
  };
}