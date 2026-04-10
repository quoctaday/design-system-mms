import React from 'react';
import { cn } from '../../../lib/utils';
import { RiMore2Fill, RiArrowRightUpLine, RiArrowRightDownLine } from 'react-icons/ri';
import './MetricCard.css';

export interface MetricCardProps {
  label: string;
  value: string | number;
  trend?: 'up' | 'down';
  change?: string;
  description?: string;
  comparisonText?: string;
  icon?: React.ReactNode;
  variant?: 'primary' | 'error' | 'success' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  chartData?: boolean; // If true, show the dotted wave chart
  onMoreClick?: () => void;
  linkText?: string;
  design?: 'modern' | 'linear';
}

export const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  trend,
  change,
  description,
  comparisonText = "vs last month",
  icon,
  variant = 'primary',
  size = 'md',
  className,
  chartData = true,
  onMoreClick,
  linkText,
  design = 'modern'
}) => {
  const isLinear = design === 'linear';

  const renderContent = () => (
    <>
      <div className="mms-metric-header">
        <div className="mms-metric-header-left">
          {icon && <div className={cn("mms-metric-icon", `mms-metric-icon--${variant}`)}>{icon}</div>}
          <span className="mms-metric-label">{label}</span>
        </div>
      </div>

      <div className="mms-metric-body">
        <div className="mms-metric-data-row">
          <div className="mms-metric-value-group">
            <span className="mms-metric-value">{value}</span>
            {(change || trend) && (
              <div className={cn("mms-metric-trend", trend && `mms-metric-trend--${trend}`)}>
                {trend === 'up' ? <RiArrowRightUpLine /> : <RiArrowRightDownLine />}
                <span className="mms-trend-value">{change}</span>
                <span className="mms-trend-text">{comparisonText}</span>
              </div>
            )}
            {description && <div className="mms-metric-description">{description}</div>}
          </div>
          
          {onMoreClick && (
            <button className="mms-metric-more" onClick={onMoreClick}>
              {linkText ? <span className="mms-metric-link-text">{linkText}</span> : <RiMore2Fill />}
            </button>
          )}
        </div>

        {chartData && (
          <div className="mms-metric-chart-area">
            <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="mms-dotted-wave">
              <path 
                d="M0,15 C10,15 20,5 30,10 C40,15 50,2 60,8 C70,14 80,10 90,5 C100,0 110,10 120,10" 
                fill="none" 
                stroke="var(--indigo-8)" 
                strokeWidth="1.2" 
                strokeDasharray="1 3"
                strokeLinecap="round"
              />
            </svg>
          </div>
        )}
      </div>
    </>
  );

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
      {isLinear ? (
        <>
          <div className="mms-metric-pattern" />
          <div className="mms-metric-header">
            <div className="mms-metric-header-left">
              {icon && <div className={cn("mms-metric-icon", `mms-metric-icon--${variant}`)}>{icon}</div>}
              <span className="mms-metric-label">{label}</span>
            </div>
            {onMoreClick && (
              <button className="mms-metric-more" onClick={(e) => { e.stopPropagation(); onMoreClick(); }}>
                {linkText ? <span className="mms-metric-link-text">{linkText}</span> : <RiMore2Fill />}
              </button>
            )}
          </div>
          <div className="mms-metric-inner">
            <div className="mms-metric-value-group">
              <span className="mms-metric-value">{value}</span>
              {(change || trend) && (
                <div className={cn("mms-metric-trend", trend && `mms-metric-trend--${trend}`)}>
                  {trend === 'up' ? <RiArrowRightUpLine /> : <RiArrowRightDownLine />}
                  <span className="mms-trend-value">{change}</span>
                  <span className="mms-trend-text">{comparisonText}</span>
                </div>
              )}
              {description && <div className="mms-metric-description">{description}</div>}
            </div>
            
            {chartData && (
              <div className="mms-metric-chart-area">
                <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="mms-dotted-wave">
                  <path 
                    d="M0,15 C10,15 20,5 30,10 C40,15 50,2 60,8 C70,14 80,10 90,5 C100,0 110,10 120,10" 
                    fill="none" 
                    stroke="var(--indigo-8)" 
                    strokeWidth="1.2" 
                    strokeDasharray="1 3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            )}
          </div>
        </>
      ) : (
        renderContent()
      )}
    </div>
  );
};
