import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-05-22',
  useCdn: process.env.NODE_ENV === 'production' ? false : true, // Disable CDN in production to avoid CORS issues
  token: process.env.SANITY_API_TOKEN, // Add token for authenticated requests if needed
});

// Debug logging for production troubleshooting
console.log('Sanity Client Config:', {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-05-22',
  useCdn: process.env.NODE_ENV === 'production' ? false : true,
  nodeEnv: process.env.NODE_ENV
});

 