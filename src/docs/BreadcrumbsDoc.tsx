import React from 'react';
import Breadcrumbs from '../components/ui/Breadcrumbs/Breadcrumbs';
import type { BreadcrumbItem } from '../components/ui/Breadcrumbs/Breadcrumbs';
import { DocLayout } from '../components/docs/DocLayout';
import { AuroraBackground } from '../components/ui/AuroraBackground/AuroraBackground';
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
      <section id="basic" className="doc-section">
        <h2>Basic Usage</h2>
        <p>A simple three-level breadcrumb trail with an active (current) item.</p>
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
      </section>

      <section id="nested" className="doc-section">
        <h2>Nested Navigation</h2>
        <p>Breadcrumbs handle multiple levels of depth gracefully.</p>
        <CodePreview
          code={`<Breadcrumbs items={longItems} />`}
        >
          <div className="py-4">
            <Breadcrumbs items={longItems} />
          </div>
        </CodePreview>
      </section>

      <section id="api" className="doc-section">
        <h2>API Reference</h2>
        <PropsTable props={breadcrumbProps} />
      </section>
    </DocLayout>
  );
};

export default BreadcrumbsDoc;

