import { sanityClient } from './client';

export async function getProjects() {
  return sanityClient.fetch(`*[_type == "project"] | order(publishedAt desc){
    ...,
    image{
      asset->{url}
    },
    demoCta
  }`);
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

export async function getHomePage() {

  const query = `*[_type == "page" && isHomePage == true][0]{
    ...,
    navbar->{
      title,
      logo{
        asset->{url}
      },
      links[]{
        label,
        href,
        isExternal
      }
    },
    footer->{
      title,
      contactInfo,
      socialMedia,
      copyright
    },
    layoutBlocks[]{
      ...,
      heroSection{
        ...,
        profileImage{
          asset->{url}
        }
      },
      projectsSection{
        headline,
        ctaButton,
        projects[]->{
          _id,
          _type,
          title,
          slug,
          description,
          image{
            asset->{url}
          },
          techStack,
          challenges,
          demoUrl,
          demoCta,
          repoUrl,
          publishedAt,
          updatedAt
        }
      },
      aboutSection{
        ...,
        careerTimeline[]->{
          _id,
          _type,
          company,
          position,
          startDate,
          endDate,
          isCurrent
        },
        technologyStack->{
          _id,
          _type,
          title,
          technologies[]{
            _key,
            name,
            category,
            proficiency
          }
        }
      }
    }
  }`;
  
  try {
    const result = await sanityClient.fetch(query);
    return result;
  } catch (error) {
    console.error('Error fetching homepage data:', error);
    return null;
  }
} 