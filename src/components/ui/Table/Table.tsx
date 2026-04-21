import React, { forwardRef } from 'react';
import { cn } from '../../../lib/utils';
import './Table.css';

export interface TableRootProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'surface' | 'ghost';
  size?: '1' | '2' | '3';
  stickyHeader?: boolean;
  striped?: boolean;
  radius?: 'none' | 'small' | 'medium' | 'large' | 'full';
}

const TableRoot = forwardRef<HTMLDivElement, TableRootProps>(({
  className,
  variant = 'surface',
  size = '2',
  stickyHeader,
  striped,
  radius = 'none',
  children,
  ...props
}, ref) => {
  return (
    <div 
      ref={ref}
      className={cn(
        'mms-table-container',
        `mms-table-variant-${variant}`,
        `mms-table-size-${size}`,
        stickyHeader && 'mms-table-sticky-header',
        striped && 'mms-table-striped',
        `mms-table-radius-${radius}`,
        className
      )}
      {...props}
    >
      <table className="mms-table">
        {children}
      </table>
    </div>
  );
});

TableRoot.displayName = 'Table.Root';

const TableHeader = forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>((props, ref) => (
  <thead ref={ref} className={cn('mms-table-header', props.className)} {...props} />
));
TableHeader.displayName = 'Table.Header';

const TableBody = forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>((props, ref) => (
  <tbody ref={ref} className={cn('mms-table-body', props.className)} {...props} />
));
TableBody.displayName = 'Table.Body';

const TableRow = forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>((props, ref) => (
  <tr ref={ref} className={cn('mms-table-row', props.className)} {...props} />
));
TableRow.displayName = 'Table.Row';

const TableCell = forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>((props, ref) => (
  <td ref={ref} className={cn('mms-table-cell', props.className)} {...props} />
));
TableCell.displayName = 'Table.Cell';

const TableColumnHeaderCell = forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>((props, ref) => (
  <th ref={ref} className={cn('mms-table-cell mms-table-column-header-cell', props.className)} {...props} />
));
TableColumnHeaderCell.displayName = 'Table.ColumnHeaderCell';

// Export as a single object for "Table.Root" usage
export const Table = Object.assign(TableRoot, {
  Root: TableRoot,
  Header: TableHeader,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
  ColumnHeaderCell: TableColumnHeaderCell,
});
