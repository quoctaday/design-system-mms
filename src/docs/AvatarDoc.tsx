import React from 'react';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { 
  Avatar, 
  AvatarImage, 
  AvatarFallback, 
  AuroraBackground 
} from '../components/ui';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';

const AvatarDoc: React.FC = () => {
  const toc = [
    { id: 'variants', title: 'Variants' },
    { id: 'sizes', title: 'Sizes' },
    { id: 'fallback', title: 'Fallback logic' },
    { id: 'api', title: 'API Reference' }
  ];

  const avatarProps = [
    { name: 'size', type: "1-9", default: "3", description: 'Kích thước của avatar dựa trên thang đo Radix.' },
    { name: 'variant', type: "'circle' | 'soft' | 'square'", default: "'circle'", description: 'Hình dạng hiển thị của avatar.' },
    { name: 'className', type: 'string', description: 'CSS class tùy chỉnh.' }
  ];

  const imageProps = [
    { name: 'src', type: 'string', required: true, description: 'Đường dẫn ảnh nguồn.' },
    { name: 'alt', type: 'string', description: 'Văn bản thay thế cho ảnh.' }
  ];

  const fallbackProps = [
    { name: 'delayMs', type: 'number', description: 'Độ trễ (ms) trước khi hiển thị fallback để tránh nháy khi ảnh load nhanh.' }
  ];

  return (
    <DocLayout
      title="Avatar"
      description="A visual representation of a user or entity, with support for images and fallback text."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <DocSection id="variants">
        <DocHeading>Variants</DocHeading>
        <DocText>Avatars support three primary shapes to match different UI aesthetics.</DocText>
        <CodePreview
          code={`<Avatar variant="circle">...</Avatar>
<Avatar variant="soft">...</Avatar>
<Avatar variant="square">...</Avatar>`}
        >
          <div className="flex gap-6 items-center">
            <Avatar variant="circle">
              <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Avatar variant="soft">
              <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Avatar variant="square">
              <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="sizes">
        <DocHeading>Sizes</DocHeading>
        <DocText>Follows the standard Radix 1-9 size scale.</DocText>
        <CodePreview
          code={`<Avatar size="1">...</Avatar>
<Avatar size="3">...</Avatar>
<Avatar size="6">...</Avatar>
<Avatar size="9">...</Avatar>`}
        >
          <div className="flex gap-4 items-end">
            <Avatar size="1"><AvatarFallback>S1</AvatarFallback></Avatar>
            <Avatar size="2"><AvatarFallback>S2</AvatarFallback></Avatar>
            <Avatar size="3"><AvatarFallback>S3</AvatarFallback></Avatar>
            <Avatar size="4"><AvatarFallback>S4</AvatarFallback></Avatar>
            <Avatar size="5"><AvatarFallback>S5</AvatarFallback></Avatar>
            <Avatar size="6"><AvatarFallback>S6</AvatarFallback></Avatar>
            <Avatar size="7"><AvatarFallback>S7</AvatarFallback></Avatar>
            <Avatar size="8"><AvatarFallback>S8</AvatarFallback></Avatar>
            <Avatar size="9"><AvatarFallback>S9</AvatarFallback></Avatar>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="fallback">
        <DocHeading>Fallback Logic</DocHeading>
        <DocText>Displays initials or icons when an image is missing or fails to load. Use <code>delayMs</code> to prevent flickering for fast-loading images.</DocText>
        <CodePreview
          code={`<Avatar>
  <AvatarImage src="invalid-url.jpg" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`}
        >
          <div className="flex gap-6">
            <Avatar>
              <AvatarImage src="invalid-url.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="api">
        <DocHeading>API Reference</DocHeading>
        
        <DocHeading level={3}>Avatar Root</DocHeading>
        <PropsTable props={avatarProps} />

        <DocHeading level={3} className="mt-8">Avatar Image</DocHeading>
        <PropsTable props={imageProps} />

        <DocHeading level={3} className="mt-8">Avatar Fallback</DocHeading>
        <PropsTable props={fallbackProps} />
      </DocSection>
    </DocLayout>
  );
};

export default AvatarDoc;
