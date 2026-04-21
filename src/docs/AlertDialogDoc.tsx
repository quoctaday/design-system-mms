import React from 'react';
import { AlertDialog, Button, Flex } from '../components/ui';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { AuroraBackground } from '../components/ui';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';

const AlertDialogDoc: React.FC = () => {
  const toc = [
    { id: 'basic', title: 'Basic Usage' },
    { id: 'safety', title: 'Safety Features' },
    { id: 'api', title: 'API Reference' }
  ];

  const alertDialogProps = [
    { name: 'open', type: 'boolean', default: 'false', description: 'The controlled open state of the dialog.' },
    { name: 'onOpenChange', type: 'function', default: '-', description: 'Event handler called when the open state changes.' },
    { name: 'size', type: '1 | 2 | 3 | 4', default: '2', description: 'Standardized width presets for the dialog content.' },
    { name: 'radius', type: "'none' | 'small' | 'medium' | 'large' | 'full'", default: "'large'", description: 'Logical radius keyword.' }
  ];

  return (
    <DocLayout 
      title="AlertDialog" 
      description="A critical modal dialog that interrupts the user with important content and expects a confirmation."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <DocSection id="basic">
        <DocHeading>Basic Usage</DocHeading>
        <DocText>AlertDialog is used for destructive actions like item deletion or significant system resets.</DocText>
        <CodePreview
          code={`<AlertDialog.Root>
  <AlertDialog.Trigger>
    <Button color="red" variant="soft">Delete Project</Button>
  </AlertDialog.Trigger>
  <AlertDialog.Portal>
    <AlertDialog.Overlay />
    <AlertDialog.Content size="2" radius="large">
      <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
      <AlertDialog.Description>
        Are you sure? This action is permanent.
      </AlertDialog.Description>
      <Flex gap="3" justify="end" className="mt-5">
        <AlertDialog.Cancel>
          <Button variant="ghost" color="gray">Cancel</Button>
        </AlertDialog.Cancel>
        <AlertDialog.Action>
          <Button variant="solid" color="red">Delete Project</Button>
        </AlertDialog.Action>
      </Flex>
    </AlertDialog.Content>
  </AlertDialog.Portal>
</AlertDialog.Root>`}
        >
          <div className="py-2">
            <AlertDialog.Root>
              <AlertDialog.Trigger>
                <Button color="red" variant="soft">Delete Project</Button>
              </AlertDialog.Trigger>
              <AlertDialog.Portal>
                <AlertDialog.Overlay />
                <AlertDialog.Content size="2" radius="large">
                  <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
                  <AlertDialog.Description>
                    Are you sure you want to delete this project? This action is permanent and all associated data will be removed.
                  </AlertDialog.Description>
                  <Flex gap="3" justify="end" style={{ marginTop: 'var(--space-5)' }}>
                    <AlertDialog.Cancel>
                      <Button variant="ghost" color="gray">Cancel</Button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action>
                      <Button variant="solid" color="red">Delete Project</Button>
                    </AlertDialog.Action>
                  </Flex>
                </AlertDialog.Content>
              </AlertDialog.Portal>
            </AlertDialog.Root>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="safety">
        <DocHeading>Safety Features</DocHeading>
        <DocText>The AlertDialog is designed with strict boundaries to prevent accidental dismissals.</DocText>
        <div className="specs-grid">
          <div className="spec-item">
            <div className="text-sm font-bold">Modal Lock</div>
            <div className="text-xs text-muted/60">Prevents dismissal via external click or Escape key by default.</div>
          </div>
          <div className="spec-item">
            <div className="text-sm font-bold">Aria Roles</div>
            <div className="text-xs text-muted/60">Uses specialized 'alertdialog' role for assistive technology.</div>
          </div>
          <div className="spec-item">
            <div className="text-sm font-bold">Backdrop</div>
            <div className="text-xs text-muted/60">Alpha-surface overlay with blur focuses attention on the critical decision.</div>
          </div>
        </div>
      </DocSection>

      <DocSection id="api">
        <DocHeading>API Reference</DocHeading>
        <PropsTable props={alertDialogProps} />
      </DocSection>
    </DocLayout>
  );
};

export default AlertDialogDoc;
