import React from 'react';
import { MetricCard } from '../../components/ui';
import { 
  RiWalletLine, 
  RiExchangeDollarLine, 
  RiUserFollowLine, 
  RiLineChartLine,
  RiArrowRightUpLine,
  RiShieldCheckLine,
  RiGlobalLine,
  RiCustomerService2Line,
  RiSearchLine,
  RiNotification3Line,
  RiSettings4Line
} from 'react-icons/ri';
import './WidgetExample.css';

const WidgetExample: React.FC = () => {
  return (
    <div className="widget-example-page">
      <header className="page-header">
        <div className="header-left">
          <h1 className="page-title">Widget Library</h1>
          <p className="page-subtitle">A collection of premium dashboard widgets and metric cards for real-time monitoring.</p>
        </div>
        <div className="header-actions">
           <div className="search-bar">
            <RiSearchLine />
            <input type="text" placeholder="Tìm kiếm widget..." />
          </div>
          <div className="header-icon-btn">
            <RiNotification3Line />
          </div>
          <div className="header-icon-btn">
            <RiSettings4Line />
          </div>
        </div>
      </header>

      {/* SECTION 1: VISUAL SHOWCASE */}
      <section className="example-section">
        <div className="section-header-row">
          <h2 className="section-title">Standard Dashboard Widgets</h2>
          <span className="section-tag">Interactive</span>
        </div>
        <p className="section-desc">The default size for main dashboard overview metrics with integrated navigation.</p>
        <div className="widget-grid-4">
          <MetricCard 
            label="Tổng doanh thu" 
            value="24.850.500.000" 
            icon={<RiWalletLine />} 
            trend="up" 
            change="5.2%" 
            color="primary"
            description="Đã thanh toán: 22.4B"
            linkText="Chi tiết"
            onLinkClick={() => console.log('Navigate to Revenue')}
          />
          <MetricCard 
            label="Lợi nhuận MDR" 
            value="1.250.000.000" 
            icon={<RiExchangeDollarLine />} 
            trend="up" 
            change="2.1%" 
            color="success"
            description="Mục tiêu tháng: 1.5B"
            linkText="Báo cáo"
            onLinkClick={() => console.log('Navigate to Profit')}
          />
          <MetricCard 
            label="Tổng khách hàng" 
            value="12.450" 
            icon={<RiUserFollowLine />} 
            trend="up" 
            change="4.2%" 
            color="info"
            description="842 khách hàng mới"
            linkText="Danh sách"
            onLinkClick={() => console.log('Navigate to Users')}
          />
          <MetricCard 
            label="Tỷ lệ chênh lệch" 
            value="1.2%" 
            icon={<RiLineChartLine />} 
            trend="down" 
            change="0.5%" 
            color="warning"
            description="Ngưỡng an toàn: < 2%"
            linkText="Sát hạch"
            onLinkClick={() => console.log('Navigate to Analytics')}
          />
        </div>
      </section>

      <div className="widget-row-split">
        <section className="example-section flex-1">
          <h2 className="section-title">Large High-Impact</h2>
          <p className="section-desc">Used for primary KPIs that require more visual weight.</p>
          <div className="widget-grid-2">
            <MetricCard 
              size="lg"
              label="Hệ thống ổn định" 
              value="99.98%" 
              icon={<RiShieldCheckLine />} 
              trend="up" 
              change="0.02%" 
              color="success"
              description="Uptime trong 30 ngày qua"
              linkText="Trạng thái"
            />
            <MetricCard 
              size="lg"
              label="Lưu lượng quốc tế" 
              value="4.2 TB" 
              icon={<RiGlobalLine />} 
              trend="up" 
              change="15.4%" 
              color="primary"
              description="Băng thông: 10 TB"
              linkText="Bản đồ"
            />
          </div>
        </section>

        <section className="example-section flex-1">
          <h2 className="section-title">Small Utility</h2>
          <p className="section-desc">Compact widgets for secondary metrics and navigation sidebars.</p>
          <div className="widget-grid-2">
            <MetricCard 
              size="sm"
              label="Hỗ trợ online" 
              value="12" 
              icon={<RiCustomerService2Line />} 
              color="info"
              description="Nhân viên sẵn sàng"
            />
            <MetricCard 
              size="sm"
              label="Khiếu nại mở" 
              value="3" 
              icon={<RiArrowRightUpLine />} 
              color="error"
              description="Cần xử lý"
              linkText="Xử lý"
            />
          </div>
        </section>
      </div>

      <hr className="section-divider" />

      {/* SECTION 2: COMPONENT DOCUMENTATION */}
      <div className="doc-grid-2">
        <section className="example-section">
          <h2 className="section-title">Sizing Guidelines</h2>
          <p className="section-desc">Consistent sizing ensures a balanced layout across different dashboard modules.</p>
          <div className="sizing-stack">
            <div className="sizing-item">
              <span className="sizing-label">Small (sm) - Compact sidebars</span>
              <MetricCard size="sm" label="Users" value="12.5k" color="info" icon={<RiUserFollowLine />} />
            </div>
            <div className="sizing-item">
              <span className="sizing-label">Medium (md) - Standard Overview</span>
              <MetricCard size="md" label="Users" value="12.5k" color="info" icon={<RiUserFollowLine />} />
            </div>
            <div className="sizing-item">
              <span className="sizing-label">Large (lg) - Hero Metrics</span>
              <MetricCard size="lg" label="Users" value="12.5k" color="info" icon={<RiUserFollowLine />} />
            </div>
          </div>
        </section>

        <section className="example-section">
          <h2 className="section-title">Color States</h2>
          <p className="section-desc">Semantic colors help users instantly identify operational health and categories.</p>
          <div className="color-matrix">
            <MetricCard size="sm" label="Primary" value="Active" color="primary" icon={<RiGlobalLine />} />
            <MetricCard size="sm" label="Success" value="Healthy" color="success" icon={<RiShieldCheckLine />} />
            <MetricCard size="sm" label="Warning" value="Attention" color="warning" icon={<RiLineChartLine />} />
            <MetricCard size="sm" label="Error" value="Critical" color="error" icon={<RiArrowRightUpLine />} />
            <MetricCard size="sm" label="Info" value="Information" color="info" icon={<RiWalletLine />} />
          </div>
        </section>
      </div>

      <section className="example-section">
        <h2 className="section-title">Implementation</h2>
        <div className="code-block-mock">
          <pre>
{`<MetricCard 
  size="md"
  label="Revenue"
  value="$45,200"
  icon={<RiWalletLine />}
  trend="up"
  change="12%"
  description="Monthly goal: $50k"
  linkText="View Report"
  onLinkClick={handleNavigate}
/>`}
          </pre>
        </div>
      </section>
    </div>
  );
};

export default WidgetExample;
