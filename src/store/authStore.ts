// Auth store - Example using Zustand or Context API
// Update based on your state management preference

import React from "react";

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

// Example for Zustand pattern
export const useAuthStore = () => {
  const [authState, setAuthState] = React.useState<AuthState>(() => ({
    user: null,
    token: null,
    isAuthenticated: false,
  }));

  return {
    authState,
    setAuthState,
  };
};

// Or use Context API with this interface
export type { User, AuthState };
