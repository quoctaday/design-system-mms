import React from 'react';
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
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  title,
  subtitle,
  headerExtra,
  footer,
  variant = 'default',
  padding = 'md',
}) => {
  const cardClasses = [
    'mms-card',
    `mms-card--${variant}`,
    `mms-card--padding-${padding}`,
    className
  ].join(' ');

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

export default Card;
