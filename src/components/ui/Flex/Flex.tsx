import React from 'react';
import { getResponsiveClass, type Responsive, cn } from '../../../lib/layout-utils';
import { Box, type BoxProps } from '../Box/Box';

export interface FlexProps extends BoxProps {
  direction?: Responsive<'row' | 'column' | 'row-reverse' | 'column-reverse'>;
  align?: Responsive<'start' | 'center' | 'end' | 'baseline' | 'stretch'>;
  justify?: Responsive<'start' | 'center' | 'end' | 'between'>;
  wrap?: Responsive<'nowrap' | 'wrap' | 'wrap-reverse'>;
  gap?: Responsive<'0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'>;
}

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  ({ direction, align, justify, wrap, gap, className, ...props }, ref) => {
    const flexClasses = [
      'wds-r-display-flex',
      ...getResponsiveClass('direction', 'wds-r-fd', direction),
      ...getResponsiveClass('align', 'wds-r-ai', align),
      ...getResponsiveClass('justify', 'wds-r-jc', justify),
      ...getResponsiveClass('wrap', 'wds-r-fw', wrap),
      ...getResponsiveClass('gap', 'wds-r-gap', gap),
    ];

    return (
      <Box
        ref={ref}
        className={cn(flexClasses, className)}
        {...props}
      />
    );
  }
);

Flex.displayName = 'Flex';
