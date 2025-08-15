export interface HeroSection {
  title: string;
  subtitle?: string;
  description?: string;
  profileImage?: {
    asset: {
      url: string;
    };
  };
  ctaText?: string;
  ctaLink?: string;
  backgroundStyle?: 'default' | 'gradient' | 'pattern';
}

export interface ProjectsSection {
  title: string;
  subtitle?: string;
  description?: string;
  projects: any[]; // Will reference Project type
  layout: 'grid-3' | 'grid-2' | 'carousel' | 'masonry';
  showFilters: boolean;
  maxProjects: number;
}

export interface LayoutBlock {
  _id: string;
  blockType: 'hero' | 'about' | 'skills' | 'projects' | 'certifications' | 'commendations' | 'contact';
  order: number;
  isActive: boolean;
}

export interface Page {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  isHomePage: boolean;
  layoutBlocks: LayoutBlock[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: {
      asset: {
        url: string;
      };
    };
  };
  publishedAt?: string;
}
