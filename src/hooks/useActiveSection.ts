import { useState, useEffect } from 'react';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]')) as HTMLElement[];

    function getNavHeight() {
      const nav = document.querySelector('nav');
      return nav ? nav.getBoundingClientRect().height : 0;
    }

    function onScroll() {
      const navHeight = getNavHeight();
      let closestSection = sections[0];
      let minDistance = Infinity;

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - navHeight);
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