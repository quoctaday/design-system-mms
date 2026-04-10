import React, { useState } from 'react';
import { 
  Table, 
  Badge, 
  Checkbox, 
  Pagination, 
  Input, 
  Button,
  Dropdown,
  Tooltip,
  Modal
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
import { AuroraBackground } from '../components/ui/AuroraBackground/AuroraBackground';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';

const TableDoc: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleDeleteClick = (id: string) => {
    setSelectedItem(id);
    setDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    alert(`Đã xóa phiếu: ${selectedItem}`);
    setDeleteModalOpen(false);
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
    { name: 'className', type: 'string', description: 'CSS class tùy chỉnh.' }
  ];

  return (
    <DocLayout 
      title="Table" 
      description="A responsive data table for displaying large sets of structured information."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <section id="preview" className="doc-section">
        <h2>Dashboard Preview: Phiếu Nhập Kho</h2>
        <p>Recreating the Inventory Receipt screen using the MMS Table component system.</p>
        
        <div className="mt-6 border border-subtle rounded-xl overflow-hidden bg-canvas">
          <div className="p-4 border-b border-subtle bg-canvas flex flex-wrap gap-4 justify-between items-center">
            <div className="flex gap-2">
              <Button variant="solid" color="brand" leftIcon={<RiAddLine />}>Tạo mới</Button>
              <Button variant="soft" color="gray" leftIcon={<RiDownload2Line />}>Nhập Excel</Button>
            </div>
            <div className="flex gap-2">
              <Input 
                placeholder="Tìm kiếm mã phiếu..." 
                leftSlot={<RiSearchLine />}
                className="w-64"
              />
              <Button variant="outline" color="gray" size="1">
                <RiFilter3Line />
              </Button>
            </div>
          </div>

          <Table.Root variant="ghost" striped>
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
                      Mã định danh duy nhất cho mỗi phiếu.
                    </Tooltip.Content>
                  </Tooltip.Root>
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Đối tác</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Ngày khởi tạo</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Tài liệu nguồn</Table.ColumnHeaderCell>
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
                    <Dropdown.Root>
                      <Dropdown.Trigger>
                        <Button variant="ghost" size="1">
                          <RiMore2Fill />
                        </Button>
                      </Dropdown.Trigger>
                      <Dropdown.Content align="right">
                        <Dropdown.Item leftIcon={<RiEditLine />}>Chỉnh sửa</Dropdown.Item>
                        <Dropdown.Item leftIcon={<RiFileCopyLine />}>Sao chép</Dropdown.Item>
                        <Dropdown.Separator />
                        <Dropdown.Item 
                          leftIcon={<RiDeleteBinLine />} 
                          className="text-error"
                          onClick={() => handleDeleteClick(item.id)}
                        >
                          Xóa phiếu
                        </Dropdown.Item>
                      </Dropdown.Content>
                    </Dropdown.Root>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>

          <div className="p-4 border-t border-subtle flex justify-between items-center bg-muted/10">
            <span className="text-xs text-subtle">Hiển thị 1-6 của 90 kết quả</span>
            <Pagination 
              currentPage={currentPage}
              totalCount={90}
              pageSize={10}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>

        <Modal.Root open={deleteModalOpen} onOpenChange={setDeleteModalOpen}>
          <Modal.Portal>
            <Modal.Overlay />
            <Modal.Content style={{ maxWidth: '400px' }}>
              <Modal.Header>
                <Modal.Title>Xác nhận xóa phiếu?</Modal.Title>
                <Modal.Description>
                  Phiếu <strong>{selectedItem}</strong> sẽ bị xóa vĩnh viễn.
                </Modal.Description>
              </Modal.Header>
              <Modal.Footer>
                <Button variant="ghost" onClick={() => setDeleteModalOpen(false)}>Hủy</Button>
                <Button color="error" onClick={confirmDelete}>Xác nhận xóa</Button>
              </Modal.Footer>
            </Modal.Content>
          </Modal.Portal>
        </Modal.Root>
      </section>

      <section id="usage" className="doc-section">
        <h2>Usage</h2>
        <p>Using the composition pattern for maximum flexibility.</p>
        <CodePreview
          code={`<Table.Root variant="surface">
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
      </section>

      <section id="api" className="doc-section">
        <h2>API Reference</h2>
        <PropsTable props={tableProps} />
      </section>
    </DocLayout>
  );
};

export default TableDoc;


