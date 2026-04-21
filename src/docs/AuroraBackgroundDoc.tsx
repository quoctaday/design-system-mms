import React from 'react';
import { AuroraBackground } from '../components/ui';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';
import { motion } from 'framer-motion';

const AuroraBackgroundDoc: React.FC = () => {
  const toc = [
    { id: 'usage', title: 'Usage' },
    { id: 'radial-gradient', title: 'Radial Gradient' },
    { id: 'api', title: 'API Reference' }
  ];

  const auroraProps = [
    { name: 'children', type: 'ReactNode', required: true, description: 'Content to be rendered on top of the background.' },
    { name: 'showRadialGradient', type: 'boolean', default: 'true', description: 'Whether to show a radial mask to fade out the effect.' },
    { name: 'className', type: 'string', description: 'Custom CSS class for the container.' }
  ];

  return (
    <DocLayout 
      title="Aurora Background" 
      description="A subtle animated background that mimics the Aurora Borealis effect."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <DocSection id="usage">
        <DocHeading>Usage</DocHeading>
        <DocText>Use the Aurora Background to create a premium, atmospheric feel for hero sections or landing pages.</DocText>
        <CodePreview
          code={`<AuroraBackground>
  <div className="text-white text-center">
    <h1 className="text-4xl font-bold">MMS Platform</h1>
    <p className="text-lg opacity-80">Next-generation operational intelligence</p>
  </div>
</AuroraBackground>`}
        >
          <div style={{ height: '400px', width: '100%', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
            <AuroraBackground>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: 'center', zIndex: 10 }}
              >
                <h1 style={{ fontSize: '48px', fontWeight: 800, margin: 0, color: 'var(--content-strong)' }}>MMS Platform</h1>
                <p style={{ fontSize: '18px', opacity: 0.7, color: 'var(--content-strong)' }}>Next-generation operational intelligence</p>
                <div style={{ marginTop: '24px' }}>
                   <button style={{ 
                     background: 'var(--gray-12)', 
                     color: 'var(--gray-1)', 
                     border: 'none', 
                     padding: '12px 24px', 
                     borderRadius: '999px',
                     fontSize: '14px',
                     fontWeight: 600,
                     cursor: 'pointer'
                   }}>
                     Explore Docs
                   </button>
                </div>
              </motion.div>
            </AuroraBackground>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="radial-gradient">
        <DocHeading>Radial Gradient</DocHeading>
        <DocText>You can disable the radial mask to let the aurora effect fill the entire container.</DocText>
        <CodePreview
          code={`<AuroraBackground showRadialGradient={false}>
  {/* Content */}
</AuroraBackground>`}
        >
          <div style={{ height: '300px', width: '100%', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
            <AuroraBackground showRadialGradient={false}>
               <DocText className="font-bold text-gray-12">Fully Filled Background</DocText>
            </AuroraBackground>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="api">
        <DocHeading>API Reference</DocHeading>
        <PropsTable props={auroraProps} />
      </DocSection>
    </DocLayout>
  );
};

export default AuroraBackgroundDoc;
