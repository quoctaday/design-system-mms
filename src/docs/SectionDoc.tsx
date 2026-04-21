import React from 'react';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';
import { Section, Box, Text, AuroraBackground, Heading } from '../components/ui';

const SectionDoc: React.FC = () => {
  const toc = [
    { id: 'usage', title: 'Usage' },
    { id: 'sizes', title: 'Sizes' },
    { id: 'api', title: 'API Reference' }
  ];

  const sectionProps = [
    { name: 'size', type: 'Responsive<"1" | "2" | "3">', default: '3', description: 'Sets the vertical padding size for the section.' },
    { name: '...BoxProps', type: 'BoxProps', description: 'Section inherits all Box properties and defaults to a <section> tag.' }
  ];

  return (
    <DocLayout 
      title="Section" 
      description="Vertical structural primitive for defining distinct layout areas."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <DocSection id="usage">
        <DocHeading>Usage</DocHeading>
        <DocText>Section is used to wrap blocks of content, providing standardized vertical breathing room. It defaults to an HTML <code>section</code> element.</DocText>
        <CodePreview
          code={`<Section size="1" border="b">
  <Heading size="6">Section One</Heading>
  <Text>This section has smaller padding and a divider.</Text>
</Section>`}
        >
          <Section size="1" border="b" width="full">
            <Heading size="6">Section One</Heading>
            <Text>This section has smaller padding and a divider.</Text>
          </Section>
        </CodePreview>
      </DocSection>

      <DocSection id="sizes">
        <DocHeading>Sizes</DocHeading>
        <DocText>Three padding levels allow you to control the density of your page sections.</DocText>
        <div className="space-y-6 mt-6">
          <div className="flex flex-col gap-2">
            <Text size="1" weight="bold" color="gray" className="uppercase">Size 1 (Dense)</Text>
            <Section size="1" className="bg-gray-a2 border border-dashed border-gray-a6 rounded p-4">
              <Box height="6" className="bg-brand-a3 rounded" />
            </Section>
          </div>
          <div className="flex flex-col gap-2">
            <Text size="1" weight="bold" color="gray" className="uppercase">Size 2</Text>
            <Section size="2" className="bg-gray-a2 border border-dashed border-gray-a6 rounded p-4">
              <Box height="6" className="bg-brand-a3 rounded" />
            </Section>
          </div>
          <div className="flex flex-col gap-2">
            <Text size="1" weight="bold" color="gray" className="uppercase">Size 3 (Project Default)</Text>
            <Section size="3" className="bg-gray-a2 border border-dashed border-gray-a6 rounded p-4">
              <Box height="6" className="bg-brand-a3 rounded" />
            </Section>
          </div>
        </div>
      </DocSection>

      <DocSection id="api">
        <DocHeading>API Reference</DocHeading>
        <PropsTable props={sectionProps} />
      </DocSection>
    </DocLayout>
  );
};

export default SectionDoc;
