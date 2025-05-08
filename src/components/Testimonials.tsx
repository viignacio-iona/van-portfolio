'use client';

import { testimonials } from '@/data/testimonials';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, UserIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (testimonialId: string) => {
    setImageErrors(prev => ({ ...prev, [testimonialId]: true }));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gray-100 dark:bg-black border-t border-gray-800 dark:border-gray-900 shadow-[0_-8px_32px_0_rgba(0,0,0,0.10)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-12 lg:px-20">
        <div className="flex flex-col items-center text-center">
          <span className="mb-4 inline-block bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">WIP</span>
          <motion.h2
            className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >Testimonials</motion.h2>
          <motion.p
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
          >What People Say</motion.p>
        </div>

        <div className="mt-16 flex flex-col items-center">
          <div className="flex w-full max-w-4xl mx-auto items-center gap-4">
            <button
              onClick={prevTestimonial}
              className="hidden md:flex p-4 rounded-full bg-white dark:bg-sky-950 shadow-lg hover:bg-accent-secondary/10 dark:hover:bg-accent-secondary/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="h-10 w-10 text-accent dark:text-accent-secondary" />
            </button>
            <div className="flex-1 min-h-[320px] flex items-stretch">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{
                    opacity: index === currentIndex ? 1 : 0,
                    x: index === currentIndex ? 0 : 100,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`w-full ${index === currentIndex ? 'block' : 'hidden'}`}
                  style={{ minHeight: 320 }}
                >
                  <div className="bg-white dark:bg-sky-950 rounded-lg shadow-lg p-8 border border-accent h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center mb-6">
                        <div className="relative h-12 w-12">
                          {!imageErrors[testimonial.id] ? (
                            <Image
                              src={testimonial.imageUrl}
                              alt={testimonial.name}
                              fill
                              className="rounded-full object-cover"
                              onError={() => handleImageError(testimonial.id)}
                              unoptimized
                            />
                          ) : (
                            <div className="h-12 w-12 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full">
                              <UserIcon className="h-6 w-6 text-gray-400 dark:text-gray-500" />
                            </div>
                          )}
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                            {testimonial.name}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {testimonial.role} at {testimonial.company}
                          </p>
                        </div>
                      </div>
                      <blockquote className="text-gray-600 dark:text-gray-300 italic">
                        &ldquo;{testimonial.content}&rdquo;
                      </blockquote>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="hidden md:flex p-4 rounded-full bg-white dark:bg-sky-950 shadow-lg hover:bg-accent-secondary/10 dark:hover:bg-accent-secondary/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon className="h-10 w-10 text-accent dark:text-accent-secondary" />
            </button>
          </div>
          <div className="flex justify-center mt-6 space-x-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 rounded-full border-2 border-accent flex items-center justify-center transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-accent-secondary focus:ring-offset-2
                  ${index === currentIndex ? 'bg-accent-secondary' : 'bg-gray-200 dark:bg-gray-700'}`}
                aria-label={`Go to testimonial from ${testimonial.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 