import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import './Text.css';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type TextSize = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
type TextWeight = 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
type TextAlign = 'left' | 'center' | 'right';
type TextTrim = 'normal' | 'start' | 'end' | 'both' | 'none';

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  as?: 'span' | 'div' | 'p' | 'label' | 'blockquote' | 'strong' | 'em';
  size?: TextSize;
  weight?: TextWeight;
  align?: TextAlign;
  trim?: TextTrim;
  highContrast?: boolean;
}

export const Text = React.forwardRef<HTMLSpanElement, TextProps>(
  (
    {
      as: Tag = 'span',
      size = '3', // 14px default for MMS
      weight = 'regular',
      align,
      trim = 'none', // Text usually doesn't trim by default unlike Heading
      highContrast,
      className,
      ...props
    },
    ref
  ) => {
    const textClasses = cn(
      'mms-Text',
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
        className={textClasses}
        data-size={size}
        {...props}
      />
    );
  }
);

Text.displayName = 'Text';
