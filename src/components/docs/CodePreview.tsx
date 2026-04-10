import React, { type ReactNode, useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import './CodePreview.css';
import { RiFileCopyLine, RiCheckLine } from 'react-icons/ri';
import { useTheme } from '../../contexts/ThemeContext';

interface CodePreviewProps {
  children?: ReactNode;
  code: string;
  title?: string;
  description?: string;
}

export const CodePreview: React.FC<CodePreviewProps> = ({ children, code, title, description }) => {
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-preview-container">
      {children && (
        <div className="code-preview-live">
          {(title || description) && (
            <div className="preview-info">
              {title && <h3 className="preview-title">{title}</h3>}
              {description && <p className="preview-description">{description}</p>}
            </div>
          )}
          <div className="preview-canvas">
            {children}
          </div>
        </div>
      )}
      
      <div className="code-preview-source">
        <div className="code-header">
          <span className="code-path">{title || 'Example.tsx'}</span>
          <button className="copy-btn" onClick={copyToClipboard} aria-label="Copy Code">
            {copied ? <RiCheckLine className="text-success" /> : <RiFileCopyLine />}
          </button>
        </div>
        <Highlight 
          theme={theme === 'dark' ? themes.vsDark : themes.github} 
          code={code.trim()} 
          language="tsx"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={`code-block ${className}`} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })} className="code-line">
                  <span className="line-number">{i + 1}</span>
                  <span className="line-content">
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </span>
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};
