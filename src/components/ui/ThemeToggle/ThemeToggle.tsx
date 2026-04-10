import React from 'react';
import { RiSunLine, RiMoonLine } from 'react-icons/ri';
import { useTheme } from '../../../contexts/ThemeContext';
import { cn } from '../../../lib/utils';
import './ThemeToggle.css';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className, showLabel }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={cn('mms-theme-toggle', className)}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="toggle-icon-wrapper">
        {theme === 'light' ? (
          <RiMoonLine className="toggle-icon moon" />
        ) : (
          <RiSunLine className="toggle-icon sun" />
        )}
      </div>
      {showLabel && (
        <span className="toggle-label">
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </span>
      )}
    </button>
  );
};
