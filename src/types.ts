export type ProjectCategory = 'all' | 'backend' | 'apis' | 'automation' | 'telegram';

export interface ArchitectureNode {
  title: string;
  subtitle: string;
  desc: string;
  iconName: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  categories: ('backend' | 'apis' | 'automation' | 'telegram')[];
  shortDesc: string;
  problem: string;
  solution: string;
  architecture: {
    client: string;
    api: string;
    logic: string;
    database: string;
    diagramNotes?: string;
  };
  technologies: string[];
  keyFeatures: string[];
  githubUrl: string;
  liveUrl?: string;
  apiEndpointSample?: string;
  codeSnippet?: {
    filename: string;
    code: string;
  };
}

export interface SkillItem {
  name: string;
  tagline: string;
  isPrimary?: boolean;
  badge?: string;
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  type: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  details: string[];
  coursework: string[];
}

export interface GithubRepo {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  topics: string[];
  updatedAt: string;
}
