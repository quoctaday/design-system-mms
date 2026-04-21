import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import './Heading.css';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type HeadingSize = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
type HeadingWeight = 'light' | 'regular' | 'medium' | 'bold';
type HeadingAlign = 'left' | 'center' | 'right';
type HeadingTrim = 'normal' | 'start' | 'end' | 'both' | 'none';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span';
  size?: HeadingSize;
  weight?: HeadingWeight;
  align?: HeadingAlign;
  trim?: HeadingTrim;
  highContrast?: boolean;
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      as: Tag = 'h2',
      size = '6',
      weight = 'bold',
      align,
      trim = 'normal',
      highContrast,
      className,
      ...props
    },
    ref
  ) => {
    const headingClasses = cn(
      'mms-Heading',
      `mms-r-size-${size}`,
      `mms-r-weight-${weight}`,
      align && `mms-r-ta-${align}`,
      `mms-leading-trim-${trim}`,
      highContrast && 'mms-r-high-contrast',
      className
    );

    return (
      <Tag
        ref={ref}
        className={headingClasses}
        data-size={size}
        {...props}
      />
    );
  }
);

Heading.displayName = 'Heading';
