import React from 'react';
import { cn } from '../../../lib/utils';
import './EmptyState.css';

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  action?: React.ReactNode;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  action,
  className,
  ...props
}) => {
  return (
    <div className={cn('mms-empty-state', className)} {...props}>
      {icon && <div className="mms-empty-state-icon">{icon}</div>}
      {title && <h3 className="mms-empty-state-title">{title}</h3>}
      {description && <p className="mms-empty-state-description">{description}</p>}
      {action && <div className="mms-empty-state-action">{action}</div>}
    </div>
  );
};

export default EmptyState;
