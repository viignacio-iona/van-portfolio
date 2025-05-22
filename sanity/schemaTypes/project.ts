export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'techStack', title: 'Tech Stack', type: 'array', of: [{ type: 'string' }] },
    { name: 'challenges', title: 'Key Challenges', type: 'array', of: [{ type: 'string' }] },
    { name: 'demoUrl', title: 'Demo URL', type: 'url' },
    { name: 'repoUrl', title: 'Repository URL', type: 'url' },
    { name: 'publishedAt', title: 'Published At', type: 'datetime' },
    { name: 'updatedAt', title: 'Updated At', type: 'datetime' },
  ]
}; 