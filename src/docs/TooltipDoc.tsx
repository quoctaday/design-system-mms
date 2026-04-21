import React from 'react';
import { Tooltip, Button, Flex } from '../components/ui';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { AuroraBackground } from '../components/ui';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';
import { 
  RiInformationLine, 
  RiQuestionFill, 
  RiDeleteBinLine, 
  RiSaveLine 
} from 'react-icons/ri';

const TooltipDoc: React.FC = () => {
  const toc = [
    { id: 'basic', title: 'Basic Usage' },
    { id: 'radius', title: 'Radius Keywords' },
    { id: 'directions', title: 'Directions' },
    { id: 'delay', title: 'Delay & Duration' },
    { id: 'api', title: 'API Reference' }
  ];

  const tooltipProps = [
    { name: 'side', type: "'top' | 'right' | 'bottom' | 'left'", default: "'top'", description: 'Direction of the tooltip relative to its trigger.' },
    { name: 'align', type: "'start' | 'center' | 'end'", default: "'center'", description: 'Alignment relative to the trigger.' },
    { name: 'radius', type: "'none' | 'small' | 'medium' | 'large' | 'full'", default: "'small'", description: 'Logical radius keyword.' },
    { name: 'delayDuration', type: 'number', default: '200', description: 'Appearance delay in milliseconds.' },
    { name: 'offset', type: 'number', default: '8', description: 'Distance from the trigger in pixels.' }
  ];

  return (
    <DocLayout 
      title="Tooltip" 
      description="An ironclad popup component for high-fidelity context information."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <DocSection id="basic">
        <DocHeading>Basic Usage</DocHeading>
        <DocText>Tooltips are designed with high-contrast surfaces and hairline borders for maximum legibility.</DocText>
        <CodePreview
          code={`<Tooltip content="Save settings to cloud" side="top">
  <Button variant="solid">Save Changes</Button>
</Tooltip>`}
        >
          <div className="flex gap-4 py-2">
            <Tooltip content="Tooltip using wrapper pattern" side="top">
              <Button variant="outline">Hover me (Top)</Button>
            </Tooltip>

            <Tooltip.Root side="bottom">
              <Tooltip.Trigger>
                <Button variant="outline">Hover me (Bottom)</Button>
              </Tooltip.Trigger>
              <Tooltip.Content>Tooltip using sub-component pattern</Tooltip.Content>
            </Tooltip.Root>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="radius">
        <DocHeading>Radius Keywords</DocHeading>
        <DocText>Tooltips now integrate with the global MMS logical radius scale.</DocText>
        <CodePreview
          code={`<Tooltip content="..." radius="none">...</Tooltip>
<Tooltip content="..." radius="full">...</Tooltip>`}
        >
          <div className="flex flex-wrap gap-4 py-2">
            {(['none', 'small', 'medium', 'large', 'full'] as const).map(r => (
              <Tooltip key={r} content={`Radius: ${r}`} radius={r} side="top">
                <Button variant="soft" size="1">{r}</Button>
              </Tooltip>
            ))}
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="directions">
        <DocHeading>Directions</DocHeading>
        <DocText>Automatic collision detection ensures tooltips remain visible within the viewport.</DocText>
        <CodePreview
          code={`<Tooltip side="left">...</Tooltip>
<Tooltip side="right">...</Tooltip>`}
        >
          <div className="flex gap-8 py-2">
            <Tooltip content="Left side info" side="left">
              <div className="h-10 w-10 flex items-center justify-center bg-muted/20 border border-subtle rounded-xl text-brand text-xl cursor-help hover:bg-accent-alpha-8 transition-colors">
                <RiInformationLine />
              </div>
            </Tooltip>

            <Tooltip content="Top side info" side="top">
              <div className="h-10 w-10 flex items-center justify-center bg-muted/20 border border-subtle rounded-xl text-brand text-xl cursor-help hover:bg-accent-alpha-8 transition-colors">
                <RiInformationLine />
              </div>
            </Tooltip>

            <Tooltip content="Right side info" side="right">
              <div className="h-10 w-10 flex items-center justify-center bg-muted/20 border border-subtle rounded-xl text-brand text-xl cursor-help hover:bg-accent-alpha-8 transition-colors">
                <RiInformationLine />
              </div>
            </Tooltip>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="delay">
        <DocHeading>Delay & Duration</DocHeading>
        <DocText>Controlled state management using the 140ms Ironclad Snap Factor.</DocText>
        <CodePreview
          code={`<Tooltip delayDuration={700}>...</Tooltip>
<Tooltip delayDuration={0}>...</Tooltip>`}
        >
          <div className="flex gap-4 py-2">
            <Tooltip content="Slow appearing tooltip" side="top" delayDuration={700}>
              <Button color="brand">Delayed (700ms)</Button>
            </Tooltip>

            <Tooltip content="Instant appearing tooltip" side="top" delayDuration={0}>
              <Button color="success">Instant (0ms)</Button>
            </Tooltip>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="api">
        <DocHeading>API Reference</DocHeading>
        <PropsTable props={tooltipProps} />
      </DocSection>
    </DocLayout>
  );
};

export default TooltipDoc;
