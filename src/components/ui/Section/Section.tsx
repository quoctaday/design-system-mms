import React from 'react';
import { getResponsiveClass, type Responsive, cn } from '../../../lib/layout-utils';
import { Box, type BoxProps } from '../Box/Box';

export interface SectionProps extends BoxProps {
  size?: Responsive<'1' | '2' | '3'>;
}

export const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ size = '3', className, ...props }, ref) => {
    const sectionClasses = [
      'wds-r-section',
      ...getResponsiveClass('size', 'wds-r-section', size),
    ];

    return (
      <Box
        ref={ref}
        as="section"
        className={cn(sectionClasses, className)}
        {...props}
      />
    );
  }
);

Section.displayName = 'Section';
