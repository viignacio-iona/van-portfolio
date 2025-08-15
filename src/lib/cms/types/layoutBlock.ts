export interface BackgroundStyle {
  type: 'solid' | 'gradient' | 'image' | 'pattern';
  solidColor?: string;
  gradientColors?: {
    from: string;
    to: string;
  };
  backgroundImage?: {
    asset: {
      url: string;
    };
  };
  pattern?: string;
}

export interface SectionSpacing {
  paddingY: string;
  marginTop?: string;
}

export interface HeroSection {
  name?: string;
  title?: string;
  tagline?: string;
  description?: string;
  bio?: string;
  experience?: number;
  profileImage?: {
    asset: {
      url: string;
    };
  };
  ctaText?: string;
  ctaLink?: string;
  email?: string;
  phone?: string;
  location?: string;
  resumeUrl?: string;
  social?: {
    linkedin?: string;
    github?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
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
  backgroundStyle?: BackgroundStyle;
  spacing?: SectionSpacing;
  heroSection?: HeroSection;
  aboutSection?: any; // Will define this later
  skillsSection?: any; // Will define this later
  projectsSection?: ProjectsSection;
  certificationsSection?: any; // Will define this later
  commendationsSection?: any; // Will define this later
  contactSection?: any; // Will define this later
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
