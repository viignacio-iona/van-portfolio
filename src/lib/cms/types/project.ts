export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  challenges: string[];
  demoUrl?: string;
  repoUrl?: string;
  slug: string;
  publishedAt: string;
  updatedAt: string;
}

export interface SanityProject {
  _id: string;
  title: string;
  description: string;
  image?: {
    asset: {
      url: string;
    };
  };
  techStack?: string[];
  challenges?: string[];
  demoUrl?: string;
  repoUrl?: string;
  slug?: {
    current: string;
  };
  publishedAt: string;
  updatedAt: string;
}

export interface ProjectSection {
  title: string;
  subtitle: string;
  description: string;
  projects: Project[];
} 