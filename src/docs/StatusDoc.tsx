import React from 'react';
import { Spinner, Progress, Skeleton, Flex, Box, Card, Heading, Text, Button } from '../components/ui';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { AuroraBackground } from '../components/ui';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';

const StatusDoc: React.FC = () => {
  const toc = [
    { id: 'spinner', title: 'Spinner' },
    { id: 'progress', title: 'Progress Bar' },
    { id: 'skeleton', title: 'Skeleton' },
    { id: 'api', title: 'API Reference' }
  ];

  const spinnerProps = [
    { name: 'size', type: "1-4", default: "2", description: 'Scale factor for spinner size.' },
    { name: 'variant', type: "'default' | 'accent' | 'on-solid'", default: "'default'", description: 'Color variants.' }
  ];

  const progressProps = [
    { name: 'value', type: 'number', default: '0', description: 'Gía trị hiện tại.' },
    { name: 'max', type: 'number', default: '100', description: 'Gía trị tối đa.' },
    { name: 'variant', type: "'brand' | 'success' | 'warning' | 'error' | 'info'", default: "'brand'", description: 'Màu sắc chủ đề.' },
    { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Kích cỡ độ dày.' },
    { name: 'showLabel', type: 'boolean', default: 'false', description: 'Hiện % thanh tiến trình.' }
  ];

  const skeletonProps = [
    { name: 'variant', type: "'rectangular' | 'circular' | 'text'", default: "'rectangular'" },
    { name: 'animation', type: "'pulse' | 'wave' | 'none'", default: "'pulse'" },
    { name: 'radius', type: "'none' | 'small' | 'medium' | 'large' | 'full'", default: "'small'" }
  ];

  return (
    <DocLayout
      title="Status & Loading"
      description="Components for communicating progress, waiting states, and content loading placeholders."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <DocSection id="spinner">
        <DocHeading>Spinner</DocHeading>
        <DocText>A lightweight rotating indicator for short-term loading states.</DocText>
        <CodePreview
          code={`<Spinner size="3" />
<Spinner size="3" variant="accent" />
<Button loading>Save</Button>`}
        >
          <Flex gap="6" align="center">
            <Spinner size="1" />
            <Spinner size="2" />
            <Spinner size="3" variant="accent" />
            <Spinner size="4" />
            <Box className="p-4 bg-brand-9 rounded shadow-sm">
              <Spinner size="2" variant="on-solid" />
            </Box>
          </Flex>
        </CodePreview>
        <PropsTable props={spinnerProps} />
      </DocSection>

      <DocSection id="progress">
        <DocHeading>Progress Bar</DocHeading>
        <DocText>Linear indicators for standard progression or longer-term task status.</DocText>
        <CodePreview
          code={`<Progress value={65} showLabel />
<Progress value={40} variant="success" size="sm" />
<Progress value={90} variant="error" />`}
        >
          <div className="space-y-6 w-full max-w-md">
            <Progress value={65} showLabel />
            <Progress value={45} variant="success" size="sm" />
            <Progress value={30} variant="warning" />
            <Progress value={90} variant="error" size="lg" />
          </div>
        </CodePreview>
        <PropsTable props={progressProps} />
      </DocSection>

      <DocSection id="skeleton">
        <DocHeading>Skeleton</DocHeading>
        <DocText>Use to reduce perceived latency by visualizing the layout structure before data loads.</DocText>
        <CodePreview
          code={`<Flex gap="3">
  <Skeleton variant="circular" width={40} height={40} />
  <div className="flex-1 space-y-2">
    <Skeleton variant="text" width="60%" />
    <Skeleton variant="text" width="100%" />
  </div>
</Flex>`}
        >
          <Card className="p-4 w-72">
            <Flex gap="3" align="center">
              <Skeleton variant="circular" width={40} height={40} />
              <div className="flex-1 space-y-2">
                <Skeleton variant="text" width="40%" height={14} />
                <Skeleton variant="text" width="70%" height={10} />
              </div>
            </Flex>
            <Box mt="4">
              <Skeleton variant="rectangular" width="100%" height={120} radius="medium" />
            </Box>
          </Card>
        </CodePreview>
        <PropsTable props={skeletonProps} />
      </DocSection>

      <DocSection id="api">
        <DocHeading>API Reference</DocHeading>
        
        <DocHeading level={3}>Spinner</DocHeading>
        <PropsTable props={spinnerProps} />

        <DocHeading level={3} className="mt-8">Progress</DocHeading>
        <PropsTable props={progressProps} />

        <DocHeading level={3} className="mt-8">Skeleton</DocHeading>
        <PropsTable props={skeletonProps} />
      </DocSection>
    </DocLayout>
  );
};

export default StatusDoc;
