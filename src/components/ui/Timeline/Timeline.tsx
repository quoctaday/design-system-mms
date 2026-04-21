import React from 'react';
import { cn } from '../../../lib/utils';
import './Timeline.css';

export type TimelineStatus = 'pending' | 'completed' | 'active' | 'error';

export interface TimelineItem {
  id: string;
  label: string;
  description?: string;
  timestamp?: string;
  status?: TimelineStatus;
  dot?: React.ReactNode;
}

export interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  items: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({
  items,
  className,
  ...props
}) => {
  return (
    <div className={cn('mms-timeline', className)} {...props}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        
        return (
          <div key={item.id} className="mms-timeline-item">
            {!isLast && <div className="mms-timeline-item-tail" />}
            <div className={cn('mms-timeline-item-head', item.status)}>
              {item.dot}
            </div>
            <div className="mms-timeline-item-content">
              <div className="mms-timeline-item-label">{item.label}</div>
              {item.description && (
                <div className="mms-timeline-item-description">
                  {item.description}
                  {item.timestamp && (
                    <div className="mms-timeline-item-timestamp">{item.timestamp}</div>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

Timeline.displayName = 'Timeline';
