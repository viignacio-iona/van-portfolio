'use client';

import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import LayoutBlock from '@/components/LayoutBlock';
import Hero from '@/components/Hero';
import { getHomePage } from '@/lib/sanity/queries';
import { FaultyTerminal } from '@/components/Backgrounds';

export default function Home() {
  const [pageData, setPageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getHomePage();
        setPageData(data);
      } catch (error) {
        console.error('Error fetching page data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);



  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-text-primary">Loading...</div>;
  }

  if (!pageData) {
    return <div className="min-h-screen flex items-center justify-center text-text-primary">No data found</div>;
  }

  // Get the first layout block (hero section)
  const heroLayoutBlock = pageData.layoutBlocks?.[0];

  return (
    <Layout 
      navbarData={pageData?.navbar}
      footerData={pageData?.footer}
    >
      {/* Hero Section */}
      <LayoutBlock className="h-screen-dynamic bg-base relative overflow-hidden">
        {/* Animated Faulty Terminal Background */}
        <FaultyTerminal className="opacity-30 z-0" />
        
        {/* Subtle gradient overlay for navbar readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-base/40 via-transparent to-transparent pointer-events-none z-10"></div>
        
        <div className="h-full flex items-center justify-center relative z-50 pointer-events-none">
          <div className="pointer-events-auto relative z-50">
            {heroLayoutBlock?.heroSection ? (
              <Hero data={heroLayoutBlock.heroSection} />
            ) : (
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
                  Van Ian Ignacio
                </h1>
                <h2 className="text-xl md:text-3xl font-semibold text-accent mb-6 drop-shadow-lg">
                  QA Consultant
                </h2>
                <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                  Transforming Quality Assurance through Strategic Automation & Innovation
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://drive.google.com/file/d/14Qd4zhkr1Fg6Y4nAIBRhQqHpcrBDE7Yz/view?usp=drive_link"
                    className="btn btn-primary inline-flex items-center justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Resume
                  </a>
                  <a 
                    href="mailto:van.ignacio@ionacommerce.com"
                    className="btn btn-outline inline-flex items-center justify-center"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </LayoutBlock>
    </Layout>
  );
}
