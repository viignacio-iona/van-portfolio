export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  experience: number;
  email: string;
  location: string;
  resumeUrl: string;
  social: {
    linkedin: string;
    github: string;
    facebook: string;
  };
  phone: string;
  imageUrl?: string;
}

export interface SanityProfile {
  _id: string;
  name: string;
  title: string;
  tagline: string;
  bio: string;
  experience: number;
  email: string;
  location: string;
  resumeUrl: string;
  social: {
    linkedin: string;
    github: string;
    facebook: string;
  };
  phone: string;
  image?: {
    asset: {
      url: string;
    };
  };
} 