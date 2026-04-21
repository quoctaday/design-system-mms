import React from 'react';
import { cn } from '../../../lib/utils';
import './Breadcrumbs.css';

export interface BreadcrumbItem {
  id: string;
  label: string;
  href?: string;
  active?: boolean;
}

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  onItemClick?: (item: BreadcrumbItem) => void;
}

const DefaultSeparator = () => (
  <div className="mms-breadcrumbs-separator">
    <div className="separator-dot" />
  </div>
);

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  separator = <DefaultSeparator />,
  onItemClick,
  className,
  ...props
}) => {
  return (
    <nav 
      aria-label="Breadcrumb" 
      className={cn('mms-breadcrumbs', className)} 
      {...props}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        
        return (
          <React.Fragment key={item.id}>
            <div className={cn('mms-breadcrumbs-item', item.active && 'active')}>
              {item.href ? (
                <a 
                  href={item.href} 
                  onClick={(e) => {
                    if (onItemClick) {
                      e.preventDefault();
                      onItemClick(item);
                    }
                  }}
                >
                  {item.label}
                </a>
              ) : (
                <span>{item.label}</span>
              )}
            </div>
            {!isLast && separator}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

Breadcrumbs.displayName = 'Breadcrumbs';
