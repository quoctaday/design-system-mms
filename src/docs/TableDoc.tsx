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
import './TableDoc.css';
import './DropdownDoc.css'; // For common dropdown demo styles like .action-trigger-circle

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

  // Mock data representing the "PHIẾU NHẬP KHO" screen
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

  return (
    <div className="table-doc">
      <header className="doc-header">
        <h1>Table</h1>
        <p className="doc-description">A responsive data table for displaying large sets of structured information.</p>
      </header>

      <section className="doc-section">
        <h2>Dashboard Preview: Phiếu Nhập Kho</h2>
        <p>Recreating the "Inventory Receipt" screen using the MMS Table component system.</p>
        
        <div className="dashboard-container">
          {/* Dashboard Header/Actions */}
          <div className="dashboard-actions">
            <div className="actions-left">
              <Button variant="solid" color="brand" leftIcon={<RiAddLine />}>Tạo mới</Button>
              <Button variant="soft" color="gray" leftIcon={<RiDownload2Line />}>Nhập từ Excel</Button>
            </div>
            <div className="actions-right">
              <Input 
                placeholder="Tìm kiếm mã phiếu..." 
                leftSlot={<RiSearchLine />}
                style={{ width: 280 }}
              />
              <Button variant="outline" color="gray" leftIcon={<RiFilter3Line />}>Bộ lọc</Button>
            </div>
          </div>

          {/* THE TABLE */}
          <Table.Root variant="ghost" striped>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell style={{ width: 40 }}>
                  <Checkbox checked="indeterminate" />
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell style={{ width: 40 }} />
                <Table.ColumnHeaderCell>
                  Mã phiếu 
                  <Tooltip.Root side="top">
                    <Tooltip.Trigger>
                      <RiInformationLine className="header-info-icon" />
                    </Tooltip.Trigger>
                    <Tooltip.Content>Mã định danh duy nhất cho mỗi phiếu nhập kho.</Tooltip.Content>
                  </Tooltip.Root>
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Đối tác</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Ngày khởi tạo</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Tài liệu nguồn</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Trạng thái</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell style={{ width: 48 }}></Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {inventoryData.map((item) => (
                <Table.Row key={item.id}>
                  <Table.Cell>
                    <Checkbox />
                  </Table.Cell>
                  <Table.Cell>
                    <RiStarFill className={item.starred ? "star-active" : "star-inactive"} />
                  </Table.Cell>
                  <Table.Cell className="cell-id">{item.id}</Table.Cell>
                  <Table.Cell>{item.partner}</Table.Cell>
                  <Table.Cell>{item.date}</Table.Cell>
                  <Table.Cell>{item.source}</Table.Cell>
                  <Table.Cell>{getStatusBadge(item.status)}</Table.Cell>
                  <Table.Cell>
                    <Dropdown.Root>
                      <Dropdown.Trigger>
                        <div className="action-trigger-circle">
                          <RiMore2Fill />
                        </div>
                      </Dropdown.Trigger>
                      <Dropdown.Content align="right">
                        <Dropdown.Item leftIcon={<RiEditLine />}>Chỉnh sửa</Dropdown.Item>
                        <Dropdown.Item leftIcon={<RiFileCopyLine />}>Sao chép</Dropdown.Item>
                        <Dropdown.Item leftIcon={<RiDownload2Line />}>Tải xuống PDF</Dropdown.Item>
                        <Dropdown.Separator />
                        <Dropdown.Item 
                          leftIcon={<RiDeleteBinLine />} 
                          className="dropdown-item-danger"
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

          {/* Table Footer / Pagination */}
          <div className="dashboard-footer">
            <div className="footer-info">Hiển thị 1-6 của 90 kết quả</div>
            <Pagination 
              currentPage={currentPage}
              totalCount={90}
              pageSize={10}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>

        {/* Global Confirmation Modal */}
        <Modal.Root open={deleteModalOpen} onOpenChange={setDeleteModalOpen}>
          <Modal.Portal>
            <Modal.Overlay />
            <Modal.Content style={{ maxWidth: '400px' }}>
              <Modal.Header>
                <Modal.Title>Xác nhận xóa phiếu nhập kho?</Modal.Title>
                <Modal.Description>
                  Phiếu <strong>{selectedItem}</strong> sẽ bị xóa vĩnh viễn. Hành động này không thể hoàn tác.
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

      <section className="doc-section">
        <h2>Component API</h2>
        <p>Using the composition pattern for maximum flexibility.</p>
        <pre className="doc-code">
{`<Table.Root variant="surface" stickyHeader>
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
        </pre>
      </section>
    </div>
  );
};

export default TableDoc;
