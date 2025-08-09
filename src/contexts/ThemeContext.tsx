import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  actualTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('system');
  const [actualTheme, setActualTheme] = useState<'light' | 'dark'>('dark');

  // Get system preference
  const getSystemTheme = (): 'light' | 'dark' => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  };

  // Calculate actual theme based on preference
  const calculateActualTheme = (themePreference: Theme): 'light' | 'dark' => {
    if (themePreference === 'system') {
      return getSystemTheme();
    }
    return themePreference;
  };

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
      setThemeState(savedTheme);
    } else {
      // Default to system preference
      setThemeState('system');
    }
  }, []);

  // Update actual theme when theme preference changes
  useEffect(() => {
    const newActualTheme = calculateActualTheme(theme);
    setActualTheme(newActualTheme);
    
    // Apply theme to document
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newActualTheme);
    
    // Update CSS custom properties
    updateCSSVariables(newActualTheme);
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      if (theme === 'system') {
        const newActualTheme = getSystemTheme();
        setActualTheme(newActualTheme);
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(newActualTheme);
        updateCSSVariables(newActualTheme);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const updateCSSVariables = (currentTheme: 'light' | 'dark') => {
    const root = document.documentElement;
    
    if (currentTheme === 'dark') {
      // Dark theme (existing theatrical colors)
      root.style.setProperty('--color-bg-primary', '#0f1115');
      root.style.setProperty('--color-bg-secondary', '#303842');
      root.style.setProperty('--color-bg-tertiary', '#1a1f26');
      root.style.setProperty('--color-text-primary', '#f0f0f0');
      root.style.setProperty('--color-text-secondary', '#c1c7cd');
      root.style.setProperty('--color-text-muted', '#8b9199');
      root.style.setProperty('--color-accent-primary', '#597b9c');
      root.style.setProperty('--color-accent-secondary', '#bfa36f');
      root.style.setProperty('--color-accent-hover', '#e6b46a');
      root.style.setProperty('--color-border', '#404854');
      root.style.setProperty('--color-border-light', '#2a3038');
    } else {
      // Light theme (accessible light colors maintaining brand identity)
      root.style.setProperty('--color-bg-primary', '#ffffff');
      root.style.setProperty('--color-bg-secondary', '#f8f9fa');
      root.style.setProperty('--color-bg-tertiary', '#e9ecef');
      root.style.setProperty('--color-text-primary', '#1a1f26');
      root.style.setProperty('--color-text-secondary', '#495057');
      root.style.setProperty('--color-text-muted', '#6c757d');
      root.style.setProperty('--color-accent-primary', '#4a6b8a');
      root.style.setProperty('--color-accent-secondary', '#a08b5a');
      root.style.setProperty('--color-accent-hover', '#8b7340');
      root.style.setProperty('--color-border', '#dee2e6');
      root.style.setProperty('--color-border-light', '#e9ecef');
    }
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleTheme = () => {
    const newTheme = actualTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, actualTheme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};