import React from 'react';
import { getResponsiveClass, type Responsive, cn } from '../../../lib/layout-utils';

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: any;
  // Spacing (Logical & Directional)
  p?: Responsive<'0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'>;
  px?: Responsive<'0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'>;
  py?: Responsive<'0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'>;
  pt?: Responsive<'0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'>;
  pr?: Responsive<'0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'>;
  pb?: Responsive<'0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'>;
  pl?: Responsive<'0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'>;
  
  m?: Responsive<'0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'>;
  mx?: Responsive<'0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'>;
  my?: Responsive<'0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'>;
  mt?: Responsive<'0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'>;
  mr?: Responsive<'0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'>;
  mb?: Responsive<'0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'>;
  ml?: Responsive<'0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'>;

  // Dimensions
  width?: Responsive<'px' | 'auto' | 'full' | 'min' | 'max' | 'fit' | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'>;
  height?: Responsive<'px' | 'auto' | 'full' | 'min' | 'max' | 'fit' | 'screen' | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'>;
  maxWidth?: Responsive<'none' | 'full'>;
  minWidth?: Responsive<'0'>;

  // Positioning
  position?: Responsive<'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'>;
  inset?: Responsive<'0'>;
  top?: Responsive<'0'>;
  right?: Responsive<'0'>;
  bottom?: Responsive<'0'>;
  left?: Responsive<'0'>;
  zIndex?: Responsive<'0' | '1' | '2' | '3' | '4' | '5'>;

  // Borders
  border?: 'b' | 't' | 'none';

  // Flex Child
  grow?: Responsive<'0' | '1'>;
  shrink?: Responsive<'0' | '1'>;
  basis?: Responsive<'0' | 'auto' | 'full'>;

  // Grid Child
  gridColumn?: Responsive<'1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'>;
  gridRow?: Responsive<'1' | '2' | '3'>;

  display?: Responsive<'none' | 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid'>;
  children?: React.ReactNode;
}

export const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ 
    as: Tag = 'div', 
    p, px, py, pt, pr, pb, pl,
    m, mx, my, mt, mr, mb, ml,
    width, height, maxWidth, minWidth,
    position, inset, top, right, bottom, left, zIndex,
    border,
    grow, shrink, basis,
    gridColumn, gridRow,
    display, className, children, ...props 
  }, ref) => {
    const boxClasses = [
      ...getResponsiveClass('p', 'wds-r-p', p),
      ...getResponsiveClass('px', 'wds-r-px', px),
      ...getResponsiveClass('py', 'wds-r-py', py),
      ...getResponsiveClass('pt', 'wds-r-pt', pt),
      ...getResponsiveClass('pr', 'wds-r-pr', pr),
      ...getResponsiveClass('pb', 'wds-r-pb', pb),
      ...getResponsiveClass('pl', 'wds-r-pl', pl),
      
      ...getResponsiveClass('m', 'wds-r-m', m),
      ...getResponsiveClass('mx', 'wds-r-mx', mx),
      ...getResponsiveClass('my', 'wds-r-my', my),
      ...getResponsiveClass('mt', 'wds-r-mt', mt),
      ...getResponsiveClass('mr', 'wds-r-mr', mr),
      ...getResponsiveClass('mb', 'wds-r-mb', mb),
      ...getResponsiveClass('ml', 'wds-r-ml', ml),

      ...getResponsiveClass('width', 'wds-r-width', width),
      ...getResponsiveClass('height', 'wds-r-height', height),
      ...getResponsiveClass('maxWidth', 'wds-r-maxWidth', maxWidth),
      ...getResponsiveClass('minWidth', 'wds-r-minWidth', minWidth),

      ...getResponsiveClass('position', 'wds-r-pos', position),
      ...getResponsiveClass('inset', 'wds-r-inset', inset),
      ...getResponsiveClass('top', 'wds-r-top', top),
      ...getResponsiveClass('right', 'wds-r-right', right),
      ...getResponsiveClass('bottom', 'wds-r-bottom', bottom),
      ...getResponsiveClass('left', 'wds-r-left', left),
      ...getResponsiveClass('zIndex', 'wds-r-zIndex', zIndex),

      border === 'b' ? 'wds-r-border-b' : '',
      border === 't' ? 'wds-r-border-t' : '',

      ...getResponsiveClass('grow', 'wds-r-grow', grow),
      ...getResponsiveClass('shrink', 'wds-r-shrink', shrink),
      ...getResponsiveClass('basis', 'wds-r-basis', basis),

      ...getResponsiveClass('gridColumn', 'wds-r-gc-span', gridColumn),
      ...getResponsiveClass('gridRow', 'wds-r-gr-span', gridRow),

      ...getResponsiveClass('display', 'wds-r-display', display),
    ];

    return (
      <Tag
        ref={ref}
        className={cn(boxClasses, className)}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

Box.displayName = 'Box';
