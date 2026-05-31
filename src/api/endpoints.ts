// Auth endpoints
export const AUTH_ENDPOINTS = {
  LOGIN: '/auth/login',
  SIGNUP: '/auth/signup',
  LOGOUT: '/auth/logout',
  REFRESH: '/auth/refresh',
  ME: '/auth/me',
};

// User endpoints
export const USER_ENDPOINTS = {
  GET_USERS: '/users',
  GET_USER: (id: string) => `/users/${id}`,
  CREATE_USER: '/users',
  UPDATE_USER: (id: string) => `/users/${id}`,
  DELETE_USER: (id: string) => `/users/${id}`,
};

// Add more endpoints as needed
