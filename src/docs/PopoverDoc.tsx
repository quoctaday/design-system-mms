import React from 'react';
import { Popover, Button, Flex } from '../components/ui';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { AuroraBackground } from '../components/ui';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';

const PopoverDoc: React.FC = () => {
  const toc = [
    { id: 'basic', title: 'Basic Usage' },
    { id: 'radius', title: 'Radius Keywords' },
    { id: 'specs', title: 'Material Specs' },
    { id: 'api', title: 'API Reference' }
  ];

  const popoverProps = [
    { name: 'side', type: "'top' | 'right' | 'bottom' | 'left'", default: "'bottom'", description: 'Preferred side of the trigger to render.' },
    { name: 'align', type: "'start' | 'center' | 'end'", default: "'center'", description: 'Alignment of the content relative to the trigger.' },
    { name: 'radius', type: "'none' | 'small' | 'medium' | 'large' | 'full'", default: "'medium'", description: 'Logical radius keyword.' },
    { name: 'width', type: 'number | string', default: 'auto', description: 'Width of the popover content.' }
  ];

  return (
    <DocLayout 
      title="Popover" 
      description="A rich overlay component used to display additional content or information when a trigger is activated."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <DocSection id="basic">
        <DocHeading>Basic Usage</DocHeading>
        <DocText>Popovers are ideal for settings, complex tooltips, or any content that requires interaction.</DocText>
        <CodePreview
          code={`<Popover.Root radius="large">
  <Popover.Trigger>
    <Button>Open Popover</Button>
  </Popover.Trigger>
  <Popover.Content width={240}>
    <Flex direction="column" gap="2">
      <Heading size="3">Settings</Heading>
      <Text size="2" color="subtle">Configure your preferences.</Text>
      <Popover.Close>
        <Button variant="soft" size="1">Close</Button>
      </Popover.Close>
    </Flex>
  </Popover.Content>
</Popover.Root>`}
        >
          <div className="py-2">
            <Popover.Root radius="large">
              <Popover.Trigger>
                <Button variant="solid">Open Popover</Button>
              </Popover.Trigger>
              <Popover.Content width={240}>
                <div className="flex flex-col gap-2">
                  <div className="text-sm font-bold">Settings</div>
                  <div className="text-xs text-muted/60">Configure your preferences for this section.</div>
                  <Popover.Close>
                    <Button variant="soft" size="1" className="mt-2 text-xs">Close</Button>
                  </Popover.Close>
                </div>
              </Popover.Content>
            </Popover.Root>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="radius">
        <DocHeading>Radius Keywords</DocHeading>
        <DocText>The content area respects the global logical radius scale.</DocText>
        <CodePreview
          code={`<Popover.Root radius="none">...</Popover.Root>
<Popover.Root radius="full">...</Popover.Root>`}
        >
          <div className="flex flex-wrap gap-4 py-2">
            {(['none', 'small', 'medium', 'large', 'full'] as const).map(radius => (
              <Popover.Root key={radius} radius={radius}>
                <Popover.Trigger>
                  <Button variant="outline" size="2">Radius: {radius}</Button>
                </Popover.Trigger>
                <Popover.Content width={200}>
                  <div className="text-sm">Content with {radius} radius.</div>
                </Popover.Content>
              </Popover.Root>
            ))}
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="specs">
        <DocHeading>Material Specs</DocHeading>
        <DocText>Popover materials are tuned for high-fidelity surface isolation.</DocText>
        <div className="specs-grid">
          <div className="spec-item">
            <div className="text-sm font-bold">Elevation</div>
            <div className="text-xs text-muted/60">Uses Shadow-5 for deep surface isolation.</div>
          </div>
          <div className="spec-item">
            <div className="text-sm font-bold">Backdrop</div>
            <div className="text-xs text-muted/60">12px blur for premium glassmorphism effect.</div>
          </div>
          <div className="spec-item">
            <div className="text-sm font-bold">Animation</div>
            <div className="text-xs text-muted/60">140ms Ease-Out snap factor.</div>
          </div>
        </div>
      </DocSection>

      <DocSection id="api">
        <DocHeading>API Reference</DocHeading>
        <PropsTable props={popoverProps} />
      </DocSection>
    </DocLayout>
  );
};

export default PopoverDoc;
