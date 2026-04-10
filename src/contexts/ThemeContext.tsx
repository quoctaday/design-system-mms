import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type Theme = 'light' | 'dark';
type Radius = 'none' | 'small' | 'medium' | 'large' | 'full';

interface ThemeContextValue {
  theme: Theme;
  radius: Radius;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  setRadius: (radius: Radius) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Theme state
  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem('mms-theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Radius state
  const [radius, setRadiusState] = useState<Radius>(() => {
    const saved = localStorage.getItem('mms-radius') as Radius;
    if (['none', 'small', 'medium', 'large', 'full'].includes(saved)) return saved;
    return 'medium';
  });

  // Apply Theme
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
    }
    localStorage.setItem('mms-theme', theme);
  }, [theme]);

  // Apply Radius
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--radius-default', `var(--radius-${radius})`);
    localStorage.setItem('mms-radius', radius);
  }, [radius]);

  const toggleTheme = () => {
    setThemeState(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const setRadius = (newRadius: Radius) => {
    setRadiusState(newRadius);
  };

  return (
    <ThemeContext.Provider value={{ theme, radius, toggleTheme, setTheme, setRadius }}>
      {children}
    </ThemeContext.Provider>
  );
};
