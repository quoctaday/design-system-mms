import React from 'react';
import { cn } from '../../../lib/utils';
import './AspectRatio.css';

export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  ratio?: number;
}

export const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ ratio = 1, style, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('mms-aspect-ratio-root', className)}
        style={{
          position: 'relative',
          width: '100%',
          paddingBottom: `${100 / ratio}%`,
          ...style,
        }}
        {...props}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
          }}
        >
          {children}
        </div>
      </div>
    );
  }
);

AspectRatio.displayName = 'AspectRatio';

export default AspectRatio;
