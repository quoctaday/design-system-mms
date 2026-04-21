import React from 'react';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';
import { Skeleton, Flex, Box, AuroraBackground } from '../components/ui';

const SkeletonDoc: React.FC = () => {
  const toc = [
    { id: 'usage', title: 'Usage' },
    { id: 'variants', title: 'Variants' },
    { id: 'animations', title: 'Animations' },
    { id: 'api', title: 'API Reference' }
  ];

  const skeletonProps = [
    { name: 'variant', type: '"rectangular" | "circular" | "text"', default: 'rectangular', description: 'Sets the visual shape of the skeleton.' },
    { name: 'animation', type: '"pulse" | "wave" | "none"', default: 'pulse', description: 'The movement style of the loading effect.' },
    { name: 'radius', type: '"none" | "small" | "medium" | "large" | "full"', default: 'small', description: 'The corner roundness.' },
    { name: 'width, height', type: 'string | number', description: 'Dimensions of the skeleton.' }
  ];

  return (
    <DocLayout 
      title="Skeleton" 
      description="Placeholders used to represent content while it is loading."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <DocSection id="usage">
        <DocHeading>Usage</DocHeading>
        <DocText>Skeletons help reduce perceived loading times by providing a visual preview of the content's structure.</DocText>
        <CodePreview
          code={`<Flex gap="4" align="center">
  <Skeleton variant="circular" width={48} height={48} />
  <Flex direction="column" gap="2" grow="1">
    <Skeleton variant="text" width="60%" height={16} />
    <Skeleton variant="text" width="40%" height={12} />
  </Flex>
</Flex>`}
        >
          <Flex gap="4" align="center" className="w-full max-w-sm p-4 bg-gray-a2 border border-gray-a4 rounded-lg">
            <Skeleton variant="circular" width={48} height={48} />
            <Flex direction="column" gap="2" grow="1">
              <Skeleton variant="text" width="60%" height={16} />
              <Skeleton variant="text" width="40%" height={12} />
            </Flex>
          </Flex>
        </CodePreview>
      </DocSection>

      <DocSection id="variants">
        <DocHeading>Variants</DocHeading>
        <DocText>Different shapes to match the content being replaced.</DocText>
        <Flex direction="column" gap="4" width="full" className="mt-6">
          <Flex direction="column" gap="2">
            <DocText size="1" weight="bold" color="gray">Text Wrapper</DocText>
            <Skeleton variant="text" width="100%" height={20} />
          </Flex>
          <Flex direction="column" gap="2">
            <DocText size="1" weight="bold" color="gray">Rectangular (Media/Card)</DocText>
            <Skeleton variant="rectangular" width="100%" height={100} />
          </Flex>
        </Flex>
      </DocSection>

      <DocSection id="animations">
        <DocHeading>Animations</DocHeading>
        <DocText>Choose between a soft <code>pulse</code> or a directional <code>wave</code> effect.</DocText>
        <Flex direction="column" gap="6" width="full" className="mt-6">
          <div className="space-y-2">
            <DocText size="1" weight="bold" color="gray">Pulse (Default)</DocText>
            <Skeleton animation="pulse" width="100%" height={40} />
          </div>
          <div className="space-y-2">
            <DocText size="1" weight="bold" color="gray">Wave</DocText>
            <Skeleton animation="wave" width="100%" height={40} />
          </div>
        </Flex>
      </DocSection>

      <DocSection id="api">
        <DocHeading>API Reference</DocHeading>
        <PropsTable props={skeletonProps} />
      </DocSection>
    </DocLayout>
  );
};

export default SkeletonDoc;
