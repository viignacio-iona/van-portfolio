export interface Commendation {
  id: string;
  content: string;
  author: {
    name: string;
    role: string;
    company: string;
    imageUrl: string;
  };
  rating: number;
  publishedAt: string;
  updatedAt: string;
}

export interface SanityCommendation {
  _id: string;
  content: string;
  author: {
    name: string;
    role: string;
    company: string;
    image?: {
      asset: {
        url: string;
      };
    };
  };
  publishedAt: string;
  updatedAt: string;
}

export interface CommendationsSection {
  title: string;
  subtitle: string;
  description: string;
  commendations: Commendation[];
} 