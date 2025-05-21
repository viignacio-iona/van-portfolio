import { useState, useEffect } from 'react';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]')) as HTMLElement[];

    function getOffset() {
      // Match the main content's top padding: 128px for desktop, 96px for mobile
      return window.innerWidth >= 640 ? 128 : 96;
    }

    function onScroll() {
      const offset = getOffset();
      let closestSection = sections[0];
      let minDistance = Infinity;

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - offset);
        if (distance < minDistance) {
          minDistance = distance;
          closestSection = section;
        }
      });

      setActiveSection(closestSection.id);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return [activeSection, setActiveSection] as const;
} 