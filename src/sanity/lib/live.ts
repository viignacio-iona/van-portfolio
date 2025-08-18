// Live content setup for Sanity v4
// Note: This is a simplified version - you may need to implement more sophisticated live updates
import { client } from './client'

// Basic live content setup - you can enhance this based on your needs
export const sanityFetch = async (query: string, params?: any) => {
  return client.fetch(query, params)
}

// Placeholder for SanityLive component - you can implement this later if needed
export const SanityLive = () => null
