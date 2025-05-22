import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  badge?: string;
  badgeColor?: string;
  badgeTextColor?: string;
  children?: ReactNode;
}

export const SectionHeader = ({
  title,
  subtitle,
  description,
  badge,
  badgeColor = 'bg-yellow-400',
  badgeTextColor = 'text-yellow-900',
  children
}: SectionHeaderProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      {badge && (
        <span className={`mb-4 inline-block ${badgeColor} ${badgeTextColor} text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest`}>
          {badge}
        </span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="text-4xl lg:text-6xl font-extrabold font-heading text-gray-900 dark:text-white mb-8 text-center"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="text-2xl text-gray-700 dark:text-gray-300 font-semibold"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
      )}
      {description && (
        <motion.p
          className="mt-4 mb-8 max-w-2xl text-xl text-gray-600 dark:text-gray-400 lg:mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>
      )}
      {children}
    </div>
  );
}; 