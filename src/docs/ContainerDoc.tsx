import React from 'react';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';
import { Container, Box, Text, AuroraBackground } from '../components/ui';

const ContainerDoc: React.FC = () => {
  const toc = [
    { id: 'usage', title: 'Usage' },
    { id: 'sizes', title: 'Sizes' },
    { id: 'api', title: 'API Reference' }
  ];

  const containerProps = [
    { name: 'size', type: 'Responsive<"1" | "2" | "3" | "4" | "none">', default: '4', description: 'Sets the maximum width of the container.' },
    { name: '...BoxProps', type: 'BoxProps', description: 'Container inherits all Box properties.' }
  ];

  return (
    <DocLayout 
      title="Container" 
      description="Constrains the maximum width of its content while centering it."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <DocSection id="usage">
        <DocHeading>Usage</DocHeading>
        <DocText>Container is used to limit the horizontal width of your content, essential for maintaining readability on large screens.</DocText>
        <CodePreview
          code={`<Container size="2" className="bg-gray-a2 border border-gray-a4 rounded-lg p-6">
  <Text>This content is constrained to size 2.</Text>
</Container>`}
        >
          <Container size="2" className="bg-gray-a2 border border-gray-a4 rounded-lg p-6">
            <Text>This content is constrained to size 2.</Text>
          </Container>
        </CodePreview>
      </DocSection>

      <DocSection id="sizes">
        <DocHeading>Sizes</DocHeading>
        <DocText>The system provides four standard container sizes, plus a <code>none</code> option for full width.</DocText>
        <div className="space-y-4 mt-6">
          <div className="flex flex-col gap-2">
            <Text size="1" weight="bold" color="gray" className="uppercase">Size 1 (Small)</Text>
            <Container size="1" className="h-8 bg-brand-a3 border border-brand-a5 rounded flex items-center justify-center">
              <Text size="1">Container 1</Text>
            </Container>
          </div>
          <div className="flex flex-col gap-2">
            <Text size="1" weight="bold" color="gray" className="uppercase">Size 2</Text>
            <Container size="2" className="h-8 bg-brand-a3 border border-brand-a5 rounded flex items-center justify-center">
              <Text size="1">Container 2</Text>
            </Container>
          </div>
          <div className="flex flex-col gap-2">
            <Text size="1" weight="bold" color="gray" className="uppercase">Size 3</Text>
            <Container size="3" className="h-8 bg-brand-a3 border border-brand-a5 rounded flex items-center justify-center">
              <Text size="1">Container 3</Text>
            </Container>
          </div>
          <div className="flex flex-col gap-2">
            <Text size="1" weight="bold" color="gray" className="uppercase">Size 4 (Project Default)</Text>
            <Container size="4" className="h-8 bg-brand-a3 border border-brand-a5 rounded flex items-center justify-center">
              <Text size="1">Container 4</Text>
            </Container>
          </div>
        </div>
      </DocSection>

      <DocSection id="api">
        <DocHeading>API Reference</DocHeading>
        <PropsTable props={containerProps} />
      </DocSection>
    </DocLayout>
  );
};

export default ContainerDoc;
