import { Card } from '@/components/molecules/Card/Card';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';

interface TestimonialCardProps {
  testimonial: {
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

export const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  return (
    <Card index={index} className="relative">
      <div className="flex flex-col h-full">
        <div className="flex-1">
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`h-5 w-5 ${
                  i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            "{testimonial.content}"
          </blockquote>
        </div>
        
        <div className="flex items-center">
          <div className="relative h-12 w-12 rounded-full overflow-hidden">
            <Image
              src={testimonial.author.imageUrl}
              alt={testimonial.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="ml-4">
            <div className="font-semibold text-gray-900 dark:text-white">
              {testimonial.author.name}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {testimonial.author.role} at {testimonial.author.company}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}; 