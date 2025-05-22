'use client';

import { CommendationCard } from './organisms/CommendationCard/CommendationCard';
import { SectionHeader } from './molecules/SectionHeader/SectionHeader';
import { CommendationsSection } from '@/lib/cms/types/commendation';

export default function Commendations() {
  // This will be replaced with CMS data
  const sectionData: CommendationsSection = {
    title: 'Commendations',
    subtitle: 'What People Say',
    description: 'Feedback and recommendations from colleagues and clients I\'ve worked with.',
    commendations: [
      {
        id: '1',
        content: 'An exceptional QA engineer who consistently delivers high-quality work.',
        author: {
          name: 'John Doe',
          role: 'Engineering Manager',
          company: 'Tech Corp',
          imageUrl: '/images/commendations/john-doe.jpg'
        },
        rating: 5,
        publishedAt: '2024-01-01',
        updatedAt: '2024-01-01'
      },
      // Add more commendations as needed
    ]
  };

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