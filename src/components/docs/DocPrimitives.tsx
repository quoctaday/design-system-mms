import { cn } from '../../lib/utils';
import '../../styles/docs.css';

interface DocSectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  children: React.ReactNode;
}

/**
 * Standard container for a documentation section.
 * Enforces vertical spacing and TOC anchor support.
 */
export const DocSection: React.FC<DocSectionProps> = ({ id, className, children, ...props }) => {
  return (
    <section 
      id={id} 
      className={cn('doc-section', className)} 
      {...props}
    >
      {children}
    </section>
  );
};

interface DocHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 2 | 3 | 4;
  children: React.ReactNode;
}

/**
 * Standardized documentation heading (H2 for primary, H3 for sub-sections, H4 for small labels).
 */
export const DocHeading: React.FC<DocHeadingProps> = ({ level = 2, className, children, ...props }) => {
  let Tag: 'h2' | 'h3' | 'h4' = 'h2';
  if (level === 3) Tag = 'h3';
  if (level === 4) Tag = 'h4';

  const headingClass = level === 2 ? 'doc-h2' : level === 3 ? 'doc-h3' : 'doc-h4';

  return (
    <Tag 
      className={cn(headingClass, className)} 
      {...props}
    >
      {children}
    </Tag>
  );
};

interface DocTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

/**
 * Standardized documentation description/body text.
 */
export const DocText: React.FC<DocTextProps> = ({ className, children, ...props }) => {
  return (
    <p 
      className={cn('doc-p', className)} 
      {...props}
    >
      {children}
    </p>
  );
};

interface DocCodeProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

/**
 * Standardized inline code display for documentation.
 */
export const DocCode: React.FC<DocCodeProps> = ({ className, children, ...props }) => {
  return (
    <code 
      className={cn('doc-inline-code', className)} 
      {...props}
    >
      {children}
    </code>
  );
};
