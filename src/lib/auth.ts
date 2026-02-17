// Simple auth utility for admin
export const validateAdminCredentials = (username: string, password: string): boolean => {
  const adminUsername = process.env.NEXT_PUBLIC_ADMIN_USERNAME || 'admin';
  const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'drafjet2026';

  return username === adminUsername && password === adminPassword;
};

// Get admin token from localStorage
export const getAdminToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('adminToken');
};

// Set admin token in localStorage
export const setAdminToken = (token: string): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('adminToken', token);
};

// Clear admin token
export const clearAdminToken = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('adminToken');
};
