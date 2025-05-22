export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expirationDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  description: string;
  imageUrl: string;
}

export interface SanityCertification {
  _id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expirationDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  description: string;
  image?: {
    asset: {
      url: string;
    };
  };
}

export interface CertificationsSection {
  title: string;
  subtitle: string;
  description: string;
  certifications: Certification[];
} 