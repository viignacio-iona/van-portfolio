'use client';

import { projects } from '@/data/projects';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, PhotoIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Image from 'next/image';

export default function Projects() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (projectId: string) => {
    setImageErrors(prev => ({ ...prev, [projectId]: true }));
  };

  return (
    <section id="projects" className="py-24 bg-gray-100 dark:bg-black border-t border-gray-800 dark:border-gray-900 shadow-[0_-8px_32px_0_rgba(0,0,0,0.10)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <span className="mb-4 inline-block bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">WIP</span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-extrabold font-heading text-gray-900 dark:text-white mb-8 text-center"
          >Projects</motion.h2>
          <motion.p
            className="text-2xl text-gray-700 dark:text-gray-300 font-semibold"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
          >Featured Work</motion.p>
          <motion.p
            className="mt-4 mb-8 max-w-2xl text-xl text-gray-600 dark:text-gray-400 lg:mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >A selection of my recent projects showcasing my expertise in QA automation and testing.</motion.p>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-sky-950 rounded-2xl shadow-xl overflow-hidden border border-accent flex flex-col p-4 lg:p-8"
            >
              <div className="relative h-48">
                {!imageErrors[project.id] ? (
                  <Image src={project.imageUrl} alt={project.title} fill className="object-cover" onError={() => handleImageError(project.id)} unoptimized />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-700">
                    <PhotoIcon className="h-12 w-12 text-accent" />
                  </div>
                )}
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="mb-4 text-accent">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-white mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold bg-accent text-white">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 