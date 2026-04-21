import React from 'react';
import { ScrollArea, Text, Box } from '../components/ui';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { AuroraBackground } from '../components/ui';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';

const ScrollAreaDoc: React.FC = () => {
  const toc = [
    { id: 'basic', title: 'Basic Usage' },
    { id: 'specs', title: 'Design Specs' },
    { id: 'api', title: 'API Reference' }
  ];

  const scrollAreaProps = [
    { name: 'type', type: "'auto' | 'always' | 'scroll' | 'hover'", default: "'hover'", description: 'Describes the nature of scrollbar visibility.' },
    { name: 'scrollHideDelay', type: 'number', default: '600', description: 'If type is set to "scroll" or "hover", this prop determines the delay in milliseconds before the scrollbars are hidden.' },
    { name: 'dir', type: "'ltr' | 'rtl'", default: 'ltr', description: 'The reading direction of the scroll area.' }
  ];

  return (
    <DocLayout 
      title="ScrollArea" 
      description="A utility component that provides customizable, premium scrollbars while maintaining cross-browser consistency."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <DocSection id="basic">
        <DocHeading>Basic Usage</DocHeading>
        <DocText>ScrollArea provides a sleek, non-intrusive alternative to browser default scrollbars.</DocText>
        <CodePreview
          code={`<ScrollArea style={{ height: 200 }}>
  <Box padding="4">
    <Typography variant="h4">Header</Typography>
    <Typography variant="body2">Content content content...</Typography>
  </Box>
</ScrollArea>`}
        >
          <div className="py-2">
            <ScrollArea style={{ height: 200, width: '100%', border: '1px solid var(--gray-a4)', borderRadius: 'var(--radius-4)' }}>
              <Box style={{ padding: 'var(--space-4)' }}>
                <div className="text-lg font-bold mb-4">Principles of Flat-Premium Design</div>
                <div className="text-sm text-muted/60 mb-4">
                  Flat-premium design is not about minimalism for the sake of simplicity, but about precision for the sake of clarity. 
                  It utilizes hairline borders, subtle surface shifts, and layered shadows to create depth without visual clutter.
                </div>
                <div className="text-sm text-muted/60 mb-4">
                  By maintaining absolute perimeter sharpness and consistent geometric nesting, we achieve a look that feels both professional and luxury.
                  The 140ms snap factor further reinforces this by providing immediate, crisp feedback to every user interaction.
                </div>
                <div className="text-sm text-muted/60">
                  Our scrollbars are designed to be non-intrusive. At only 6px wide, they provide the necessary functional feedback while allowing the underlying 
                  content and grid structure to remain the primary focus of the user's attention.
                </div>
              </Box>
            </ScrollArea>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="specs">
        <DocHeading>Design Specs</DocHeading>
        <DocText>ScrollArea is optimized for high-density information display.</DocText>
        <div className="specs-grid">
          <div className="spec-item">
            <div className="text-sm font-bold">Thickness</div>
            <div className="text-xs text-muted/60">6px thumb width for minimal visual intrusion.</div>
          </div>
          <div className="spec-item">
            <div className="text-sm font-bold">Consistency</div>
            <div className="text-xs text-muted/60">Ensures same look and feel across Mac, Windows, and Linux.</div>
          </div>
          <div className="spec-item">
            <div className="text-sm font-bold">Corner Radius</div>
            <div className="text-xs text-muted/60">Thumb utilizes var(--radius-full) for an organic feel.</div>
          </div>
        </div>
      </DocSection>

      <DocSection id="api">
        <DocHeading>API Reference</DocHeading>
        <PropsTable props={scrollAreaProps} />
      </DocSection>
    </DocLayout>
  );
};

export default ScrollAreaDoc;
