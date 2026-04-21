import React from 'react';
import { cn } from '../../../lib/utils';
import './Separator.css';

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  size?: '1' | '2' | '3';
}

export const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ orientation = 'horizontal', size = '1', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="separator"
        data-orientation={orientation}
        data-size={size}
        className={cn('mms-separator', className)}
        {...props}
      />
    );
  }
);

Separator.displayName = 'Separator';
