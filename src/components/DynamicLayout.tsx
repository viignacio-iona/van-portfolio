'use client';

import { useEffect, useState } from 'react';
import { LayoutBlock, Page } from '@/lib/cms/types/layoutBlock';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Commendations from './Commendations';
import Contact from './Contact';

interface DynamicLayoutProps {
  pageData?: Page;
}

export default function DynamicLayout({ pageData }: DynamicLayoutProps) {
  const [blocks, setBlocks] = useState<LayoutBlock[]>([]);

  useEffect(() => {
    if (pageData?.layoutBlocks) {
      // Sort blocks by order
      const sortedBlocks = [...pageData.layoutBlocks].sort((a, b) => a.order - b.order);
      setBlocks(sortedBlocks);
    }
  }, [pageData]);

  const renderBlock = (block: LayoutBlock) => {
    if (!block.isActive) return null;

    switch (block.blockType) {
      case 'hero':
        return (
          <Hero
            key={block._id}
          />
        );
      
      case 'about':
        return (
          <About
            key={block._id}
          />
        );
      
      case 'skills':
        return (
          <About
            key={block._id}
          />
        );
      
      case 'projects':
        return (
          <Projects
            key={block._id}
          />
        );
      
      case 'certifications':
        return (
          <About
            key={block._id}
          />
        );
      
      case 'commendations':
        return (
          <Commendations
            key={block._id}
          />
        );
      
      case 'contact':
        return (
          <Contact
            key={block._id}
          />
        );
      
      default:
        return null;
    }
  };

  if (!blocks.length) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Loading...
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Please wait while we load your portfolio content.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {blocks.map(renderBlock)}
    </div>
  );
}
