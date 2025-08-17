export default {
  name: 'aboutSection',
  title: 'About Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string'
    },
    {
      name: 'professionalSummary',
      title: 'Professional Summary',
      type: 'text',
      rows: 3
    },
    {
      name: 'careerTimeline',
      title: 'Career Timeline',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'careerEntry' }] }]
    },
    {
      name: 'technologyStack',
      title: 'Technology Stack',
      type: 'reference',
      to: [{ type: 'technologyStack' }],
      description: 'Reference to a technology stack document to display below the career timeline'
    }
  ]
};
