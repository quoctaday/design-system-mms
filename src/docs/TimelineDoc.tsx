import React from 'react';
import { Timeline, type TimelineItem } from '../components/ui';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { AuroraBackground } from '../components/ui';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';

const TimelineDoc: React.FC = () => {
  const basicItems: TimelineItem[] = [
    { id: '1', label: 'Transaction Created', description: 'Payment initiated by Nguyen Van A.', timestamp: '09:41 AM', status: 'completed' },
    { id: '2', label: 'Pending Approval', description: 'Awaiting compliance review.', timestamp: '09:43 AM', status: 'active' },
    { id: '3', label: 'Settlement', description: 'Funds will be settled in T+1.', timestamp: 'Scheduled', status: 'pending' },
  ];

  const errorItems: TimelineItem[] = [
    { id: '1', label: 'Submitted', description: 'Form submitted successfully.', timestamp: '08:00 AM', status: 'completed' },
    { id: '2', label: 'Validation Failed', description: 'IBAN format is incorrect.', timestamp: '08:01 AM', status: 'error' },
    { id: '3', label: 'Awaiting Correction', description: 'User action required.', timestamp: 'Pending', status: 'pending' },
  ];

  const toc = [
    { id: 'basic', title: 'Basic Usage' },
    { id: 'error', title: 'Error States' },
    { id: 'api', title: 'API Reference' }
  ];

  const timelineProps = [
    { name: 'id', type: 'string', required: true, description: 'Định danh duy nhất cho mỗi mục.' },
    { name: 'label', type: 'string', required: true, description: 'Nhãn tiêu đề của bước.' },
    { name: 'description', type: 'string', description: 'Mô tả chi tiết cho bước.' },
    { name: 'timestamp', type: 'string', description: 'Thời gian hoặc ngày tháng.' },
    { name: 'status', type: "'pending' | 'completed' | 'active' | 'error'", default: "'pending'", description: 'Trạng thái hiển thị của bước.' },
    { name: 'dot', type: 'ReactNode', description: 'Icon hoặc phần tử tùy chỉnh cho điểm mốc.' }
  ];

  return (
    <DocLayout 
      title="Timeline" 
      description="A chronological visualization of events, process steps, or transaction history."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <DocSection id="basic">
        <DocHeading>Basic Usage</DocHeading>
        <DocText>Trace the lifecycle of a transaction step-by-step.</DocText>
        <CodePreview
          code={`const items = [
  { id: '1', label: 'Created', timestamp: '09:41 AM', status: 'completed' },
  { id: '2', label: 'Pending', status: 'active' },
  { id: '3', label: 'Settlement', status: 'pending' },
];

<Timeline items={items} />`}
        >
          <div className="py-6">
            <Timeline items={basicItems} />
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="error">
        <DocHeading>Error States</DocHeading>
        <DocText>Communicate failures within a process flow.</DocText>
        <CodePreview
          code={`<Timeline items={errorItems} />`}
        >
          <div className="py-6">
            <Timeline items={errorItems} />
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="api">
        <DocHeading>API Reference</DocHeading>
        <PropsTable props={timelineProps} />
      </DocSection>
    </DocLayout>
  );
};

export default TimelineDoc;

