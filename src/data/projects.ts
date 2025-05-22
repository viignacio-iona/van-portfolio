import { Project } from '@/lib/cms/types/project';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Project 1',
    description: 'Description of project 1',
    imageUrl: '/images/project1.jpg',
    techStack: ['React', 'TypeScript', 'Tailwind'],
    challenges: ['Challenge 1', 'Challenge 2'],
    demoUrl: 'https://demo1.com',
    repoUrl: 'https://github.com/username/project1',
    slug: 'project-1',
    publishedAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  // Add more projects as needed
]; 