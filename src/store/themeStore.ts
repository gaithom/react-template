// Theme store - Example using Zustand or Context API
// Update based on your state management preference

type Theme = 'light' | 'dark' | 'auto';

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

// Example for Zustand pattern
export const useThemeStore = (): ThemeState => {
  const theme = (localStorage.getItem('theme') as Theme) || 'auto';

  const setTheme = (newTheme: Theme) => {
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return {
    theme,
    setTheme,
  };
};

// Or use Context API with this interface
export type { Theme, ThemeState };
