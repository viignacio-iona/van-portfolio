'use client';

import { useEffect, useState } from 'react';
import { ProjectCard } from './organisms/ProjectCard/ProjectCard';
import { ProjectSection, SanityProject } from '@/lib/cms/types/project';
import { SectionHeader } from './molecules/SectionHeader/SectionHeader';
import { getProjects } from '@/lib/sanity/queries';

export default function Projects() {
  const [sectionData, setSectionData] = useState<ProjectSection>({
    title: 'Projects',
    subtitle: 'Featured Work',
    description: 'A selection of my recent projects showcasing my expertise in QA automation and testing.',
    projects: []
  });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projects = await getProjects() as SanityProject[];
        setSectionData(prev => ({
          ...prev,
          projects: projects.map(project => ({
            id: project._id,
            title: project.title,
            description: project.description,
            imageUrl: project.image?.asset?.url || '',
            techStack: project.techStack || [],
            challenges: project.challenges || [],
            demoUrl: project.demoUrl,
            demoCta: project.demoCta,
            repoUrl: project.repoUrl,
            slug: project.slug?.current || '',
            publishedAt: project.publishedAt,
            updatedAt: project.updatedAt
          }))
        }));
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-24 bg-gray-100 dark:bg-black border-t border-gray-800 dark:border-gray-900 shadow-[0_-8px_32px_0_rgba(0,0,0,0.10)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={sectionData.title}
          subtitle={sectionData.subtitle}
          description={sectionData.description}
        />

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {sectionData.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
} 