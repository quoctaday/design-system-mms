import React from 'react';
import { cn } from '../../../lib/utils';
import { extractMMSProps } from '../../../helpers/extract-mms-props';
import './Card.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  headerExtra?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: 'default' | 'glass' | 'bordered';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  radius?: 'none' | 'small' | 'medium' | 'large' | 'full';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  title,
  subtitle,
  headerExtra,
  footer,
  variant = 'default',
  padding = 'md',
}) => {
  const { mmsClasses, size, variant: mmsVariant, radius } = extractMMSProps({ variant, radius }, 'card', { radius: 'medium' });

  const cardClasses = cn(
    'mms-card',
    `mms-card--${variant}`,
    `mms-card--padding-${padding}`,
    `mms-card-radius-${radius}`,
    className
  );

  return (
    <div className={cardClasses}>
      {(title || subtitle || headerExtra) && (
        <div className="mms-card-header">
          <div className="mms-card-header-content">
            {title && <h3 className="mms-card-title">{title}</h3>}
            {subtitle && <p className="mms-card-subtitle">{subtitle}</p>}
          </div>
          {headerExtra && <div className="mms-card-header-extra">{headerExtra}</div>}
        </div>
      )}
      <div className="mms-card-body">
        {children}
      </div>
      {footer && <div className="mms-card-footer">{footer}</div>}
    </div>
  );
};

Card.displayName = 'Card';

export default Card;
