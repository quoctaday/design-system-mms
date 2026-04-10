import React from 'react';
import { cn } from '../../../lib/utils';
import { useBrand } from '../../../contexts/BrandContext';
import './Sidebar.css';

interface SidebarProps {
  children?: React.ReactNode;
  footer?: React.ReactNode;
  onLogoClick?: () => void;
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  children, 
  footer, 
  onLogoClick,
  className 
}) => {
  const { activeBrand } = useBrand();

  return (
    <aside className={cn("mms-sidebar", className)}>
      <div 
        className="sidebar-logo" 
        onClick={onLogoClick} 
        style={{ cursor: onLogoClick ? 'pointer' : 'default' }}
      >
        <div className="logo-box">
          <img src={activeBrand.logo} alt={activeBrand.name} />
        </div>
      </div>
      
      <div className="sidebar-content">
        {children}
      </div>

      {footer && (
        <div className="sidebar-footer">
          {footer}
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
