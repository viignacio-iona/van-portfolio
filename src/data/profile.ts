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
  skills: {
    category: string;
    items: string[];
  }[];
  certifications: {
    name: string;
    issuer: string;
    date: string;
    imageUrl: string;
    verificationUrl?: string;
  }[];
  phone: string;
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
  skills: [
    {
      category: "Manual Testing",
      items: [
        "Test Planning & Strategy",
        "Test Case Design",
        "Exploratory Testing",
        "Bug Reporting & Tracking",
        "Regression Testing",
        "User Acceptance Testing"
      ]
    },
    {
      category: "Automation Frameworks",
      items: [
        "Selenium WebDriver",
        "Cypress",
        "Playwright",
        "TestNG",
        "JUnit",
        "Cucumber BDD"
      ]
    },
    {
      category: "Programming Languages",
      items: [
        "Java",
        "Python",
        "JavaScript",
        "TypeScript",
        "SQL"
      ]
    },
    {
      category: "CI/CD & Test Integration",
      items: [
        "Jenkins",
        "GitHub Actions",
        "GitLab CI",
        "Docker",
        "Kubernetes"
      ]
    },
    {
      category: "Test Management & Tools",
      items: [
        "JIRA",
        "TestRail",
        "Postman",
        "Swagger",
        "Git",
        "Confluence"
      ]
    },
    {
      category: "Testing Methodologies",
      items: [
        "Agile Testing",
        "Scrum",
        "BDD",
        "TDD",
        "API Testing",
        "Performance Testing"
      ]
    }
  ],
  certifications: [
    {
      name: "Introduction to Web Accessibility",
      issuer: "edX",
      date: "2025",
      imageUrl: "/certifications/edx-web-accessibility.png",
      verificationUrl: "https://courses.edx.org/certificates/bf6097073e194d3aa74c987a17a719e0"
    },
    {
      name: "EF SET Certificate (C2 Proficient)",
      issuer: "EF SET",
      date: "2022",
      imageUrl: "/certifications/efset-c2.png",
      verificationUrl: "https://cert.efset.org/NG4Sw4"
    },
    {
      name: "ISTQB® -BCS Certified Tester Foundation Level",
      issuer: "BCS, The Chartered Institute for IT",
      date: "2016",
      imageUrl: "/certifications/istqb-ctfl.png"
    }
  ],
  phone: '+639171759697',
}; 