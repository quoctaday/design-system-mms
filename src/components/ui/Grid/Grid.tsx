import React from 'react';
import { getResponsiveClass, type Responsive, cn } from '../../../lib/layout-utils';
import { Box, type BoxProps } from '../Box/Box';

export interface GridProps extends BoxProps {
  columns?: Responsive<'1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'>;
  gap?: Responsive<'0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'>;
  gapX?: Responsive<'0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'>;
  gapY?: Responsive<'0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'>;
  flow?: Responsive<'row' | 'column' | 'dense' | 'row dense' | 'column dense'>;
  align?: Responsive<'start' | 'center' | 'end' | 'baseline' | 'stretch'>;
  justify?: Responsive<'start' | 'center' | 'end' | 'between'>;
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ columns, gap, gapX, gapY, flow, align, justify, className, ...props }, ref) => {
    const gridClasses = [
      'wds-r-display-grid',
      ...getResponsiveClass('columns', 'wds-r-gtc', columns),
      ...getResponsiveClass('gap', 'wds-r-gap', gap),
      ...getResponsiveClass('gapX', 'wds-r-cg', gapX),
      ...getResponsiveClass('gapY', 'wds-r-rg', gapY),
      ...getResponsiveClass('flow', 'wds-r-gaf', flow),
      ...getResponsiveClass('align', 'wds-r-ai', align),
      ...getResponsiveClass('justify', 'wds-r-jc', justify),
    ];

    return (
      <Box
        ref={ref}
        className={cn(gridClasses, className)}
        {...props}
      />
    );
  }
);

Grid.displayName = 'Grid';
