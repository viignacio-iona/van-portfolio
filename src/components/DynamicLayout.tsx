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
      console.log('Setting blocks:', sortedBlocks);
      setBlocks(sortedBlocks);
    }
  }, [pageData]);

  const renderBlock = (block: LayoutBlock) => {
    if (!block.isActive) return null;

    // Generate background classes based on CMS data
    const getBackgroundClasses = () => {
      if (!block.backgroundStyle) return 'bg-white dark:bg-black';
      
      const { type, solidColor, gradientColors, pattern } = block.backgroundStyle;
      
      switch (type) {
        case 'solid':
          return solidColor || 'bg-white dark:bg-black';
        case 'gradient':
          if (gradientColors?.from && gradientColors?.to) {
            return `${gradientColors.from} ${gradientColors.to} bg-gradient-to-b`;
          }
          return 'bg-white dark:bg-black';
        case 'image':
          return 'bg-cover bg-center bg-no-repeat';
        case 'pattern':
          if (pattern) {
            return `bg-pattern-${pattern}`;
          }
          return 'bg-white dark:bg-black';
        default:
          return 'bg-white dark:bg-black';
      }
    };

    // Generate spacing classes
    const getSpacingClasses = () => {
      if (!block.spacing) return 'py-24';
      
      const { paddingY, marginTop } = block.spacing;
      return `${paddingY} ${marginTop || ''}`.trim();
    };

    const backgroundClasses = getBackgroundClasses();
    const spacingClasses = getSpacingClasses();

    switch (block.blockType) {
      case 'hero':
        return (
          <section 
            id="hero" 
            className={`${backgroundClasses} ${spacingClasses}`}
            style={block.backgroundStyle?.type === 'image' && block.backgroundStyle.backgroundImage ? {
              backgroundImage: `url(${block.backgroundStyle.backgroundImage.asset.url})`
            } : {}}
          >
            <Hero />
          </section>
        );
      
      case 'about':
        return (
          <section 
            id="about" 
            className={`${backgroundClasses} ${spacingClasses}`}
            style={block.backgroundStyle?.type === 'image' && block.backgroundStyle.backgroundImage ? {
              backgroundImage: `url(${block.backgroundStyle.backgroundImage.asset.url})`
            } : {}}
          >
            <About />
          </section>
        );
      
      case 'skills':
        return (
          <section 
            id="skills" 
            className={`${backgroundClasses} ${spacingClasses}`}
            style={block.backgroundStyle?.type === 'image' && block.backgroundStyle.backgroundImage ? {
              backgroundImage: `url(${block.backgroundStyle.backgroundImage.asset.url})`
            } : {}}
          >
            <About />
          </section>
        );
      
      case 'projects':
        return (
          <section 
            id="projects" 
            className={`${backgroundClasses} ${spacingClasses}`}
            style={block.backgroundStyle?.type === 'image' && block.backgroundStyle.backgroundImage ? {
              backgroundImage: `url(${block.backgroundStyle.backgroundImage.asset.url})`
            } : {}}
          >
            <Projects />
          </section>
        );
      
      case 'certifications':
        return (
          <section 
            id="certifications" 
            className={`${backgroundClasses} ${spacingClasses}`}
            style={block.backgroundStyle?.type === 'image' && block.backgroundStyle.backgroundImage ? {
              backgroundImage: `url(${block.backgroundStyle.backgroundImage.asset.url})`
            } : {}}
          >
            <About />
          </section>
        );
      
      case 'commendations':
        return (
          <section 
            id="commendations" 
            className={`${backgroundClasses} ${spacingClasses}`}
            style={block.backgroundStyle?.type === 'image' && block.backgroundStyle.backgroundImage ? {
              backgroundImage: `url(${block.backgroundStyle.backgroundImage.asset.url})`
            } : {}}
          >
            <Commendations />
          </section>
        );
      
      case 'contact':
        return (
          <section 
            id="contact" 
            className={`${backgroundClasses} ${spacingClasses}`}
            style={block.backgroundStyle?.type === 'image' && block.backgroundStyle.backgroundImage ? {
              backgroundImage: `url(${block.backgroundStyle.backgroundImage.asset.url})`
            } : {}}
          >
            <Contact />
          </section>
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
      {(() => {
        const activeBlocks = blocks.filter(block => block.isActive);
        console.log('Active blocks:', activeBlocks);
        
        return activeBlocks.map((block, index) => {
          const renderedBlock = renderBlock(block);
          // Only render if we have a valid block
          if (!renderedBlock) return null;
          
          // Use block._id if available, otherwise fallback to index
          const key = block._id || `block-${index}`;
          console.log('Rendering block with key:', key, block);
          
          return (
            <div key={key}>
              {renderedBlock}
            </div>
          );
        });
      })()}
    </div>
  );
}
