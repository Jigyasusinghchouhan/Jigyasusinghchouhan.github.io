import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  href: string;
  label: string;
}

export interface SocialLink {
  href: string;
  icon: LucideIcon;
  label: string;
}

export interface Skill {
  name: string;
  icon?: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>; // Allow custom SVGs
  level?: string; // e.g., 'Advanced', 'Intermediate'
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  githubLink?: string;
  liveLink?: string;
  imageAiHint?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
  logoUrl?: string;
  imageAiHint?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  description?: string;
  logoUrl?: string;
  imageAiHint?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuingOrganization: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  logoUrl?: string;
  imageAiHint?: string;
}
