export interface Skill {
  id: string;
  name: string;
  level: string;
  category: string;
  iconUrl: string;
  description: string;
}

export interface SanitySkill {
  _id: string;
  name: string;
  level: string;
  category: string;
  icon?: {
    asset: {
      url: string;
    };
  };
  description: string;
}

export interface SkillsSection {
  title: string;
  subtitle: string;
  description: string;
  skills: Skill[];
}

export interface SkillCategory {
  _id: string;
  category: string;
  skills: string[];
} 