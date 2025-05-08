export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  challenges: string[];
  demoUrl?: string;
  repoUrl?: string;
  imageUrl: string;
  wip?: boolean;
}

export const projects: Project[] = [
  {
    id: "e2e-testing-framework",
    title: "End-to-End Testing Framework",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    techStack: ["Cypress", "TypeScript", "GitHub Actions", "Docker"],
    challenges: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed non risus. Suspendisse lectus tortor, dignissim sit amet.",
      "Adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam."
    ],
    repoUrl: "https://github.com/yourusername/e2e-framework",
    imageUrl: "/projects/e2e-framework.png",
    wip: true
  },
  {
    id: "api-testing-automation",
    title: "API Testing Automation Suite",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    techStack: ["Postman", "Newman", "Jenkins", "Python"],
    challenges: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed non risus. Suspendisse lectus tortor, dignissim sit amet.",
      "Adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam."
    ],
    demoUrl: "https://your-demo-url.com",
    imageUrl: "/projects/api-testing.png",
    wip: true
  },
  {
    id: "performance-testing-tool",
    title: "Custom Performance Testing Tool",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    techStack: ["JMeter", "Java", "Grafana", "InfluxDB"],
    challenges: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed non risus. Suspendisse lectus tortor, dignissim sit amet.",
      "Adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam."
    ],
    repoUrl: "https://github.com/yourusername/performance-tool",
    imageUrl: "/projects/performance-tool.png",
    wip: true
  }
]; 