import React, { useState } from 'react';
import { Tabs } from '../ui/Tabs/Tabs';
import { CodeSnippet } from './CodeSnippet';
import './PremiumBlock.css';

interface TerminalSnippetProps {
  package: string;
}

export const TerminalSnippet: React.FC<TerminalSnippetProps> = ({ package: pkgName }) => {
  const [activeTab, setActiveTab] = useState<'npm' | 'pnpm' | 'yarn'>('yarn');

  const commands = {
    npm: `npm add ${pkgName}`,
    pnpm: `pnpm add ${pkgName}`,
    yarn: `yarn add ${pkgName}`
  };

  return (
    <div className="premium-block">
      <div className="premium-block-tabs">
        <Tabs 
          value={activeTab} 
          onValueChange={(val) => setActiveTab(val as 'npm' | 'pnpm' | 'yarn')}
        >
          <Tabs.List>
            <Tabs.Trigger value="npm">npm</Tabs.Trigger>
            <Tabs.Trigger value="pnpm">pnpm</Tabs.Trigger>
            <Tabs.Trigger value="yarn">yarn</Tabs.Trigger>
          </Tabs.List>
        </Tabs>
      </div>
      
      <div className="premium-block-footer">
        <CodeSnippet 
          code={commands[activeTab]}
          title="terminal"
        />
      </div>
    </div>
  );
};
