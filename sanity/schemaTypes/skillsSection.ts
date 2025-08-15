export default {
  name: 'skillsSection',
  title: 'Skills Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string'
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
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'skill' }] }]
    },
    {
      name: 'layout',
      title: 'Layout Style',
      type: 'string',
      options: {
        list: [
          { title: 'Grid (2 columns)', value: 'grid-2' },
          { title: 'Grid (3 columns)', value: 'grid-3' },
          { title: 'List', value: 'list' }
        ]
      },
      initialValue: 'grid-2'
    }
  ]
};
