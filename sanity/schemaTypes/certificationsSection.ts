export default {
  name: 'certificationsSection',
  title: 'Certifications Section',
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
      name: 'certifications',
      title: 'Certifications',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'certification' }] }],
      validation: (Rule: any) => Rule.required().min(1)
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
    },
    {
      name: 'showDates',
      title: 'Show Issue Dates',
      type: 'boolean',
      initialValue: true
    }
  ]
};
