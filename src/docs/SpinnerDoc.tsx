import React from 'react';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';
import { Spinner, Flex, AuroraBackground } from '../components/ui';

const SpinnerDoc: React.FC = () => {
  const toc = [
    { id: 'usage', title: 'Usage' },
    { id: 'variants', title: 'Variants' },
    { id: 'sizes', title: 'Sizes' },
    { id: 'api', title: 'API Reference' }
  ];

  const spinnerProps = [
    { name: 'size', type: '"1" | "2" | "3" | "4"', default: '2', description: 'Sets the dimensions of the spinner.' },
    { name: 'variant', type: '"default" | "accent" | "on-solid"', default: 'default', description: 'Visual theme for the spinner tracking and head.' },
    { name: 'className', type: 'string', description: 'Custom CSS classes.' }
  ];

  return (
    <DocLayout 
      title="Spinner" 
      description="An animated loading indicator used to signal that a process is underway."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <DocSection id="usage">
        <DocHeading>Usage</DocHeading>
        <DocText>Use the Spinner when you need to indicate that a specific action or regional content is loading.</DocText>
        <CodePreview
          code={`<Spinner />`}
        >
          <Flex align="center" justify="center" p="8" width="full">
            <Spinner />
          </Flex>
        </CodePreview>
      </DocSection>

      <DocSection id="variants">
        <DocHeading>Variants</DocHeading>
        <DocText>Spinners can adapt their color to match their context.</DocText>
        <CodePreview
          code={`<Spinner variant="default" />
<Spinner variant="accent" />
<Box className="bg-brand-9 p-4 rounded"><Spinner variant="on-solid" /></Box>`}
        >
          <Flex gap="6" align="center">
            <Spinner variant="default" />
            <Spinner variant="accent" />
            <Flex className="bg-brand-9 p-2 rounded">
              <Spinner variant="on-solid" />
            </Flex>
          </Flex>
        </CodePreview>
      </DocSection>

      <DocSection id="sizes">
        <DocHeading>Sizes</DocHeading>
        <DocText>Four incremental sizes following the system's spacing scale.</DocText>
        <CodePreview
          code={`<Spinner size="1" />
<Spinner size="2" />
<Spinner size="3" />
<Spinner size="4" />`}
        >
          <Flex gap="6" align="center">
            <Spinner size="1" />
            <Spinner size="2" />
            <Spinner size="3" />
            <Spinner size="4" />
          </Flex>
        </CodePreview>
      </DocSection>

      <DocSection id="api">
        <DocHeading>API Reference</DocHeading>
        <PropsTable props={spinnerProps} />
      </DocSection>
    </DocLayout>
  );
};

export default SpinnerDoc;
