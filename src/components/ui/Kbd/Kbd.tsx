import React from 'react';
import { cn } from '../../../lib/utils';
import './Kbd.css';

export interface KbdProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: '1' | '2' | '3';
  children: React.ReactNode;
}

export const Kbd = React.forwardRef<HTMLSpanElement, KbdProps>(
  ({ size = '2', className, children, ...props }, ref) => {
    return (
      <kbd
        ref={ref}
        data-size={size}
        className={cn('rt-Kbd', className)}
        {...props}
      >
        {children}
      </kbd>
    );
  }
);

Kbd.displayName = 'Kbd';
