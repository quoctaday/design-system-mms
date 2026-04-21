import React, { useState, useEffect } from 'react';
import { cn } from '../../../lib/utils';
import { extractMMSProps } from '../../../helpers/extract-mms-props';
import './Avatar.css';

/* ─────────────────────────────────────────────────────────
 * 1. Avatar Root
 * ───────────────────────────────────────────────────────── */

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
  radius?: 'none' | 'small' | 'medium' | 'large' | 'full';
}

interface AvatarContextValue {
  status: 'loading' | 'loaded' | 'error';
  setStatus: (status: 'loading' | 'loaded' | 'error') => void;
}

const AvatarContext = React.createContext<AvatarContextValue | undefined>(undefined);

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ size = '3', radius = 'full', className, children, ...mmsBase }, ref) => {
    const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

    const { mmsClasses } = extractMMSProps({ size, radius }, 'avatar');

    return (
      <AvatarContext.Provider value={{ status, setStatus }}>
        <div
          ref={ref}
          className={cn(
            'mms-avatar-root',
            mmsClasses,
            className
          )}
          {...mmsBase}
        >
          {children}
        </div>
      </AvatarContext.Provider>
    );
  }
);

Avatar.displayName = 'Avatar';

/* ─────────────────────────────────────────────────────────
 * 2. Avatar Image
 * ───────────────────────────────────────────────────────── */

export interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className, src, onLoadingStatusChange, ...props }, ref) => {
    const context = React.useContext(AvatarContext);

    useEffect(() => {
      if (!src) {
        context?.setStatus('error');
      }
    }, [src]);

    return (
      <img
        ref={ref}
        src={src}
        className={cn('mms-avatar-image', className)}
        onLoad={() => context?.setStatus('loaded')}
        onError={() => context?.setStatus('error')}
        style={{ display: context?.status === 'loaded' ? 'block' : 'none' }}
        {...props}
      />
    );
  }
);

AvatarImage.displayName = 'AvatarImage';

/* ─────────────────────────────────────────────────────────
 * 3. Avatar Fallback
 * ───────────────────────────────────────────────────────── */

export interface AvatarFallbackProps extends React.HTMLAttributes<HTMLDivElement> {
  delayMs?: number;
}

export const AvatarFallback = React.forwardRef<HTMLDivElement, AvatarFallbackProps>(
  ({ className, children, delayMs, ...props }, ref) => {
    const context = React.useContext(AvatarContext);
    const [canShow, setCanShow] = useState(delayMs === undefined);

    useEffect(() => {
      if (delayMs !== undefined) {
        const timer = setTimeout(() => setCanShow(true), delayMs);
        return () => clearTimeout(timer);
      }
    }, [delayMs]);

    if (!canShow || context?.status === 'loaded') return null;

    return (
      <div
        ref={ref}
        className={cn('mms-avatar-fallback', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

AvatarFallback.displayName = 'AvatarFallback';
