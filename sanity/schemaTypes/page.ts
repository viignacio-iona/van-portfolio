export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'isHomePage',
      title: 'Is Home Page',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'navbar',
      title: 'Navigation Bar',
      type: 'reference',
      to: [{ type: 'navbar' }]
    },
    {
      name: 'footer',
      title: 'Footer',
      type: 'reference',
      to: [{ type: 'footer' }]
    },
    {
      name: 'layoutBlocks',
      title: 'Layout Blocks',
      type: 'array',
      of: [{ type: 'layoutBlock' }],
      options: {
        layout: 'list',
        sortable: true,
        reorderable: true
      }
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string'
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3
        },
        {
          name: 'ogImage',
          title: 'Open Graph Image',
          type: 'image'
        }
      ]
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    }
  ],
  preview: {
    select: {
      title: 'title',
      isHomePage: 'isHomePage',
      blockCount: 'layoutBlocks.length'
    },
    prepare({ title, isHomePage, blockCount }: any) {
      return {
        title: title,
        subtitle: `${isHomePage ? 'Home Page' : 'Page'} • ${blockCount || 0} sections`
      };
    }
  }
};
