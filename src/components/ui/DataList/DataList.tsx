import React from 'react';
import { cn } from '../../../lib/utils';
import './DataList.css';

interface DataListRootProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: '1' | '2' | '3';
  children: React.ReactNode;
}

const DataListRoot = React.forwardRef<HTMLDivElement, DataListRootProps>(
  ({ size = '2', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-size={size}
        className={cn('rt-DataListRoot', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
DataListRoot.displayName = 'DataList.Root';

interface DataListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const DataListItem = React.forwardRef<HTMLDivElement, DataListItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('rt-DataListItem', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
DataListItem.displayName = 'DataList.Item';

interface DataListLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const DataListLabel = React.forwardRef<HTMLDivElement, DataListLabelProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('rt-DataListLabel', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
DataListLabel.displayName = 'DataList.Label';

interface DataListValueProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const DataListValue = React.forwardRef<HTMLDivElement, DataListValueProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('rt-DataListValue', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
DataListValue.displayName = 'DataList.Value';

export const DataList = {
  Root: DataListRoot,
  Item: DataListItem,
  Label: DataListLabel,
  Value: DataListValue,
};
