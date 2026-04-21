import React, { type ReactNode, createContext, useContext } from 'react';
import { cn } from '../../../lib/utils';
import './PremiumBlock.css';
import './PremiumBlockHeader.css';
import '../_internal/base.css';

/* ─────────────────────────────────────────────────────────
 * 1. Context & Types
 * ───────────────────────────────────────────────────────── */

interface PremiumBlockContextValue {
  variant: string;
  radius: string;
  padding: string;
}

const PremiumBlockContext = createContext<PremiumBlockContextValue | undefined>(undefined);

const usePremiumBlock = () => {
  const context = useContext(PremiumBlockContext);
  if (!context) {
    throw new Error('PremiumBlock sub-components must be used within a <PremiumBlock> root.');
  }
  return context;
};

/* ─────────────────────────────────────────────────────────
 * 2. Sub-Components
 * ───────────────────────────────────────────────────────── */

/**
 * PremiumBlock.Header - Decoupled header logic
 */
export interface PremiumBlockHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: ReactNode;
  subtitle?: ReactNode;
  extra?: ReactNode;
  gap?: 'none' | '1' | '2' | '3' | '4';
}

export const PremiumBlockHeader: React.FC<PremiumBlockHeaderProps> = ({
  title,
  subtitle,
  extra,
  gap,
  children,
  className,
  style,
  ...props
}) => {
  return (
    <div 
      className={cn('mms-pblock-header', className)} 
      style={{ 
        ...style,
        ...(gap && { '--pblock-header-gap': `var(--space-${gap === 'none' ? '0' : gap})` } as any)
      }}
      {...props}
    >
      {children ? (
        children
      ) : (
        <>
          <div className="mms-pblock-header-stack">
            {title && <h3 className="mms-pblock-title">{title}</h3>}
            {subtitle && <p className="mms-pblock-subtitle">{subtitle}</p>}
          </div>
          {extra && <div className="mms-pblock-header-extra">{extra}</div>}
        </>
      )}
    </div>
  );
};

/**
 * PremiumBlock.Body - The internal nested card
 */
export interface PremiumBlockBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

export const PremiumBlockBody: React.FC<PremiumBlockBodyProps> = ({
  children,
  padding = 'md',
  className,
  ...props
}) => {
  return (
    <div 
      className={cn(
        'mms-premium-block-body', 
        `mms-pblock-body-p-${padding}`,
        className
      )} 
      {...props}
    >
      <div className="mms-pblock-body-content">
        {children}
      </div>
    </div>
  );
};

/**
 * PremiumBlock.Footer - Handled based on variant
 */
export interface PremiumBlockFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'inside' | 'outside';
}

export const PremiumBlockFooter: React.FC<PremiumBlockFooterProps> = ({
  children,
  variant = 'inside',
  className,
  ...props
}) => {
  return (
    <div 
      className={cn(
        'mms-premium-block-footer',
        variant === 'inside' ? 'mms-pblock-footer-in' : 'mms-pblock-footer-out',
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * PremiumBlock.Tabs - Specialized area for navigation
 */
export const PremiumBlockTabs: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => (
  <div className={cn('mms-premium-block-tabs-area', className)} {...props}>
    {children}
  </div>
);

/* ─────────────────────────────────────────────────────────
 * 3. Root Component
 * ───────────────────────────────────────────────────────── */

export interface PremiumBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'sunken' | 'accent' | 'glass' | 'success' | 'warning' | 'error' | 'surface' | 'panel';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  radius?: '4' | '5' | '6';
  
  /* Backward Compatibility Props */
  title?: ReactNode;
  subtitle?: ReactNode;
  headerExtra?: ReactNode;
  header?: ReactNode;
  tabs?: ReactNode;
  footer?: ReactNode;
  footerVariant?: 'inside' | 'outside';
  innerClassName?: string;
  contentPadding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  headerGap?: 'none' | '1' | '2' | '3' | '4';
}

const PremiumBlockRoot: React.FC<PremiumBlockProps> = ({
  children,
  variant = 'sunken',
  padding = 'sm',
  radius = '6',
  className,
  
  /* Destructuring Legacy Props */
  title,
  subtitle,
  headerExtra,
  header,
  tabs,
  footer,
  footerVariant = 'inside',
  innerClassName,
  contentPadding = 'md',
  headerGap,
  ...props
}) => {
  const isCompound = React.Children.toArray(children).some(
    (child) => React.isValidElement(child) && typeof child.type !== 'string'
  );

  return (
    <PremiumBlockContext.Provider value={{ variant, radius, padding }}>
      <div 
        className={cn(
          'mms-premium-block',
          `mms-premium-block-v-${variant}`,
          `mms-premium-block-r-${radius}`,
          `mms-premium-block-p-${padding}`,
          className
        )}
        {...props}
      >
        {/* Render Logic: Compound vs Monolithic */}
        {isCompound ? (
          children
        ) : (
          <>
            {(header || title || subtitle) && (
              <PremiumBlockHeader title={title} subtitle={subtitle} extra={headerExtra} gap={headerGap}>
                {header}
              </PremiumBlockHeader>
            )}
            
            {tabs && <PremiumBlockTabs>{tabs}</PremiumBlockTabs>}

            {tabs && <PremiumBlockTabs>{tabs}</PremiumBlockTabs>}

            <PremiumBlockBody className={innerClassName} padding={contentPadding}>
              {children}
              {footer && footerVariant === 'inside' && (
                <PremiumBlockFooter variant="inside">{footer}</PremiumBlockFooter>
              )}
            </PremiumBlockBody>

            {footer && footerVariant === 'outside' && (
              <PremiumBlockFooter variant="outside">{footer}</PremiumBlockFooter>
            )}
          </>
        )}
      </div>
    </PremiumBlockContext.Provider>
  );
};

/* ─────────────────────────────────────────────────────────
 * 4. Export
 * ───────────────────────────────────────────────────────── */

export const PremiumBlock = Object.assign(PremiumBlockRoot, {
  Header: PremiumBlockHeader,
  Body: PremiumBlockBody,
  Footer: PremiumBlockFooter,
  Tabs: PremiumBlockTabs,
});
