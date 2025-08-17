'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

interface HeroProps {
  data?: {
    fullName?: string;
    professionalTitle?: string;
    tagline?: string;
    profileImage?: {
      asset?: {
        url?: string;
      };
    };
    cta1?: {
      text?: string;
      url?: string;
      isExternal?: boolean;
    };
    cta2?: {
      text?: string;
      url?: string;
      isExternal?: boolean;
    };
  };
}

export default function Hero({ data }: HeroProps) {
  if (!data) return null;

  const { fullName, professionalTitle, tagline, profileImage, cta1, cta2 } = data;

  return (
    <div className="w-full text-left">
      {/* Profile Image */}
      {profileImage?.asset?.url && (
        <div className="mb-8 flex justify-start">
          <div className="relative">
            <img
              src={profileImage.asset.url}
              alt={fullName || 'Profile'}
              className="w-32 h-32 rounded-full object-cover border-4 border-text-muted shadow-2xl"
            />
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl scale-110"></div>
          </div>
        </div>
      )}

      {/* Main Content without Backdrop */}
      <div className="p-8 -mt-32">
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-8xl font-bold text-text-primary mb-4 drop-shadow-4xl"
        >
          {fullName || 'Your Name'}
        </motion.h1>

        {/* Professional Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-4xl font-semibold text-accent mb-6 drop-shadow-4xl"
        >
          {professionalTitle || 'Professional Title'}
        </motion.h2>

        {/* Tagline */}
        {tagline && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-text-secondary mb-8 max-w-3xl leading-relaxed drop-shadow-4xl"
          >
            {tagline}
          </motion.p>
        )}

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-start"
        >
          {cta1?.url && (
            <a 
              href={cta1.url} 
              className="btn btn-primary inline-flex items-center w-full sm:w-auto justify-center focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-base shadow-lg"
              target={cta1.isExternal ? '_blank' : undefined}
              rel={cta1.isExternal ? 'noopener noreferrer' : undefined}
              download={!cta1.isExternal}
            >
              <ArrowDownTrayIcon className="h-5 w-5 mr-2" aria-hidden="true" />
              {cta1.text}
            </a>
          )}
          {cta2?.url && (
            <a 
              href={cta2.url} 
              className="btn btn-outline inline-flex items-center w-full sm:w-auto justify-center focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-base shadow-lg"
              target={cta2.isExternal ? '_blank' : undefined}
              rel={cta2.isExternal ? 'noopener noreferrer' : undefined}
            >
              {cta2.text}
            </a>
          )}
        </motion.div>
      </div>
    </div>
  );
}
