import React from 'react';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';
import { 
  Callout, 
  DataList, 
  Kbd, 
  Inset, 
  Flex, 
  Box, 
  Heading, 
  Text, 
  Section, 
  Card, 
  Badge 
} from '../components/ui';
import { RiInformationLine, RiCheckboxCircleLine, RiErrorWarningLine, RiSpam2Line } from 'react-icons/ri';

const OperationalDoc: React.FC = () => {
  const toc = [
    { id: 'callout', title: 'Callout' },
    { id: 'datalist', title: 'DataList' },
    { id: 'kbd', title: 'Kbd' },
    { id: 'inset', title: 'Inset' },
  ];

  return (
    <DocLayout
      title="Operational Primitives"
      description="Advanced structural and messaging components optimized for high-density operational dashboards, inspired by Radix Themes."
      toc={toc}
    >
      {/* Callout Section */}
      <DocSection id="callout">
        <DocHeading>Callout</DocHeading>
        <DocText>Provide important messaging or status updates with built-in semantic color routing and icon support.</DocText>
        
        <CodePreview
          title="Basic Callouts"
          code={`<Flex direction="column" gap="4">
  <Callout.Root color="brand">
    <Callout.Icon><RiInformationLine /></Callout.Icon>
    <Callout.Text>Hệ thống sẽ bảo trì định kỳ vào lúc 02:00 AM ngày mai.</Callout.Text>
  </Callout.Root>

  <Callout.Root color="success">
    <Callout.Icon><RiCheckboxCircleLine /></Callout.Icon>
    <Callout.Text>Giao dịch #88241 đã được tất toán thành công.</Callout.Text>
  </Callout.Root>

  <Callout.Root color="warning">
    <Callout.Icon><RiErrorWarningLine /></Callout.Icon>
    <Callout.Text>Số dư khả dụng đang ở mức thấp (dưới 10%).</Callout.Text>
  </Callout.Root>

  <Callout.Root color="error">
    <Callout.Icon><RiSpam2Line /></Callout.Icon>
    <Callout.Text>Kết nối đến cổng NAPAS bị gián đoạn. Vui lòng kiểm tra lại.</Callout.Text>
  </Callout.Root>
</Flex>`}
        >
          <Flex direction="column" gap="4">
            <Callout.Root color="brand">
              <Callout.Icon><RiInformationLine /></Callout.Icon>
              <Callout.Text>Hệ thống sẽ bảo trì định kỳ vào lúc 02:00 AM ngày mai.</Callout.Text>
            </Callout.Root>

            <Callout.Root color="success">
              <Callout.Icon><RiCheckboxCircleLine /></Callout.Icon>
              <Callout.Text>Giao dịch #88241 đã được tất toán thành công.</Callout.Text>
            </Callout.Root>

            <Callout.Root color="warning">
              <Callout.Icon><RiErrorWarningLine /></Callout.Icon>
              <Callout.Text>Số dư khả dụng đang ở mức thấp (dưới 10%).</Callout.Text>
            </Callout.Root>

            <Callout.Root color="error">
              <Callout.Icon><RiSpam2Line /></Callout.Icon>
              <Callout.Text>Kết nối đến cổng NAPAS bị gián đoạn. Vui lòng kiểm tra lại.</Callout.Text>
            </Callout.Root>
          </Flex>
        </CodePreview>

        <PropsTable
          props={[
            { name: 'size', type: '1 | 2 | 3', default: '2', description: 'Kích thước của callout' },
            { name: 'variant', type: 'soft | surface | outline', default: 'soft', description: 'Kiểu hiển thị của callout' },
            { name: 'color', type: 'brand | gray | success | warning | error', default: 'brand', description: 'Màu sắc ngữ nghĩa' },
          ]}
        />
      </DocSection>

      {/* DataList Section */}
      <DocSection id="datalist">
        <DocHeading>DataList</DocHeading>
        <DocText>A grid-based component for displaying key-value pairs with high-density alignment.</DocText>
        
        <CodePreview
          title="Transaction Details"
          code={`<DataList.Root>
  <DataList.Item>
    <DataList.Label>Mã giao dịch</DataList.Label>
    <DataList.Value>
      <Flex align="center" gap="2">
        TX-9982415
        <Badge variant="soft" color="gray" size="1">Copy</Badge>
      </Flex>
    </DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label>Thời gian</DataList.Label>
    <DataList.Value>2024-04-17 10:25:40</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label>Đối tác</DataList.Label>
    <DataList.Value>VinMart+ Landmark 81</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label>Trạng thái</DataList.Label>
    <DataList.Value>
      <Badge color="success">ĐÃ TẤT TOÁN</Badge>
    </DataList.Value>
  </DataList.Item>
</DataList.Root>`}
        >
          <Box p="4" border="b" style={{ border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-4)' }}>
            <DataList.Root>
              <DataList.Item>
                <DataList.Label>Mã giao dịch</DataList.Label>
                <DataList.Value>
                  <Flex align="center" gap="2">
                    TX-9982415
                    <Badge variant="soft" color="gray" size="1">Copy</Badge>
                  </Flex>
                </DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label>Thời gian</DataList.Label>
                <DataList.Value>2024-04-17 10:25:40</DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label>Đối tác</DataList.Label>
                <DataList.Value>VinMart+ Landmark 81</DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label>Trạng thái</DataList.Label>
                <DataList.Value>
                  <Badge color="success">ĐÃ TẤT TOÁN</Badge>
                </DataList.Value>
              </DataList.Item>
            </DataList.Root>
          </Box>
        </CodePreview>
      </DocSection>

      {/* Kbd Section */}
      <DocSection id="kbd">
        <DocHeading>Kbd (Keyboard Key)</DocHeading>
        <DocText>Semantic component for keyboard shortcuts or command indicators.</DocText>
        
        <CodePreview
          title="Usage Examples"
          code={`<Flex gap="3" align="center">
  <Text size="2">Press <Kbd>CMD</Kbd> + <Kbd>K</Kbd> to search</Text>
  <Text size="2">Print using <Kbd size="1">P</Kbd></Text>
</Flex>`}
        >
          <Flex gap="4" direction="column">
            <Flex gap="2" align="center">
              <Text size="2">Press</Text> <Kbd>CMD</Kbd> <Text size="2">+</Text> <Kbd>K</Kbd> <Text size="2">to search</Text>
            </Flex>
            <Flex gap="2" align="center">
              <Text size="1">Print using</Text> <Kbd size="1">CTRL</Kbd> <Kbd size="1">P</Kbd>
            </Flex>
          </Flex>
        </CodePreview>
      </DocSection>

      {/* Inset Section */}
      <DocSection id="inset">
        <DocHeading>Inset</DocHeading>
        <DocText>Negates parent padding to allow content to span to the edges of its container.</DocText>
        
        <CodePreview
          title="Full-bleed image in Card"
          code={`<Card style={{ maxWidth: 320 }}>
  <Inset side="top" clip="border-box">
    <img 
      src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400" 
      style={{ width: '100%', height: 120, objectFit: 'cover' }}
    />
  </Inset>
  <Box pt="4">
    <Heading size="3">Abstract Aurora</Heading>
    <Text size="2" color="gray">MMS Design standard assets</Text>
  </Box>
</Card>`}
        >
          <Card style={{ maxWidth: 320 }}>
            <Inset side="top" clip="border-box">
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400" 
                style={{ width: '100%', height: 120, objectFit: 'cover' }}
              />
            </Inset>
            <Box pt="3">
              <Heading size="3">Abstract Aurora</Heading>
              <Text size="2" color="gray">MMS Design standard assets</Text>
            </Box>
          </Card>
        </CodePreview>
      </DocSection>
    </DocLayout>
  );
};

export default OperationalDoc;
