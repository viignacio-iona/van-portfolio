import { PhotoIcon, ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useState } from 'react';
import { Card } from '@/components/molecules/Card/Card';
import { TechStack } from '@/components/molecules/TechStack/TechStack';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    techStack: string[];
    challenges: string[];
    demoUrl?: string;
    repoUrl?: string;
  };
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Card index={index} className="group p-0 flex flex-col h-full overflow-hidden">
      <div className="relative w-full h-48 overflow-hidden">
        {!imageError ? (
          <Image 
            src={project.imageUrl} 
            alt={project.title} 
            fill 
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110" 
            onError={() => setImageError(true)} 
            unoptimized 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-700">
            <PhotoIcon className="h-12 w-12 text-accent" />
          </div>
        )}
      </div>
      <div className="p-8 flex-1 flex flex-col">
        <h3 className="mb-4 text-accent">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">{project.description}</p>
        
        <TechStack technologies={project.techStack} />
        
        <div className="mb-4">
          <h4 className="text-sm font-bold text-white mb-2">Key Challenges:</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
            {project.challenges.map((challenge) => (
              <li key={challenge}>{challenge}</li>
            ))}
          </ul>
        </div>
        
        <div className="flex space-x-4 mt-4">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn inline-flex items-center">
              <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-2" />
              Live Demo
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center">
              <CodeBracketIcon className="h-4 w-4 mr-2" />
              View Code
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}; 