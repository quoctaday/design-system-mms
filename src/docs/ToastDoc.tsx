import React from 'react';
import { useToast, Button } from '../components/ui';
import { DocLayout } from '../components/docs/DocLayout';
import { AuroraBackground } from '../components/ui/AuroraBackground/AuroraBackground';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';

const ToastDoc: React.FC = () => {
  const { toast } = useToast();

  const toc = [
    { id: 'basic', title: 'Basic Usage' },
    { id: 'interactive', title: 'Interactive Toasts' },
    { id: 'configurations', title: 'Configurations' },
    { id: 'api', title: 'API Reference' }
  ];

  const toastMethods = [
    { name: 'toast.success', type: '(title, desc?, duration?)', description: 'Hiển thị thông báo thành công.' },
    { name: 'toast.error', type: '(title, desc?, duration?)', description: 'Hiển thị thông báo lỗi.' },
    { name: 'toast.warning', type: '(title, desc?, duration?)', description: 'Hiển thị thông báo cảnh báo.' },
    { name: 'toast.info', type: '(title, desc?, duration?)', description: 'Hiển thị thông báo thông tin.' },
    { name: 'toast.loading', type: '(title, desc?, duration?)', description: 'Hiển thị trạng thái đang xử lý.' },
    { name: 'toast.promise', type: '(promise, msgs)', description: 'Tự động cập nhật thông báo dựa trên kết quả của promise.' }
  ];

  return (
    <DocLayout 
      title="Toast" 
      description="A succinct message that provides feedback about an operation."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <section id="basic" className="doc-section">
        <h2>Basic Usage</h2>
        <p>Trigger different types of toasts to give feedback to the user.</p>
        <CodePreview
          code={`const { toast } = useToast();

<Button onClick={() => toast.success('Success', 'Action completed')}>
  Success Toast
</Button>`}
        >
          <div className="flex flex-wrap gap-4 py-2">
            <Button 
              variant="outline" 
              color="success"
              onClick={() => toast.success('Success', 'Action completed successfully')}
            >
              Success Toast
            </Button>
            <Button 
              variant="outline" 
              color="error"
              onClick={() => toast.error('Error', 'Something went wrong, please try again')}
            >
              Error Toast
            </Button>
            <Button 
              variant="outline" 
              color="warning"
              onClick={() => toast.warning('Warning', 'This action might have side effects')}
            >
              Warning Toast
            </Button>
            <Button 
              variant="outline" 
              color="blue"
              onClick={() => toast.info('Information', 'New updates are available for your account')}
            >
              Info Toast
            </Button>
            <Button 
              variant="outline"
              color="gray"
              onClick={() => toast.loading('Syncing Data', 'Please wait while we sync your changes...')}
            >
              Loading Toast
            </Button>
          </div>
        </CodePreview>
      </section>

      <section id="interactive" className="doc-section">
        <h2>Interactive Toasts</h2>
        <p>Toasts that allow users to take action or follow a process.</p>
        <CodePreview
          code={`toast.custom({
  type: 'info',
  title: 'Data Exported',
  description: 'Your report is ready for download.',
  action: {
    label: 'Download Now',
    onClick: () => alert('Downloading...')
  }
});`}
        >
          <div className="flex flex-wrap gap-4 py-2">
            <Button 
              variant="solid" 
              onClick={() => {
                toast.custom({
                  type: 'info',
                  title: 'Data Exported',
                  description: 'Your report is ready for download.',
                  action: {
                    label: 'Download Now',
                    onClick: () => alert('Downloading...')
                  }
                });
              }}
            >
              Toast with Action
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => {
                const myPromise = new Promise((resolve, reject) => {
                  setTimeout(() => {
                    if (Math.random() > 0.5) {
                      resolve('Success!');
                    } else {
                      reject('Error!');
                    }
                  }, 3000);
                });

                toast.promise(myPromise, {
                  loading: 'Processing Payment...',
                  success: 'Payment received!',
                  error: 'Payment failed, please try again.'
                });
              }}
            >
              Promise Toast (Random Result)
            </Button>
          </div>
        </CodePreview>
      </section>

      <section id="configurations" className="doc-section">
        <h2>Configurations</h2>
        <p>Customizing duration or excluding descriptions.</p>
        <CodePreview
          code={`toast.success('Fast Toast', undefined, 2000); // 2s duration
toast.info('Persistent Toast', 'Wait for it', 0); // Never auto-closes`}
        >
          <div className="flex gap-4 py-2">
            <Button 
              variant="outline" 
              onClick={() => toast.success('Fast Toast', undefined, 2000)}
            >
              Short Duration (2s)
            </Button>
            <Button 
              variant="outline" 
              onClick={() => toast.info('Persistent Toast', 'This will stay until you close it', 0)}
            >
              Persistent
            </Button>
          </div>
        </CodePreview>
      </section>

      <section id="api" className="doc-section">
        <h2>API Reference</h2>
        <PropsTable props={toastMethods} />
      </section>
    </DocLayout>
  );
};

export default ToastDoc;

