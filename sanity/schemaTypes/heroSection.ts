export default {
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Main Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'ctaText',
      title: 'Call to Action Text',
      type: 'string',
      initialValue: 'Get in Touch'
    },
    {
      name: 'ctaLink',
      title: 'Call to Action Link',
      type: 'string',
      initialValue: '#contact'
    },
    {
      name: 'backgroundStyle',
      title: 'Background Style',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Gradient', value: 'gradient' },
          { title: 'Pattern', value: 'pattern' }
        ]
      },
      initialValue: 'default'
    }
  ]
};
