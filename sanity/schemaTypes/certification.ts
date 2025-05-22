export default {
  name: 'certification',
  title: 'Certification',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'issuer', title: 'Issuer', type: 'string' },
    { name: 'issueDate', title: 'Issue Date', type: 'date' },
    { name: 'expirationDate', title: 'Expiration Date', type: 'date' },
    { name: 'credentialId', title: 'Credential ID', type: 'string' },
    { name: 'credentialUrl', title: 'Credential URL', type: 'url' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
  ],
}; 