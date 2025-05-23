'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { getProfile, getSkillCategories, getCertifications } from '@/lib/sanity/queries';
import { SanityProfile, Profile as LocalProfile } from '@/lib/cms/types/profile';
import { SkillCategory } from '@/lib/cms/types/skill';
import { SanityCertification } from '@/lib/cms/types/certification';
import { profile as localProfile } from '@/data/profile';

function isSanityProfile(profile: any): profile is SanityProfile {
  return profile && typeof profile === 'object' && 'bio' in profile;
}

export default function About() {
  const [profile, setProfile] = useState<SanityProfile | null>(null);
  const [skillCategories, setSkillCategories] = useState<SkillCategory[]>([]);
  const [certifications, setCertifications] = useState<SanityCertification[]>([]);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileData, skillsData, certificationsData] = await Promise.all([
          getProfile(),
          getSkillCategories(),
          getCertifications()
        ]);
        setProfile(profileData);
        setSkillCategories(skillsData as SkillCategory[]);
        setCertifications(certificationsData as SanityCertification[]);
      } catch {
        setProfile(null);
        setSkillCategories([]);
        setCertifications([]);
      }
    };
    fetchData();
  }, []);

  const displayProfile: SanityProfile | LocalProfile = profile || localProfile;
  const handleImageError = (id: string) => setImageErrors(prev => ({ ...prev, [id]: true }));

  return (
    <section id="about" className="py-24 bg-white dark:bg-sky-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-4xl lg:text-6xl font-extrabold font-heading text-gray-900 dark:text-white mb-8 text-center"
        >About Me</motion.h2>
        <motion.p
          className="mt-8 text-xl text-gray-700 dark:text-gray-300 font-semibold text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >{displayProfile.bio}</motion.p>

        {/* Skills & Expertise Section */}
        <div className="mt-16">
          <h3 className="mb-8 text-3xl font-bold text-center text-gray-900 dark:text-white">Skills & Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="bg-gray-50 dark:bg-sky-900 rounded-2xl shadow-xl border border-accent p-8"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{category.category}</h4>
                <ul className="space-y-2">
                  {category.skills.map((skill, index) => (
                    <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mr-2"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-16">
          <h3 className="mb-8 text-3xl font-bold text-center text-gray-900 dark:text-white">Certifications</h3>
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
                      <span className="text-accent text-4xl">🎓</span>
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
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75V6A2.25 2.25 0 0015 3.75h-6A2.25 2.25 0 006.75 6v.75M12 12v6m0 0l-2.25-2.25M12 18l2.25-2.25M3.75 9h16.5m-16.5 0v9A2.25 2.25 0 006 20.25h12a2.25 2.25 0 002.25-2.25v-9m-16.5 0V6A2.25 2.25 0 016 3.75h12A2.25 2.25 0 0120.25 6v3" />
                      </svg>
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