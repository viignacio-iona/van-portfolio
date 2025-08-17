export default {
  name: 'careerEntry',
  title: 'Career History',
  type: 'document',
  fields: [
    {
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'startDate',
      title: 'Date Started',
      type: 'object',
      fields: [
        {
          name: 'month',
          title: 'Month',
          type: 'string',
          options: {
            list: [
              { title: 'January', value: '01' },
              { title: 'February', value: '02' },
              { title: 'March', value: '03' },
              { title: 'April', value: '04' },
              { title: 'May', value: '05' },
              { title: 'June', value: '06' },
              { title: 'July', value: '07' },
              { title: 'August', value: '08' },
              { title: 'September', value: '09' },
              { title: 'October', value: '10' },
              { title: 'November', value: '11' },
              { title: 'December', value: '12' }
            ]
          },
          validation: (Rule: any) => Rule.required()
        },
        {
          name: 'year',
          title: 'Year',
          type: 'number',
          validation: (Rule: any) => Rule.required().min(1900).max(2030)
        }
      ],
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'endDate',
      title: 'Date Ended',
      type: 'object',
      fields: [
        {
          name: 'month',
          title: 'Month',
          type: 'string',
          options: {
            list: [
              { title: 'January', value: '01' },
              { title: 'February', value: '02' },
              { title: 'March', value: '03' },
              { title: 'April', value: '04' },
              { title: 'May', value: '05' },
              { title: 'June', value: '06' },
              { title: 'July', value: '07' },
              { title: 'August', value: '08' },
              { title: 'September', value: '09' },
              { title: 'October', value: '10' },
              { title: 'November', value: '11' },
              { title: 'December', value: '12' }
            ]
          }
        },
        {
          name: 'year',
          title: 'Year',
          type: 'number',
          validation: (Rule: any) => Rule.min(1900).max(2030)
        }
      ],
      description: 'Leave empty if still working here'
    },
    {
      name: 'isCurrent',
      title: 'Still Working Here',
      type: 'boolean',
      initialValue: false
    }
  ],
  preview: {
    select: {
      title: 'company',
      subtitle: 'position',
      media: 'company'
    },
    prepare({ title, subtitle }: any) {
      return {
        title: title || 'No Company',
        subtitle: subtitle || 'No Position'
      }
    }
  }
};
