import React from 'react';
import { cn } from '../../../lib/utils';
import './ScrollArea.css';

export interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  orientation?: 'vertical' | 'horizontal' | 'both';
  size?: '1' | '2';
}

export const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ children, orientation = 'vertical', size = '1', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'mms-scroll-area-root',
          `mms-scroll-area-orientation-${orientation}`,
          `mms-scroll-area-size-${size}`,
          className
        )}
        {...props}
      >
        <div className="mms-scroll-area-viewport">
          {children}
        </div>
      </div>
    );
  }
);

ScrollArea.displayName = 'ScrollArea';

export default ScrollArea;
