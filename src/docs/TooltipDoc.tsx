import React from 'react';
import { Tooltip, Button } from '../components/ui';
import { DocLayout } from '../components/docs/DocLayout';
import { AuroraBackground } from '../components/ui/AuroraBackground/AuroraBackground';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';
import { 
  RiInformationLine, 
  RiQuestionFill, 
  RiDeleteBinLine, 
  RiSaveLine 
} from 'react-icons/ri';

const TooltipDoc: React.FC = () => {
  const toc = [
    { id: 'basic', title: 'Basic Usage' },
    { id: 'directions', title: 'Directions' },
    { id: 'delay', title: 'Delay & Duration' },
    { id: 'examples', title: 'Practical Examples' },
    { id: 'api', title: 'API Reference' }
  ];

  const tooltipProps = [
    { name: 'side', type: "'top' | 'right' | 'bottom' | 'left'", default: "'top'", description: 'Hướng hiển thị của tooltip so với trigger.' },
    { name: 'delayDuration', type: 'number', default: '300', description: 'Thời gian delay (ms) trước khi hiển thị.' },
    { name: 'skipDelayDuration', type: 'number', default: '300', description: 'Thời gian skip delay sau khi tooltip đầu tiên hiện.' },
    { name: 'disableHoverableContent', type: 'boolean', default: 'false', description: 'Vô hiệu hóa khả năng hover vào content.' }
  ];

  return (
    <DocLayout 
      title="Tooltip" 
      description="A popup that displays information related to an element when it receives focus or mouse hover."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <section id="basic" className="doc-section">
        <h2>Basic Usage</h2>
        <p>Simple tooltips to provide additional context on interactive elements.</p>
        <CodePreview
          code={`<Tooltip.Root side="top">
  <Tooltip.Trigger>
    <Button variant="outline">Hover me</Button>
  </Tooltip.Trigger>
  <Tooltip.Content>Tooltip Content</Tooltip.Content>
</Tooltip.Root>`}
        >
          <div className="flex gap-4 py-2">
            <Tooltip.Root side="top">
              <Tooltip.Trigger>
                <Button variant="outline">Hover me (Top)</Button>
              </Tooltip.Trigger>
              <Tooltip.Content>This is a top tooltip</Tooltip.Content>
            </Tooltip.Root>

            <Tooltip.Root side="bottom">
              <Tooltip.Trigger>
                <Button variant="outline">Hover me (Bottom)</Button>
              </Tooltip.Trigger>
              <Tooltip.Content>This is a bottom tooltip</Tooltip.Content>
            </Tooltip.Root>
          </div>
        </CodePreview>
      </section>

      <section id="directions" className="doc-section">
        <h2>Directions</h2>
        <p>Tooltips can be positioned on any of the four sides of the trigger.</p>
        <CodePreview
          code={`<Tooltip.Root side="left">...</Tooltip.Root>
<Tooltip.Root side="right">...</Tooltip.Root>`}
        >
          <div className="flex gap-8 py-2">
            <Tooltip.Root side="left">
              <Tooltip.Trigger>
                <div className="h-10 w-10 flex items-center justify-center bg-muted/20 border border-subtle rounded-xl text-brand text-xl cursor-help hover:bg-brand-alpha-8 transition-colors">
                  <RiInformationLine />
                </div>
              </Tooltip.Trigger>
              <Tooltip.Content>Left side info</Tooltip.Content>
            </Tooltip.Root>

            <Tooltip.Root side="top">
              <Tooltip.Trigger>
                <div className="h-10 w-10 flex items-center justify-center bg-muted/20 border border-subtle rounded-xl text-brand text-xl cursor-help hover:bg-brand-alpha-8 transition-colors">
                  <RiInformationLine />
                </div>
              </Tooltip.Trigger>
              <Tooltip.Content>Top side info</Tooltip.Content>
            </Tooltip.Root>

            <Tooltip.Root side="right">
              <Tooltip.Trigger>
                <div className="h-10 w-10 flex items-center justify-center bg-muted/20 border border-subtle rounded-xl text-brand text-xl cursor-help hover:bg-brand-alpha-8 transition-colors">
                  <RiInformationLine />
                </div>
              </Tooltip.Trigger>
              <Tooltip.Content>Right side info</Tooltip.Content>
            </Tooltip.Root>
          </div>
        </CodePreview>
      </section>

      <section id="delay" className="doc-section">
        <h2>Delay & Duration</h2>
        <p>Control the appearance speed to avoid distracting users during rapid mouse movements.</p>
        <CodePreview
          code={`<Tooltip.Root delayDuration={700}>...</Tooltip.Root>
<Tooltip.Root delayDuration={0}>...</Tooltip.Root>`}
        >
          <div className="flex gap-4 py-2">
            <Tooltip.Root side="top" delayDuration={700}>
              <Tooltip.Trigger>
                <Button color="brand">Delayed (700ms)</Button>
              </Tooltip.Trigger>
              <Tooltip.Content>Slow appearing tooltip</Tooltip.Content>
            </Tooltip.Root>

            <Tooltip.Root side="top" delayDuration={0}>
              <Tooltip.Trigger>
                <Button color="success">Instant (0ms)</Button>
              </Tooltip.Trigger>
              <Tooltip.Content>Instant appearing tooltip</Tooltip.Content>
            </Tooltip.Root>
          </div>
        </CodePreview>
      </section>

      <section id="examples" className="doc-section">
        <h2>Practical Examples</h2>
        <p>Common real-world usage in toolbar and action buttons.</p>
        <CodePreview
          code={`<Tooltip.Root side="top">
  <Tooltip.Trigger><button>...</button></Tooltip.Trigger>
  <Tooltip.Content>Lưu thay đổi</Tooltip.Content>
</Tooltip.Root>`}
        >
          <div className="flex gap-3 py-2">
            <Tooltip.Root side="top">
              <Tooltip.Trigger>
                <button 
                  className="h-9 w-9 flex items-center justify-center rounded-lg transition-all border"
                  style={{ 
                    backgroundColor: 'var(--green-3)', 
                    color: 'var(--green-11)',
                    borderColor: 'var(--green-6)' 
                  }}
                >
                  <RiSaveLine />
                </button>
              </Tooltip.Trigger>
              <Tooltip.Content>Lưu thay đổi</Tooltip.Content>
            </Tooltip.Root>

            <Tooltip.Root side="top">
              <Tooltip.Trigger>
                <button 
                  className="h-9 w-9 flex items-center justify-center rounded-lg transition-all border"
                  style={{ 
                    backgroundColor: 'var(--red-3)', 
                    color: 'var(--red-11)',
                    borderColor: 'var(--red-6)' 
                  }}
                >
                  <RiDeleteBinLine />
                </button>
              </Tooltip.Trigger>
              <Tooltip.Content>Xóa vĩnh viễn</Tooltip.Content>
            </Tooltip.Root>

            <Tooltip.Root side="top">
              <Tooltip.Trigger>
                <button className="h-9 w-9 flex items-center justify-center rounded-lg bg-brand-alpha-8 text-brand hover:bg-brand-alpha-12 transition-all border border-brand/20">
                  <RiQuestionFill />
                </button>
              </Tooltip.Trigger>
              <Tooltip.Content>Trợ giúp & Hỗ trợ</Tooltip.Content>
            </Tooltip.Root>
          </div>
        </CodePreview>
      </section>

      <section id="api" className="doc-section">
        <h2>API Reference</h2>
        <PropsTable props={tooltipProps} />
      </section>
    </DocLayout>
  );
};

export default TooltipDoc;

