'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { AcademicCapIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { SkillCategory } from '@/lib/cms/types/skill';
import { SanityCertification } from '@/lib/cms/types/certification';
import { getSkillCategories, getCertifications } from '@/lib/sanity/queries';

export default function About() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [skillCategories, setSkillCategories] = useState<SkillCategory[]>([]);
  const [certifications, setCertifications] = useState<SanityCertification[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [skillsData, certificationsData] = await Promise.all([
          getSkillCategories(),
          getCertifications()
        ]);
        setSkillCategories(skillsData as SkillCategory[]);
        setCertifications(certificationsData as SanityCertification[]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleImageError = (name: string) => {
    setImageErrors(prev => ({ ...prev, [name]: true }));
  };

  return (
    <section id="about" className="py-24 bg-white dark:bg-sky-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          <div>
            <h3 className="mb-8">Skills & Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.1 }}
                  className="bg-gray-50 dark:bg-sky-900 rounded-2xl shadow-xl border border-accent p-6"
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{category.category}</h4>
                  <ul className="space-y-2">
                    {category.skills.map((skill, index) => (
                      <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                        <AcademicCapIcon className="h-4 w-4 text-accent mr-2" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-8">Certifications</h3>
            <div className="grid grid-cols-1 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-sky-950 rounded-2xl shadow-xl border border-accent group flex flex-row items-stretch h-auto pr-8 max-w-3xl w-full mx-auto"
                >
                  <div className="flex-shrink-0 h-auto w-32 overflow-hidden rounded-l-2xl">
                    {!imageErrors[cert._id] && cert.image?.asset?.url ? (
                      <div className="relative w-full h-full">
                        <Image 
                          src={cert.image.asset.url} 
                          alt={cert.title} 
                          fill 
                          className="object-cover transition-transform duration-300 group-hover:scale-110" 
                          onError={() => handleImageError(cert._id)} 
                          unoptimized 
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-700 rounded-l-2xl">
                        <AcademicCapIcon className="h-10 w-10 text-accent" />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-row items-center flex-grow pl-8 text-left h-full py-6">
                    <div className="flex flex-col flex-grow">
                      <h4 className="text-lg font-bold text-gray-700 dark:text-white text-left">{cert.title}</h4>
                      <div className="border-t border-gray-300 dark:border-gray-700 my-2 w-2/3" />
                      <p className="text-sm text-gray-600 dark:text-gray-400 text-left w-full">{cert.issuer}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 text-left w-full">{cert.issueDate}</p>
                    </div>
                    {cert.credentialUrl && (
                      <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="ml-auto text-accent hover:text-accent-dark flex items-center self-center" title="View Certificate">
                        <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 