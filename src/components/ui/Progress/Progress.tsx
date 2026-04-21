import React from 'react';
import { cn } from '../../../lib/utils';
import './Progress.css';

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  variant?: 'brand' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export const Progress: React.FC<ProgressProps> = ({
  value = 0,
  max = 100,
  variant = 'brand',
  size = 'md',
  showLabel = false,
  className,
  ...props
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={cn('mms-progress-container', className)} {...props}>
      {showLabel && (
        <div className="mms-progress-label">
          <span>{percentage.toFixed(0)}%</span>
        </div>
      )}
      <div 
        className={cn('mms-progress-track', `size-${size}`)}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        <div 
          className={cn('mms-progress-fill', `variant-${variant}`)} 
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

Progress.displayName = 'Progress';

export default Progress;
