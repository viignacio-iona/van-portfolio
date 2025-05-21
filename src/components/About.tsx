'use client';

import { profile } from '@/data/profile';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useState } from 'react';

export default function About() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (certName: string) => {
    setImageErrors(prev => ({ ...prev, [certName]: true }));
  };

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 border-t border-gray-800 dark:border-gray-900 shadow-[0_-8px_32px_0_rgba(0,0,0,0.10)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-extrabold font-heading text-gray-900 dark:text-white mb-8 text-center"
          >About Me</motion.h2>
          <motion.p
            className="mt-8 text-2xl text-gray-700 dark:text-gray-300 font-semibold"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
          >{profile.name}</motion.p>
          <motion.p
            className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-400 lg:mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >{profile.bio}</motion.p>
        </div>

        <div className="mb-16">
          <h3 className="mb-8">Skills & Expertise</h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {profile.skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-sky-950 rounded-2xl shadow-xl p-4 lg:p-8 border border-accent"
              >
                <h4 className="text-accent mb-4">{skillGroup.category}</h4>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="flex items-center text-gray-300">
                      <svg className="h-5 w-5 text-accent mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7" /></svg>
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-8">Certifications</h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {profile.certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-sky-950 rounded-2xl shadow-xl p-8 border border-accent"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    {!imageErrors[cert.name] && cert.imageUrl ? (
                      <div className="relative h-12 w-12">
                        <Image src={cert.imageUrl} alt={cert.name} fill className="rounded-full object-cover" onError={() => handleImageError(cert.name)} unoptimized />
                      </div>
                    ) : (
                      <div className="h-12 w-12 flex items-center justify-center bg-gray-700 rounded-full">
                        <AcademicCapIcon className="h-6 w-6 text-accent" />
                      </div>
                    )}
                  </div>
                  <div className="ml-4 flex-grow">
                    <div className="flex flex-col w-full text-left">
                      <h4 className="text-lg font-bold text-gray-700 dark:text-white text-left w-full mb-4">{cert.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 text-left w-full mb-4">{cert.issuer}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 text-left w-full mb-4">{cert.date}</p>
                    </div>
                  </div>
                  {cert.verificationUrl && (
                    <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer" className="ml-4 text-accent hover:text-accent-dark" title="Verify Certificate">
                      <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 