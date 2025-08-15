'use client';

import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import DynamicLayout from '@/components/DynamicLayout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Commendations from '@/components/Commendations';
import Contact from '@/components/Contact';
import { Page } from '@/lib/cms/types/layoutBlock';
import { getHomePage } from '@/lib/sanity/queries';

export default function Home() {
  const [pageData, setPageData] = useState<Page | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const data = await getHomePage();
        setPageData(data);
      } catch (error) {
        console.error('Error fetching page data:', error);
        // Fallback to default layout if CMS fails
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Loading Portfolio...
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Please wait while we load your content.
            </p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {pageData ? (
        <DynamicLayout pageData={pageData} />
      ) : (
        // Fallback to default layout if no CMS data
        <>
          <Hero />
          <About />
          <Projects />
          <Commendations />
          <Contact />
        </>
      )}
    </Layout>
  );
}
