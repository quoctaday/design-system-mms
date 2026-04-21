import React from 'react';
import { Card, Badge, PieChart } from '../../components/ui';
import { RiPieChartLine, RiDonutChartLine, RiInformationLine } from 'react-icons/ri';
import './PieChartExample.css';

interface PieChartExampleProps {
  onPageChange: (page: string) => void;
}

const PieChartExample: React.FC<PieChartExampleProps> = ({ onPageChange }) => {
  // Sample Data: Transaction Channels
  const channelData = [
    { label: 'E-commerce', value: 12450, color: 'var(--chart-1)' },
    { label: 'QR Pay', value: 8900, color: 'var(--chart-2)' },
    { label: 'POS Terminal', value: 5600, color: 'var(--chart-4)' },
    { label: 'Link Payment', value: 2100, color: 'var(--chart-5)' },
  ];

  // Sample Data: Regions
  const regionData = [
    { label: 'TP. Hồ Chí Minh', value: 1560, color: 'var(--chart-1)' },
    { label: 'Hà Nội', value: 1240, color: 'var(--chart-2)' },
    { label: 'Đà Nẵng', value: 680, color: 'var(--chart-10)' },
    { label: 'Khác', value: 420, color: 'var(--chart-8)' },
  ];

  // Sample Data: Merchant Categories
  const categoryData = [
    { label: 'F&B', value: 45, color: 'var(--chart-6)' },
    { label: 'Retail', value: 30, color: 'var(--chart-5)' },
    { label: 'Services', value: 15, color: 'var(--chart-9)' },
    { label: 'Gifts', value: 10, color: 'var(--chart-8)' },
  ];

  return (
    <div className="pie-chart-example-page">
      <header className="page-header">
        <div className="header-content">
          <h1>Pie Chart Widget</h1>
          <p>MMS Design System Component for data distribution visualization.</p>
        </div>
        <Badge variant="soft" color="brand" radius="full">v2.0 Beta</Badge>
      </header>

      <div className="example-grid">
        {/* Style 1: Modern Donut Dashboard Card */}
        <Card 
          title="Kênh Giao dịch" 
          subtitle="Thống kê theo phương thức thanh toán"
          headerExtra={<RiInformationLine style={{ color: 'var(--gray-8)', cursor: 'pointer' }} />}
          className="chart-card"
        >
          <div className="chart-preview">
            <PieChart 
              data={channelData} 
              donut 
              title="Tổng giao dịch"
              size={240}
              innerRadius={0.7}
            />
          </div>
        </Card>

        {/* Style 2: Standard Pie Chart */}
        <Card 
          title="Phân bổ Khu vực" 
          subtitle="Mật độ điểm POS theo vùng miền"
          headerExtra={<Badge variant="soft" color="success">Direct</Badge>}
          className="chart-card"
        >
          <div className="chart-preview">
            <PieChart 
              data={regionData} 
              size={240}
            />
          </div>
        </Card>

        {/* Style 3: Compact Widget */}
        <Card 
          title="Lĩnh vực Kinh doanh" 
          subtitle="Top 4 ngành hàng phổ biến"
          className="chart-card"
        >
          <div className="chart-preview">
            <PieChart 
              data={categoryData} 
              donut 
              size={200}
              innerRadius={0.5}
            />
          </div>
        </Card>

        {/* Documentation Section */}
        <Card className="docs-card span-full">
          <h3>Design Guidelines</h3>
          <div className="guidelines-grid">
            <div className="guideline">
              <div className="icon-wrapper brand"><RiDonutChartLine /></div>
              <h4>Donut Chart</h4>
              <p>Prefer donut charts for SaaS dashboards as the center area can display total values, making it easier to read.</p>
            </div>
            <div className="guideline">
              <div className="icon-wrapper green"><RiPieChartLine /></div>
              <h4>Pie Chart</h4>
              <p>Use pie charts for distribution where part-to-whole comparison is primary without center context.</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PieChartExample;
