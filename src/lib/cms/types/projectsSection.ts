export interface ProjectsSection {
  headline: string;
  projects: Project[];
  ctaButton: {
    text: string;
    url: string;
  };
}

export interface Project {
  _id: string;
  _type: 'project';
  title: string;
  slug: {
    current: string;
  };
  description: string;
  image?: {
    asset: {
      url: string;
    };
  };
  techStack?: string[];
  challenges?: string[];
  demoUrl?: string;
  demoCta?: string;
  repoUrl?: string;
  publishedAt?: string;
  updatedAt?: string;
}
