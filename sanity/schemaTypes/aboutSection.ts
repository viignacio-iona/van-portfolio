export default {
  name: 'aboutSection',
  title: 'About Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'subtitle',
      title: 'Section Subtitle',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Section Description',
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
      name: 'showSkills',
      title: 'Show Skills Section',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'showCertifications',
      title: 'Show Certifications Section',
      type: 'boolean',
      initialValue: true
    }
  ]
};
