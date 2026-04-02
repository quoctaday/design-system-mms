import React from 'react';
import { cn } from '../../../lib/utils';
import './Skeleton.css';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'rectangular' | 'circular' | 'text';
  width?: string | number;
  height?: string | number;
  radius?: 'none' | 'small' | 'medium' | 'large' | 'full';
  animation?: 'pulse' | 'wave' | 'none';
}

const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'rectangular',
  width,
  height,
  radius = 'small',
  animation = 'pulse',
  className,
  style,
  ...props
}) => {
  const inlineStyles: React.CSSProperties = {
    width: width,
    height: height,
    ...style,
  };

  return (
    <div
      className={cn(
        'mms-skeleton',
        `mms-skeleton-variant-${variant}`,
        `mms-skeleton-radius-${radius}`,
        `mms-skeleton-animation-${animation}`,
        className
      )}
      style={inlineStyles}
      {...props}
    />
  );
};

export default Skeleton;
