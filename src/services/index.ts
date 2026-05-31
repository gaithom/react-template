// API service layer
// Organize API calls here

import instance from '../api/axios';
import { AUTH_ENDPOINTS } from '../api/endpoints';

export const authService = {
  login: (email: string, password: string) =>
    instance.post(AUTH_ENDPOINTS.LOGIN, { email, password }),
  logout: () => instance.post(AUTH_ENDPOINTS.LOGOUT),
  getMe: () => instance.get(AUTH_ENDPOINTS.ME),
};

// Add more services as needed
