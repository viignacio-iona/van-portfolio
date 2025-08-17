import { AboutSection } from './aboutSection';

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
  fullName: string;
  professionalTitle: string;
  tagline?: string;
  profileImage?: {
    asset: {
      url: string;
    };
  };
  cta1?: {
    text: string;
    url: string;
    isExternal: boolean;
  };
  cta2?: {
    text: string;
    url: string;
    isExternal: boolean;
  };
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
  isActive: boolean;
  backgroundStyle?: BackgroundStyle;
  spacing?: SectionSpacing;
  heroSection?: HeroSection;
  aboutSection?: AboutSection;
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
