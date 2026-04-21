import React from 'react';
import { ContextMenu, Text, Box } from '../components/ui';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { AuroraBackground } from '../components/ui';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';

const ContextMenuDoc: React.FC = () => {
  const toc = [
    { id: 'basic', title: 'Basic Usage' },
    { id: 'specs', title: 'Precision Mechanics' },
    { id: 'api', title: 'API Reference' }
  ];

  const contextMenuProps = [
    { name: 'radius', type: "'none' | 'small' | 'medium' | 'large' | 'full'", default: "'medium'", description: 'Logical radius keyword.' },
    { name: 'width', type: 'number', default: '160', description: 'Width of the fallback menu surface.' },
    { name: 'onSelect', type: 'function', default: '-', description: 'Callback when an item is selected.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Prevents user interaction with a menu item.' }
  ];

  return (
    <DocLayout 
      title="ContextMenu" 
      description="An advanced dropdown menu triggered by an alternative mouse click (usually right-click)."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <DocSection id="basic">
        <DocHeading>Basic Usage</DocHeading>
        <DocText>Right-click the area below to reveal the context-sensitive menu. It supports separators, shortcuts, and disabled states.</DocText>
        <CodePreview
          code={`<ContextMenu.Root radius="medium">
  <ContextMenu.Trigger>
    <div className="bg-muted border-dashed rounded-xl h-40 flex items-center justify-center">
      Right click in this area
    </div>
  </ContextMenu.Trigger>
  <ContextMenu.Content width={180}>
    <ContextMenu.Item>Edit</ContextMenu.Item>
    <ContextMenu.Item>Duplicate</ContextMenu.Item>
    <ContextMenu.Separator />
    <ContextMenu.Item shortcut="⌘ D" disabled>Archive</ContextMenu.Item>
    <ContextMenu.Item color="red">Delete</ContextMenu.Item>
  </ContextMenu.Content>
</ContextMenu.Root>`}
        >
          <div className="py-2">
            <ContextMenu.Root radius="medium">
              <ContextMenu.Trigger>
                <div style={{ 
                  height: 160, 
                  width: '100%',
                  border: '1px dashed var(--gray-a4)', 
                  borderRadius: 'var(--radius-4)',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  backgroundColor: 'var(--gray-a2)',
                  cursor: 'context-menu'
                }}>
                  <div className="text-sm text-muted/60">Right click in this area</div>
                </div>
              </ContextMenu.Trigger>
              
              <ContextMenu.Content width={180}>
                <ContextMenu.Item onSelect={() => alert('Edit')}>Edit</ContextMenu.Item>
                <ContextMenu.Item onSelect={() => alert('Duplicate')}>Duplicate</ContextMenu.Item>
                <ContextMenu.Separator />
                <ContextMenu.Item shortcut="⌘ D" disabled>Archive</ContextMenu.Item>
                <ContextMenu.Item style={{ color: 'var(--red-9)' }}>Delete</ContextMenu.Item>
              </ContextMenu.Content>
            </ContextMenu.Root>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="specs">
        <DocHeading>Precision Mechanics</DocHeading>
        <DocText>ContextMenu uses virtual positioning to align perfectly with the user's focus.</DocText>
        <div className="specs-grid">
          <div className="spec-item">
            <div className="text-sm font-bold">Virtual Positioning</div>
            <div className="text-xs text-muted/60">Positions exactly at pointer coordinates at the moment of trigger.</div>
          </div>
          <div className="spec-item">
            <div className="text-sm font-bold">Accelerators</div>
            <div className="text-xs text-muted/60">Integrated support for visual keyboard shortcuts.</div>
          </div>
          <div className="spec-item">
            <div className="text-sm font-bold">Elevation</div>
            <div className="text-xs text-muted/60">High-fidelity Shadow-6 for maximum surface contrast.</div>
          </div>
        </div>
      </DocSection>

      <DocSection id="api">
        <DocHeading>API Reference</DocHeading>
        <PropsTable props={contextMenuProps} />
      </DocSection>
    </DocLayout>
  );
};

export default ContextMenuDoc;
