import { Card } from '@/components/molecules/Card/Card';
import Image from 'next/image';
import { UserIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

interface CommendationCardProps {
  commendation: {
    id: string;
    content: string;
    author: {
      name: string;
      role: string;
      company: string;
      imageUrl: string;
    };
    rating: number;
  };
  index: number;
}

export const CommendationCard = ({ commendation, index }: CommendationCardProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Card index={index} className="relative">
      <div className="flex flex-col h-full p-8">
        <div className="flex-1">
          <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            "{commendation.content}"
          </blockquote>
        </div>
        
        <div className="flex items-center">
          <div className="relative h-12 w-12 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            {(!imageError && commendation.author.imageUrl) ? (
              <Image
                src={commendation.author.imageUrl}
                alt={commendation.author.name}
                fill
                className="object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <UserIcon className="h-8 w-8 text-gray-400" />
            )}
          </div>
          <div className="ml-4">
            <div className="font-semibold text-gray-900 dark:text-white">
              {commendation.author.name}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {commendation.author.role} at {commendation.author.company}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}; 