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

export const profile: Profile = {
  name: "Van Ian Ignacio",
  title: "QA Consultant",
  tagline: "Transforming Quality Assurance through Strategic Automation & Innovation",
  bio: "Experienced QA Consultant with 10 years of expertise in software testing and quality assurance. Specialized in implementing strategic automation solutions, optimizing testing processes, and driving quality initiatives across diverse projects. Passionate about delivering robust, scalable, and efficient testing frameworks that enhance product reliability and user experience.",
  experience: 8,
  email: "vanian.seven@hotmail.com",
  location: "Philippines",
  resumeUrl: "https://drive.google.com/file/d/14Qd4zhkr1Fg6Y4nAIBRhQqHpcrBDE7Yz/view?usp=drive_link",
  social: {
    linkedin: "https://www.linkedin.com/in/viignacio-ctfl",
    github: "https://github.com/viignacio-iona",
    facebook: "https://www.facebook.com/vanian.ignacio/"
  },
  phone: '+639171759697',
  imageUrl: "/images/profile.jpg"
}; 