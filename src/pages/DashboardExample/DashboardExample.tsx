import React, { useState, useEffect } from 'react';
import { 
  RiSearchLine, 
  RiNotification3Line, 
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
  DropdownMenu,
  TextField,
  Progress,
  PieChart,
  SegmentedControl,
  MetricCard,
  Breadcrumbs,
  EmptyState,
  DatePicker,
  ThemeToggle,
  Sidebar,
  type DateRange
} from '../../components/ui';
import './DashboardExample.css';

// Use a relative path from src/assets
import promoBanner from '../../assets/hero.png';

interface DashboardExampleProps {
  onPageChange: (page: string) => void;
}

const DashboardExample: React.FC<DashboardExampleProps> = ({ onPageChange }) => {
  const [activeNav, setActiveNav] = useState('overview');
  const [cardStatsView, setCardStatsView] = useState<'revenue' | 'volume'>('revenue');
  const [fraudView, setFraudView] = useState('fraud');
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState<DateRange>({
    start: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    end: new Date()
  });

  // Real-time data states
  const [dynamicLatencies, setDynamicLatencies] = useState<string[]>(['12ms', '45ms', '128ms', 'Timeout']);
  const [dynamicSLAs, setDynamicSLAs] = useState<number[]>([15, 24, 12]);

  useEffect(() => {
    const timer = setInterval(() => {
      // Simulate API latency changes
      setDynamicLatencies(prev => prev.map(l => {
        if (l === 'Timeout') return Math.random() > 0.8 ? '450ms' : 'Timeout';
        const val = parseInt(l);
        const change = Math.floor(Math.random() * 10) - 5;
        return `${Math.max(5, val + change)}ms`;
      }));

      // Simulate SLA fluctuations
      setDynamicSLAs(prev => prev.map(s => {
        const change = Math.floor(Math.random() * 3) - 1;
        return Math.min(100, Math.max(0, s + change));
      }));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const cardRevenueData = [
    { label: 'VISA', value: 15.2, color: 'var(--brand-9)' },
    { label: 'NAPAS', value: 9.0, color: 'var(--blue-9)' },
    { label: 'MASTERCARD', value: 8.0, color: 'var(--success-9)' },
    { label: 'JCB', value: 7.0, color: 'var(--warning-9)' },
    { label: 'China Union Bank', value: 6.0, color: 'var(--gray-9)' },
  ];

  const cardVolumeData = [
    { label: 'VISA', value: 12450, color: 'var(--brand-9)' },
    { label: 'NAPAS', value: 18900, color: 'var(--blue-9)' },
    { label: 'MASTERCARD', value: 7600, color: 'var(--success-9)' },
    { label: 'JCB', value: 4200, color: 'var(--warning-9)' },
    { label: 'China Union Bank', value: 2100, color: 'var(--gray-9)' },
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

  const filteredProfiles = profiles.filter(p => 
    p.account.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.region.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
    { name: 'Core Banking GW', latency: dynamicLatencies[0], status: 'online' },
    { name: 'NAPAS Switching', latency: dynamicLatencies[1], status: 'online' },
    { name: 'Visa/Master Host', latency: dynamicLatencies[2], status: 'online' },
    { name: 'QR Merchant Notify', latency: dynamicLatencies[3], status: dynamicLatencies[3] === 'Timeout' ? 'offline' : 'online' },
  ];

  return (
    <div className="mms-dashboard">
      <Sidebar 
        onLogoClick={() => onPageChange('intro')}
        footer={
          <div className="user-profile">
            <div className="user-avatar">JW</div>
            <div className="user-info">
              <span className="user-name">John Woker</span>
              <span className="user-role">HO Management</span>
            </div>
            <RiArrowUpSLine style={{ marginLeft: 'auto', opacity: 0.5 }} />
          </div>
        }
      >
        <div className="sidebar-nav">
          <div className={cn("nav-item", activeNav === 'overview' && "active")} onClick={() => setActiveNav('overview')}>
            <RiDashboardLine /> <span>Dashboard</span>
          </div>
          <div className="nav-item" onClick={() => onPageChange('operation-center')}>
            <RiFlashlightLine /> <span>Operation Center</span>
          </div>
          <div className="nav-item" onClick={() => onPageChange('pie-chart')}>
            <RiExchangeLine /> <span>Analysis Stats</span>
          </div>
          <div className="nav-divider" />
          {[
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
        </div>
      </Sidebar>

      <main className="dashboard-main animate-fade-in-up">
        {/* Banner */}
        <div className="dashboard-promo-banner">
          <img src={promoBanner} alt="Marketing Banner" />
        </div>

        {/* Top Header */}
        <header className="dashboard-header">
          <div className="search-bar">
            <TextField.Root variant="surface" size="2" radius="full" style={{ width: '100%', background: 'transparent', border: 'none' }}>
              <TextField.Slot side="left">
                <RiSearchLine />
              </TextField.Slot>
              <TextField.Input 
                placeholder="Tìm kiếm hồ sơ, chi nhánh..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </TextField.Root>
          </div>
          <div className="header-right">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <div className="header-icon-btn">
                  <RiNotification3Line />
                  <div className="notif-dot" />
                </div>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content width={300}>
                <div style={{ padding: '8px 12px', borderBottom: '1px solid var(--border-subtle)' }}>
                  <h4 style={{ margin: 0, fontSize: 13, color: 'var(--content-subtle)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Thông báo mới nhất
                  </h4>
                </div>
                <DropdownMenu.Item>Chargeback vượt ngưỡng tại chi nhánh HCM</DropdownMenu.Item>
                <DropdownMenu.Item>Báo cáo ngày 02/04 đã sẵn sàng</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item>Xem tất cả thông báo</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
            
            <ThemeToggle className="header-icon-btn" />

            <div className="header-icon-btn">
              <RiSettings4Line />
            </div>
          </div>
        </header>

        {/* Page Title */}
        <div className="content-header">
          <div>
            <h1 className="content-title">TỔNG QUAN HỆ THỐNG</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Breadcrumbs 
                items={[
                  { id: 'mms', label: 'MMS' },
                  { id: 'dashboard', label: 'Dashboard' },
                  { id: 'overview', label: 'Overview', active: true }
                ]} 
              />
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontSize: 12, color: 'var(--gray-11)' }}>Thứ Sáu, 27/03/2026</span>
                <Badge variant="soft" color="success" size="1">Trực tuyến</Badge>
              </div>
            </div>
          </div>
          <div className="content-actions">
            <DatePicker 
              mode="range" 
              rangeValue={dateRange} 
              onRangeChange={setDateRange}
              placeholder="Chọn khoảng thời gian"
            />
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
              variant={i === 3 ? 'error' : 'primary'}
              description={stat.description}
              linkText={stat.linkText}
              onMoreClick={() => console.log('Navigate to detail')}
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
                  {filteredProfiles.length > 0 ? (
                    filteredProfiles.map((p) => (
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
                    ))
                  ) : (
                    <Table.Row>
                      <Table.Cell colSpan={5}>
                        <EmptyState 
                          icon={<RiSearchLine style={{ fontSize: 32, opacity: 0.5 }} />}
                          title="Không tìm thấy hồ sơ"
                          description={`Không có kết quả nào khớp với "${searchTerm}"`}
                        />
                      </Table.Cell>
                    </Table.Row>
                  )}
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
                      { label: 'QR Thanh toán', value: 11200, color: 'var(--brand-9)' },
                      { label: 'Thẻ vật lý', value: 4000, color: 'var(--brand-7)' }
                    ] : [
                      { label: 'QR Thanh toán', value: 8900, color: 'var(--brand-9)' },
                      { label: 'Thẻ vật lý', value: 6300, color: 'var(--brand-7)' }
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
                <EmptyState 
                  icon={<RiSearchLine style={{ fontSize: 32, opacity: 0.5 }} />}
                  title="Không có dữ liệu"
                  description="Hiện tại không có cảnh báo đối soát mới nào cần xử lý."
                />
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
                    <Progress value={dynamicSLAs[i]} max={100} variant={sla.variant} size="sm" />
                    <span style={{ fontSize: 12, color: 'var(--gray-11)' }}>
                      <b>{dynamicSLAs[i]}%</b> hồ sơ đang chờ xử lý
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
