import React from 'react';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';
import { Flex, Box, Text, AuroraBackground } from '../components/ui';

const FlexDoc: React.FC = () => {
  const toc = [
    { id: 'usage', title: 'Usage' },
    { id: 'direction', title: 'Direction' },
    { id: 'alignment', title: 'Alignment & Justify' },
    { id: 'gap', title: 'Gap' },
    { id: 'api', title: 'API Reference' }
  ];

  const flexProps = [
    { name: 'direction', type: 'Responsive<"row" | "column" | ...>', default: 'row', description: 'Sets the flex-direction.' },
    { name: 'align', type: 'Responsive<"start" | "center" | "end" | "baseline" | "stretch">', default: 'stretch', description: 'Sets the align-items property.' },
    { name: 'justify', type: 'Responsive<"start" | "center" | "end" | "between">', default: 'start', description: 'Sets the justify-content property.' },
    { name: 'gap', type: 'Responsive<"0"-"9">', description: 'Sets the gap between flex items using the Radix scale.' },
    { name: 'wrap', type: 'Responsive<"nowrap" | "wrap" | "wrap-reverse">', default: 'nowrap', description: 'Sets the flex-wrap property.' },
    { name: '...BoxProps', type: 'BoxProps', description: 'Flex inherits all Box properties (padding, margin, width, etc.).' }
  ];

  return (
    <DocLayout 
      title="Flex" 
      description="A flexible container that allows you to align and distribute items within it."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <DocSection id="usage">
        <DocHeading>Usage</DocHeading>
        <DocText>Flex is built on top of Box and provides shorthand for flexbox layout properties.</DocText>
        <CodePreview
          code={`<Flex gap="4" align="center">
  <Box width="5" height="5" className="bg-brand-9 rounded-md" />
  <Text weight="medium">Aligned Flex Items</Text>
</Flex>`}
        >
          <Flex gap="4" align="center">
            <Box width="5" height="5" className="bg-brand-9 rounded-md" />
            <Text weight="medium">Aligned Flex Items</Text>
          </Flex>
        </CodePreview>
      </DocSection>

      <DocSection id="direction">
        <DocHeading>Direction</DocHeading>
        <DocText>Control the orientation of the flex items.</DocText>
        <CodePreview
          code={`<Flex direction="column" gap="2">
  <Box height="4" className="bg-gray-a3 rounded" />
  <Box height="4" className="bg-gray-a3 rounded" />
</Flex>`}
        >
          <Flex direction="column" gap="2" width="full">
            <Box height="4" width="full" className="bg-gray-a3 rounded" />
            <Box height="4" width="full" className="bg-gray-a3 rounded" />
          </Flex>
        </CodePreview>
      </DocSection>

      <DocSection id="alignment">
        <DocHeading>Alignment & Justify</DocHeading>
        <DocText>Flex properties enable precise positioning and distribution of elements.</DocText>
        <CodePreview
          code={`<Flex justify="between" align="center" p="4" className="bg-gray-a2 border border-gray-a4 rounded-lg">
  <Text size="2" color="gray">Status: Active</Text>
  <Flex gap="2">
    <Box width="2" height="2" className="bg-success-9 rounded-full" />
    <Text size="1" weight="bold">Online</Text>
  </Flex>
</Flex>`}
        >
          <Flex justify="between" align="center" p="4" className="bg-gray-a2 border border-gray-a4 rounded-lg" width="full">
            <Text size="2" color="gray">Status: Active</Text>
            <Flex gap="2" align="center">
              <Box width="2" height="2" className="bg-success-9 rounded-full" />
              <Text size="1" weight="bold">Online</Text>
            </Flex>
          </Flex>
        </CodePreview>
      </DocSection>

      <DocSection id="gap">
        <DocHeading>Gap</DocHeading>
        <DocText>Use the <code>gap</code> prop to add consistent spacing between items without manual margins.</DocText>
        <CodePreview
          code={`<Flex gap="1">...</Flex>\n<Flex gap="5">...</Flex>`}
        >
          <div className="space-y-4">
            <Flex gap="1" className="bg-gray-a2 p-2 rounded">
              <Box width="3" height="3" className="bg-brand-9 rounded" />
              <Box width="3" height="3" className="bg-brand-9 rounded" />
              <Box width="3" height="3" className="bg-brand-9 rounded" />
            </Flex>
            <Flex gap="5" className="bg-gray-a2 p-2 rounded">
              <Box width="3" height="3" className="bg-brand-9 rounded" />
              <Box width="3" height="3" className="bg-brand-9 rounded" />
              <Box width="3" height="3" className="bg-brand-9 rounded" />
            </Flex>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="api">
        <DocHeading>API Reference</DocHeading>
        <PropsTable props={flexProps} />
      </DocSection>
    </DocLayout>
  );
};

export default FlexDoc;
