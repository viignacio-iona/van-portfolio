import { AboutSection } from './aboutSection';
import { ProjectsSection } from './projectsSection';
import { CertificationsSection } from './certificationsSection';

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
  certificationsSection?: CertificationsSection;
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
