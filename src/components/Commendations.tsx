'use client';

import { useEffect, useState } from 'react';
import { CommendationCard } from './organisms/CommendationCard/CommendationCard';
import { SectionHeader } from './molecules/SectionHeader/SectionHeader';
import { CommendationsSection, SanityCommendation } from '@/lib/cms/types/commendation';
import { getCommendations } from '@/lib/sanity/queries';

export default function Commendations() {
  const [sectionData, setSectionData] = useState<CommendationsSection>({
    title: 'Commendations',
    subtitle: 'What People Say',
    description: 'Feedback and commendations from colleagues and clients I\'ve worked with.',
    commendations: []
  });

  useEffect(() => {
    const fetchCommendations = async () => {
      try {
        const commendations = await getCommendations() as SanityCommendation[];
        console.log('Fetched commendations:', commendations); // Debug log
        setSectionData(prev => ({
          ...prev,
          commendations: commendations.map(commendation => ({
            id: commendation._id,
            content: commendation.content,
            author: {
              name: commendation.author.name,
              role: commendation.author.role,
              company: commendation.author.company,
              imageUrl: commendation.author.image?.asset?.url || ''
            },
            rating: 5, // Default rating since it's not in Sanity schema
            publishedAt: commendation.publishedAt,
            updatedAt: commendation.updatedAt
          }))
        }));
      } catch (error) {
        console.error('Error fetching commendations:', error);
      }
    };

    fetchCommendations();
  }, []);

  return (
    <section id="commendations" className="py-24 bg-gray-100 dark:bg-black border-t border-gray-800 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={sectionData.title}
          subtitle={sectionData.subtitle}
          description={sectionData.description}
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sectionData.commendations.map((commendation, index) => (
            <CommendationCard key={commendation.id} commendation={commendation} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
} 