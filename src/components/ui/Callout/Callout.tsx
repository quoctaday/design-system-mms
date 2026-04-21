import React from 'react';
import { cn } from '../../../lib/utils';
import './Callout.css';

interface CalloutRootProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: '1' | '2' | '3';
  variant?: 'soft' | 'surface' | 'outline';
  color?: 'brand' | 'gray' | 'success' | 'error' | 'warning';
  radius?: 'none' | 'small' | 'medium' | 'large' | 'full';
  children: React.ReactNode;
}

const CalloutRoot = React.forwardRef<HTMLDivElement, CalloutRootProps>(
  ({ size = '2', variant = 'soft', color = 'brand', radius = 'medium', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-size={size}
        data-variant={variant}
        data-accent-color={color}
        data-radius={radius}
        className={cn('rt-CalloutRoot', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
CalloutRoot.displayName = 'Callout.Root';

interface CalloutIconProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CalloutIcon = React.forwardRef<HTMLDivElement, CalloutIconProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('rt-CalloutIcon', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
CalloutIcon.displayName = 'Callout.Icon';

interface CalloutTextProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CalloutText = React.forwardRef<HTMLDivElement, CalloutTextProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('rt-CalloutText', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
CalloutText.displayName = 'Callout.Text';

export const Callout = {
  Root: CalloutRoot,
  Icon: CalloutIcon,
  Text: CalloutText,
};
