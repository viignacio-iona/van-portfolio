import { useState, useEffect } from 'react';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]')) as HTMLElement[];

    // Safety check: if no sections found, return early
    if (!sections.length) {
      return;
    }

    function getOffset() {
      // Match the main content's top padding: 128px for desktop, 96px for mobile
      return window.innerWidth >= 640 ? 128 : 96;
    }

    function onScroll() {
      const offset = getOffset();
      let active = sections[0]?.id || 'hero';
      
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        // Safety check: ensure section exists and has an id
        if (!section || !section.id) continue;
        
        const rect = section.getBoundingClientRect();
        if (rect.top - offset <= 0) {
          active = section.id;
        } else {
          break;
        }
      }
      setActiveSection(active);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return [activeSection, setActiveSection] as const;
} 