import React, { useState } from 'react';
import { 
  RiSearchLine, 
  RiNotification3Line, 
  RiCalendarLine, 
  RiArrowUpSLine, 
  RiArrowDownSLine,
  RiDashboardLine,
  RiExchangeLine,
  RiUser3Line,
  RiBankCardLine,
  RiShoppingBag3Line,
  RiDatabase2Line,
  RiFileTextLine,
  RiSettings4Line,
  RiFlashlightLine,
  RiHistoryLine,
  RiPushpinLine,
  RiErrorWarningLine
} from 'react-icons/ri';
import { cn } from '../../lib/utils';
import { 
  Button, 
  Badge, 
  Card, 
  Table, 
  Dropdown,
  Progress,
  PieChart,
  SegmentedControl,
  MetricCard
} from '../../components/ui';
import './DashboardExample.css';

// Using the generated banner asset
import promoBanner from '/Users/buiquoc/.gemini/antigravity/brain/211d71fb-07d4-404d-846f-b52030890f10/unipay_dashboard_banner_1775113791721.png';

const DashboardExample: React.FC = () => {
  const [activeNav, setActiveNav] = useState('overview');
  const [cardStatsView, setCardStatsView] = useState<'revenue' | 'volume'>('revenue');
  const [fraudView, setFraudView] = useState('fraud');

  const cardRevenueData = [
    { label: 'VISA', value: 15.2, color: '#1A1A1A' },
    { label: 'NAPAS', value: 9.0, color: '#3B82F6' },
    { label: 'MASTERCARD', value: 8.0, color: '#6366F1' },
    { label: 'JCB', value: 7.0, color: '#F59E0B' },
    { label: 'China Union Bank', value: 6.0, color: '#CACFE0' },
  ];

  const cardVolumeData = [
    { label: 'VISA', value: 12450, color: '#1A1A1A' },
    { label: 'NAPAS', value: 18900, color: '#3B82F6' },
    { label: 'MASTERCARD', value: 7600, color: '#6366F1' },
    { label: 'JCB', value: 4200, color: '#F59E0B' },
    { label: 'China Union Bank', value: 2100, color: '#CACFE0' },
  ];

  const activeChartData = cardStatsView === 'revenue' ? cardRevenueData : cardVolumeData;

  const stats = [
    { label: 'Tổng doanh thu', value: '24.850.500.000', change: '+5.2%', trend: 'up', icon: <RiBankCardLine />, description: 'Đã thanh toán: 22.4B', linkText: 'Chi tiết' },
    { label: 'Lợi nhuận MDR', value: '1.250.000.000', change: '+2.1%', trend: 'up', icon: <RiPushpinLine />, description: 'Mục tiêu tháng: 1.5B', linkText: 'Báo cáo' },
    { label: 'Khách hàng', value: '12.450', change: '+4.2%', trend: 'up', icon: <RiUser3Line />, description: '842 khách hàng mới', linkText: 'Danh sách' },
    { label: 'Chênh lệch', value: '0.15%', change: 'RỦI RO', trend: 'down', icon: <RiErrorWarningLine />, description: 'Vượt ngưỡng an toàn 0.05%', linkText: 'Sát hạch' },
  ];

  const profiles = [
    { id: '1', time: '5 ngày trước', account: 'VinMart+ Quận 1', region: 'TP. Hồ Chí Minh', status: 'QUÁ HẠN SLA', statusType: 'error' },
    { id: '2', time: '1 ngày trước', account: 'The Coffee House HP', region: 'Hải Phòng', status: 'SẮP QUÁ SLA', statusType: 'warning' },
    { id: '3', time: 'Hôm nay', account: 'Annam Gourmet', region: 'Đà Nẵng', status: 'MỚI', statusType: 'success' },
    { id: '4', time: 'Hôm nay', account: 'Highlands Flagship', region: 'TP. Hồ Chí Minh', status: 'MỚI', statusType: 'success' },
    { id: '5', time: 'Hôm nay', account: 'KFC VIỆT NAM', region: 'TP. Hồ Chí Minh', status: 'MỚI', statusType: 'success' },
  ];

  const fraudAlerts = [
    { id: 'TXN: #OP8842', title: 'Giao dịch QR vượt ngưỡng...', amount: '12.000.000 VND', merchant: 'Landmark 81', time: '5m ago' },
    { id: 'TXN: #OP8912', title: 'Giao dịch quá lớn', amount: '42.500.000 VND', merchant: 'KFC Lê Văn Lương', time: '12m ago' },
    { id: 'TXN: #OP9021', title: 'Giao dịch bất thường', amount: '4.500.000 VND', merchant: 'Highlands Coffee', time: '1h ago' },
  ];

  const branchSLAs = [
    { name: 'CN Hồ Chí Minh', total: 100, pending: 15, variant: 'error' as const },
    { name: 'CN Hà Nội', total: 100, pending: 24, variant: 'error' as const },
    { name: 'CN Đà Nẵng', total: 100, pending: 12, variant: 'warning' as const },
  ];

  const apiStatus = [
    { name: 'Core Banking GW', latency: '12ms', status: 'online' },
    { name: 'NAPAS Switching', latency: '45ms', status: 'online' },
    { name: 'Visa/Master Host', latency: '128ms', status: 'online' },
    { name: 'QR Merchant Notify', latency: 'Timeout', status: 'offline' },
  ];

  return (
    <div className="mms-dashboard">
      <aside className="dashboard-sidebar">
        <div className="sidebar-logo">
          <div className="logo-box">U</div>
          <span className="logo-text">unipay</span>
        </div>
        
        <nav className="sidebar-nav">
          {[
            { id: 'overview', label: 'Tổng quan', icon: <RiDashboardLine /> },
            { id: 'transactions', label: 'Quản lý giao dịch', icon: <RiExchangeLine />, hasSub: true },
            { id: 'sales', label: 'Quản lý bán hàng', icon: <RiShoppingBag3Line />, hasSub: true },
            { id: 'customers', label: 'Quản lý khách hàng', icon: <RiUser3Line />, hasSub: true },
            { id: 'products', label: 'Quản lý sản phẩm', icon: <RiBankCardLine /> },
            { id: 'inventory', label: 'Quản lý kho', icon: <RiDatabase2Line /> },
            { id: 'e-invoice', label: 'Hóa đơn điện tử', icon: <RiFileTextLine /> },
          ].map((item) => (
            <div 
              key={item.id}
              className={cn("nav-item", activeNav === item.id && "active")} 
              onClick={() => setActiveNav(item.id)}
            >
              {item.icon} {item.label}
              {item.hasSub && <RiArrowDownSLine style={{ marginLeft: 'auto', fontSize: 14 }} />}
            </div>
          ))}
          <div className="nav-divider" />
          <div className="nav-item">
            <RiHistoryLine /> Quản lý giao dịch
          </div>
          <div className="nav-item">
            <RiSettings4Line /> Cài đặt hệ thống
          </div>
        </nav>

        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="user-avatar">JW</div>
            <div className="user-info">
              <span className="user-name">John Woker</span>
              <span className="user-role">HO Management</span>
            </div>
            <RiArrowUpSLine style={{ marginLeft: 'auto', opacity: 0.5 }} />
          </div>
        </div>
      </aside>

      <main className="dashboard-main">
        {/* Banner */}
        <div className="dashboard-promo-banner">
          <img src={promoBanner} alt="Marketing Banner" />
        </div>

        {/* Top Header */}
        <header className="dashboard-header">
          <div className="search-bar">
            <RiSearchLine />
            <input type="text" placeholder="Tìm kiếm nhanh..." />
          </div>
          <div className="header-right">
            <Dropdown>
              <Dropdown.Trigger>
                <div className="header-icon-btn">
                  <RiNotification3Line />
                  <div className="notif-dot" />
                </div>
              </Dropdown.Trigger>
              <Dropdown.Content width={300}>
                <div style={{ padding: 12, borderBottom: '1px solid #f1f1f1' }}>
                  <h4 style={{ margin: 0, fontSize: 14 }}>Thông báo mới nhất</h4>
                </div>
                <Dropdown.Item>Chargeback vượt ngưỡng tại chi nhánh HCM</Dropdown.Item>
                <Dropdown.Item>Báo cáo ngày 02/04 đã sẵn sàng</Dropdown.Item>
              </Dropdown.Content>
            </Dropdown>
            <div className="header-icon-btn">
              <RiSettings4Line />
            </div>
          </div>
        </header>

        {/* Page Title */}
        <div className="content-header">
          <div>
            <h1 className="content-title">TỔNG QUAN HỆ THỐNG</h1>
            <div className="content-breadcrumbs">
              <span>MMS</span>
              <div className="dot" />
              <span>Dashboard</span>
              <div className="dot" />
              <span className="active">Overview</span>
              <div style={{ marginLeft: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontSize: 12 }}>Thứ Sáu, 27/03/2026</span>
                <Badge variant="soft" color="success" size="1">Trực tuyến</Badge>
              </div>
            </div>
          </div>
          <div className="content-actions">
            <Dropdown>
              <Dropdown.Trigger>
                <Button variant="outline" leftIcon={<RiCalendarLine />} rightIcon={<RiArrowDownSLine />}>7 ngày qua</Button>
              </Dropdown.Trigger>
              <Dropdown.Content>
                <Dropdown.Item>Hôm nay</Dropdown.Item>
                <Dropdown.Item>7 ngày qua</Dropdown.Item>
                <Dropdown.Item>30 ngày qua</Dropdown.Item>
              </Dropdown.Content>
            </Dropdown>
            <Button variant="outline" leftIcon={<RiFileTextLine />}>Xuất báo cáo</Button>
          </div>
        </div>

        {/* Welcome Banner */}
        <div className="dashboard-banner">
          <div className="banner-icon">
             <RiFlashlightLine />
          </div>
          <div className="banner-content">
            <h3 style={{ fontSize: 16, marginBottom: 4 }}>Chào buổi sáng, John Woker</h3>
            <p style={{ color: '#64748B', lineHeight: 1.5 }}>
              Hệ thống hiện đang hoạt động bình thường. Có <b>15 hồ sơ quá hạn</b> SLA cần xử lý. <br/>
              Doanh thu toàn quốc <b>tăng 5.2%</b> tuy nhiên cần lưu ý Chargeback Ratio đang chạm ngưỡng <b>0.25%</b> và <b>4,450 thiết bị POS</b> đang trong trạng thái ngủ đông.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="metrics-grid">
          {stats.map((stat, i) => (
            <MetricCard 
              key={i}
              label={stat.label}
              value={stat.value}
              icon={stat.icon}
              trend={stat.trend as 'up' | 'down'}
              change={stat.change}
              color={i === 3 ? 'error' : 'primary'}
              description={stat.description}
              linkText={stat.linkText}
              onLinkClick={() => console.log('Navigate to detail')}
            />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="dashboard-content-grid">
          {/* Left Column */}
          <section style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <Card 
              title="Hồ sơ mới chờ phân bổ" 
              headerExtra={<Badge color="error" variant="soft">24 hồ sơ</Badge>}
              padding="lg"
            >
              <Table variant="surface" radius="large">
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeaderCell>Thời gian</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Chủ tài khoản</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Khu vực</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Trạng thái</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Thao tác</Table.ColumnHeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {profiles.map((p) => (
                    <Table.Row key={p.id}>
                      <Table.Cell>{p.time}</Table.Cell>
                      <Table.Cell><b>{p.account}</b></Table.Cell>
                      <Table.Cell><Badge variant="surface" color="gray" size="1" radius="small">{p.region}</Badge></Table.Cell>
                      <Table.Cell>
                        <Badge 
                          variant="surface" 
                          color={p.statusType as any}
                          size="1"
                          radius="full"
                        >
                          {p.status}
                        </Badge>
                      </Table.Cell>
                      <Table.Cell>
                        <Button variant="ghost" size="1" color="brand">Xem chi tiết</Button>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </Card>

            <div className="status-grid">
              <Card title="Hiệu suất theo loại thẻ">
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
                  <SegmentedControl 
                    size="sm"
                    options={[
                      { label: 'DOANH THU', value: 'revenue' },
                      { label: 'GIAO DỊCH', value: 'volume' }
                    ]} 
                    value={cardStatsView} 
                    onChange={(v: any) => setCardStatsView(v)} 
                  />
                </div>
                <div className="dashboard-chart-wrapper">
                  <PieChart 
                    data={activeChartData}
                    donut
                    size={280}
                    title={cardStatsView === 'revenue' ? 'tỷ' : 'Giao dịch'}
                    subtitle={cardStatsView === 'revenue' ? activeChartData[0].label : undefined}
                  />
                </div>
              </Card>

              <Card title="Phân phối phương thức">
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
                  <SegmentedControl 
                    size="sm"
                    options={[
                      { label: 'DOANH THU', value: 'revenue' },
                      { label: 'GIAO DỊCH', value: 'volume' }
                    ]} 
                    value={cardStatsView} 
                    onChange={(v: any) => setCardStatsView(v)} 
                  />
                </div>
                <div className="dashboard-chart-wrapper">
                  <PieChart 
                    data={cardStatsView === 'revenue' ? [
                      { label: 'QR Thanh toán', value: 11200, color: 'var(--brand-500)' },
                      { label: 'Thẻ vật lý', value: 4000, color: 'var(--brand-200)' }
                    ] : [
                      { label: 'QR Thanh toán', value: 8900, color: 'var(--brand-500)' },
                      { label: 'Thẻ vật lý', value: 6300, color: 'var(--brand-200)' }
                    ]}
                    donut
                    size={280}
                    title={cardStatsView === 'revenue' ? 'tỷ' : 'Giao dịch'}
                  />
                </div>
              </Card>
            </div>
          </section>

          {/* Right Column */}
          <aside style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <Card title="Cảnh báo hệ thống" headerExtra={<Badge variant="surface" color="gray" radius="small">CHARGEBACK: 0.25%</Badge>}>
              <div style={{ marginBottom: 16 }}>
                <SegmentedControl 
                  fullWidth
                  options={[
                    { label: 'Gian lận', value: 'fraud' },
                    { label: 'Đối soát', value: 'settle' }
                  ]}
                  value={fraudView}
                  onChange={(v: any) => setFraudView(v)}
                />
              </div>
              
              {fraudView === 'fraud' && (
                <div className="fraud-list">
                  {fraudAlerts.map((alert, i) => (
                    <div key={i} className="fraud-item">
                      <div className="fraud-item-header">
                        <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--gray-9)' }}>{alert.id}</span>
                        <span style={{ fontSize: 11, color: 'var(--gray-9)' }}>{alert.time}</span>
                      </div>
                      <div className="fraud-item-title" style={{ color: 'var(--red-11)', marginBottom: 4 }}>{alert.title}</div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: 13, fontWeight: 600 }}>{alert.amount}</span>
                        <Button variant="ghost" size="1" color="brand">Xem chi tiết</Button>
                      </div>
                      <div style={{ fontSize: 12, color: 'var(--gray-11)', marginTop: 4 }}>
                        Merchant: <b>{alert.merchant}</b>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {fraudView === 'settle' && (
                <div style={{ padding: '24px 0', textAlign: 'center', color: 'var(--gray-11)', fontSize: 13 }}>
                  Không có cảnh báo đối soát mới
                </div>
              )}
            </Card>

            <Card title="SLA Theo Chi nhánh">
              <div className="sla-list" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {branchSLAs.map((sla, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: 14, fontWeight: 600 }}>{sla.name}</span>
                      <Button variant="outline" size="1" color="brand" leftIcon={<RiNotification3Line />}>Nhắc nhở</Button>
                    </div>
                    <Progress value={sla.pending} max={100} variant={sla.variant} size="sm" />
                    <span style={{ fontSize: 12, color: 'var(--gray-11)' }}>
                      <b>{sla.pending}%</b> hồ sơ đang chờ xử lý
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            <Card title="Trạng thái API">
              <div className="api-status-list">
                {apiStatus.map((api, i) => (
                  <div key={i} className="api-item">
                    <div className="api-info">
                      <div className={cn("status-dot", api.status)} />
                      <span className="api-name">{api.name}</span>
                    </div>
                    <span className={cn("api-time", api.latency === 'Timeout' && "slow")}>
                      {api.latency}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default DashboardExample;
