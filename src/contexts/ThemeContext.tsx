import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type Theme = 'light' | 'dark';
type Radius = 'none' | '1' | '2' | '3' | '4' | '5' | '6' | 'full';
type Scaling = '90' | '95' | '100' | '105' | '110';

interface ThemeContextValue {
  theme: Theme;
  radius: Radius;
  scaling: Scaling;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  setRadius: (radius: Radius) => void;
  setScaling: (scaling: Scaling) => void;
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
    if (['none', '1', '2', '3', '4', '5', '6', 'full'].includes(saved)) return saved;
    return '4';
  });

  // Scaling state
  const [scaling, setScalingState] = useState<Scaling>(() => {
    const saved = localStorage.getItem('mms-scaling') as Scaling;
    if (['90', '95', '100', '105', '110'].includes(saved)) return saved;
    return '100';
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

  // Sync data attributes to root
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-radius', radius);
    root.setAttribute('data-scaling', scaling);
    
    localStorage.setItem('mms-radius', radius);
    localStorage.setItem('mms-scaling', scaling);
  }, [radius, scaling]);

  const toggleTheme = () => {
    setThemeState(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const setRadius = (newRadius: Radius) => {
    setRadiusState(newRadius);
  };

  const setScaling = (newScaling: Scaling) => {
    setScalingState(newScaling);
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      radius, 
      scaling, 
      toggleTheme, 
      setTheme, 
      setRadius, 
      setScaling 
    }}>
      <div id="mms-root" data-radius={radius} data-scaling={scaling}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
