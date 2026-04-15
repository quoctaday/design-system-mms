import React, { createContext, useContext, useState, useRef, useLayoutEffect, type ReactNode } from 'react';
import { cn } from '../../../lib/utils';
import './Tabs.css';

export type TabsVariant = 'classic' | 'surface';

interface TabsContextProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
  variant: TabsVariant;
  size: '1' | '2';
  radius: 'none' | '1' | '2' | '3' | '4' | '5' | '6' | 'full';
  listRef: React.RefObject<HTMLDivElement>;
  registerTrigger: (value: string, element: HTMLButtonElement) => void;
}

const TabsContext = createContext<TabsContextProps | undefined>(undefined);

function useTabs() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used within a Tabs.Root');
  }
  return context;
}

/* ─────────────────────────────────────────────────────────
 * 1. Tabs.Root
 * ───────────────────────────────────────────────────────── */

export interface TabsRootProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  defaultValue?: string;
  variant?: TabsVariant;
  size?: '1' | '2';
  radius?: 'none' | '1' | '2' | '3' | '4' | '5' | '6' | 'full';
  onValueChange?: (value: string) => void;
}

const TabsRoot = ({ 
  value,
  defaultValue, 
  variant = 'classic', 
  size = '2',
  radius = '4',
  onValueChange, 
  className, 
  children, 
  ...props 
}: TabsRootProps) => {
  const [internalTab, setInternalTab] = useState(defaultValue || value || '');
  const activeTab = value !== undefined ? value : internalTab;
  const listRef = useRef<HTMLDivElement>(null);
  const triggersMap = useRef<Map<string, HTMLButtonElement>>(new Map());

  const setActiveTab = (newValue: string) => {
    if (value === undefined) {
      setInternalTab(newValue);
    }
    onValueChange?.(newValue);
  };

  const registerTrigger = (val: string, el: HTMLButtonElement) => {
    if (el) triggersMap.current.set(val, el);
    else triggersMap.current.delete(val);
  };

  return (
    <TabsContext.Provider value={{ 
      activeTab, 
      setActiveTab, 
      variant, 
      size, 
      radius, 
      listRef, 
      registerTrigger 
    }}>
      <div className={cn('mms-tabs-root', className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

/* ─────────────────────────────────────────────────────────
 * 2. Tabs.List
 * ───────────────────────────────────────────────────────── */

export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {}

const TabsList = ({ className, children, ...props }: TabsListProps) => {
  const { variant, size, radius, activeTab, listRef } = useTabs();
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({ opacity: 0 });

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const activeNode = list.querySelector(`[data-state="active"]`) as HTMLElement;
    if (activeNode) {
      setIndicatorStyle({
        width: activeNode.offsetWidth,
        transform: `translateX(${activeNode.offsetLeft}px)`,
        opacity: 1
      });
    }
  }, [activeTab]);

  return (
    <div 
      className={cn(
        'mms-tabs-list', 
        `mms-tabs-list-size-${size}`,
        `mms-tabs-list-radius-${radius}`,
        className
      )} 
      data-variant={variant}
      ref={listRef}
      {...props}
    >
      <div 
        className="mms-tabs-indicator" 
        style={indicatorStyle}
        data-variant={variant}
      />
      {children}
    </div>
  );
};

/* ─────────────────────────────────────────────────────────
 * 3. Tabs.Trigger
 * ───────────────────────────────────────────────────────── */

export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

const TabsTrigger = ({ value, className, children, ...props }: TabsTriggerProps) => {
  const { activeTab, setActiveTab, size, radius, registerTrigger } = useTabs();
  const isActive = activeTab === value;

  const triggerRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    if (triggerRef.current) {
      registerTrigger(value, triggerRef.current);
    }
  }, [value]);

  return (
    <button
      ref={triggerRef}
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
      <span className="mms-tabs-trigger-inner">{children}</span>
    </button>
  );
};

/* ─────────────────────────────────────────────────────────
 * 4. Tabs.Content
 * ───────────────────────────────────────────────────────── */

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
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

// Compound Component Export
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
