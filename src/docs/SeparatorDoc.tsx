import React from 'react';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';
import { Separator, Flex, Text, Box, AuroraBackground } from '../components/ui';

const SeparatorDoc: React.FC = () => {
  const toc = [
    { id: 'usage', title: 'Usage' },
    { id: 'orientation', title: 'Orientation' },
    { id: 'sizes', title: 'Sizes' },
    { id: 'api', title: 'API Reference' }
  ];

  const separatorProps = [
    { name: 'orientation', type: '"horizontal" | "vertical"', default: 'horizontal', description: 'The orientation of the separator.' },
    { name: 'size', type: '"1" | "2" | "3"', default: '1', description: 'The length/size of the separator.' },
    { name: 'className', type: 'string', description: 'Custom CSS classes.' }
  ];

  return (
    <DocLayout 
      title="Separator" 
      description="A visual divider that helps organize content into group or sections."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <DocSection id="usage">
        <DocHeading>Usage</DocHeading>
        <DocText>Separators use the system's boundary standards to provide clear visual distinction between components.</DocText>
        <CodePreview
          code={`<Box>
  <Text weight="bold">MMS Platform</Text>
  <Separator className="my-4" />
  <Text color="gray">An operational design system by Woker.</Text>
</Box>`}
        >
          <Box className="w-full max-w-sm">
            <Text weight="bold">MMS Platform</Text>
            <Separator className="my-4" />
            <Text color="gray">An operational design system by Woker.</Text>
          </Box>
        </CodePreview>
      </DocSection>

      <DocSection id="orientation">
        <DocHeading>Orientation</DocHeading>
        <DocText>Separators can be used horizontally or vertically.</DocText>
        <CodePreview
          code={`<Flex align="center" gap="4">
  <Text>Settings</Text>
  <Separator orientation="vertical" className="h-4" />
  <Text>Profile</Text>
  <Separator orientation="vertical" className="h-4" />
  <Text>Security</Text>
</Flex>`}
        >
          <Flex align="center" gap="4">
            <Text>Settings</Text>
            <Separator orientation="vertical" className="h-4" />
            <Text>Profile</Text>
            <Separator orientation="vertical" className="h-4" />
            <Text>Security</Text>
          </Flex>
        </CodePreview>
      </DocSection>

      <DocSection id="sizes">
        <DocHeading>Sizes</DocHeading>
        <DocText>The <code>size</code> prop controls the length of the separator relative to its parent container.</DocText>
        <div className="flex flex-col gap-8 mt-6 w-full">
          <div className="space-y-2">
            <Text size="1" color="gray">Size 1 (Default)</Text>
            <Separator size="1" />
          </div>
          <div className="space-y-2">
            <Text size="1" color="gray">Size 2</Text>
            <Separator size="2" />
          </div>
          <div className="space-y-2">
            <Text size="1" color="gray">Size 3</Text>
            <Separator size="3" />
          </div>
        </div>
      </DocSection>

      <DocSection id="api">
        <DocHeading>API Reference</DocHeading>
        <PropsTable props={separatorProps} />
      </DocSection>
    </DocLayout>
  );
};

export default SeparatorDoc;
