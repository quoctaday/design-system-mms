import React from 'react';
import type { ReactNode } from 'react';
import './DocLayout.css';

interface DocLayoutProps {
  title: string;
  description: string;
  badge?: string;
  children: ReactNode;
  toc?: { id: string; title: string }[];
  headerBackground?: ReactNode;
}

export const DocLayout: React.FC<DocLayoutProps> = ({ title, description, badge, children, toc, headerBackground }) => {
  return (
    <div className="doc-layout">
      <div className="doc-main">
        <header className="doc-hero-wrapper">
          {headerBackground && <div className="doc-hero-bg">{headerBackground}</div>}
          <div className="doc-hero-content">
            {badge && <span className="doc-badge">{badge}</span>}
            <h1 className="doc-title">{title}</h1>
            <p className="doc-description">{description}</p>
          </div>
        </header>
        <div className="doc-content">
          {children}
        </div>
      </div>
      {(toc && toc.length > 0) && (
        <aside className="doc-toc">
          <div className="toc-sticky">
            <h4 className="toc-title">On this page</h4>
            <ul>
              {toc.map(item => (
                <li key={item.id}><a href={`#${item.id}`}>{item.title}</a></li>
              ))}
            </ul>
          </div>
        </aside>
      )}
    </div>
  );
};
