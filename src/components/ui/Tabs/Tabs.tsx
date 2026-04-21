import React, { createContext, useContext, useState, useRef, useLayoutEffect, useCallback, useMemo, useEffect } from 'react';
import { cn } from '../../../lib/utils';
import { useControllableState, useKeyboardListNav } from '../../../lib/mms-engine';
import { extractMMSProps } from '../../../helpers/extract-mms-props';
import './Tabs.css';

export type TabsVariant = 'classic' | 'surface';

interface TabsContextProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
  variant: TabsVariant;
  size: '1' | '2';
  radius: string;
  listRef: React.RefObject<HTMLDivElement | null>;
  registerItem: (value: string) => () => void;
  highlightedIndex: number;
}

const TabsContext = createContext<TabsContextProps | undefined>(undefined);

function useTabs() {
  const context = useContext(TabsContext);
  if (!context) throw new Error('Tabs components must be used within a Tabs.Root');
  return context;
}

// --- Root ---
export interface TabsRootProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  defaultValue?: string;
  variant?: TabsVariant;
  size?: '1' | '2';
  radius?: 'none' | 'small' | 'medium' | 'large' | 'full';
  onValueChange?: (value: string) => void;
}

const TabsRoot: React.FC<TabsRootProps> = (props) => {
  const { 
    value: propValue, 
    defaultValue, 
    onValueChange, 
    className, 
    children, 
    ...mmsBase 
  } = props;

  const [activeTab, setActiveTab] = useControllableState({ 
    prop: propValue, 
    defaultProp: defaultValue, 
    onChange: onValueChange 
  });

  const { mmsClasses, size, variant, radius } = extractMMSProps(mmsBase as any, 'tabs', { size: '2', variant: 'classic', radius: 'medium' });
  
  const listRef = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<string[]>([]);
  
  const registerItem = useCallback((val: string) => {
    setItems(prev => [...prev, val]);
    return () => setItems(prev => prev.filter(i => i !== val));
  }, []);

  const { highlightedIndex, handleKeyDown } = useKeyboardListNav({
    items,
    active: true,
    orientation: 'horizontal',
    onSelect: (val) => setActiveTab(val)
  });

  const contextValue = useMemo(() => ({
    activeTab: activeTab || '',
    setActiveTab,
    variant: variant as any,
    size: size as any,
    radius: radius as any,
    listRef,
    registerItem,
    highlightedIndex,
    items
  }), [activeTab, setActiveTab, variant, size, radius, highlightedIndex, registerItem, items]);

  return (
    <TabsContext.Provider value={contextValue}>
      <div 
        className={cn('mms-tabs-root', className)} 
        onKeyDown={handleKeyDown}
        {...mmsBase}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
};

// --- List ---
export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {}

export const TabsList = ({ className, children, ...props }: TabsListProps) => {
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
  }, [activeTab, listRef]);

  return (
    <div 
      ref={(node) => { (listRef as any).current = node; }}
      className={cn(
        'mms-tabs-list', 
        `mms-tabs-list-size-${size}`,
        `mms-tabs-list-radius-${radius}`,
        className
      )} 
      data-variant={variant}
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

// --- Trigger ---
export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

export const TabsTrigger = ({ value, className, children, ...props }: TabsTriggerProps) => {
  const { activeTab, setActiveTab, size, radius, registerItem, highlightedIndex, items } = useTabs();
  const isActive = activeTab === value;
  
  useEffect(() => registerItem(value), [value, registerItem]);

  const index = items.indexOf(value);
  const isHighlighted = highlightedIndex === index;

  return (
    <button
      type="button"
      className={cn(
        'mms-tabs-trigger',
        `mms-tabs-trigger-size-${size}`,
        `mms-tabs-trigger-radius-${radius}`,
        isHighlighted && 'mms-tabs-trigger-highlighted',
        className
      )}
      role="tab"
      aria-selected={isActive}
      data-state={isActive ? 'active' : 'inactive'}
      onClick={() => setActiveTab(value)}
      {...props}
    >
      <span className="mms-tabs-trigger-inner" aria-hidden={isActive ? undefined : true}>
        {children}
      </span>
      <span className="mms-tabs-trigger-inner-hidden" aria-hidden="true">
        {children}
      </span>
    </button>
  );
};

// --- Content ---
export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const TabsContent = ({ value, className, children, ...props }: TabsContentProps) => {
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

export const Tabs = Object.assign(TabsRoot, {
  Root: TabsRoot,
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
});

export default Tabs;
