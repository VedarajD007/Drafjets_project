// Contact Information
export const CONTACT_INFO = {
  phones: ['7411061639', '8073028732', '8088128508'],
  email: 'drafjet.solutions@gmail.com',
  whatsappNumber: '7411061639',
};

// Services
export const SERVICES = [
  {
    id: '1',
    title: 'Web & Full-Stack Development',
    description: 'Build scalable web applications using modern tech stack',
    icon: 'Code',
  },
  {
    id: '2',
    title: 'MERN Stack Projects',
    description: 'MongoDB, Express, React, Node.js based projects',
    icon: 'Database',
  },
  {
    id: '3',
    title: 'Mini & Major Projects',
    description: 'Complete project solutions for IT students',
    icon: 'Zap',
  },
  {
    id: '4',
    title: 'Custom Software Solutions',
    description: 'Tailored software solutions for your needs',
    icon: 'Settings',
  },
  {
    id: '5',
    title: 'IoT Solutions',
    description: 'Internet of Things projects and implementations',
    icon: 'Wifi',
  },
  {
    id: '6',
    title: 'Machine Learning Solutions',
    description: 'AI/ML projects and intelligent systems',
    icon: 'Brain',
  },
];

// Why Choose Us
export const WHY_CHOOSE_US = [
  {
    title: 'Simple & Scalable',
    icon: 'Layers',
  },
  {
    title: 'Modern Technologies',
    icon: 'Sparkles',
  },
  {
    title: 'Reliable Delivery',
    icon: 'CheckCircle',
  },
  {
    title: 'Affordable Pricing',
    icon: 'DollarSign',
  },
  {
    title: 'Live Doubt Solving Sessions',
    icon: 'MessageSquare',
  },
];

// Project Categories
export const PROJECT_CATEGORIES = [
  { label: 'All', value: 'all' },
  { label: 'Mini', value: 'Mini' },
  { label: 'Major', value: 'Major' },
  { label: 'MERN', value: 'MERN' },
  { label: 'ML', value: 'ML' },
  { label: 'IoT', value: 'IoT' },
  { label: 'ECE', value: 'ECE' },
];

// Site Info
export const SITE_CONFIG = {
  name: 'DrafJets',
  tagline: 'Develop and Deploy',
  description: 'Professional Mini & Major Projects for IT Students',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
};
