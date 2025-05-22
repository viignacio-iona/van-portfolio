export default {
  name: 'skill',
  title: 'Skill/Expertise',
  type: 'document',
  fields: [
    { name: 'category', title: 'Category', type: 'string' },
    { name: 'skills', title: 'Skills', type: 'array', of: [{ type: 'string' }] },
  ],
}; 