import React from 'react';
import { Accordion, Text, Flex } from '../components/ui';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { AuroraBackground } from '../components/ui';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';

const AccordionDoc: React.FC = () => {
  const toc = [
    { id: 'basic', title: 'Basic Usage' },
    { id: 'multiple', title: 'Multiple Expansion' },
    { id: 'specs', title: 'Design Specs' },
    { id: 'api', title: 'API Reference' }
  ];

  const accordionProps = [
    { name: 'type', type: "'single' | 'multiple'", default: "'single'", description: 'Determines whether one or multiple items can be opened at the same time.' },
    { name: 'collapsible', type: 'boolean', default: 'false', description: 'When type is "single", allows closing content when clicking trigger for an open item.' },
    { name: 'value', type: 'string', default: '-', description: 'The controlled value of the item(s) to expand.' },
    { name: 'defaultValue', type: 'string', default: '-', description: 'The value of the item(s) to expand by default.' }
  ];

  return (
    <DocLayout 
      title="Accordion" 
      description="A vertically stacked set of interactive headings that each reveal a section of content."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <DocSection id="basic">
        <DocHeading>Basic Usage (Single)</DocHeading>
        <DocText>By default, only one item can be expanded at a time. The collapsible prop allows closing the active item.</DocText>
        <CodePreview
          code={`<Accordion.Root type="single" collapsible defaultValue="item-1">
  <Accordion.Item value="item-1">
    <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
    <Accordion.Content>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-2">
    <Accordion.Trigger>Is it styled?</Accordion.Trigger>
    <Accordion.Content>Yes. It follows the Flat-Premium mechanical design.</Accordion.Content>
  </Accordion.Item>
</Accordion.Root>`}
        >
          <div className="py-2">
            <Accordion.Root type="single" collapsible defaultValue="item-1">
              <Accordion.Item value="item-1">
                <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
                <Accordion.Content>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value="item-2">
                <Accordion.Trigger>Is it styled?</Accordion.Trigger>
                <Accordion.Content>Yes. It follows the Flat-Premium mechanical design.</Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value="item-3">
                <Accordion.Trigger>Is it animated?</Accordion.Trigger>
                <Accordion.Content>Yes. It uses the 140ms snap factor for transitions.</Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="multiple">
        <DocHeading>Multiple Expansion</DocHeading>
        <DocText>Set the type prop to "multiple" to allow any number of sections to be open simultaneously.</DocText>
        <CodePreview
          code={`<Accordion.Root type="multiple">
  <Accordion.Item value="item-1">
    <Accordion.Trigger>Analytical Models</Accordion.Trigger>
    <Accordion.Content>Contains complex statistical data points.</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-2">
    <Accordion.Trigger>Operational Log</Accordion.Trigger>
    <Accordion.Content>Real-time system events and audit trails.</Accordion.Content>
  </Accordion.Item>
</Accordion.Root>`}
        >
          <div className="py-2">
            <Accordion.Root type="multiple">
              <Accordion.Item value="item-1">
                <Accordion.Trigger>Analytical Models</Accordion.Trigger>
                <Accordion.Content>Contains complex statistical data points.</Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value="item-2">
                <Accordion.Trigger>Operational Log</Accordion.Trigger>
                <Accordion.Content>Real-time system events and audit trails.</Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="specs">
        <DocHeading>Design Specs</DocHeading>
        <DocText>Accordion materials are designed for high-density operational UI.</DocText>
        <div className="specs-grid">
          <div className="spec-item">
            <div className="text-sm font-bold">Separators</div>
            <div className="text-xs text-muted/60">Uses 0.5px hairline strokes for minimal visual noise.</div>
          </div>
          <div className="spec-item">
            <div className="text-sm font-bold">Interaction</div>
            <div className="text-xs text-muted/60">Subtle gray-a2 hover state for immediate feedback.</div>
          </div>
          <div className="spec-item">
            <div className="text-sm font-bold">Iconography</div>
            <div className="text-xs text-muted/60">Rotatable chevron indicates expansion state.</div>
          </div>
        </div>
      </DocSection>

      <DocSection id="api">
        <DocHeading>API Reference</DocHeading>
        <PropsTable props={accordionProps} />
      </DocSection>
    </DocLayout>
  );
};

export default AccordionDoc;
