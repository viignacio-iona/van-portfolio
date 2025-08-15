export default {
  name: 'commendationsSection',
  title: 'Commendations Section',
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
      name: 'commendations',
      title: 'Commendations',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'commendation' }] }]
    },
    {
      name: 'layout',
      title: 'Layout Style',
      type: 'string',
      options: {
        list: [
          { title: 'Grid (2 columns)', value: 'grid-2' },
          { title: 'Grid (3 columns)', value: 'grid-3' },
          { title: 'Carousel', value: 'carousel' }
        ]
      },
      initialValue: 'grid-2'
    },
    {
      name: 'showAuthorImages',
      title: 'Show Author Images',
      type: 'boolean',
      initialValue: true
    }
  ]
};
