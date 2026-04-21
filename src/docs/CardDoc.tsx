import React from 'react';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';
import { Card, Text, Button, Flex, AuroraBackground } from '../components/ui';

const CardDoc: React.FC = () => {
  const toc = [
    { id: 'usage', title: 'Usage' },
    { id: 'variants', title: 'Variants' },
    { id: 'composition', title: 'Composition' },
    { id: 'api', title: 'API Reference' }
  ];

  const cardProps = [
    { name: 'title', type: 'ReactNode', description: 'The main title of the card.' },
    { name: 'subtitle', type: 'ReactNode', description: 'Secondary text below the title.' },
    { name: 'headerExtra', type: 'ReactNode', description: 'Additional content in the header (e.g. Buttons, Icons).' },
    { name: 'footer', type: 'ReactNode', description: 'Content displayed at the bottom of the card.' },
    { name: 'variant', type: '"default" | "glass" | "bordered"', default: 'default', description: 'The visual style of the card.' },
    { name: 'padding', type: '"none" | "sm" | "md" | "lg"', default: 'md', description: 'The internal padding of the card body.' },
    { name: 'children', type: 'ReactNode', description: 'The body content of the card.' }
  ];

  return (
    <DocLayout 
      title="Card" 
      description="A container for grouping related content and actions."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <DocSection id="usage">
        <DocHeading>Usage</DocHeading>
        <DocText>Cards are the primary structural building block for the MMS dashboard aesthetic. They provide consistent grouping and elevation.</DocText>
        <CodePreview
          code={`<Card title="Card Title" subtitle="Card description goes here">
  <Text>This is the main body of the card where your content lives.</Text>
</Card>`}
        >
          <Card title="Card Title" subtitle="Card description goes here" className="w-full max-w-md">
            <Text>This is the main body of the card where your content lives.</Text>
          </Card>
        </CodePreview>
      </DocSection>

      <DocSection id="variants">
        <DocHeading>Variants</DocHeading>
        <DocText>Cards support three distinct visual treatments for different levels of hierarchy.</DocText>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <Card variant="default" title="Default">
            <Text size="2">Standard card with soft shadow and subtle border.</Text>
          </Card>
          <Card variant="bordered" title="Bordered">
            <Text size="2">Clean border with no shadow for high-density layouts.</Text>
          </Card>
          <Card variant="glass" title="Glass">
            <Text size="2">Translucent effect for overlaying on complex backgrounds.</Text>
          </Card>
        </div>
      </DocSection>

      <DocSection id="composition">
        <DocHeading>Composition</DocHeading>
        <DocText>Leverage headers and footers to create rich interfaces.</DocText>
        <CodePreview
          code={`<Card 
  title="Account Security" 
  headerExtra={<Button size="1" variant="soft">Manage</Button>}
  footer={
    <Flex justify="end" gap="2">
      <Button variant="ghost" size="2">Cancel</Button>
      <Button variant="solid" size="2">Save</Button>
    </Flex>
  }
>
  <Text>Update your security settings and two-factor authentication.</Text>
</Card>`}
        >
          <Card 
            title="Account Security" 
            headerExtra={<Button size="1" variant="soft">Manage</Button>}
            className="w-full max-w-lg"
            footer={
              <Flex justify="end" gap="2" width="full">
                <Button variant="ghost" size="2">Cancel</Button>
                <Button variant="solid" size="2">Save</Button>
              </Flex>
            }
          >
            <Text>Update your security settings and two-factor authentication.</Text>
          </Card>
        </CodePreview>
      </DocSection>

      <DocSection id="api">
        <DocHeading>API Reference</DocHeading>
        <PropsTable props={cardProps} />
      </DocSection>
    </DocLayout>
  );
};

export default CardDoc;
