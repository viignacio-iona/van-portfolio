'use client';

import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, EyeIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
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
  
  // Don't render if there's no headline and no projects
  if (!headline && (!projects || projects.length === 0)) {
    return null;
  }
  
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <>
      {/* Only render the section if there's actual content to show */}
      {(headline || (projects && projects.length > 0) || ctaButton) ? (
        <section className="py-20">
          <div className="w-4/5 mx-auto relative z-20 p-8">
            {/* Section Header */}
            {headline && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-start mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-6">
                  {headline}
                </h2>
              </motion.div>
            )}

            {/* Projects Carousel */}
            {projects && projects.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative mb-16"
              >
                {/* Carousel Container */}
                <div className="relative overflow-hidden rounded-2xl bg-base-800 border border-base-700">
                  <div className="relative">
                    {/* Carousel Slides */}
                    <div 
                      className="flex transition-transform duration-500 ease-out"
                      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                      {projects.map((project, index) => {
                        const { mousePosition, isHovering, handleMouseMove, handleMouseEnter, handleMouseLeave } = useMouseGlow();
                        
                        return (
                          <div key={project._id} className="w-full flex-shrink-0">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-8 pr-20 pb-8 pl-20">
                              {/* Project Image */}
                              <div className="relative">
                                {project.image ? (
                                  <div className="relative overflow-hidden rounded-xl group">
                                    <img
                                      src={project.image.asset.url}
                                      alt={project.title}
                                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                  </div>
                                ) : (
                                  <div className="w-full h-80 bg-gradient-to-br from-accent/20 to-base-700 rounded-xl flex items-center justify-center">
                                    <div className="text-center text-text-secondary">
                                      <div className="text-4xl mb-2">🖼️</div>
                                      <div className="text-sm">Project Image</div>
                                    </div>
                                  </div>
                                )}
                              </div>

                              {/* Project Content */}
                              <div className="space-y-6">
                                {/* Project Title */}
                                <h3 className="text-3xl font-bold text-text-primary group-hover:text-accent transition-colors">
                                  {project.title}
                                </h3>

                                {/* Project Description */}
                                {project.description && (
                                  <p className="text-lg text-text-secondary leading-relaxed">
                                    {project.description}
                                  </p>
                                )}

                                {/* Divider */}
                                <div className="border-t border-base-700"></div>

                                {/* Tech Stack */}
                                {project.techStack && project.techStack.length > 0 && (
                                  <div>
                                    <h4 className="text-lg font-semibold text-text-primary mb-3">Technologies</h4>
                                    <div className="flex flex-wrap gap-3">
                                      {project.techStack.map((tech, techIndex) => (
                                        <span
                                          key={techIndex}
                                          className="px-3 py-2 bg-ui-card text-sm text-primary font-medium rounded-lg border border-base-700"
                                        >
                                          {tech}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {/* Project Actions */}
                                <div className="flex gap-4 pt-4">
                                  {project.demoUrl && (
                                    <a
                                      href={project.demoUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-2 px-6 py-3 bg-ui-card text-text-primary rounded-xl hover:bg-ui-card/80 transition-colors text-base font-semibold border border-base-700"
                                    >
                                      <EyeIcon className="w-5 h-5" />
                                      {project.demoCta || 'Live Demo'}
                                    </a>
                                  )}
                                  {project.repoUrl && (
                                    <a
                                      href={project.repoUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-2 px-6 py-3 bg-ui-card text-text-primary rounded-xl hover:bg-ui-card/80 transition-colors text-base font-semibold border border-base-700"
                                    >
                                      <CodeBracketIcon className="w-5 h-5" />
                                      View Code
                                    </a>
                                    )}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Navigation Arrows */}
                  {projects.length > 1 && (
                    <>
                      <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-base-900/80 hover:bg-base-900 text-text-primary p-2 rounded-full border border-base-700 hover:border-accent transition-all duration-300 z-10 w-12 h-12 flex items-center justify-center"
                        aria-label="Previous project"
                      >
                        <ChevronLeftIcon className="w-5 h-5" />
                      </button>
                      
                      <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-base-900/80 hover:bg-base-900 text-text-primary p-2 rounded-full border border-base-700 hover:border-accent transition-all duration-300 z-10 w-12 h-12 flex items-center justify-center"
                        aria-label="Next project"
                      >
                        <ChevronRightIcon className="w-5 h-5" />
                      </button>
                    </>
                  )}
                  
                  {/* Dots Navigation */}
                  {projects.length > 1 && (
                    <div className="flex justify-center mt-4 pb-8">
                      <div className="flex space-x-3">
                        {projects.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              index === currentSlide 
                                ? 'bg-accent' 
                                : 'bg-white hover:bg-gray-300'
                            }`}
                            aria-label={`Go to project ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
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
                  className="inline-flex items-center gap-3 px-8 py-4 bg-transparent text-text-primary rounded-xl hover:bg-ui-card/80 transition-all duration-300 text-lg font-semibold border border-base-700 hover:border-accent hover:scale-105"
                >
                  {ctaButton.text}
                  <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                </a>
              </motion.div>
            )}
          </div>
        </section>
      ) : null}
    </>
  );
}
