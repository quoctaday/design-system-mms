import React, { useState } from 'react';
import { 
  RadioGroup, 
  Select, 
  Badge
} from '../components/ui';

const FormsDoc: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [selectedRole, setSelectedRole] = useState('editor');

  return (
    <div className="doc-container">
      <header className="doc-header">
        <h1>Advanced Form Components</h1>
        <p>Bộ sưu tập các thành phần biểu mẫu nâng cao với tính tương tác cao và khả năng tùy biến tốt.</p>
      </header>


      {/* RadioGroup Section */}
      <section className="doc-section">
        <h2>RadioGroup</h2>
        <p>Cho phép người dùng chọn một giá trị duy nhất từ bộ tùy chọn.</p>
        <div className="demo-box" style={{ gap: '32px' }}>
          <div>
            <h3 style={{ fontSize: '14px', marginBottom: '16px' }}>Chọn gói dịch vụ (Vertical)</h3>
            <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan}>
              <RadioGroup.Item value="basic">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span>Gói cơ bản</span>
                  <span style={{ fontSize: '12px', color: 'var(--gray-11)' }}>Miễn phí cho cá nhân</span>
                </div>
              </RadioGroup.Item>
              <RadioGroup.Item value="pro">
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <span>Gói chuyên nghiệp</span>
                  <Badge color="brand" variant="soft" size="1">Popular</Badge>
                </div>
              </RadioGroup.Item>
              <RadioGroup.Item value="enterprise" disabled>Gói doanh nghiệp (Coming soon)</RadioGroup.Item>
            </RadioGroup>
          </div>

          <div style={{ borderLeft: '1px solid var(--gray-6)', paddingLeft: '32px' }}>
            <h3 style={{ fontSize: '14px', marginBottom: '16px' }}>Lựa chọn nhanh (Horizontal)</h3>
            <RadioGroup orientation="horizontal" defaultValue="1">
              <RadioGroup.Item value="1">Lựa chọn 1</RadioGroup.Item>
              <RadioGroup.Item value="2">Lựa chọn 2</RadioGroup.Item>
              <RadioGroup.Item value="3">Lựa chọn 3</RadioGroup.Item>
            </RadioGroup>
          </div>
        </div>
      </section>

      {/* Select Section */}
      <section className="doc-section">
        <h2>Select</h2>
        <p>Bộ chọn giá trị thu gọn, tối ưu không gian hơn RadioGroup.</p>
        <div className="demo-box" style={{ gap: '24px' }}>
          <div style={{ width: '240px' }}>
            <h3 style={{ fontSize: '14px', marginBottom: '12px' }}>Vai trò người dùng</h3>
            <Select value={selectedRole} onValueChange={setSelectedRole}>
              <Select.Trigger placeholder="Chọn vai trò...">
                {selectedRole === 'admin' && 'Administrator'}
                {selectedRole === 'editor' && 'Editor'}
                {selectedRole === 'viewer' && 'Viewer'}
              </Select.Trigger>
              <Select.Portal>
                <Select.Content>
                  <Select.Label>Quyền hạn</Select.Label>
                  <Select.Item value="admin">Administrator</Select.Item>
                  <Select.Item value="editor">Editor</Select.Item>
                  <Select.Separator />
                  <Select.Label>Chỉ xem</Select.Label>
                  <Select.Item value="viewer">Viewer</Select.Item>
                  <Select.Item value="guest" disabled>Guest Account</Select.Item>
                </Select.Content>
              </Select.Portal>
            </Select>
          </div>

          <div style={{ width: '240px' }}>
            <h3 style={{ fontSize: '14px', marginBottom: '12px' }}>Disabled Select</h3>
            <Select disabled>
              <Select.Trigger placeholder="Không thể chọn..." />
            </Select>
          </div>
        </div>
      </section>

      {/* API Tables could be added here similar to other docs */}
    </div>
  );
};

export default FormsDoc;
