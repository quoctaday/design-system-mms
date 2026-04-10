import React from 'react';
import Result from '../components/ui/Result/Result';
import { Button } from '../components/ui/Button';
import { DocLayout } from '../components/docs/DocLayout';
import { AuroraBackground } from '../components/ui/AuroraBackground/AuroraBackground';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';

const ResultDoc: React.FC = () => {
  const toc = [
    { id: 'success', title: 'Success' },
    { id: 'error', title: 'Error' },
    { id: 'warning', title: 'Warning' },
    { id: 'info', title: 'Info' },
    { id: 'api', title: 'API Reference' }
  ];

  const resultProps = [
    { name: 'title', type: 'string', required: true, description: 'Tiêu đề chính của kết quả.' },
    { name: 'subTitle', type: 'string', description: 'Văn bản mô tả phụ.' },
    { name: 'status', type: "'success' | 'error' | 'warning' | 'info'", default: "'info'", description: 'Trạng thái xác định màu sắc và icon.' },
    { name: 'extra', type: 'ReactNode', description: 'Nội dung bổ sung (như nút hành động).' },
    { name: 'icon', type: 'ReactNode', description: 'Icon tùy chỉnh đè lên icon mặc định.' },
    { name: 'className', type: 'string', description: 'CSS class tùy chỉnh.' }
  ];

  return (
    <DocLayout 
      title="Result" 
      description="Used to display the results of an action — success, error, warning, or informational outcomes."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <section id="success" className="doc-section">
        <h2>Success</h2>
        <p>A positive outcome after a successful action.</p>
        <CodePreview
          code={`<Result
  status="success"
  title="Payment Completed"
  subTitle="Transaction #VNTX0012 has been processed successfully."
  extra={<Button variant="solid">View Receipt</Button>}
/>`}
        >
          <div className="py-12 border rounded-lg bg-muted/20">
            <Result
              status="success"
              title="Payment Completed"
              subTitle="Transaction #VNTX0012 has been processed successfully."
              extra={<Button variant="solid" size="2">View Receipt</Button>}
            />
          </div>
        </CodePreview>
      </section>

      <section id="error" className="doc-section">
        <h2>Error</h2>
        <p>A critical failure that requires user attention.</p>
        <CodePreview
          code={`<Result
  status="error"
  title="Payment Failed"
  subTitle="We could not process your payment. Please try again."
  extra={<Button variant="outline">Try Again</Button>}
/>`}
        >
          <div className="py-12 border rounded-lg bg-muted/20">
            <Result
              status="error"
              title="Payment Failed"
              subTitle="We could not process your payment. Please try again."
              extra={<Button variant="outline" size="2">Try Again</Button>}
            />
          </div>
        </CodePreview>
      </section>

      <section id="warning" className="doc-section">
        <h2>Warning</h2>
        <p>Issues that aren't critical but need to be communicated.</p>
        <CodePreview
          code={`<Result
  status="warning"
  title="Action Required"
  subTitle="Your account verification is pending."
/>`}
        >
          <div className="py-12 border rounded-lg bg-muted/20">
            <Result
              status="warning"
              title="Action Required"
              subTitle="Your account verification is pending. Some features are limited until you complete setup."
            />
          </div>
        </CodePreview>
      </section>

      <section id="info" className="doc-section">
        <h2>Info</h2>
        <p>Standard informational feedback.</p>
        <CodePreview
          code={`<Result
  status="info"
  title="Scheduled Maintenance"
  subTitle="The system will be offline this Sunday."
/>`}
        >
          <div className="py-12 border rounded-lg bg-muted/20">
            <Result
              status="info"
              title="Scheduled Maintenance"
              subTitle="The system will be offline from 02:00 – 04:00 UTC on April 12."
            />
          </div>
        </CodePreview>
      </section>

      <section id="api" className="doc-section">
        <h2>API Reference</h2>
        <PropsTable props={resultProps} />
      </section>
    </DocLayout>
  );
};

export default ResultDoc;

