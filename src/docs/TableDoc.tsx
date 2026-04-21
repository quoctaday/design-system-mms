import React, { useState } from 'react';
import { 
  Table, 
  Badge, 
  Checkbox, 
  Pagination, 
  Input, 
  Button,
  DropdownMenu,
  Tooltip,
  Dialog
} from '../components/ui';
import { 
  RiSearchLine, 
  RiFilter3Line, 
  RiDownload2Line, 
  RiAddLine, 
  RiInformationLine,
  RiStarFill,
  RiMore2Fill,
  RiEditLine,
  RiFileCopyLine,
  RiDeleteBinLine
} from 'react-icons/ri';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { AuroraBackground } from '../components/ui';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';

const TableDoc: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleDeleteClick = (id: string) => {
    setSelectedItem(id);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    alert(`Đã xóa phiếu: ${selectedItem}`);
    setDeleteDialogOpen(false);
    setSelectedItem(null);
  };

  const inventoryData = [
    { id: 'NABSG/IN/00040', partner: 'NAB Sai Gon', date: '20/12/2023 15:43:08', source: 'PL00021', status: 'Canceled', starred: true },
    { id: 'NABSG/IN/00091', partner: 'NAB Sai Gon', date: '20/12/2023 15:43:08', source: 'PL00021', status: 'Draft', starred: false },
    { id: 'NABSG/IN/00042', partner: 'NAB Sai Gon', date: '20/12/2023 11:20:45', source: 'PL00021', status: 'Ready', starred: false },
    { id: 'NABSG/IN/00041', partner: 'NAB Sai Gon', date: '20/12/2023 11:20:45', source: 'PL00021', status: 'Done', starred: false },
    { id: 'NABSG/IN/00039', partner: 'NAB Sai Gon', date: '20/12/2023 11:20:45', source: 'PL00010', status: 'Ready', starred: false },
    { id: 'NABSG/IN/00038', partner: 'NAB Sai Gon', date: '19/12/2023 09:12:33', source: 'PL00005', status: 'Done', starred: true },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Done': return <Badge variant="soft" color="success">Hoàn tất</Badge>;
      case 'Ready': return <Badge variant="soft" color="brand">Sẵn sàng</Badge>;
      case 'Draft': return <Badge variant="soft" color="gray">Nháp</Badge>;
      case 'Canceled': return <Badge variant="soft" color="error">Đã hủy</Badge>;
      default: return <Badge variant="soft">{status}</Badge>;
    }
  };

  const toc = [
    { id: 'preview', title: 'Dashboard Preview' },
    { id: 'usage', title: 'Usage' },
    { id: 'api', title: 'API Reference' }
  ];

  const tableProps = [
    { name: 'variant', type: "'surface' | 'ghost' | 'outline'", default: "'surface'", description: 'Biến thể hiển thị của bảng.' },
    { name: 'striped', type: 'boolean', default: 'false', description: 'Kẻ sọc các dòng bảng.' },
    { name: 'stickyHeader', type: 'boolean', default: 'false', description: 'Cố định tiêu đề bảng khi cuộn.' },
    { name: 'radius', type: 'RadiusScale', default: "'none'", description: 'Độ bo góc của bảng.' }
  ];

  return (
    <DocLayout 
      title="Table" 
      description="A high-performance data table optimized for density and readability with Flat-Premium aesthetics."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <DocSection id="preview">
        <DocHeading>Dashboard Preview: Phiếu Nhập Kho</DocHeading>
        <DocText>A realistic inventory dashboard using specialized Table components and numeric sizing.</DocText>
        
        <div className="mt-6 border border-subtle rounded-xl overflow-hidden bg-canvas shadow-1">
          <div className="p-4 border-b border-subtle bg-canvas flex flex-wrap gap-4 justify-between items-center">
            <div className="flex gap-2">
              <Button variant="solid" color="brand" leftIcon={<RiAddLine />}>Tạo mới</Button>
              <Button variant="soft" color="gray" leftIcon={<RiDownload2Line />}>Nhập Excel</Button>
            </div>
            <div className="flex gap-2">
              <Input 
                placeholder="Tìm mã phiếu..." 
                leftSlot={<RiSearchLine />}
                className="w-64"
                variant="surface"
              />
              <Button variant="outline" color="gray" size="1">
                <RiFilter3Line />
              </Button>
            </div>
          </div>

          <Table.Root variant="ghost" striped size="2">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell className="w-10">
                  <Checkbox checked="indeterminate" />
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className="w-10" />
                <Table.ColumnHeaderCell>
                  Mã phiếu
                  <Tooltip.Root side="top">
                    <Tooltip.Trigger>
                      <RiInformationLine className="inline-block ml-1 text-muted cursor-help" />
                    </Tooltip.Trigger>
                    <Tooltip.Content>
                      Unique identifier for each record.
                    </Tooltip.Content>
                  </Tooltip.Root>
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Đối tác</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Ngày tạo</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Nguồn</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Trạng thái</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className="w-12 text-center" />
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {inventoryData.map((item) => (
                <Table.Row key={item.id}>
                  <Table.Cell><Checkbox /></Table.Cell>
                  <Table.Cell>
                    <RiStarFill className={item.starred ? "text-warning" : "text-muted/40"} />
                  </Table.Cell>
                  <Table.Cell className="font-medium text-strong">{item.id}</Table.Cell>
                  <Table.Cell>{item.partner}</Table.Cell>
                  <Table.Cell className="text-secondary text-xs">{item.date}</Table.Cell>
                  <Table.Cell>{item.source}</Table.Cell>
                  <Table.Cell>{getStatusBadge(item.status)}</Table.Cell>
                  <Table.Cell>
                    <DropdownMenu.Root>
                      <DropdownMenu.Trigger>
                        <Button variant="ghost" size="1">
                          <RiMore2Fill />
                        </Button>
                      </DropdownMenu.Trigger>
                      <DropdownMenu.Content align="end" width={180}>
                        <DropdownMenu.Item>
                          <RiEditLine className="mr-2" /> Chỉnh sửa
                        </DropdownMenu.Item>
                        <DropdownMenu.Item>
                          <RiFileCopyLine className="mr-2" /> Sao chép
                        </DropdownMenu.Item>
                        <DropdownMenu.Separator />
                        <DropdownMenu.Item 
                          variant="danger"
                          onClick={() => handleDeleteClick(item.id)}
                        >
                          <RiDeleteBinLine className="mr-2" /> Xóa phiếu
                        </DropdownMenu.Item>
                      </DropdownMenu.Content>
                    </DropdownMenu.Root>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>

          <div className="p-4 border-t border-subtle flex justify-between items-center bg-muted/5">
            <span className="text-xs text-subtle font-medium">Hiển thị 1-6 của 90 kết quả</span>
            <Pagination 
              currentPage={currentPage}
              totalCount={90}
              pageSize={10}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>

        <Dialog.Root open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
          <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content size="1">
              <Dialog.Header>
                <Dialog.Title>Xác nhận xóa phiếu?</Dialog.Title>
                <Dialog.Description>
                  Phiếu <strong>{selectedItem}</strong> sẽ bị xóa vĩnh viễn. Hành động này không thể hoàn tác.
                </Dialog.Description>
              </Dialog.Header>
              <Dialog.Footer>
                <Dialog.Close>
                  <Button variant="surface">Hủy</Button>
                </Dialog.Close>
                <Button color="error" variant="classic" onClick={confirmDelete}>Xác nhận xóa</Button>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </DocSection>

      <DocSection id="usage">
        <DocHeading>Usage</DocHeading>
        <DocText>Structured composition based on Radix UI's Table primitive.</DocText>
        <CodePreview
          code={`<Table.Root variant="surface" size="2">
  <Table.Header>
    <Table.Row>
      <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Role</Table.ColumnHeaderCell>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell>John Doe</Table.Cell>
      <Table.Cell>Admin</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table.Root>`}
        >
          <Table.Root variant="surface">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Role</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>John Doe</Table.Cell>
                <Table.Cell>Admin</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jane Smith</Table.Cell>
                <Table.Cell>Developer</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </CodePreview>
      </DocSection>

      <DocSection id="api">
        <DocHeading>API Reference</DocHeading>
        <PropsTable props={tableProps} />
      </DocSection>
    </DocLayout>
  );
};

export default TableDoc;
