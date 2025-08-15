export default {
  name: 'layoutBlock',
  title: 'Layout Block',
  type: 'object',
  fields: [
    {
      name: 'blockType',
      title: 'Block Type',
      type: 'string',
      options: {
        list: [
          { title: 'Hero Section', value: 'hero' },
          { title: 'About Section', value: 'about' },
          { title: 'Skills Section', value: 'skills' },
          { title: 'Projects Section', value: 'projects' },
          { title: 'Certifications Section', value: 'certifications' },
          { title: 'Commendations Section', value: 'commendations' },
          { title: 'Contact Section', value: 'contact' }
        ]
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(1)
    },
    {
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'backgroundStyle',
      title: 'Background Style',
      type: 'object',
      fields: [
        {
          name: 'type',
          title: 'Background Type',
          type: 'string',
          options: {
            list: [
              { title: 'Solid Color', value: 'solid' },
              { title: 'Gradient', value: 'gradient' },
              { title: 'Image', value: 'image' },
              { title: 'Pattern', value: 'pattern' }
            ]
          },
          initialValue: 'solid'
        },
        {
          name: 'solidColor',
          title: 'Solid Color',
          type: 'string',
          options: {
            list: [
              { title: 'White', value: 'bg-white' },
              { title: 'Light Gray', value: 'bg-gray-50' },
              { title: 'Gray', value: 'bg-gray-100' },
              { title: 'Dark Gray', value: 'bg-gray-900' },
              { title: 'Black', value: 'bg-black' },
              { title: 'Sky Blue', value: 'bg-sky-50' },
              { title: 'Sky Blue Dark', value: 'bg-sky-950' },
              { title: 'Transparent', value: 'bg-transparent' }
            ]
          },
          hidden: ({ parent }: any) => parent?.type !== 'solid'
        },
        {
          name: 'gradientColors',
          title: 'Gradient Colors',
          type: 'object',
          fields: [
            {
              name: 'from',
              title: 'From Color',
              type: 'string',
              options: {
                list: [
                  { title: 'White', value: 'from-white' },
                  { title: 'Gray', value: 'from-gray-100' },
                  { title: 'Sky Blue', value: 'from-sky-50' },
                  { title: 'Blue', value: 'from-blue-50' }
                ]
              }
            },
            {
              name: 'to',
              title: 'To Color',
              type: 'string',
              options: {
                list: [
                  { title: 'White', value: 'to-white' },
                  { title: 'Gray', value: 'to-gray-100' },
                  { title: 'Sky Blue', value: 'to-sky-50' },
                  { title: 'Blue', value: 'to-blue-50' }
                ]
              }
            }
          ],
          hidden: ({ parent }: any) => parent?.type !== 'gradient'
        },
        {
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          options: {
            hotspot: true
          },
          hidden: ({ parent }: any) => parent?.type !== 'image'
        },
        {
          name: 'pattern',
          title: 'Pattern Style',
          type: 'string',
          options: {
            list: [
              { title: 'Dots', value: 'dots' },
              { title: 'Lines', value: 'lines' },
              { title: 'Grid', value: 'grid' },
              { title: 'Hexagons', value: 'hexagons' }
            ]
          },
          hidden: ({ parent }: any) => parent?.type !== 'pattern'
        }
      ],
      initialValue: {
        type: 'solid',
        solidColor: 'bg-white'
      }
    },
    {
      name: 'spacing',
      title: 'Section Spacing',
      type: 'object',
      fields: [
        {
          name: 'paddingY',
          title: 'Vertical Padding',
          type: 'string',
          options: {
            list: [
              { title: 'Small (py-12)', value: 'py-12' },
              { title: 'Medium (py-16)', value: 'py-16' },
              { title: 'Large (py-20)', value: 'py-20' },
              { title: 'Extra Large (py-24)', value: 'py-24' }
            ]
          },
          initialValue: 'py-24'
        },
        {
          name: 'marginTop',
          title: 'Top Margin',
          type: 'string',
          options: {
            list: [
              { title: 'None', value: '' },
              { title: 'Small (mt-8)', value: 'mt-8' },
              { title: 'Medium (mt-12)', value: 'mt-12' },
              { title: 'Large (mt-16)', value: 'mt-16' }
            ]
          },
          initialValue: ''
        }
      ],
      initialValue: {
        paddingY: 'py-24'
      }
    },
    {
      name: 'heroSection',
      title: 'Hero Section Content',
      type: 'heroSection',
      hidden: ({ parent }: any) => parent?.blockType !== 'hero'
    },
    {
      name: 'aboutSection',
      title: 'About Section Content',
      type: 'aboutSection',
      hidden: ({ parent }: any) => parent?.blockType !== 'about'
    },
    {
      name: 'skillsSection',
      title: 'Skills Section Content',
      type: 'skillsSection',
      hidden: ({ parent }: any) => parent?.blockType !== 'skills'
    },
    {
      name: 'projectsSection',
      title: 'Projects Section Content',
      type: 'projectsSection',
      hidden: ({ parent }: any) => parent?.blockType !== 'projects'
    },
    {
      name: 'certificationsSection',
      title: 'Certifications Section Content',
      type: 'certificationsSection',
      hidden: ({ parent }: any) => parent?.blockType !== 'certifications'
    },
    {
      name: 'commendationsSection',
      title: 'Commendations Section Content',
      type: 'commendationsSection',
      hidden: ({ parent }: any) => parent?.blockType !== 'commendations'
    },
    {
      name: 'contactSection',
      title: 'Contact Section Content',
      type: 'contactSection',
      hidden: ({ parent }: any) => parent?.blockType !== 'contact'
    }
  ],
  preview: {
    select: {
      title: 'blockType',
      subtitle: 'order',
      background: 'backgroundStyle.type'
    },
    prepare({ title, subtitle, background }: any) {
      return {
        title: `${title.charAt(0).toUpperCase() + title.slice(1)} Section`,
        subtitle: `Order: ${subtitle} | Background: ${background || 'default'}`
      };
    }
  }
};
