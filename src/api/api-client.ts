import axios from 'axios';

const getBaseUrl = () => {
  if (import.meta.env.DEV) {
    // In development, use relative path for proxy
    return '/api';
  }
  // In production/staging, use the full URL
  return `/api`;
};

export const apiClient = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Important for CSRF tokens
});

export default apiClient;