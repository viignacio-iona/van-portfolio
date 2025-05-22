export default {
  name: 'commendation',
  title: 'Commendation',
  type: 'document',
  fields: [
    { name: 'content', title: 'Content', type: 'text' },
    { name: 'author', title: 'Author', type: 'object', fields: [
      { name: 'name', title: 'Name', type: 'string' },
      { name: 'role', title: 'Role', type: 'string' },
      { name: 'company', title: 'Company', type: 'string' },
      { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    ] },
    { name: 'publishedAt', title: 'Published At', type: 'datetime' },
    { name: 'updatedAt', title: 'Updated At', type: 'datetime' },
  ]
}; 