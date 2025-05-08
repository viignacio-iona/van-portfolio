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
    <section className="py-24 bg-gray-800 border-t border-gray-700 shadow-[0_-8px_32px_0_rgba(0,0,0,0.10)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="mt-16 relative">
          <div className="relative h-64 sm:h-48">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                  x: index === currentIndex ? 0 : 100,
                }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 ${
                  index === currentIndex ? 'block' : 'hidden'
                }`}
              >
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
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
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-900 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-900 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>

          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex
                    ? 'bg-indigo-600 dark:bg-indigo-400'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to testimonial from ${testimonial.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 