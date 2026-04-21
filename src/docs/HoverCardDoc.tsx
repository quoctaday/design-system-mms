import React from 'react';
import { HoverCard, Avatar, Flex, Text, Box } from '../components/ui';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { AuroraBackground } from '../components/ui';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';

const HoverCardDoc: React.FC = () => {
  const toc = [
    { id: 'basic', title: 'Basic Usage' },
    { id: 'delays', title: 'Material & Delays' },
    { id: 'api', title: 'API Reference' }
  ];

  const hoverCardProps = [
    { name: 'openDelay', type: 'number', default: '700', description: 'The duration from when the mouse enters the trigger until the hover card opens.' },
    { name: 'closeDelay', type: 'number', default: '300', description: 'The duration from when the mouse leaves the trigger or content until the hover card closes.' },
    { name: 'side', type: "'top' | 'right' | 'bottom' | 'left'", default: "'bottom'", description: 'The preferred side of the trigger to render against.' },
    { name: 'align', type: "'start' | 'center' | 'end'", default: "'center'", description: 'The preferred alignment against the trigger.' }
  ];

  return (
    <DocLayout 
      title="HoverCard" 
      description="A sophisticated preview component that reveals rich content when the user hovers over a trigger."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <DocSection id="basic">
        <DocHeading>Basic Usage</DocHeading>
        <DocText>HoverCard is used for showing profile previews, link metadata, or any supplemental content that doesn't require immediate action.</DocText>
        <CodePreview
          code={`<HoverCard.Root openDelay={300}>
  <HoverCard.Trigger>
    <a href="#" className="font-bold text-brand">@antigravity</a>
  </HoverCard.Trigger>
  <HoverCard.Content width={320}>
    <Flex gap="4">
      <Avatar src="..." fallback="AG" radius="full" size="4" />
      <Box>
        <Text size="2" weight="bold">Antigravity AI</Text>
        <Text size="2" color="subtle">@antigravity</Text>
        <Text size="2" className="mt-2">Advanced Agentic Coding Assistant.</Text>
      </Box>
    </Flex>
  </HoverCard.Content>
</HoverCard.Root>`}
        >
          <div className="py-2">
            <HoverCard.Root openDelay={300}>
              <HoverCard.Trigger>
                <a href="#" style={{ color: 'var(--accent-9)', fontWeight: 'bold', textDecoration: 'none' }}>
                  @antigravity
                </a>
              </HoverCard.Trigger>
              <HoverCard.Content width={320}>
                <Flex gap="4">
                  <Avatar 
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop" 
                    fallback="AG" 
                    radius="full" 
                    size="4" 
                  />
                  <Box>
                    <Text size="2" weight="bold">Antigravity AI</Text>
                    <Text size="2" color="subtle">@antigravity</Text>
                    <Text size="2" style={{ marginTop: 'var(--space-2)' }}>
                      Advanced Agentic Coding Assistant. Specializing in high-fidelity design systems and premium web architectures.
                    </Text>
                    <Flex gap="3" style={{ marginTop: 'var(--space-3)' }}>
                      <Flex gap="1">
                        <Text size="1" weight="bold">1.2k</Text>
                        <Text size="1" color="subtle">Following</Text>
                      </Flex>
                      <Flex gap="1">
                        <Text size="1" weight="bold">12.5k</Text>
                        <Text size="1" color="subtle">Followers</Text>
                      </Flex>
                    </Flex>
                  </Box>
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="delays">
        <DocHeading>Material & Delays</DocHeading>
        <DocText>Configure intent thresholds to avoid distracting users with rapid hover events.</DocText>
        <div className="specs-grid">
          <div className="spec-item">
            <div className="text-sm font-bold">Open Delay</div>
            <div className="text-xs text-muted/60">Defaults to 700ms to prevent accidental triggers during mouse movement.</div>
          </div>
          <div className="spec-item">
            <div className="text-sm font-bold">Close Delay</div>
            <div className="text-xs text-muted/60">Defaults to 300ms to allow moving from trigger to content surface.</div>
          </div>
          <div className="spec-item">
            <div className="text-sm font-bold">Animation</div>
            <div className="text-xs text-muted/60">Utilizes the 140ms Ironclad Snap Factor for premium transitions.</div>
          </div>
        </div>
      </DocSection>

      <DocSection id="api">
        <DocHeading>API Reference</DocHeading>
        <PropsTable props={hoverCardProps} />
      </DocSection>
    </DocLayout>
  );
};

export default HoverCardDoc;
