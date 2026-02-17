// Project Types
export interface Project {
  _id?: string;
  projectId: string;
  projectName: string;
  category: 'Mini' | 'Major';
  domain: string;
  technologyStack: string[];
  branch: string;
  difficultyLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  longDescription?: string;
  imageUrl?: string;
  pdfUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Service Types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  link?: string;
}

// Contact Types
export interface ContactMessage {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt?: Date;
}

// Admin Types
export interface AdminUser {
  username: string;
  password: string;
}
