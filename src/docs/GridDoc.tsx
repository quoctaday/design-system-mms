import React from 'react';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';
import { Grid, Box, Text, AuroraBackground } from '../components/ui';

const GridDoc: React.FC = () => {
  const toc = [
    { id: 'usage', title: 'Usage' },
    { id: 'columns', title: 'Columns' },
    { id: 'gap', title: 'Gaps' },
    { id: 'alignment', title: 'Alignment' },
    { id: 'api', title: 'API Reference' }
  ];

  const gridProps = [
    { name: 'columns', type: 'Responsive<"1"-"12">', default: '1', description: 'Sets the number of grid columns.' },
    { name: 'gap, gapX, gapY', type: 'Responsive<"0"-"9">', description: 'Sets the grid gaps (shorthand, horizontal, or vertical).' },
    { name: 'flow', type: 'Responsive<Flow>', default: 'row', description: 'The grid-auto-flow property (row, column, dense).' },
    { name: 'align', type: 'Responsive<Align>', default: 'stretch', description: 'Sets the align-items property.' },
    { name: 'justify', type: 'Responsive<Justify>', default: 'start', description: 'Sets the justify-content property.' },
    { name: '...BoxProps', type: 'BoxProps', description: 'Grid inherits all Box properties.' }
  ];

  return (
    <DocLayout 
      title="Grid" 
      description="A powerful 2D layout system for arranging items in columns and rows."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <DocSection id="usage">
        <DocHeading>Usage</DocHeading>
        <DocText>Grid is a layout primitive built on top of Box. Use it for complex structural layouts that require column or row control.</DocText>
        <CodePreview
          code={`<Grid columns="3" gap="4">
  <Box height="9" className="bg-gray-a3 rounded-md" />
  <Box height="9" className="bg-gray-a3 rounded-md" />
  <Box height="9" className="bg-gray-a3 rounded-md" />
</Grid>`}
        >
          <Grid columns="3" gap="4" width="full">
            <Box height="9" className="bg-gray-a3 rounded-md" />
            <Box height="9" className="bg-gray-a3 rounded-md" />
            <Box height="9" className="bg-gray-a3 rounded-md" />
          </Grid>
        </CodePreview>
      </DocSection>

      <DocSection id="columns">
        <DocHeading>Columns</DocHeading>
        <DocText>Set the number of columns using the <code>columns</code> prop. It supports responsive values to adapt to screen sizes.</DocText>
        <CodePreview
          code={`<Grid columns={{ initial: '1', md: '2', lg: '4' }} gap="4">...</Grid>`}
        >
          <Grid columns="4" gap="4" width="full">
            {[1, 2, 3, 4].map(i => (
              <Box key={i} height="8" className="bg-blue-a3 rounded border border-blue-a4 flex items-center justify-center">
                <Text size="1" weight="bold">Item {i}</Text>
              </Box>
            ))}
          </Grid>
        </CodePreview>
      </DocSection>

      <DocSection id="gap">
        <DocHeading>Gaps</DocHeading>
        <DocText>Precisely control the gutter between items. <code>gapX</code> and <code>gapY</code> allow for different horizontal and vertical offsets.</DocText>
        <CodePreview
          code={`<Grid columns="3" gapX="9" gapY="2">...</Grid>`}
        >
          <Grid columns="3" gapX="9" gapY="2" width="full">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <Box key={i} height="6" className="bg-gray-a2 border border-gray-a4 rounded" />
            ))}
          </Grid>
        </CodePreview>
      </DocSection>

      <DocSection id="alignment">
        <DocHeading>Alignment</DocHeading>
        <DocText>Align grid items within their tracks using <code>align</code> and <code>justify</code>.</DocText>
        <CodePreview
          code={`<Grid columns="2" gap="4" align="center" justify="between">...</Grid>`}
        >
          <Grid columns="2" gap="4" align="center" className="bg-gray-a2 p-4 rounded-lg" width="full">
            <Box height="9" className="bg-brand-9 rounded shadow-md" />
            <Box p="4">
              <Text weight="bold">Content Title</Text>
              <Text size="2" color="gray">Description that spans multiple lines to show alignment.</Text>
            </Box>
          </Grid>
        </CodePreview>
      </DocSection>

      <DocSection id="api">
        <DocHeading>API Reference</DocHeading>
        <PropsTable props={gridProps} />
      </DocSection>
    </DocLayout>
  );
};

export default GridDoc;
