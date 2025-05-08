'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for user's preferred color scheme
    if (typeof window !== 'undefined') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(isDark);
    }
  }, []);

  useEffect(() => {
    // Update document class when theme changes
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    if (mobileMenuOpen) {
      navRef.current?.focus();
    }
  }, [mobileMenuOpen]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Blog (WIP)', path: '/blog' },
    { name: 'Contact', path: '/#contact' },
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    if (path.startsWith('/#')) {
      e.preventDefault();
      const id = path.replace('/#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <nav className="fixed w-full bg-gray-50 dark:bg-gray-950 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <a href="#" className="flex items-center" onClick={handleLogoClick} aria-label="Scroll to top">
                <Image src="/images/logo.png" alt="Portfolio Logo" width={40} height={40} className="h-10 w-10 object-contain" />
              </a>
            </div>
            {/* Desktop Nav */}
            <div className="hidden sm:flex sm:space-x-2 lg:space-x-8 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={e => handleNavClick(e, item.path)}
                  className={`relative px-3 py-2 rounded-md font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2
                    ${
                      (pathname === item.path || (item.path.startsWith('/#') && typeof window !== 'undefined' && window.location.hash === item.path.replace('/', '')))
                        ? 'text-accent after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-accent after:rounded-full after:transition-all after:duration-300'
                        : 'text-gray-500 dark:text-gray-300 hover:text-accent hover:bg-gray-100 dark:hover:bg-gray-800 after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-0.5 after:bg-accent after:rounded-full after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full'
                    }
                  `}
                  aria-current={pathname === item.path ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {/* Theme Toggle */}
            <div className="flex items-center ml-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <SunIcon className="h-6 w-6 text-yellow-300" />
                ) : (
                  <MoonIcon className="h-6 w-6 text-gray-800" />
                )}
              </button>
              {/* Hamburger for mobile */}
              <button
                className="sm:hidden ml-2 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6 text-accent" />
                ) : (
                  <Bars3Icon className="h-6 w-6 text-accent" />
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div
            ref={navRef}
            tabIndex={-1}
            className="sm:hidden absolute top-20 left-0 w-full bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-800 z-50 animate-fade-in"
            aria-label="Mobile navigation menu"
          >
            <div className="flex flex-col py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={e => handleNavClick(e, item.path)}
                  className={`px-6 py-3 text-lg font-semibold rounded-md transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2
                    ${
                      (pathname === item.path || (item.path.startsWith('/#') && typeof window !== 'undefined' && window.location.hash === item.path.replace('/', '')))
                        ? 'text-accent bg-gray-100 dark:bg-gray-800'
                        : 'text-gray-700 dark:text-gray-200 hover:text-accent hover:bg-gray-100 dark:hover:bg-gray-800'
                    }
                  `}
                  aria-current={pathname === item.path ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">
        {children}
      </main>

      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <p>&copy; {new Date().getFullYear()} Van Ian Ignacio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 