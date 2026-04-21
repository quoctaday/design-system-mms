import React from 'react';
import { cn } from '../../../lib/utils';
import { 
  RiCheckboxCircleFill, 
  RiCloseCircleFill, 
  RiErrorWarningFill, 
  RiInformationFill 
} from 'react-icons/ri';
import './Result.css';

export type ResultStatus = 'success' | 'error' | 'warning' | 'info';

export interface ResultProps extends React.HTMLAttributes<HTMLDivElement> {
  status?: ResultStatus;
  title: string;
  subTitle?: string;
  extra?: React.ReactNode;
  icon?: React.ReactNode;
}

const statusIcons = {
  success: <RiCheckboxCircleFill />,
  error: <RiCloseCircleFill />,
  warning: <RiErrorWarningFill />,
  info: <RiInformationFill />,
};

export const Result: React.FC<ResultProps> = ({
  status = 'info',
  title,
  subTitle,
  extra,
  icon,
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn('mms-result', className)} {...props}>
      <div className={cn('mms-result-icon', status)}>
        {icon || statusIcons[status]}
      </div>
      <div className="mms-result-title">{title}</div>
      {subTitle && <div className="mms-result-subtitle">{subTitle}</div>}
      {extra && <div className="mms-result-extra">{extra}</div>}
      {children && <div className="mms-result-content">{children}</div>}
    </div>
  );
};

Result.displayName = 'Result';
