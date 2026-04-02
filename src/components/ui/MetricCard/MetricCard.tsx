import React from 'react';
import Card from '../Card/Card';
import Badge from '../Badge/Badge';
import { RiArrowRightSLine } from 'react-icons/ri';
import './MetricCard.css';

export interface MetricCardProps {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: 'up' | 'down';
  change?: string;
  description?: string;
  linkText?: string;
  onLinkClick?: () => void;
  color?: 'primary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  icon,
  trend,
  change,
  description,
  linkText,
  onLinkClick,
  color = 'primary',
  size = 'md',
  className = '',
}) => {
  return (
    <Card className={`mms-metric-card mms-metric-card--${size} ${className}`} padding="none">
      <div className="mms-metric-card-content">
        <div className="mms-metric-card-header">
          <div className="mms-metric-header-left">
            {icon && (
              <div className={`mms-metric-icon-box mms-metric-icon-box--${size} mms-metric-icon-box--${color}`}>
                {icon}
              </div>
            )}
            <span className="mms-metric-card-label">{label}</span>
          </div>
        </div>
        
        <div className="mms-metric-card-main">
          <div className="mms-metric-card-value-container">
            <span className="mms-metric-card-value">{value}</span>
            {change && (
              <Badge 
                color={trend === 'up' ? 'success' : 'error'} 
                variant="soft" 
                size="1"
                className="mms-metric-card-badge"
              >
                {change}
              </Badge>
            )}
          </div>
        </div>

        {(description || linkText) && (
          <div className="mms-metric-card-footer">
            {description && (
              <p className="mms-metric-card-description">{description}</p>
            )}
            {linkText && (
              <button className="mms-metric-card-link" onClick={onLinkClick}>
                {linkText} <RiArrowRightSLine />
              </button>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};
