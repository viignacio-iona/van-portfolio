export default {
  name: 'projectsSection',
  title: 'Projects Section',
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
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
      validation: (Rule: any) => Rule.required().min(1)
    },
    {
      name: 'layout',
      title: 'Layout Style',
      type: 'string',
      options: {
        list: [
          { title: 'Grid (3 columns)', value: 'grid-3' },
          { title: 'Grid (2 columns)', value: 'grid-2' },
          { title: 'Carousel', value: 'carousel' },
          { title: 'Masonry', value: 'masonry' }
        ]
      },
      initialValue: 'grid-3'
    },
    {
      name: 'showFilters',
      title: 'Show Project Filters',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'maxProjects',
      title: 'Maximum Projects to Display',
      type: 'number',
      initialValue: 6,
      validation: (Rule: any) => Rule.min(1).max(20)
    }
  ]
};
