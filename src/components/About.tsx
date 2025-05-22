'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getProfile, getSkillCategories } from '@/lib/sanity/queries';
import { SanityProfile, Profile as LocalProfile } from '@/lib/cms/types/profile';
import { SkillCategory } from '@/lib/cms/types/skill';
import { profile as localProfile } from '@/data/profile';

function isSanityProfile(profile: any): profile is SanityProfile {
  return profile && typeof profile === 'object' && 'bio' in profile;
}

export default function About() {
  const [profile, setProfile] = useState<SanityProfile | null>(null);
  const [skillCategories, setSkillCategories] = useState<SkillCategory[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileData, skillsData] = await Promise.all([
          getProfile(),
          getSkillCategories()
        ]);
        setProfile(profileData);
        setSkillCategories(skillsData as SkillCategory[]);
      } catch {
        setProfile(null);
        setSkillCategories([]);
      }
    };
    fetchData();
  }, []);

  const displayProfile: SanityProfile | LocalProfile = profile || localProfile;

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
      </div>
    </section>
  );
} 