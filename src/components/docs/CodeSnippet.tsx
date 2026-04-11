import React, { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import { RiFileCopyLine, RiCheckLine } from 'react-icons/ri';
import { useTheme } from '../../contexts/ThemeContext';
import './CodeSnippet.css';

interface CodeSnippetProps {
  code: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
  showCopy?: boolean;
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({ 
  code, 
  language = 'tsx', 
  title = 'source',
  showLineNumbers = true,
  showCopy = true
}) => {
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mms-code-snippet">
      {(title || showCopy) && (
        <div className="mms-code-snippet-header">
          {title && <span className="mms-code-snippet-title">{title}</span>}
          {showCopy && (
            <button className="mms-code-snippet-copy" onClick={copyToClipboard}>
              {copied ? <RiCheckLine className="text-success" /> : <RiFileCopyLine />}
            </button>
          )}
        </div>
      )}
      
      <div className="mms-code-snippet-container">
        <Highlight 
          theme={theme === 'dark' ? themes.vsDark : themes.github} 
          code={code.trim()} 
          language={language}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={`mms-code-snippet-pre ${className}`} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })} className="mms-code-snippet-line">
                  {showLineNumbers && (
                    <span className="mms-code-snippet-ln">{i + 1}</span>
                  )}
                  <span className="mms-code-snippet-content">
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
