export default {
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'tagline', title: 'Tagline', type: 'string' },
    { name: 'bio', title: 'Bio', type: 'text' },
    { name: 'experience', title: 'Experience', type: 'number' },
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'location', title: 'Location', type: 'string' },
    { name: 'resumeUrl', title: 'Resume URL', type: 'url' },
    {
      name: 'social',
      title: 'Social',
      type: 'object',
      fields: [
        { name: 'linkedin', title: 'LinkedIn', type: 'url' },
        { name: 'github', title: 'GitHub', type: 'url' },
        { name: 'facebook', title: 'Facebook', type: 'url' },
      ]
    },
    { name: 'phone', title: 'Phone', type: 'string' },
    { name: 'image', title: 'Profile Image', type: 'image', options: { hotspot: true } },
  ],
}; 