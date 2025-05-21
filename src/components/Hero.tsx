'use client';

import { profile } from '@/data/profile';
import Image from 'next/image';
import { ArrowDownTrayIcon, UserIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative bg-gray-100 dark:bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 flex flex-col items-start justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            {profile.name}
          </motion.h1>
          <motion.h2
            className="text-accent mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            {profile.title}
          </motion.h2>
          <motion.p
            className="mb-8 text-xl text-gray-700 dark:text-gray-300 max-w-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            {profile.tagline}
          </motion.p>
          <div className="flex gap-4">
            <a href="https://drive.google.com/uc?export=download&id=14Qd4zhkr1Fg6Y4nAIBRhQqHpcrBDE7Yz" className="btn inline-flex items-center" download>
              <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
              Download Résumé
            </a>
            <a
              href="#contact"
              className="btn-outline inline-flex items-center"
              onClick={e => {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          {!imageError ? (
            <div className="relative mx-auto w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full shadow-2xl border-4 border-white dark:border-gray-800 overflow-hidden">
              <Image
                src="/images/profile.jpg"
                alt="Profile"
                fill
                className="object-cover rounded-full"
                priority
                onError={() => setImageError(true)}
                unoptimized
              />
            </div>
          ) : (
            <div className="flex items-center justify-center w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-full p-8 mx-auto">
              <UserIcon className="h-32 w-32 text-gray-400 dark:text-gray-600" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 