import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  index?: number;
}

export const Card = ({ children, className = '', index = 0 }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`bg-white dark:bg-sky-950 rounded-2xl shadow-xl overflow-hidden border border-accent flex flex-col p-4 lg:p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
}; 