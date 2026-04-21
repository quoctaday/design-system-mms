import React from 'react';
import { Breadcrumbs, type BreadcrumbItem } from '../components/ui';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { AuroraBackground } from '../components/ui';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';

const BreadcrumbsDoc: React.FC = () => {
  const basicItems: BreadcrumbItem[] = [
    { id: '1', label: 'Home', href: '/' },
    { id: '2', label: 'Components', href: '/components' },
    { id: '3', label: 'Breadcrumbs', active: true },
  ];

  const longItems: BreadcrumbItem[] = [
    { id: '1', label: 'Dashboard', href: '/' },
    { id: '2', label: 'Operations', href: '/ops' },
    { id: '3', label: 'Transactions', href: '/ops/tx' },
    { id: '4', label: 'Detail', active: true },
  ];

  const toc = [
    { id: 'basic', title: 'Basic Usage' },
    { id: 'nested', title: 'Nested Navigation' },
    { id: 'api', title: 'API Reference' }
  ];

  const breadcrumbProps = [
    { name: 'items', type: 'BreadcrumbItem[]', required: true, description: 'Danh sách các mục điều hướng.' },
    { name: 'separator', type: 'ReactNode', default: '•', description: 'Phần tử phân cách giữa các mục.' },
    { name: 'onItemClick', type: '(item: BreadcrumbItem) => void', description: 'Hàm gọi khi một mục được nhấp.' },
    { name: 'className', type: 'string', description: 'CSS class tùy chỉnh.' }
  ];

  return (
    <DocLayout 
      title="Breadcrumbs" 
      description="A navigation aid that shows the user's current location within the application hierarchy."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <DocSection id="basic">
        <DocHeading>Basic Usage</DocHeading>
        <DocText>A simple three-level breadcrumb trail with an active (current) item.</DocText>
        <CodePreview
          code={`const items = [
  { id: '1', label: 'Home', href: '/' },
  { id: '2', label: 'Components', href: '/components' },
  { id: '3', label: 'Breadcrumbs', active: true },
];

<Breadcrumbs items={items} />`}
        >
          <div className="py-4">
            <Breadcrumbs items={basicItems} />
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="nested">
        <DocHeading>Nested Navigation</DocHeading>
        <DocText>Breadcrumbs handle multiple levels of depth gracefully.</DocText>
        <CodePreview
          code={`<Breadcrumbs items={longItems} />`}
        >
          <div className="py-4">
            <Breadcrumbs items={longItems} />
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="api">
        <DocHeading>API Reference</DocHeading>
        <PropsTable props={breadcrumbProps} />
      </DocSection>
    </DocLayout>
  );
};

export default BreadcrumbsDoc;
