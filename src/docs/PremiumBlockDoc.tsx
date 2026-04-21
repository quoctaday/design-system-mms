import React from 'react';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';
import { 
  AuroraBackground, 
  PremiumBlock, 
  Badge, 
  Button, 
  Tabs, 
  Flex 
} from '../components/ui';
import { RiNotification3Line, RiSearchLine, RiBookmarkLine, RiMapPinLine, RiBriefcaseLine, RiGlobalLine, RiStarFill } from 'react-icons/ri';

const PremiumBlockDoc: React.FC = () => {
  const toc = [
    { id: 'standard', title: 'Standard Layout' },
    { id: 'compound', title: 'Compound Pattern' },
    { id: 'spacing', title: 'Spacing Controls' },
    { id: 'operational', title: 'Operational Block' },
    { id: 'tabs', title: 'Tabs Integration' },
    { id: 'listing', title: 'Listing (Job Card)' },
    { id: 'themes', title: 'Themes & Glass' },
    { id: 'api', title: 'API Reference' }
  ];

  const propsData = [
    { name: 'children', type: 'ReactNode', description: 'Nội dung bên trong khối (hoặc các sub-components).' },
    { name: 'variant', type: "'sunken' | 'accent' | 'glass' | 'success' | 'warning' | 'error'", default: "'sunken'", description: 'Chủ đề màu sắc của lớp phủ bên ngoài.' },
    { name: 'radius', type: "'4' | '5' | '6'", default: "'6'", description: 'Token bo góc (X).' },
    { name: 'padding', type: "'none' | 'sm' | 'md' | 'lg'", default: "'sm'", description: 'Shell Spacing: Khoảng cách giữa vỏ và card (Y).' },
    { name: 'contentPadding', type: "'none' | 'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: 'Content Spacing: Khoảng cách bên trong card trắng.' },
    { name: '---', type: '---', description: '---' },
    { name: 'PremiumBlock.Header', type: 'Component', description: 'Sub-component cho phần tiêu đề. Hỗ trợ prop title, subtitle, extra.' },
    { name: 'PremiumBlock.Body', type: 'Component', description: 'Sub-component chứa nội dung chính (Card trắng).' },
    { name: 'PremiumBlock.Footer', type: 'Component', description: 'Sub-component cho phần chân trang (variant: inside/outside).' },
    { name: 'PremiumBlock.Tabs', type: 'Component', description: 'Sub-component cho khu vực điều hướng Tabs.' }
  ];

  return (
    <DocLayout 
      title="PremiumBlock" 
      description="Thành phần khung cấu trúc cao cấp tuân thủ quy tắc Optical Nesting (12-4-8 Rule)."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <DocSection id="standard">
        <DocHeading>Standard Layout</DocHeading>
        <DocText>Bố cục tiêu chuẩn với Title và Subtitle, sử dụng biến thể nền 'sunken' mặc định.</DocText>
        <CodePreview
          code={`<PremiumBlock 
  title="Analytics Dashboard" 
  subtitle="Viewing real-time performance metrics"
>
  <div className="h-[100px] flex items-center justify-center text-muted italic">
    Main content area
  </div>
</PremiumBlock>`}
        >
          <div className="max-w-xl">
            <PremiumBlock 
              title="Analytics Dashboard" 
              subtitle="Viewing real-time performance metrics"
            >
              <div className="h-[100px] flex items-center justify-center text-muted opacity-50 italic">
                Main content area (Inner Card)
              </div>
            </PremiumBlock>
          </div>
        </CodePreview>
      </DocSection>
      
      <DocSection id="compound">
        <DocHeading>Compound Pattern</DocHeading>
        <DocText>Sử dụng các sub-components để có toàn quyền kiểm soát cấu trúc và logic rendering.</DocText>
        <CodePreview
          code={`<PremiumBlock variant="accent">
  <PremiumBlock.Header 
    title="Compound Component" 
    subtitle="Decoupled logic for better scalability" 
  />
  <PremiumBlock.Body>
    Main content here...
  </PremiumBlock.Body>
  <PremiumBlock.Footer variant="outside">
    Footer content
  </PremiumBlock.Footer>
</PremiumBlock>`}
        >
          <div className="max-w-xl">
            <PremiumBlock variant="accent">
              <PremiumBlock.Header 
                title="System Console" 
                subtitle="v4.1 Architectural Refactor"
                extra={<Badge color="success">STABLE</Badge>}
              />
              <PremiumBlock.Body>
                <div className="text-sm space-y-2">
                  <DocText>Sử dụng Compound Pattern giúp tách biệt CSS của Header, cho phép tùy chỉnh typography và layout mà không làm ảnh hưởng đến cấu trúc tổng thể.</DocText>
                </div>
              </PremiumBlock.Body>
              <PremiumBlock.Footer variant="outside">
                <div className="flex justify-between items-center w-full px-1 py-1 text-xs text-gray-11">
                  <span>Standardization: 85% Complete</span>
                  <Button variant="ghost" size="1">Details</Button>
                </div>
              </PremiumBlock.Footer>
            </PremiumBlock>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="spacing">
        <DocHeading>Spacing Controls</DocHeading>
        <DocText>PremiumBlock có 2 lớp spacing độc lập: <b>Shell Spacing</b> (vỏ) và <b>Content Spacing</b> (nội dung).</DocText>
        <CodePreview
          code={`<PremiumBlock padding="lg" contentPadding="sm">
  {/* Shell rộng (12px), nội dung hẹp (12px) */}
</PremiumBlock>

<PremiumBlock padding="none" contentPadding="xl">
  {/* Không có vỏ (0px), nội dung cực rộng (64px) */}
</PremiumBlock>`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PremiumBlock padding="lg" contentPadding="sm" title="Dense Content" variant="surface">
              <div className="bg-gray-2 p-4 rounded-lg text-xs">
                Shell: LG (12px) | Content: SM (12px).
                Thích hợp cho các khối dữ liệu kỹ thuật cần tiết kiệm không gian.
              </div>
            </PremiumBlock>

            <PremiumBlock padding="none" contentPadding="xl" title="Relaxed Content" variant="panel">
              <div className="bg-gray-2 p-4 rounded-lg text-sm">
                Shell: NONE (0px) | Content: XL (64px).
                Thích hợp cho các Hero sections hoặc Landing pages cần sự thoáng đãng.
              </div>
            </PremiumBlock>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="operational">
        <DocHeading>Operational Block</DocHeading>
        <DocText>Sử dụng các slot <code>header</code> và <code>headerExtra</code> để tạo các khối tương tác phức tạp hơn.</DocText>
        <CodePreview
          code={`<PremiumBlock 
  header={
    <Flex align="center" gap="3">
      <RiNotification3Line className="text-brand-9" />
      <div className="flex flex-col">
        <span className="text-[14px] font-bold">System Integrity</span>
        <span className="text-[12px] opacity-70">Last checked 2 mins ago</span>
      </div>
    </Flex>
  }
  headerExtra={
    <Button variant="ghost" size="1">Refresh</Button>
  }
>
  <div className="py-2">Hệ thống đang hoạt động ổn định với 99.9% uptime.</div>
</PremiumBlock>`}
        >
          <div className="max-w-xl">
            <PremiumBlock 
              header={
                <Flex align="center" gap="3">
                  <RiNotification3Line className="text-brand-9 text-lg" />
                  <div className="flex flex-col">
                    <span className="text-[14px] font-bold text-gray-12">System Integrity</span>
                    <span className="text-[12px] text-gray-11">Last checked 2 mins ago</span>
                  </div>
                </Flex>
              }
              headerExtra={
                <Button variant="ghost" size="1">Refresh Status</Button>
              }
            >
              <div className="py-2 text-gray-11">
                Tất cả các node đã được kiểm tra và đồng bộ hóa thành công. Không phát hiện lỗi bảo mật nào.
              </div>
            </PremiumBlock>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="tabs">
        <DocHeading>Tabs Integration</DocHeading>
        <DocText>Tích hợp trực tiếp <code>Tabs</code> vào khu vực điều hướng bên trong khối.</DocText>
        <CodePreview
          code={`<PremiumBlock title="Settings" tabs={
  <Tabs defaultValue="account">
    <Tabs.List>
      <Tabs.Trigger value="account">Account</Tabs.Trigger>
      <Tabs.Trigger value="security">Security</Tabs.Trigger>
    </Tabs.List>
  </Tabs>
}>
  {/* Content reflects active tab */}
</PremiumBlock>`}
        >
          <div className="max-w-xl">
            <PremiumBlock 
              title="Project Configuration" 
              tabs={
                <Tabs defaultValue="general" size="1">
                  <Tabs.List className="border-none bg-transparent h-auto p-0 gap-4">
                    <Tabs.Trigger value="general">General</Tabs.Trigger>
                    <Tabs.Trigger value="integrations">Integrations</Tabs.Trigger>
                    <Tabs.Trigger value="advanced">Advanced</Tabs.Trigger>
                  </Tabs.List>
                </Tabs>
              }
            >
              <div className="space-y-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-gray-11 uppercase">Project Name</label>
                  <DocText className="text-sm font-medium">MMS Design System v4.0</DocText>
                </div>
              </div>
            </PremiumBlock>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="listing">
        <DocHeading>Listing variation (Job Card)</DocHeading>
        <DocText>Sử dụng <code>footerVariant="outside"</code> để tạo bố cục liệt kê chuyên nghiệp với chân trang hòa quyện vào lớp vỏ.</DocText>
        <CodePreview
          code={`<PremiumBlock 
  variant="sunken"
  footerVariant="outside"
  footer={
    <div className="flex justify-between w-full opacity-70">
      <span>65 applicants</span>
      <span>3d ago</span>
    </div>
  }
>
  {/* Shopify Style Template */}
</PremiumBlock>`}
        >
          <div className="max-w-xl">
            <PremiumBlock 
              footerVariant="outside"
              footer={
                <div className="flex justify-between w-full text-[12px] px-1 text-gray-11">
                  <span>65 applicants</span>
                  <span>3d ago</span>
                </div>
              }
            >
              <div className="space-y-5">
                <Flex align="center" justify="between" width="100%">
                  <Flex align="center" gap="4">
                    <div className="w-12 h-12 rounded-xl bg-gray-2 border border-gray-4 flex items-center justify-center overflow-hidden">
                       <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Shopify_logo_2018.svg" className="w-8 h-8" alt="Shopify" />
                    </div>
                    <div>
                      <DocHeading level={4} className="font-bold text-gray-12">Shopify</DocHeading>
                      <div className="flex items-center gap-1 text-[12px] text-gray-11">
                         <RiStarFill className="text-orange-9" />
                         <span className="font-bold text-gray-12">4.6</span>
                         <span>(1245)</span>
                      </div>
                    </div>
                  </Flex>
                  <RiBookmarkLine className="text-gray-9 text-lg" />
                </Flex>

                <DocHeading level={3} className="text-xl font-bold tracking-tight text-gray-12">Product Designer</DocHeading>
                
                <div className="flex flex-wrap gap-4 text-[13px] text-gray-11">
                  <Flex align="center" gap="1"><RiMapPinLine /> Ottawa, Canada</Flex>
                  <Flex align="center" gap="1"><RiBriefcaseLine /> Full-Time</Flex>
                  <Flex align="center" gap="1"><RiGlobalLine /> Remote</Flex>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['Remote', 'Canada', 'Design', 'Branding', 'UI / UX'].map(tag => (
                    <Badge key={tag} variant="surface" color="gray" size="1">{tag}</Badge>
                  ))}
                  <Badge variant="surface" color="gray" size="1">+1</Badge>
                </div>
              </div>
            </PremiumBlock>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="themes">
        <DocHeading>Themes & Glassmorphism</DocHeading>
        <DocText>Sử dụng các palette màu thương hiệu hoặc hiệu ứng kính mờ cho các trường hợp đặc biệt.</DocText>
        <CodePreview
          code={`<PremiumBlock variant="accent" title="Featured Project">...</PremiumBlock>
<PremiumBlock variant="glass" title="Quick Actions">...</PremiumBlock>`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PremiumBlock 
              variant="accent" 
              title="Premium Feature" 
              subtitle="Available for Enterprise"
              headerExtra={<Badge color="accent">PRO</Badge>}
            >
              <div className="text-sm p-2 text-gray-11">Nâng cấp để mở khóa các tính năng quản trị nâng cao và báo cáo chi tiết.</div>
            </PremiumBlock>

            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 overflow-hidden min-h-[220px]">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
              <PremiumBlock 
                variant="glass" 
                title={<span className="text-white">Glass Card</span>}
                subtitle={<span className="text-white/60">Blended Background</span>}
                innerClassName="bg-white/90"
              >
                <DocText className="text-sm text-gray-11">Hiệu ứng thủy tinh mờ giúp card nổi bật trên các nền gradient phức tạp.</DocText>
              </PremiumBlock>
            </div>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="api">
        <DocHeading>API Reference</DocHeading>
        <PropsTable props={propsData} />
      </DocSection>
    </DocLayout>
  );
};

export default PremiumBlockDoc;
