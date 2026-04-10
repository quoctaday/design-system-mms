import React from 'react';

interface ComponentHeroProps {
  title: string;
  description: string;
  badge?: string;
}

const ComponentHero: React.FC<ComponentHeroProps> = ({ title, description, badge }) => {
  return (
    <header className="doc-hero" style={{ marginBottom: 'var(--spacing-48)' }}>
      {badge && (
        <span 
          style={{ 
            display: 'inline-block',
            padding: '4px 12px',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--surface-accent-subtle)',
            color: 'var(--content-accent)',
            fontSize: 'var(--font-size-2)',
            fontWeight: 600,
            marginBottom: 'var(--spacing-16)'
          }}
        >
          {badge}
        </span>
      )}
      <h1 
        style={{ 
          fontSize: 'var(--font-size-8)', 
          fontWeight: 700, 
          letterSpacing: '-0.02em',
          margin: '0 0 var(--spacing-16) 0',
          color: 'var(--content-strong)'
        }}
      >
        {title}
      </h1>
      <p 
        style={{ 
          fontSize: 'var(--font-size-4)', 
          color: 'var(--content-subtle)',
          lineHeight: 1.6,
          maxWidth: '800px',
          margin: 0
        }}
      >
        {description}
      </p>
    </header>
  );
};

export default ComponentHero;
export { ComponentHero };
