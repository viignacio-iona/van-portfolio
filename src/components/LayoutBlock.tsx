'use client';

import React from 'react';

interface LayoutBlockProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function LayoutBlock({ 
  children, 
  className = '',
  id
}: LayoutBlockProps) {
  
  // Basic layout block styling - all design is now handled in the frontend
  const finalClasses = `relative overflow-hidden ${className}`.trim();
  
  return (
    <div id={id} className={finalClasses}>
      {children}
    </div>
  );
}
