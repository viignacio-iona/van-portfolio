export interface Certification {
  _id: string;
  _type: 'certification';
  title: string;
  issuer: string;
  issueDate?: string;
  expirationDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  description?: string;
  image?: {
    asset: {
      url: string;
    };
  };
}

export interface CertificationsSection {
  title?: string;
  subtitle?: string;
  description?: string;
  certifications?: Certification[];
  layout?: 'grid-2' | 'grid-3' | 'list';
  showDates?: boolean;
}

