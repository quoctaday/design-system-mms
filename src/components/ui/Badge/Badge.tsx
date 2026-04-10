import React from 'react';
import { cn } from '../../../lib/utils';
import './Badge.css';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'solid' | 'soft' | 'outline' | 'surface' | 'ghost';
  color?: 'brand' | 'success' | 'error' | 'warning' | 'orange' | 'blue' | 'purple' | 'sky' | 'pink' | 'teal' | 'secondary' | 'black' | 'gray';
  size?: '1' | '2';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({
  variant = 'soft',
  color = 'gray',
  size = '1',
  radius,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'mms-badge',
        `mms-badge-variant-${variant}`,
        `mms-badge-color-${color}`,
        `mms-badge-size-${size}`,
        radius && `mms-badge-radius-${radius}`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Badge;
