export interface AboutSection {
  title: string;
  professionalSummary: string;
  careerTimeline?: CareerEntry[];
  technologyStack?: TechnologyStack;
}

export interface TechnologyStack {
  _id: string;
  _type: 'technologyStack';
  title: string;
  technologies: Technology[];
}

export interface Technology {
  _key: string;
  name: string;
  category?: string;
  proficiency?: string;
}

export interface CareerEntry {
  _id: string;
  _type: 'careerEntry';
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  description?: string;
  achievements?: string[];
  technologies?: string[];
  location?: string;
}
