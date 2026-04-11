import React, { createContext, useContext, useState, type ReactNode, useEffect } from 'react';
import { cn } from '../../../lib/utils';
import './Tabs.css';

export type TabsVariant = 'line' | 'border' | 'simple' | 'toggle';

interface TabsContextProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
  variant: TabsVariant;
  size: '1' | '2';
  radius: 'none' | 'sm' | 'md' | 'lg' | 'full';
}

const TabsContext = createContext<TabsContextProps | undefined>(undefined);

function useTabs() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used within a Tabs.Root');
  }
  return context;
}

export interface TabsRootProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  defaultValue?: string;
  variant?: TabsVariant;
  size?: '1' | '2';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  onValueChange?: (value: string) => void;
  children: ReactNode;
}

const TabsRoot = ({ 
  value,
  defaultValue, 
  variant = 'line', 
  size = '2',
  radius = 'md',
  onValueChange, 
  className, 
  children, 
  ...props 
}: TabsRootProps) => {
  const [internalTab, setInternalTab] = useState(defaultValue || value || '');
  const activeTab = value !== undefined ? value : internalTab;

  const setActiveTab = (newValue: string) => {
    if (value === undefined) {
      setInternalTab(newValue);
    }
    onValueChange?.(newValue);
  };

  useEffect(() => {
    if (value !== undefined) {
      setInternalTab(value);
    }
  }, [value]);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab, variant, size, radius }}>
      <div className={cn('mms-tabs-root', className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const TabsList = ({ className, children, ...props }: TabsListProps) => {
  const { variant, size, radius } = useTabs();
  return (
    <div 
      className={cn(
        'mms-tabs-list', 
        `mms-tabs-list-size-${size}`,
        `mms-tabs-list-radius-${radius}`,
        className
      )} 
      data-variant={variant}
      {...props}
    >
      {children}
    </div>
  );
};

export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  children: ReactNode;
}

const TabsTrigger = ({ value, className, children, ...props }: TabsTriggerProps) => {
  const { activeTab, setActiveTab, size, radius } = useTabs();
  const isActive = activeTab === value;

  return (
    <button
      type="button"
      className={cn(
        'mms-tabs-trigger',
        `mms-tabs-trigger-size-${size}`,
        `mms-tabs-trigger-radius-${radius}`,
        className
      )}
      data-state={isActive ? 'active' : 'inactive'}
      onClick={() => setActiveTab(value)}
      {...props}
    >
      {children}
    </button>
  );
};

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  children: ReactNode;
}

const TabsContent = ({ value, className, children, ...props }: TabsContentProps) => {
  const { activeTab } = useTabs();
  const isActive = activeTab === value;

  if (!isActive) return null;

  return (
    <div
      className={cn('mms-tabs-content', className)}
      data-state={isActive ? 'active' : 'inactive'}
      tabIndex={0}
      role="tabpanel"
      {...props}
    >
      {children}
    </div>
  );
};

// Compound Component Export with proper typing
export interface TabsComponentType extends React.FC<TabsRootProps> {
  List: typeof TabsList;
  Trigger: typeof TabsTrigger;
  Content: typeof TabsContent;
}

export const Tabs = TabsRoot as TabsComponentType;
Tabs.List = TabsList;
Tabs.Trigger = TabsTrigger;
Tabs.Content = TabsContent;

export default Tabs;
