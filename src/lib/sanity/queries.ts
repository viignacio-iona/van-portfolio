import { sanityClient } from './client';

export async function getProjects() {
  return sanityClient.fetch(`*[_type == "project"] | order(publishedAt desc)`);
}

export async function getCommendations() {
  return sanityClient.fetch(`*[_type == "commendation"] | order(publishedAt desc)`);
}

export async function getSkillCategories() {
  return sanityClient.fetch(`*[_type == "skill"] | order(category asc)`);
}

export async function getCertifications() {
  return sanityClient.fetch(`*[_type == "certification"] | order(issueDate desc){
    ...,
    image{
      asset->{url}
    }
  }`);
}

export async function getProfile() {
  return sanityClient.fetch(`*[_type == "profile"][0]{
    ...,
    image{
      asset->{url}
    }
  }`);
} 