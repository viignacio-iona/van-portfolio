'use client';

import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import { ProjectsSection as ProjectsSectionType, Project } from '@/lib/cms/types';

// Custom hook for mouse tracking glow effect
const useMouseGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  }, []);
  
  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => setIsHovering(false), []);
  
  return {
    mousePosition,
    isHovering,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave
  };
};

interface ProjectsSectionProps {
  data?: ProjectsSectionType;
}

export default function ProjectsSection({ data }: ProjectsSectionProps) {
  if (!data) return null;

  const { headline, projects, ctaButton } = data;

  return (
    <section className="py-20">
      <div className="w-4/5 mx-auto relative z-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-6">
            {headline}
          </h2>
        </motion.div>

        {/* Projects Grid */}
        {projects && projects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {projects.map((project, index) => {
              const { mousePosition, isHovering, handleMouseMove, handleMouseEnter, handleMouseLeave } = useMouseGlow();
              
              return (
                <motion.div
                  key={project._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div 
                    className="card h-full hover:shadow-soft transition-all duration-300 relative overflow-visible"
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* Glow Effect Overlay */}
                    {isHovering && (
                      <div
                        className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-xl"
                        style={{
                          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(14, 165, 233, 0.15), transparent 40%)`,
                          opacity: isHovering ? 1 : 0
                        }}
                      />
                    )}

                    {/* Project Image */}
                    {project.image && (
                      <div className="relative overflow-hidden rounded-t-xl">
                        <img
                          src={project.image.asset.url}
                          alt={project.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    )}

                    {/* Project Content */}
                    <div className="p-6 relative z-10">
                      {/* Project Title */}
                      <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>

                      {/* Project Description */}
                      {project.description && (
                        <p className="text-text-secondary mb-4 line-clamp-3">
                          {project.description}
                        </p>
                      )}

                      {/* Tech Stack */}
                      {project.techStack && project.techStack.length > 0 && (
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.slice(0, 3).map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 bg-ui-card text-xs text-accent font-medium rounded-md"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.techStack.length > 3 && (
                              <span className="px-2 py-1 bg-ui-card text-xs text-text-muted font-medium rounded-md">
                                +{project.techStack.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Project Actions */}
                      <div className="flex gap-3 mt-6">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-fg rounded-lg hover:bg-accent/90 transition-colors text-sm font-medium"
                          >
                            <EyeIcon className="w-4 h-4" />
                            {project.demoCta || 'Live Demo'}
                          </a>
                        )}
                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-ui-card text-text-primary rounded-lg hover:bg-ui-card/80 transition-colors text-sm font-medium"
                          >
                            <CodeBracketIcon className="w-4 h-4" />
                            Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* CTA Button */}
        {ctaButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <a
              href={ctaButton.url}
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-fg rounded-xl hover:bg-accent/90 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105"
            >
              {ctaButton.text}
              <ArrowTopRightOnSquareIcon className="w-5 h-5" />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
