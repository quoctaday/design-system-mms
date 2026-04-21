import React from 'react';
import { cn } from '../../../lib/utils';
import './Inset.css';

export interface InsetProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: 'all' | 'top' | 'bottom' | 'left' | 'right' | 'x' | 'y';
  clip?: 'none' | 'border-box';
  children: React.ReactNode;
}

export const Inset = React.forwardRef<HTMLDivElement, InsetProps>(
  ({ side = 'all', clip = 'border-box', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-side={side}
        data-clip={clip}
        className={cn('rt-Inset', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Inset.displayName = 'Inset';
