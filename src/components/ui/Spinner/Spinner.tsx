import React from 'react';
import { cn } from '../../../lib/utils';
import './Spinner.css';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: '1' | '2' | '3' | '4';
  variant?: 'default' | 'accent' | 'on-solid';
}

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ size = '2', variant = 'default', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-size={size}
        data-variant={variant}
        className={cn('mms-spinner-root', className)}
        {...props}
      >
        <svg
          className="mms-spinner-svg"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="mms-spinner-track"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="3"
          />
          <path
            className="mms-spinner-head"
            d="M12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.0434 16.4527"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }
);

Spinner.displayName = 'Spinner';

export default Spinner;
