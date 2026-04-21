import React from 'react';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';
import { Box, Text, AuroraBackground } from '../components/ui';

const BoxDoc: React.FC = () => {
  const toc = [
    { id: 'usage', title: 'Usage' },
    { id: 'as-prop', title: 'The "as" prop' },
    { id: 'spacing', title: 'Spacing' },
    { id: 'dimensions', title: 'Dimensions' },
    { id: 'border', title: 'Borders' },
    { id: 'api', title: 'API Reference' }
  ];

  const boxProps = [
    { name: 'as', type: 'any', default: 'div', description: 'The underlying HTML element to render.' },
    { name: 'p, px, py, pt, pr, pb, pl', type: 'Responsive<"0"-"9">', description: 'Padding offsets following the Radix spacing scale.' },
    { name: 'm, mx, my, mt, mr, mb, ml', type: 'Responsive<"0"-"9">', description: 'Margin offsets following the Radix spacing scale.' },
    { name: 'width, height', type: 'Responsive<Size>', description: 'Width and height definitions (px, auto, full, min, max, fit, 0-9).' },
    { name: 'display', type: 'Responsive<Display>', description: 'CSS display property (block, inline, flex, grid, etc.).' },
    { name: 'border', type: '"b" | "t" | "none"', description: 'Quick border presets (bottom or top hairline).' },
    { name: 'position', type: 'Responsive<Position>', description: 'CSS position (relative, absolute, etc.).' },
    { name: 'zIndex', type: 'Responsive<"0"-"5">', description: 'Stacking order.' }
  ];

  return (
    <DocLayout 
      title="Box" 
      description="Fundamental layout primitive for spacing, sizing, and positioning."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <DocSection id="usage">
        <DocHeading>Usage</DocHeading>
        <DocText>Box is a base component that provides access to the system's spacing, sizing, and display properties. It renders a <code>div</code> by default.</DocText>
        <CodePreview
          code={`<Box p="4" width="full" className="bg-gray-a2 border border-gray-a4 rounded-lg">
  <Text>This is a Box with padding.</Text>
</Box>`}
        >
          <Box p="4" width="full" className="bg-gray-a2 border border-gray-a4 rounded-lg">
            <Text>This is a Box with padding.</Text>
          </Box>
        </CodePreview>
      </DocSection>

      <DocSection id="as-prop">
        <DocHeading>The "as" prop</DocHeading>
        <DocText>Use the <code>as</code> prop to change the underlying HTML element while keeping the layout properties.</DocText>
        <CodePreview
          code={`<Box as="section" py="6" border="b">
  <Text size="5" weight="bold">Section Header</Text>
</Box>`}
        >
          <Box as="section" py="6" border="b">
            <Text size="5" weight="bold">Section Header</Text>
          </Box>
        </CodePreview>
      </DocSection>

      <DocSection id="spacing">
        <DocHeading>Spacing</DocHeading>
        <DocText>Control padding and margins using the Radix 0–9 scale. Properties are responsive, accepting either a single value or a mobile/tablet/desktop configuration.</DocText>
        <CodePreview
          code={`<Box p="4" m="4" className="bg-blue-a3">Padding: 4, Margin: 4</Box>
<Box px="9" py="2" className="bg-green-a3">X: 9, Y: 2</Box>`}
        >
          <div className="space-y-4">
            <Box p="4" m="4" className="bg-blue-a3 rounded-md">Padding: 4, Margin: 4</Box>
            <Box px="9" py="2" className="bg-green-a3 rounded-md">X: 9, Y: 2</Box>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="border">
        <DocHeading>Borders</DocHeading>
        <DocText>Quickly apply top or bottom hairline borders that follow the system's boundary standards.</DocText>
        <CodePreview
          code={`<Box border="t" py="4">Top Border</Box>
<Box border="b" py="4">Bottom Border</Box>`}
        >
          <div className="space-y-4">
            <Box border="t" py="4">Top Border</Box>
            <Box border="b" py="4">Bottom Border</Box>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="api">
        <DocHeading>API Reference</DocHeading>
        <PropsTable props={boxProps} />
      </DocSection>
    </DocLayout>
  );
};

export default BoxDoc;
