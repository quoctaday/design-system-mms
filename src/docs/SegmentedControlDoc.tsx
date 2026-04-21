import React, { useState } from 'react';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';
import { 
  RiLayoutGridLine, 
  RiListCheck, 
  RiMoonLine, 
  RiSunLine, 
  RiMacLine,
  RiLineChartLine,
  RiShieldFlashLine,
  RiHistoryLine,
  RiPieChartLine,
  RiSettings4Line,
  RiNavigationLine,
  RiCursorLine,
  RiInformationLine
} from 'react-icons/ri';
import { 
  SegmentedControl, 
  Tabs, 
  AuroraBackground,
  Badge,
  Separator,
  Flex,
  Grid,
  DataList,
  Text
} from '../components/ui';

const SegmentedControlDoc: React.FC = () => {
  const [view, setView] = useState('grid');
  const [variant, setVariant] = useState<'surface' | 'classic'>('surface');
  const [size, setSize] = useState<'1' | '2' | '3'>('2');

  const toc = [
    { id: 'compound', title: 'Compound Architecture' },
    { id: 'variants', title: 'Variants' },
    { id: 'sizes', title: 'Sizes' },
    { id: 'radius', title: 'Radius' },
    { id: 'api', title: 'API Reference' }
  ];

  const rootProps = [
    { name: 'value', type: 'string', description: 'The currently active segment value.' },
    { name: 'defaultValue', type: 'string', description: 'The initial active value when uncontrolled.' },
    { name: 'onValueChange', type: '(value: string) => void', description: 'Event handler triggered upon selection change.' },
    { name: 'variant', type: "'surface' | 'classic'", default: "'surface'", description: 'Visual aesthetic variant.' },
    { name: 'size', type: "'1' | '2' | '3'", default: "'2'", description: 'Operational density scale.' },
    { name: 'radius', type: "'none' | '1' | '2' | '3' | '4' | '5' | '6' | 'full'", default: "'full'", description: 'Outer container corner radius.' },
    { name: 'fullWidth', type: 'boolean', default: 'false', description: 'Whether the control expands to fill its container width.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Prevents all interaction and applies muted styling.' }
  ];

  return (
    <DocLayout
      title="Segmented Control"
      description="A high-density choice component for efficient value selection. Engineered to strictly mirror the Radix UI Themes architecture with high-fidelity mechanical transitions."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <DocSection id="compound">
        <DocHeading>Compound Architecture</DocHeading>
        <DocText>Adheres to the **Radix-Native** structural pattern. Utilize <code>Root</code> and <code>Item</code> components to maintain total predictable control over state and rendering.</DocText>
        <CodePreview
          code={`<SegmentedControl.Root value={view} onValueChange={setView}>
  <SegmentedControl.Item value="grid">
    <RiLayoutGridLine /> Grid
  </SegmentedControl.Item>
  <SegmentedControl.Item value="list">
    <RiListCheck /> List
  </SegmentedControl.Item>
</SegmentedControl.Root>`}
        >
          <div className="flex flex-wrap gap-4 items-center">
            <SegmentedControl.Root value={view} onValueChange={setView}>
              <SegmentedControl.Item value="grid" className="gap-2">
                <RiLayoutGridLine style={{ fontSize: '1.2em' }} /> Grid
              </SegmentedControl.Item>
              <SegmentedControl.Item value="list" className="gap-2">
                <RiListCheck style={{ fontSize: '1.2em' }} /> List
              </SegmentedControl.Item>
            </SegmentedControl.Root>
            <span className="text-sm font-medium text-muted">Active State: {view}</span>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="variants">
        <DocHeading>Variants</DocHeading>
        <DocText>Leverage two distinct visual tiers to communicate hierarchy and depth within high-density operational interfaces.</DocText>
        
        <CodePreview
          code={`{/* Standard Hierarchy */}\n<SegmentedControl.Root variant="surface">...</SegmentedControl.Root>\n\n{/* High Contrast / Concentrated Hierarchy */}\n<SegmentedControl.Root variant="classic">...</SegmentedControl.Root>`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Surface Tier */}
            <div className="flex flex-col gap-4 p-5 rounded-2xl bg-surface-panel border border-subtle shadow-sm">
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-accent">Surface Tier</span>
                <span className="text-xs text-muted">Standard 1px "Mirror-Ring" protocol. Minimalist and non-distractive.</span>
              </div>
              <div className="flex items-center justify-center py-6 bg-surface-sunken/40 rounded-xl border border-dashed border-divider">
                <SegmentedControl.Root variant="surface" defaultValue="overview">
                  <SegmentedControl.Item value="overview" className="gap-2">
                    <RiLayoutGridLine /> Overview
                  </SegmentedControl.Item>
                  <SegmentedControl.Item value="analytics" className="gap-2">
                    <RiLineChartLine /> Analytics
                  </SegmentedControl.Item>
                  <SegmentedControl.Item value="performance" className="gap-2">
                    <RiShieldFlashLine /> Status
                  </SegmentedControl.Item>
                </SegmentedControl.Root>
              </div>
            </div>

            {/* Classic Tier */}
            <div className="flex flex-col gap-4 p-5 rounded-2xl bg-surface-panel border border-subtle shadow-sm">
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-indigo-11">Classic Tier</span>
                <span className="text-xs text-muted">Layered depth using composite shadows. High-fidelity contrast for critical toggles.</span>
              </div>
              <div className="flex items-center justify-center py-6 bg-surface-sunken/40 rounded-xl border border-dashed border-divider">
                <SegmentedControl.Root variant="classic" defaultValue="overview">
                  <SegmentedControl.Item value="overview" className="gap-2">
                    <RiHistoryLine /> History
                  </SegmentedControl.Item>
                  <SegmentedControl.Item value="analytics" className="gap-2">
                    <RiPieChartLine /> Data
                  </SegmentedControl.Item>
                  <SegmentedControl.Item value="performance" className="gap-2">
                    <RiSettings4Line /> Config
                  </SegmentedControl.Item>
                </SegmentedControl.Root>
              </div>
            </div>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="sizes">
        <DocHeading>Sizes</DocHeading>
        <DocText>Precisely calibrated dimensions synchronized with the global operational density scale.</DocText>
        <CodePreview
          code={`<SegmentedControl.Root size="1">...</SegmentedControl.Root>\n<SegmentedControl.Root size="2">...</SegmentedControl.Root>\n<SegmentedControl.Root size="3">...</SegmentedControl.Root>`}
        >
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className="w-16 text-xs text-muted">Size 1 (28px)</span>
              <SegmentedControl.Root size="1" defaultValue="system">
                <SegmentedControl.Item value="light"><RiSunLine /></SegmentedControl.Item>
                <SegmentedControl.Item value="dark"><RiMoonLine /></SegmentedControl.Item>
                <SegmentedControl.Item value="system"><RiMacLine /></SegmentedControl.Item>
              </SegmentedControl.Root>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-16 text-xs text-muted">Size 2 (36px)</span>
              <SegmentedControl.Root size="2" defaultValue="system">
                <SegmentedControl.Item value="light"><RiSunLine /></SegmentedControl.Item>
                <SegmentedControl.Item value="dark"><RiMoonLine /></SegmentedControl.Item>
                <SegmentedControl.Item value="system"><RiMacLine /></SegmentedControl.Item>
              </SegmentedControl.Root>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-16 text-xs text-muted">Size 3 (44px)</span>
              <SegmentedControl.Root size="3" defaultValue="system">
                <SegmentedControl.Item value="light"><RiSunLine /></SegmentedControl.Item>
                <SegmentedControl.Item value="dark"><RiMoonLine /></SegmentedControl.Item>
                <SegmentedControl.Item value="system"><RiMacLine /></SegmentedControl.Item>
              </SegmentedControl.Root>
            </div>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="radius">
        <DocHeading>Radius</DocHeading>
        <DocText>Assign a specific radius value to match your interface's geometric personality.</DocText>
        <CodePreview
          code={`<Flex align="start" direction="column" gap="4">\n  <SegmentedControl.Root defaultValue="inbox" radius="none">...</SegmentedControl.Root>\n  <SegmentedControl.Root defaultValue="inbox" radius="small">...</SegmentedControl.Root>\n  <SegmentedControl.Root defaultValue="inbox" radius="medium">...</SegmentedControl.Root>\n  <SegmentedControl.Root defaultValue="inbox" radius="large">...</SegmentedControl.Root>\n  <SegmentedControl.Root defaultValue="inbox" radius="full">...</SegmentedControl.Root>\n</Flex>`}
        >
          <Flex align="start" direction="column" gap="4">
            <SegmentedControl.Root defaultValue="inbox" radius="none">
              <SegmentedControl.Item value="inbox">Inbox</SegmentedControl.Item>
              <SegmentedControl.Item value="drafts">Drafts</SegmentedControl.Item>
              <SegmentedControl.Item value="sent">Sent</SegmentedControl.Item>
            </SegmentedControl.Root>

            <SegmentedControl.Root defaultValue="inbox" radius="small">
              <SegmentedControl.Item value="inbox">Inbox</SegmentedControl.Item>
              <SegmentedControl.Item value="drafts">Drafts</SegmentedControl.Item>
              <SegmentedControl.Item value="sent">Sent</SegmentedControl.Item>
            </SegmentedControl.Root>

            <SegmentedControl.Root defaultValue="inbox" radius="medium">
              <SegmentedControl.Item value="inbox">Inbox</SegmentedControl.Item>
              <SegmentedControl.Item value="drafts">Drafts</SegmentedControl.Item>
              <SegmentedControl.Item value="sent">Sent</SegmentedControl.Item>
            </SegmentedControl.Root>

            <SegmentedControl.Root defaultValue="inbox" radius="large">
              <SegmentedControl.Item value="inbox">Inbox</SegmentedControl.Item>
              <SegmentedControl.Item value="drafts">Drafts</SegmentedControl.Item>
              <SegmentedControl.Item value="sent">Sent</SegmentedControl.Item>
            </SegmentedControl.Root>

            <SegmentedControl.Root defaultValue="inbox" radius="full">
              <SegmentedControl.Item value="inbox">Inbox</SegmentedControl.Item>
              <SegmentedControl.Item value="drafts">Drafts</SegmentedControl.Item>
              <SegmentedControl.Item value="sent">Sent</SegmentedControl.Item>
            </SegmentedControl.Root>
          </Flex>
        </CodePreview>
      </DocSection>

      <DocSection id="comparison">
        <div className="p-10 rounded-[32px] bg-surface-sunken border border-subtle overflow-hidden relative">
          <DocHeading>Operational Archetype Comparison</DocHeading>
          <DocText className="text-secondary text-sm mb-12 max-w-2xl">
            A technical breakdown of component parity. While sharing a similar DNA, they are engineered for distinct behavioral intents and density targets.
          </DocText>

          <Grid columns={{ initial: '1', md: '2' }} gap="8">
            {/* Tabs Block */}
            <Flex direction="column" gap="6" className="p-8 rounded-2xl bg-surface-panel border border-subtle shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-9 opacity-20" />
              <Flex align="center" justify="between">
                <Badge variant="surface" color="blue" className="px-2.5 py-1 uppercase tracking-widest text-[9px] font-bold">Navigation-Intent</Badge>
                <RiNavigationLine className="text-blue-9 opacity-50 text-xl" />
              </Flex>
              
              <div className="py-12 flex items-center justify-center bg-gray-a2/40 rounded-xl border border-divider">
                 <Tabs defaultValue="1" variant="surface">
                   <Tabs.List>
                     <Tabs.Trigger value="1">Inbox</Tabs.Trigger>
                     <Tabs.Trigger value="2">Sent</Tabs.Trigger>
                     <Tabs.Trigger value="3">Archive</Tabs.Trigger>
                   </Tabs.List>
                 </Tabs>
              </div>

              <Separator size="4" className="my-2" />

              <DataList.Root size="1" className="gap-y-5">
                 <DataList.Item>
                   <DataList.Label className="text-muted font-bold uppercase tracking-wider text-[9px]">Internal Padding</DataList.Label>
                   <DataList.Value className="text-right font-semibold">6px (Spacious)</DataList.Value>
                 </DataList.Item>
                 <DataList.Item>
                   <DataList.Label className="text-muted font-bold uppercase tracking-wider text-[9px]">Load Strategy</DataList.Label>
                   <DataList.Value className="text-right font-semibold text-blue-11 font-mono">Lazy-loaded Panels</DataList.Value>
                 </DataList.Item>
                 <DataList.Item>
                   <DataList.Label className="text-muted font-bold uppercase tracking-wider text-[9px]">Key Behavior</DataList.Label>
                   <DataList.Value className="text-right font-semibold text-secondary">Content Partitioning</DataList.Value>
                 </DataList.Item>
              </DataList.Root>

              <div className="mt-4 px-4 py-3.5 rounded-xl bg-blue-a2/30 border border-blue-a3 flex items-start gap-4 transition-colors group-hover:bg-blue-a2/40">
                <RiInformationLine className="mt-0.5 text-blue-10 flex-shrink-0 text-lg" />
                <Text size="1" color="blue" className="leading-relaxed font-medium">
                  Optimized for top-level application navigation and major architectural divisions where content volume is high.
                </Text>
              </div>
            </Flex>

            {/* Segmented Block */}
            <Flex direction="column" gap="6" className="p-8 rounded-2xl bg-surface-panel border border-subtle shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-orange-9 opacity-20" />
              <Flex align="center" justify="between">
                <Badge variant="surface" color="orange" className="px-2.5 py-1 uppercase tracking-widest text-[9px] font-bold">Selection-Intent</Badge>
                <RiCursorLine className="text-orange-9 opacity-50 text-xl" />
              </Flex>

              <div className="py-12 flex items-center justify-center bg-gray-a2/40 rounded-xl border border-divider">
                 <SegmentedControl.Root defaultValue="1">
                    <SegmentedControl.Item value="1">Grid</SegmentedControl.Item>
                    <SegmentedControl.Item value="2">List</SegmentedControl.Item>
                    <SegmentedControl.Item value="3">Table</SegmentedControl.Item>
                 </SegmentedControl.Root>
              </div>

              <Separator size="4" className="my-2" />

              <DataList.Root size="1" className="gap-y-5">
                 <DataList.Item>
                   <DataList.Label className="text-muted font-bold uppercase tracking-wider text-[9px]">Internal Padding</DataList.Label>
                   <DataList.Value className="text-right font-semibold">4px (Dense)</DataList.Value>
                 </DataList.Item>
                 <DataList.Item>
                   <DataList.Label className="text-muted font-bold uppercase tracking-wider text-[9px]">Load Strategy</DataList.Label>
                   <DataList.Value className="text-right font-semibold text-orange-11 font-mono">Instant State Change</DataList.Value>
                 </DataList.Item>
                 <DataList.Item>
                   <DataList.Label className="text-muted font-bold uppercase tracking-wider text-[9px]">Key Behavior</DataList.Label>
                   <DataList.Value className="text-right font-semibold text-secondary">Value/View Selection</DataList.Value>
                 </DataList.Item>
              </DataList.Root>

              <div className="mt-4 px-4 py-3.5 rounded-xl bg-orange-a2/30 border border-orange-a3 flex items-start gap-4 transition-colors group-hover:bg-orange-a2/40">
                <RiInformationLine className="mt-0.5 text-orange-10 flex-shrink-0 text-lg" />
                <Text size="1" color="orange" className="leading-relaxed font-medium">
                  Engineered for rapid value toggling, view switching, and intra-page filtering within dashboards and toolbars.
                </Text>
              </div>
            </Flex>
          </Grid>
        </div>
      </DocSection>

      <DocSection id="api">
        <DocHeading>API Reference</DocHeading>
        <DocHeading level={3}>SegmentedControl.Root</DocHeading>
        <PropsTable props={rootProps} />
        <DocHeading level={3} className="mt-8">SegmentedControl.Item</DocHeading>
        <PropsTable props={[
          { name: 'value', type: 'string', required: true, description: 'Unique identifier for the segment.' },
          { name: 'disabled', type: 'boolean', description: 'Disables the individual segment.' },
          { name: 'className', type: 'string', description: 'Additional CSS classes for custom styling.' }
        ]} />
      </DocSection>
    </DocLayout>
  );
};

export default SegmentedControlDoc;
