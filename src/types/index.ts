// Export all type definitions from this file

export interface AppConfig {
  apiUrl: string;
  appName: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}
