// Project Types
export interface Project {
  _id?: string;
  id?: string;
  title: string;
  description: string;
  shortDescription: string;
  domain: string;
  category: 'mini' | 'major';
  technologies: string[];
  branch: 'CSE' | 'ISE' | 'ECE' | 'ME' | 'CE';
  year: number;
  price?: number;
  image?: string;
  pdfUrl?: string;
  features?: string[];
  architecture?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Filter options
export interface FilterOptions {
  category?: string;
  domain?: string;
  technologies?: string[];
  branch?: string;
}

// Contact Form
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// Service Card
export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

// User (for admin)
export interface User {
  _id?: string;
  email: string;
  password?: string;
  name: string;
  role: 'admin' | 'user';
  createdAt?: Date;
}
