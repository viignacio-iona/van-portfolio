'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LayoutProps {
  children: React.ReactNode;
  navbarData?: {
    title?: string;
    logo?: {
      asset?: {
        url?: string;
      };
    };
    links?: Array<{
      label: string;
      href: string;
      isExternal: boolean;
    }>;
  };
  footerData?: {
    title?: string;
    contactInfo?: {
      email?: string;
      phone?: string;
      location?: string;
    };
    socialMedia?: {
      facebook?: string;
      github?: string;
      linkedin?: string;
      twitter?: string;
      instagram?: string;
    };
    copyright?: string;
  };
}

export default function Layout({ children, navbarData, footerData }: LayoutProps) {
  // Function to get country flag emoji based on location
  const getCountryFlag = (location: string) => {
    const countryMap: { [key: string]: string } = {
      'Philippines': '🇵🇭',
      'USA': '🇺🇸',
      'United States': '🇺🇸',
      'UK': '🇬🇧',
      'United Kingdom': '🇬🇧',
      'Canada': '🇨🇦',
      'Australia': '🇦🇺',
      'Germany': '🇩🇪',
      'France': '🇫🇷',
      'Japan': '🇯🇵',
      'Singapore': '🇸🇬',
      'India': '🇮🇳',
      'China': '🇨🇳',
      'Remote': '🌍',
      'Worldwide': '🌍'
    };
    
    // Try to find exact match first
    if (countryMap[location]) {
      return countryMap[location];
    }
    
    // Try to find partial match
    for (const [country, flag] of Object.entries(countryMap)) {
      if (location.toLowerCase().includes(country.toLowerCase())) {
        return flag;
      }
    }
    
    // Default to globe if no match found
    return '🌍';
  };

  // Don't render navbar if no data
  const showNavbar = navbarData;
  
  // Don't render footer if no data
  const showFooter = footerData;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Desktop Navbar - Floating above all content */}
      {showNavbar && (
        <nav className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
          {/* Navbar content - truly floating */}
          <div className="w-4/5 mx-auto mt-6 pointer-events-auto">
            <div className="bg-base/10 backdrop-blur-2xl border border-text-muted/30 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-between h-20 px-8">
              {/* Logo/Brand */}
              <div className="flex-shrink-0">
                {navbarData.logo?.asset?.url && (
                  <div className="relative h-12 w-32">
                    <Image 
                      src={navbarData.logo.asset.url} 
                      alt="Logo" 
                      fill
                      className="object-contain"
                      priority
                      unoptimized
                    />
                  </div>
                )}
              </div>

              {/* Navigation Links */}
              {navbarData.links && navbarData.links.length > 0 && (
                <nav className="hidden lg:block" aria-label="Main navigation">
                  <ul className="flex items-center space-x-8">
                    {navbarData.links.map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.href}
                          className="text-text-primary hover:text-accent transition-colors duration-200 font-medium text-lg relative group drop-shadow-sm"
                          target={link.isExternal ? '_blank' : undefined}
                          rel={link.isExternal ? 'noopener noreferrer' : undefined}
                        >
                          {link.label}
                          {/* Hover underline effect */}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"></span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
              </div>
            </div>
          </div>
        </nav>
      )}

      {/* Main Content - Starts from very top */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      {showFooter && (
        <footer className="bg-base text-white py-12">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Contact Information Section */}
              <div>
                <h3 className="text-xl font-semibold font-heading text-white mb-2">
                  Contact Information
                </h3>
                
                <ul className="space-y-2" role="list">
                  {footerData.contactInfo?.email && (
                    <li className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <a 
                        href={`mailto:${footerData.contactInfo.email}`}
                        className="text-text-secondary hover:text-accent transition-colors duration-200"
                      >
                        {footerData.contactInfo.email}
                      </a>
                    </li>
                  )}
                  
                  {footerData.contactInfo?.phone && (
                    <li className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <a 
                        href={`tel:${footerData.contactInfo.phone}`}
                        className="text-text-secondary hover:text-accent transition-colors duration-200"
                      >
                        {footerData.contactInfo.phone}
                      </a>
                    </li>
                  )}
                  
                  {footerData.contactInfo?.location && (
                    <li className="flex items-center space-x-3">
                      <span className="text-2xl" aria-hidden="true">
                        {getCountryFlag(footerData.contactInfo.location)}
                      </span>
                      <span className="text-text-secondary">
                        {footerData.contactInfo.location}
                      </span>
                    </li>
                  )}
                </ul>
              </div>

              {/* Social Media Section */}
              <div>
                <h3 className="text-xl font-semibold font-heading text-white mb-2">
                  Follow Me
                </h3>
                
                <ul className="flex flex-col space-y-2" role="list">
                  {footerData.socialMedia?.linkedin && (
                    <li>
                      <a 
                        href={footerData.socialMedia.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-text-secondary hover:text-accent transition-colors duration-200 group"
                      >
                        <svg className="w-5 h-5 text-accent group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        <span>LinkedIn</span>
                      </a>
                    </li>
                  )}
                  
                  {footerData.socialMedia?.github && (
                    <li>
                      <a 
                        href={footerData.socialMedia.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-text-secondary hover:text-accent transition-colors duration-200 group"
                      >
                        <svg className="w-5 h-5 text-accent group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span>GitHub</span>
                      </a>
                    </li>
                  )}
                  
                  {footerData.socialMedia?.facebook && (
                    <li>
                      <a 
                        href={footerData.socialMedia.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-text-secondary hover:text-accent transition-colors duration-200 group"
                      >
                        <svg className="w-5 h-5 text-accent group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        <span>Facebook</span>
                      </a>
                    </li>
                  )}
                  
                  {footerData.socialMedia?.twitter && (
                    <li>
                      <a 
                        href={footerData.socialMedia.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-text-secondary hover:text-accent transition-colors duration-200 group"
                      >
                        <svg className="w-5 h-5 text-accent group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.665 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                        <span>Twitter</span>
                      </a>
                    </li>
                  )}
                  
                  {footerData.socialMedia?.instagram && (
                    <li>
                      <a 
                        href={footerData.socialMedia.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-text-secondary hover:text-accent transition-colors duration-200 group"
                      >
                        <svg className="w-5 h-5 text-accent group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.49.49-1.297.49-1.787 0-.49-.49-.49-1.297 0-1.787.49-.49 1.297-.49 1.787 0 .49.49.49 1.297 0 1.787zm1.297-7.718c-.49.49-1.297.49-1.787 0-.49-.49-.49-1.297 0-1.787.49-.49 1.297-.49 1.787 0 .49.49.49 1.297 0 1.787z"/>
                        </svg>
                        <span>Instagram</span>
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-ui-border/30 my-12"></div>

            {/* Copyright Section */}
            <div className="text-left">
              {footerData.copyright && (
                <p className="text-sm text-text-muted">{footerData.copyright}</p>
              )}
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
