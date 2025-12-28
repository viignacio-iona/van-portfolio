export default {
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
    {
      name: 'fullName',
      title: 'Full Name',
      description: 'The person\'s full name (e.g., "Van Ian Ignacio")',
      type: 'string'
    },
    {
      name: 'professionalTitle',
      title: 'Professional Title',
      description: 'Job title or role (e.g., "QA Consultant", "Software Engineer")',
      type: 'string'
    },
    {
      name: 'tagline',
      title: 'Tagline',
      description: 'Optional catchy phrase or description',
      type: 'string'
    },
    {
      name: 'cta1',
      title: 'CTA 1 - Download Resume',
      description: 'Optional download resume button',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Button Text',
          type: 'string',
          initialValue: 'Download Resume'
        },
        {
          name: 'url',
          title: 'Resume URL',
          description: 'External link to resume (Google Drive, etc.)',
          type: 'url'
        },
        {
          name: 'isExternal',
          title: 'External Link',
          description: 'Check if this opens in a new tab',
          type: 'boolean',
          initialValue: true
        }
      ],
      preview: {
        select: {
          title: 'text',
          url: 'url'
        },
        prepare({ title, url }: any) {
          return {
            title: title || 'Download Resume',
            subtitle: url || 'No URL set'
          };
        }
      }
    },
    {
      name: 'cta2',
      title: 'CTA 2 - Contact',
      description: 'Optional contact button that opens default email app',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Button Text',
          type: 'string',
          initialValue: 'Get in Touch'
        },
        {
          name: 'email',
          title: 'Contact Email',
          description: 'Email address for the contact button (opens default email app)',
          type: 'string',
          validation: (Rule: any) => Rule.email('Please enter a valid email address')
        }
      ],
      preview: {
        select: {
          title: 'text',
          email: 'email'
        },
        prepare({ title, email }: any) {
          return {
            title: title || 'Contact',
            subtitle: email || 'No email set'
          };
        }
      }
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      description: 'Optional profile picture',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: {
      fullName: 'fullName',
      professionalTitle: 'professionalTitle'
    },
    prepare({ fullName, professionalTitle }: any) {
      return {
        title: fullName || 'No name',
        subtitle: professionalTitle || 'No title'
      };
    }
  }
};
