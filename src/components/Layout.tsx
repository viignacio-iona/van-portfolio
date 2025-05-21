'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { MoonIcon as MoonIconSolid, SunIcon as SunIconSolid } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { FiMail, FiPhone } from 'react-icons/fi';
import { useActiveSection } from '@/hooks/useActiveSection';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [activeSection, setActiveSection] = useActiveSection();

  useEffect(() => {
    // Toggle dark mode on <html> element
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (mobileMenuOpen) {
      navRef.current?.focus();
      // Trap focus within mobile menu
      const focusableElements = navRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements) {
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
        
        const handleTabKey = (e: KeyboardEvent) => {
          if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        };

        navRef.current?.addEventListener('keydown', handleTabKey);
        return () => navRef.current?.removeEventListener('keydown', handleTabKey);
      }
    }
  }, [mobileMenuOpen]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navItems = [
    { name: 'Home', path: '/', section: 'hero' },
    { name: 'About', path: '/#about', section: 'about' },
    { name: 'Projects', path: '/#projects', section: 'projects' },
    { name: 'Contact', path: '/#contact', section: 'contact' },
    { name: 'Blog (WIP)', path: '/blog', section: '' },
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMobileMenu();
  };

  const handleNavClick = (e: React.MouseEvent, path: string, section?: string) => {
    if (path.startsWith('/#')) {
      e.preventDefault();
      const id = path.replace('/#', '');
      const el = document.getElementById(id);
      if (el) {
        setActiveSection(id);
        el.scrollIntoView({ behavior: 'smooth' });
        closeMobileMenu();
      }
    } else {
      closeMobileMenu();
    }
  };

  const closeMobileMenu = () => {
    if (mobileMenuOpen) {
      setMenuClosing(true);
      setTimeout(() => {
        setMobileMenuOpen(false);
        setMenuClosing(false);
      }, 200); // match slide-up duration
    }
  };

  const isNavItemActive = (item: typeof navItems[0]) => {
    if (item.section) {
      return activeSection === item.section;
    }
    // For non-section routes (like /blog)
    return pathname === item.path;
  };

  return (
    <div className="min-h-screen bg-black dark:bg-black transition-colors duration-200">
      {/* Floating Navbar for Desktop */}
      <nav className="hidden sm:flex fixed top-6 left-1/2 transform -translate-x-1/2 z-50 max-w-3xl w-[90vw] rounded-2xl bg-gray-50/90 dark:bg-gray-950/90 shadow-2xl border border-gray-200 dark:border-gray-800 items-center justify-between px-8 py-3 backdrop-blur-md">
        <div className="flex items-center">
          <a href="#" className="flex items-center" onClick={handleLogoClick} aria-label="Scroll to top">
            <Image src="/images/logo.png" alt="Portfolio Logo" width={40} height={40} className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
          </a>
        </div>
        <div className="flex space-x-2 lg:space-x-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={e => handleNavClick(e, item.path, item.section)}
              className={`relative px-3 py-2 rounded-md font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2
                ${
                  isNavItemActive(item)
                    ? 'text-accent after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-accent after:rounded-full after:transition-all after:duration-300'
                    : 'text-gray-500 dark:text-gray-300 hover:text-accent hover:bg-gray-100 dark:hover:bg-gray-800 after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-0.5 after:bg-accent after:rounded-full after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full'
                }
              `}
              aria-current={isNavItemActive(item) ? 'page' : undefined}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center ml-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <SunIcon className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-300" />
            ) : (
              <MoonIconSolid className="h-5 w-5 sm:h-6 sm:w-6 text-gray-800 dark:text-white" />
            )}
          </button>
        </div>
      </nav>
      {/* Floating Hamburger Button for Mobile */}
      <button
        ref={menuButtonRef}
        className="sm:hidden fixed top-6 right-6 z-50 p-3 rounded-full bg-gray-900/80 dark:bg-gray-800/80 shadow-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent"
        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileMenuOpen}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? (
          <XMarkIcon className="h-6 w-6 text-accent" />
        ) : (
          <Bars3Icon className="h-6 w-6 text-accent" />
        )}
      </button>
      {/* Full-Screen Overlay Menu for Mobile */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed inset-0 z-40 bg-black/90 dark:bg-black/95 backdrop-blur-lg flex flex-col">
          <div className="flex justify-end p-6">
            <button
              className="p-3 rounded-full bg-gray-900/80 dark:bg-gray-800/80 shadow-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6 text-accent" />
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center space-y-8">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={e => handleNavClick(e, item.path, item.section)}
                className={`text-3xl font-bold transition-colors duration-150
                  ${isNavItemActive(item)
                    ? 'text-accent underline underline-offset-8'
                    : 'text-white hover:text-accent'}
                `}
                aria-current={isNavItemActive(item) ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}
            {/* Light/Dark Mode Switch */}
            <button
              onClick={toggleTheme}
              className="mt-12 flex items-center gap-2 px-6 py-3 rounded-full border border-gray-700 bg-gray-900/80 dark:bg-gray-700 text-white font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <SunIconSolid className="h-7 w-7 text-yellow-300" />
              ) : (
                <MoonIconSolid className="h-7 w-7 text-white" />
              )}
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      )}
      <main className="pt-24 sm:pt-32">
        {children}
      </main>

      <footer className="bg-gray-100 dark:bg-black border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-row items-center justify-between gap-8 w-full">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Contact Information</span>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Social Media</span>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full">
              <div className="flex flex-col items-center md:items-start gap-2">
                <a href="mailto:vanian.seven@hotmail.com" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent text-sm font-medium">
                  <FiMail className="h-4 w-4" /> vanian.seven@hotmail.com
                </a>
                <a href="tel:+639171759697" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent text-sm font-medium">
                  <FiPhone className="h-4 w-4" /> +639171759697
                </a>
              </div>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/viignacio-ctfl" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z"/></svg>
                </a>
                <a href="https://github.com/viignacio-iona" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.63 0-12 5.37-12 12 0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.404 1.02.005 2.04.137 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.625-5.475 5.92.43.37.823 1.096.823 2.21 0 1.595-.015 2.88-.015 3.27 0 .32.216.694.825.576 4.765-1.587 8.2-6.086 8.2-11.384 0-6.63-5.373-12-12-12z"/></svg>
                </a>
                <a href="https://www.facebook.com/vanian.ignacio/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.326v-21.35c0-.733-.593-1.325-1.326-1.325z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-300 dark:bg-gray-900 py-4">
          <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Van Ian Ignacio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 