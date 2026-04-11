import React, { useState, useMemo, useEffect } from 'react';
import { cn } from '../../lib/utils';
import { BrandPanel, Sidebar, Search } from '../ui';
import { RiArrowDownSLine, RiArrowRightSLine, RiStackLine, RiCursorLine, RiCompass3Line, RiTableLine, RiChat3Line, RiMagicLine, RiGridLine, RiLayoutLine } from 'react-icons/ri';
import './Layout.css';

interface NavItem {
  id: string;
  label: string;
}

interface NavGroup {
  id: string;
  title: string;
  icon: React.ReactNode;
  items: NavItem[];
}

const NAVIGATION_DATA: NavGroup[] = [
  {
    id: 'foundation',
    title: 'Foundation',
    icon: <RiStackLine />,
    items: [
      { id: 'intro', label: 'Introduction' },
      { id: 'theme', label: 'Theming' },
      { id: 'colors', label: 'Colors' },
      { id: 'typography', label: 'Typography' },
      { id: 'premium-aesthetic', label: 'Visual Aesthetic' },
    ],
  },
  {
    id: 'inputs',
    title: 'Action & Input',
    icon: <RiCursorLine />,
    items: [
      { id: 'button', label: 'Button' },
      { id: 'input', label: 'Input' },
      { id: 'checkbox', label: 'Checkbox' },
      { id: 'switch', label: 'Switch' },
      { id: 'datepicker', label: 'DatePicker' },
      { id: 'forms', label: 'Advanced Forms' },
    ],
  },
  {
    id: 'navigation',
    title: 'Navigation',
    icon: <RiCompass3Line />,
    items: [
      { id: 'breadcrumbs', label: 'Breadcrumbs' },
      { id: 'pagination', label: 'Pagination' },
      { id: 'tabs', label: 'Tabs' },
      { id: 'segmented-control', label: 'Segmented Control' },
    ],
  },
  {
    id: 'display',
    title: 'Data Display',
    icon: <RiTableLine />,
    items: [
      { id: 'badge', label: 'Badge' },
      { id: 'table', label: 'Table' },
      { id: 'timeline', label: 'Timeline' },
    ],
  },
  {
    id: 'feedback',
    title: 'Feedback & Overlay',
    icon: <RiChat3Line />,
    items: [
      { id: 'tooltip', label: 'Tooltip' },
      { id: 'dropdown', label: 'Dropdown' },
      { id: 'modal', label: 'Modal' },
      { id: 'toast', label: 'Toast' },
      { id: 'result', label: 'Result' },
      { id: 'empty-state', label: 'Empty State' },
    ],
  },
  {
    id: 'special',
    title: 'Special FX',
    icon: <RiMagicLine />,
    items: [
      { id: 'aurora', label: 'Aurora Background' },
    ],
  },
  {
    id: 'widgets',
    title: 'Widgets',
    icon: <RiGridLine />,
    items: [
      { id: 'metrics-card', label: 'Metrics Card' },
    ],
  },
  {
    id: 'examples',
    title: 'Examples',
    icon: <RiLayoutLine />,
    items: [
      { id: 'dashboard', label: 'Dashboard' },
      { id: 'operation-center', label: 'Operation Center' },
      { id: 'pie-chart', label: 'Pie Chart' },
    ],
  },
];

interface LayoutProps {
  children: React.ReactNode;
  activePage: string;
  onPageChange: (page: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activePage, onPageChange }) => {
  const isDashboard = activePage === 'dashboard' || activePage === 'operation-center';
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(() => {
    // Expand the section containing the active page by default
    const initialExpanded: Record<string, boolean> = {};
    NAVIGATION_DATA.forEach(group => {
      if (group.items.some(item => item.id === activePage)) {
        initialExpanded[group.id] = true;
      } else {
        // Foundation is usually open by default
        if (group.id === 'foundation') initialExpanded[group.id] = true;
      }
    });
    return initialExpanded;
  });

  // Filter navigation based on search term
  const filteredNav = useMemo(() => {
    if (!searchTerm) return NAVIGATION_DATA;
    
    return NAVIGATION_DATA.map(group => ({
      ...group,
      items: group.items.filter(item => 
        item.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(group => group.items.length > 0);
  }, [searchTerm]);

  // Expand all sections when searching
  useEffect(() => {
    if (searchTerm) {
      const allExpanded: Record<string, boolean> = {};
      filteredNav.forEach(group => {
        allExpanded[group.id] = true;
      });
      setExpandedSections(allExpanded);
    }
  }, [searchTerm, filteredNav]);

  const toggleSection = (groupId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [groupId]: !prev[groupId]
    }));
  };

  return (
    <div className={cn("docs-layout", isDashboard && "dashboard-view")}>
      {!isDashboard && (
        <Sidebar onLogoClick={() => onPageChange('intro')}>
          <div className="sidebar-search">
            <Search 
              placeholder="Search components..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              variant="soft"
              size="2"
              radius="full"
            />
          </div>

          <div className="sidebar-scroll-area">
            {filteredNav.map((group) => (
              <div key={group.id} className="sidebar-nav-group">
                <div 
                  className="nav-group-header" 
                  onClick={() => toggleSection(group.id)}
                >
                  <div className="nav-group-title-wrapper">
                    <span className="nav-group-icon">{group.icon}</span>
                    <span className="nav-group-title">{group.title}</span>
                  </div>
                  {expandedSections[group.id] ? <RiArrowDownSLine /> : <RiArrowRightSLine />}
                </div>
                
                {expandedSections[group.id] && (
                  <div className="nav-items-container">
                    {group.items.map((item) => (
                      <button 
                        key={item.id}
                        onClick={() => onPageChange(item.id)} 
                        className={cn("nav-item", activePage === item.id && "active")}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {filteredNav.length === 0 && (
              <div className="search-no-results">
                No components found for "{searchTerm}"
              </div>
            )}
          </div>
        </Sidebar>
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
