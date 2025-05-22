export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    { name: 'contactEmail', title: 'Contact Email', type: 'string' },
    { name: 'contactPhone', title: 'Contact Phone', type: 'string' },
    {
      name: 'social',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'linkedin', title: 'LinkedIn', type: 'url' },
        { name: 'github', title: 'GitHub', type: 'url' },
        { name: 'facebook', title: 'Facebook', type: 'url' },
      ]
    },
    { name: 'copyright', title: 'Copyright', type: 'string' }
  ]
}; 