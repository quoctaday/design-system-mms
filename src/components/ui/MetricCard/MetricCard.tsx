import React from 'react';
import { cn } from '../../../lib/utils';
import { RiMore2Fill, RiArrowRightUpLine, RiArrowRightDownLine } from 'react-icons/ri';
import './MetricCard.css';

export interface MetricCardProps {
  label: string;
  value: string | number;
  trend?: 'up' | 'down';
  change?: string;
  comparisonText?: string;
  icon?: React.ReactNode;
  variant?: 'primary' | 'error' | 'success' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onMoreClick?: () => void;
  linkText?: string;
  design?: 'modern' | 'linear' | 'premium';
  isFlush?: boolean;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  trend,
  change,
  comparisonText = "vs last month",
  icon,
  variant = 'primary',
  size = 'md',
  className,
  onMoreClick,
  linkText,
  design = 'premium',
  isFlush = false
}) => {
  const isPremium = design === 'premium';
  const isLinear = design === 'linear';

  if (isPremium) {
    return (
      <div 
        className={cn(
          "mms-metric-card--premium", 
          isFlush && "is-flush",
          className
        )}
        onClick={onMoreClick}
      >
        <div className="mms-metric-header">
          <div className="mms-metric-header-left">
            {icon && <span className={cn("mms-metric-icon", `mms-metric-icon--${variant}`)}>{icon}</span>}
            <span className="mms-metric-label">{label}</span>
          </div>
          {onMoreClick && (
            <button className="mms-metric-more" onClick={(e) => { e.stopPropagation(); onMoreClick(); }}>
              {linkText ? <span className="mms-metric-link-text">{linkText}</span> : <RiMore2Fill />}
            </button>
          )}
        </div>
        
        <div className="mms-metric-inner">
          <span className="mms-metric-value">{value}</span>
          {(change || trend) && (
            <div className={cn("mms-metric-trend", trend && `mms-metric-trend--${trend}`)}>
              {trend === 'up' ? <RiArrowRightUpLine /> : <RiArrowRightDownLine />}
              <span className="mms-trend-value">{change}</span>
              <span className="mms-trend-text">{comparisonText}</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Legacy rendering for modern and linear
  return (
    <div 
      className={cn(
        isLinear ? "mms-metric-card-linear" : "mms-metric-card-modern",
        !isLinear && `mms-metric-card-modern--${size}`,
        `mms-metric-card-size--${size}`,
        className
      )}
      onClick={onMoreClick}
    >
      <div className="mms-metric-header">
        <div className="mms-metric-header-left">
          <span className="mms-metric-label">{label}</span>
        </div>
        {onMoreClick && (
          <button className="mms-metric-more" onClick={(e) => { e.stopPropagation(); onMoreClick(); }}>
            {linkText ? <span className="mms-metric-link-text">{linkText}</span> : <RiMore2Fill />}
          </button>
        )}
      </div>

      <div className="mms-metric-body">
        <div className="mms-metric-value-group">
          <span className="mms-metric-value">{value}</span>
          {(change || trend) && (
            <div className={cn("mms-metric-trend", trend && `mms-metric-trend--${trend}`)}>
              {trend === 'up' ? <RiArrowRightUpLine /> : <RiArrowRightDownLine />}
              <span className="mms-trend-value">{change}</span>
              <span className="mms-trend-text">{comparisonText}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

MetricCard.displayName = 'MetricCard';

export default MetricCard;
