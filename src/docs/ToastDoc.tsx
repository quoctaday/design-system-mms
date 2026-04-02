import React from 'react';
import { useToast } from '../components/ui/Toast';
import { Button } from '../components/ui/Button';

const ToastDoc: React.FC = () => {
  const { toast } = useToast();

  return (
    <div className="doc-container">
      <header className="doc-header">
        <h1>Toast</h1>
        <p>A succinct message that provides feedback about an operation.</p>
      </header>

      <section className="doc-section">
        <h2>Basic Usage</h2>
        <p>Trigger different types of toasts to give feedback to the user.</p>
        <div className="demo-box" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
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
      </section>

      <section className="doc-section">
        <h2>Interactive Toasts</h2>
        <p>Toasts that allow users to take action or follow a process.</p>
        <div className="demo-box" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
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
                  Math.random() > 0.5 ? resolve('Success!') : reject('Error!');
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
      </section>

      <section className="doc-section">
        <h2>Configurations</h2>
        <p>Customizing duration or excluding descriptions.</p>
        <div className="demo-box" style={{ display: 'flex', gap: '12px' }}>
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
      </section>

      <section className="doc-section">
        <h2>Component API</h2>
        <table className="doc-api-table">
          <thead>
            <tr>
              <th>Method</th>
              <th>Arguments</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>toast.success</code></td>
              <td><code>(title, description?, duration?)</code></td>
              <td>Triggers a success notification.</td>
            </tr>
            <tr>
              <td><code>toast.error</code></td>
              <td><code>(title, description?, duration?)</code></td>
              <td>Triggers an error notification.</td>
            </tr>
            <tr>
              <td><code>toast.warning</code></td>
              <td><code>(title, description?, duration?)</code></td>
              <td>Triggers a warning notification.</td>
            </tr>
            <tr>
              <td><code>toast.info</code></td>
              <td><code>(title, description?, duration?)</code></td>
              <td>Triggers an informational notification.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ToastDoc;
