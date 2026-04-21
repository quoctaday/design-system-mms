import React from 'react';
import { AspectRatio, Text, Box } from '../components/ui';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { AuroraBackground } from '../components/ui';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';

const AspectRatioDoc: React.FC = () => {
  const toc = [
    { id: 'basic', title: 'Basic Usage' },
    { id: 'ratios', title: 'Common Ratios' },
    { id: 'api', title: 'API Reference' }
  ];

  const aspectRatioProps = [
    { name: 'ratio', type: 'number', default: '1', description: 'The desired aspect ratio (width / height).' }
  ];

  return (
    <DocLayout 
      title="AspectRatio" 
      description="A layout primitive that maintains a consistent width-to-height ratio for its content."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <DocSection id="basic">
        <DocHeading>Basic Usage</DocHeading>
        <DocText>AspectRatio protects your layout from shifting when dynamic content (like images) loads.</DocText>
        <CodePreview
          code={`<div style={{ width: 400 }}>
  <AspectRatio ratio={16 / 9}>
    <img src="..." alt="Landscape" className="object-cover rounded-xl w-full h-full" />
  </AspectRatio>
</div>`}
        >
          <div className="py-2">
            <div style={{ width: '100%', maxWidth: 400 }}>
              <AspectRatio ratio={16 / 9}>
                <img
                  src="https://images.unsplash.com/photo-1473081556163-2a17de81fc97"
                  alt="Landscape"
                  style={{ borderRadius: 'var(--radius-4)', width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </AspectRatio>
            </div>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="ratios">
        <DocHeading>Common Ratios</DocHeading>
        <DocText>From square profiles to cinematic banners.</DocText>
        <CodePreview
          code={`<AspectRatio ratio={1}>...</AspectRatio>
<AspectRatio ratio={4 / 3}>...</AspectRatio>`}
        >
          <div className="flex gap-6 py-2">
            <div style={{ width: 120 }}>
              <AspectRatio ratio={1}>
                <div style={{ 
                  width: '100%', 
                  height: '100%', 
                  backgroundColor: 'var(--gray-a2)', 
                  border: '1px dashed var(--gray-a4)',
                  borderRadius: 'var(--radius-3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div className="text-xs font-bold">1:1</div>
                </div>
              </AspectRatio>
            </div>

            <div style={{ width: 160 }}>
              <AspectRatio ratio={16 / 9}>
                <div style={{ 
                  width: '100%', 
                  height: '100%', 
                  backgroundColor: 'var(--gray-a2)', 
                  border: '1px dashed var(--gray-a4)',
                  borderRadius: 'var(--radius-3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div className="text-xs font-bold">16:9</div>
                </div>
              </AspectRatio>
            </div>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="api">
        <DocHeading>API Reference</DocHeading>
        <PropsTable props={aspectRatioProps} />
      </DocSection>
    </DocLayout>
  );
};

export default AspectRatioDoc;
