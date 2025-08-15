export default {
  name: 'contactSection',
  title: 'Contact Section',
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
      name: 'email',
      title: 'Contact Email',
      type: 'string',
      validation: (Rule: any) => Rule.email()
    },
    {
      name: 'phone',
      title: 'Contact Phone',
      type: 'string'
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string'
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  'LinkedIn',
                  'GitHub',
                  'Twitter',
                  'Instagram',
                  'Facebook',
                  'Other'
                ]
              }
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url'
            }
          ]
        }
      ]
    },
    {
      name: 'showContactForm',
      title: 'Show Contact Form',
      type: 'boolean',
      initialValue: true
    }
  ]
};
