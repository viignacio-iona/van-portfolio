'use client';

import React from 'react';

interface LayoutBlockProps {
  children: React.ReactNode;
  className?: string;
}

export default function LayoutBlock({ 
  children, 
  className = '' 
}: LayoutBlockProps) {
  
  // Basic layout block styling - all design is now handled in the frontend
  const finalClasses = `relative overflow-hidden ${className}`.trim();
  
  return (
    <div className={finalClasses}>
      {children}
    </div>
  );
}
