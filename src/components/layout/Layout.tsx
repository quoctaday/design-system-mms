import React from 'react';
import { cn } from '../../lib/utils';
import { BrandPanel } from '../ui/BrandSwitcher/BrandSwitcher';
import './Layout.css';
import logo from '../../assets/Q logo.svg';

interface LayoutProps {
  children: React.ReactNode;
  activePage: string;
  onPageChange: (page: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activePage, onPageChange }) => {
  const isDashboard = activePage === 'dashboard';

  return (
    <div className={cn("docs-layout", isDashboard && "dashboard-view")}>
      {!isDashboard && (
        <aside className="docs-sidebar">
        <div className="sidebar-logo">
          <img src={logo} alt="MMS Logo" style={{ height: 40, width: 'auto' }} />
        </div>
        
        <div className="sidebar-nav-group">
          <div className="nav-group-title">Getting Started</div>
          <button onClick={() => onPageChange('intro')} className={cn("nav-item", activePage === 'intro' && "active")}>Introduction</button>
          <button onClick={() => onPageChange('theme')} className={cn("nav-item", activePage === 'theme' && "active")}>Theming</button>
          <button onClick={() => onPageChange('colors')} className={cn("nav-item", activePage === 'colors' && "active")}>Colors</button>
        </div>

        <div className="sidebar-nav-group">
          <div className="nav-group-title">Components</div>
          <button onClick={() => onPageChange('badge')} className={cn("nav-item", activePage === 'badge' && "active")}>Badge</button>
          <button onClick={() => onPageChange('tabs')} className={cn("nav-item", activePage === 'tabs' && "active")}>Tabs</button>
          <button onClick={() => onPageChange('button')} className={cn("nav-item", activePage === 'button' && "active")}>Button</button>
          <button onClick={() => onPageChange('input')} className={cn("nav-item", activePage === 'input' && "active")}>Input</button>
          <button onClick={() => onPageChange('checkbox')} className={cn("nav-item", activePage === 'checkbox' && "active")}>Checkbox</button>
          <button onClick={() => onPageChange('pagination')} className={cn("nav-item", activePage === 'pagination' && "active")}>Pagination</button>
          <button onClick={() => onPageChange('table')} className={cn("nav-item", activePage === 'table' && "active")}>Table</button>
          <button onClick={() => onPageChange('dropdown')} className={cn("nav-item", activePage === 'dropdown' && "active")}>Dropdown</button>
          <button onClick={() => onPageChange('tooltip')} className={cn("nav-item", activePage === 'tooltip' && "active")}>Tooltip</button>
          <button onClick={() => onPageChange('modal')} className={cn("nav-item", activePage === 'modal' && "active")}>Modal</button>
          <button onClick={() => onPageChange('switch')} className={cn("nav-item", activePage === 'switch' && "active")}>Switch</button>
          <button onClick={() => onPageChange('segmented-control')} className={cn("nav-item", activePage === 'segmented-control' && "active")}>Segmented Control</button>
          <button onClick={() => onPageChange('datepicker')} className={cn("nav-item", activePage === 'datepicker' && "active")}>DatePicker</button>
          <button onClick={() => onPageChange('toast')} className={cn("nav-item", activePage === 'toast' && "active")}>Toast</button>
          {/* Metric Card removed to consolidate into Widget Library */}
          <button onClick={() => onPageChange('forms')} className={cn("nav-item", activePage === 'forms' && "active")}>Advanced Forms</button>
        </div>
        <div className="sidebar-nav-group">
          <div className="nav-group-title">Widgets</div>
          <button onClick={() => onPageChange('widget-library')} className={cn("nav-item", activePage === 'widget-library' && "active")}>Widget Library</button>
        </div>
        <div className="sidebar-nav-group">
          <div className="nav-group-title">Examples</div>
          <button onClick={() => onPageChange('dashboard')} className={cn("nav-item", activePage === 'dashboard' && "active")}>Dashboard</button>
          <button onClick={() => onPageChange('pie-chart')} className={cn("nav-item", activePage === 'pie-chart' && "active")}>Pie Chart</button>
        </div>
      </aside>
      )}

      <main className={cn("docs-content", isDashboard && "no-padding")}>
        {children}
      </main>

      {/* Fixed floating brand panel — top-right */}
      <BrandPanel />
    </div>
  );
};

export default Layout;
