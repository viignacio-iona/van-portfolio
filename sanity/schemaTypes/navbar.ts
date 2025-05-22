export default {
  name: 'navbar',
  title: 'Navbar',
  type: 'document',
  fields: [
    { name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'href', title: 'Href', type: 'string' },
          ]
        }
      ]
    }
  ]
}; 