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
    demoCta?: string;
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
      <div className="flex flex-col flex-1 p-8 justify-between gap-y-4">
        {/* Title */}
        <div className="min-h-[56px] flex items-center justify-center">
          <h3 className="text-accent text-center text-2xl font-semibold leading-tight">{project.title}</h3>
        </div>
        {/* Description */}
        <div className="min-h-[120px] flex items-center justify-center">
          <p className="text-gray-700 dark:text-gray-300 text-center text-justify">{project.description}</p>
        </div>
        {/* Tech Stack */}
        {project.techStack && project.techStack.length > 0 && (
          <div className="flex flex-col items-center w-full">
            <div className="min-h-[24px] flex items-center justify-center w-full">
              <h4 className="text-sm font-bold text-white text-center">Tech Stack:</h4>
            </div>
            <div
              className="w-full flex justify-center"
              style={{ height: '64px', alignItems: 'flex-start' }}
            >
              <div className="flex flex-wrap gap-2 justify-center items-start w-full">
                <TechStack technologies={project.techStack} />
              </div>
            </div>
          </div>
        )}
        {/* Spacer to push CTA to bottom */}
        <div className="flex-1" />
        {/* Key Challenges */}
        <div className="min-h-[80px] flex flex-col items-center justify-center">
          {project.challenges && project.challenges.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-white mb-2 text-center">Key Challenges:</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 text-center">
                {project.challenges.map((challenge) => (
                  <li key={challenge} className="text-center">{challenge}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {/* CTA(s) */}
        {(project.demoUrl || project.repoUrl) && (
          <div className="flex space-x-4 mt-4 justify-center">
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn inline-flex items-center">
                <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-2" />
                {project.demoCta || 'Live Demo'}
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center">
                <CodeBracketIcon className="h-4 w-4 mr-2" />
                View Code
              </a>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}; 