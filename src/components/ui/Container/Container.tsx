import React from 'react';
import { getResponsiveClass, type Responsive, cn } from '../../../lib/layout-utils';
import { Box, type BoxProps } from '../Box/Box';

export interface ContainerProps extends BoxProps {
  size?: Responsive<'1' | '2' | '3' | '4' | 'none'>;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ size = '4', className, ...props }, ref) => {
    const containerClasses = [
      'wds-r-container',
      ...getResponsiveClass('size', 'wds-r-container', size),
    ];

    return (
      <Box
        ref={ref}
        className={cn(containerClasses, className)}
        {...props}
      />
    );
  }
);

Container.displayName = 'Container';
