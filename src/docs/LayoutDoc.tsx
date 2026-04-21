import React from 'react';
import { 
  Box, 
  Flex, 
  Grid, 
  Container, 
  Section, 
  Separator, 
  Inset, 
  Heading, 
  Text, 
  Card 
} from '../components/ui';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { AuroraBackground } from '../components/ui';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';

const LayoutDoc: React.FC = () => {
  const toc = [
    { id: 'box', title: 'Box' },
    { id: 'flex', title: 'Flex' },
    { id: 'grid', title: 'Grid' },
    { id: 'separator', title: 'Separator' },
    { id: 'inset', title: 'Inset' },
    { id: 'structure', title: 'Structure (Container & Section)' },
    { id: 'responsive', title: 'Responsive Design' }
  ];

  const boxProps = [
    { name: 'p, pt, pr, pb, pl, px, py', type: '0-9', description: 'Padding based on Radix space scale.' },
    { name: 'm, mt, mr, mb, ml, mx, my', type: '0-9', description: 'Margin based on Radix space scale.' },
    { name: 'display', type: 'Responsive<Display>', description: 'CSS Display property.' }
  ];

  const flexProps = [
    { name: 'direction', type: 'Responsive<row | column>', default: 'row' },
    { name: 'align', type: 'Responsive<start | center | end | stretch>' },
    { name: 'justify', type: 'Responsive<start | center | end | between>' },
    { name: 'gap', type: 'Responsive<0-9>' }
  ];

  const separatorProps = [
    { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'" },
    { name: 'size', type: "'1' | '2' | '3'", default: "'1'", description: 'Margins adjustment.' }
  ];

  return (
    <DocLayout
      title="Layout Primitives"
      description="Fundamental atoms for structural arrangement, spacing, and responsive orchestration."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <DocSection id="box">
        <DocHeading>Box</DocHeading>
        <DocText>The most basic layout component. It provides access to the spacing system via shorthand props.</DocText>
        <CodePreview
          code={`<Box p="4" m="2" className="border">
  Basic Box with padding and margin.
</Box>`}
        >
          <Box p="4" className="border border-dashed border-subtle rounded-md">
            <Text>This content is inside a Box with <code>p="4"</code></Text>
          </Box>
        </CodePreview>
        <PropsTable props={boxProps} />
      </DocSection>

      <DocSection id="flex">
        <DocHeading>Flex</DocHeading>
        <DocText>A component for 1D layouts (Flexbox). Perfect for alignment and distribution.</DocText>
        <CodePreview
          code={`<Flex gap="4" align="center" justify="between">
  <Box>Left</Box>
  <Box>Right</Box>
</Flex>`}
        >
          <Flex gap="4" align="center" justify="between" className="p-4 border border-subtle rounded-md">
            <Box className="p-2 bg-accent-subtle rounded">Item 1</Box>
            <Box className="p-2 bg-accent-subtle rounded">Item 2</Box>
            <Box className="p-2 bg-accent-subtle rounded">Item 3</Box>
          </Flex>
        </CodePreview>
        <PropsTable props={flexProps} />
      </DocSection>

      <DocSection id="grid">
        <DocHeading>Grid</DocHeading>
        <DocText>A component for 2D layouts (CSS Grid). Ideal for complex card layouts.</DocText>
        <CodePreview
          code={`<Grid columns="3" gap="4">
  <Box className="bg-subtle">1</Box>
  <Box className="bg-subtle">2</Box>
  <Box className="bg-subtle">3</Box>
</Grid>`}
        >
          <Grid columns="3" gap="4">
            <Box className="p-6 bg-surface-subtle border border-subtle rounded-lg text-center font-bold">1</Box>
            <Box className="p-6 bg-surface-subtle border border-subtle rounded-lg text-center font-bold">2</Box>
            <Box className="p-6 bg-surface-subtle border border-subtle rounded-lg text-center font-bold">3</Box>
          </Grid>
        </CodePreview>
      </DocSection>

      <DocSection id="separator">
        <DocHeading>Separator</DocHeading>
        <DocText>A thin hairline line to separate content. Built with 0.5px precision.</DocText>
        <CodePreview
          code={`<Text>Top</Text>
<Separator size="2" />
<Text>Bottom</Text>

<Flex gap="3" align="center">
  <Text>Left</Text>
  <Separator orientation="vertical" />
  <Text>Right</Text>
</Flex>`}
        >
          <div className="space-y-4">
            <Box>
              <Text weight="bold">Horizontal</Text>
              <Separator size="1" />
              <Text size="2">Secondary content below separator.</Text>
            </Box>
            
            <Flex gap="3" align="center" className="h-10">
              <Text weight="bold">Vertical</Text>
              <Separator orientation="vertical" />
              <Text size="2">Side content</Text>
              <Separator orientation="vertical" />
              <Text size="2">More info</Text>
            </Flex>
          </div>
        </CodePreview>
        <PropsTable props={separatorProps} />
      </DocSection>

      <DocSection id="inset">
        <DocHeading>Inset</DocHeading>
        <DocText>Forces content to ignore parent padding, useful for full-width images or separators within cards.</DocText>
        <CodePreview
          code={`<Card>
  <Inset side="top" clip="border-box">
    <img src="..." />
  </Inset>
  <Box p="4">Card content</Box>
</Card>`}
        >
          <Card className="w-64 overflow-hidden">
            <Inset side="top" p="0">
              <div className="h-24 bg-brand-9 flex items-center justify-center text-white font-bold">
                Hero Image Area
              </div>
            </Inset>
            <Box p="4">
              <Heading size="3">Card Title</Heading>
              <Text size="2">The banner above ignores card padding thanks to Inset.</Text>
            </Box>
          </Card>
        </CodePreview>
      </DocSection>

      <DocSection id="structure">
        <DocHeading>Structure (Container & Section)</DocHeading>
        <DocText><code>Section</code> provides vertical rhythm, while <code>Container</code> constrains content width.</DocText>
        <CodePreview
          code={`<Section size="2">
  <Container size="2">
    Constrained Content
  </Container>
</Section>`}
        >
          <Section size="1" className="bg-surface-subtle border border-subtle rounded-lg">
             <Container size="1" className="bg-surface-panel p-4 border border-brand-9 rounded shadow-sm">
                <Text align="center">This container is constrained to <code>size="1"</code> within a Section.</Text>
             </Container>
          </Section>
        </CodePreview>
      </DocSection>

      <DocSection id="responsive">
        <DocHeading>Responsive Design</DocHeading>
        <DocText>Almost all layout props accept an object for responsive values: <code>{`{ initial: '1', md: '2', lg: '4' }`}</code>.</DocText>
        <CodePreview
          code={`<Grid columns={{ initial: '1', sm: '2', md: '4' }} gap="4">
  {items.map(i => <Card key={i}>{i}</Card>)}
</Grid>`}
        >
           <Grid columns={{ initial: '1', sm: '2', md: '3' }} gap="4">
             <Card className="p-4 text-center">Adaptive Card 1</Card>
             <Card className="p-4 text-center">Adaptive Card 2</Card>
             <Card className="p-4 text-center">Adaptive Card 3</Card>
           </Grid>
        </CodePreview>
      </DocSection>
    </DocLayout>
  );
};

export default LayoutDoc;
