import React from 'react';
import { RiInboxLine, RiSearchLine, RiFileWarningLine } from 'react-icons/ri';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';
import { 
  EmptyState, 
  Button, 
  AuroraBackground 
} from '../components/ui';

const EmptyStateDoc: React.FC = () => {
  const toc = [
    { id: 'default', title: 'Default' },
    { id: 'search', title: 'Search Results' },
    { id: 'error', title: 'Error States' },
    { id: 'api', title: 'API Reference' }
  ];

  const emptyStateProps = [
    { name: 'title', type: 'string', required: true, description: 'Tiêu đề chính của trạng thái trống.' },
    { name: 'description', type: 'string', description: 'Văn bản mô tả chi tiết.' },
    { name: 'icon', type: 'ReactNode', description: 'Phần tử icon hiển thị phía trên.' },
    { name: 'action', type: 'ReactNode', description: 'Nút hành động (CTA).' },
    { name: 'className', type: 'string', description: 'CSS class tùy chỉnh.' }
  ];

  return (
    <DocLayout 
      title="Empty State" 
      description="A placeholder component displayed when a list, table, or page has no data to show."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <DocSection id="default">
        <DocHeading>Default</DocHeading>
        <DocText>Always pair with a descriptive message and a clear call-to-action.</DocText>
        <CodePreview
          code={`<EmptyState
  icon={<RiInboxLine size={40} />}
  title="No transactions found"
  description="You haven't made any transactions yet. Start by creating a new one."
  action={<Button variant="solid">Create Transaction</Button>}
/>`}
        >
          <div className="py-12 border rounded-lg bg-muted/20">
            <EmptyState
              icon={<RiInboxLine size={40} className="text-muted-foreground" />}
              title="No transactions found"
              description="You haven't made any transactions yet. Start by creating a new one."
              action={<Button variant="solid" size="2">Create Transaction</Button>}
            />
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="search">
        <DocHeading>Search Results</DocHeading>
        <DocText>Specific states for when searches return no matches.</DocText>
        <CodePreview
          code={`<EmptyState
  icon={<RiSearchLine size={40} />}
  title={'No results for "VNTX0012"'}
  description="Try adjusting your search or filter to find what you're looking for."
/>`}
        >
          <div className="py-12 border rounded-lg bg-muted/20">
            <EmptyState
              icon={<RiSearchLine size={40} />}
              title={'No results for "VNTX0012"'}
              description="Try adjusting your search or filter to find what you're looking for."
            />
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="error">
        <DocHeading>Error States</DocHeading>
        <DocText>Communicate data loading failures clearly.</DocText>
        <CodePreview
          code={`<EmptyState
  icon={<RiFileWarningLine size={40} />}
  title="Failed to load data"
  description="There was a problem loading this content. Please try again."
  action={<Button variant="outline">Retry</Button>}
/>`}
        >
          <div className="py-12 border rounded-lg bg-muted/20">
            <EmptyState
              icon={<RiFileWarningLine size={40} />}
              title="Failed to load data"
              description="There was a problem loading this content. Please try again."
              action={<Button variant="outline" size="2">Retry</Button>}
            />
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="api">
        <DocHeading>API Reference</DocHeading>
        <PropsTable props={emptyStateProps} />
      </DocSection>
    </DocLayout>
  );
};

export default EmptyStateDoc;

