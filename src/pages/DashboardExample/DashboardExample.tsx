import React, { useState, useEffect } from 'react';
import {
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
  RiErrorWarningLine,
  RiNotificationLine,
  RiSearchLine,
} from 'react-icons/ri';
import { 
  Box, 
  Flex, 
  Grid, 
  Section, 
  Heading, 
  Text, 
  Button, 
  Badge, 
  Card, 
  Progress, 
  Table, 
  MetricCard, 
  Breadcrumbs, 
  EmptyState, 
  Timeline, 
  PieChart, 
  TextField, 
  DropdownMenu, 
  SegmentedControl, 
  Tabs, 
  DatePicker, 
  ThemeToggle, 
  Sidebar,
  type DateRange
} from '../../components/ui';

import { useBrand } from '../../contexts/BrandContext';
import { cn } from '../../lib/utils';
import './DashboardExample.css';

import promoBanner from '../../assets/hero.png';

console.warn('DEBUG UI IMPORTS:', {
  Box, Flex, Grid, Section, Heading, Text, Button, Badge, Card, Progress, Table, MetricCard,
  Breadcrumbs, EmptyState, Timeline, PieChart, TextField, DropdownMenu, SegmentedControl,
  Tabs, DatePicker, ThemeToggle, Sidebar,
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
  RiErrorWarningLine,
  RiNotificationLine,
  RiSearchLine
});

interface DashboardExampleProps {
  onPageChange: (page: string) => void;
}

const DashboardExample: React.FC<DashboardExampleProps> = ({ onPageChange }) => {
  const { activeBrand, brands, switchBrand } = useBrand();

  const [activeNav, setActiveNav] = useState('overview');
  const [cardStatsView, setCardStatsView] = useState<'revenue' | 'volume'>('revenue');
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState<DateRange>({
    start: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    end: new Date(),
  });
  const [dynamicLatencies, setDynamicLatencies] = useState<string[]>(['12ms', '45ms', '128ms', 'Timeout']);
  const [dynamicSLAs, setDynamicSLAs] = useState<number[]>([15, 24, 12]);
  const [timelineItems, setTimelineItems] = useState([
    { id: '1', label: 'Giao dịch QR vượt ngưỡng', description: 'Landmark 81 - 12.000.000 VND', timestamp: 'Vừa xong', status: 'error' as const },
    { id: '2', label: 'Cập nhật hồ sơ mới', description: 'VinMart+ Quận 1 đã được phân bổ', timestamp: '2 phút trước', status: 'completed' as const },
    { id: '3', label: 'SLA Warning', description: 'CN Hà Nội - 24 hồ sơ sắp quá hạn', timestamp: '5 phút trước', status: 'active' as const },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDynamicLatencies(prev =>
        prev.map(l => {
          if (l === 'Timeout') return Math.random() > 0.8 ? '450ms' : 'Timeout';
          const val = parseInt(l);
          return isNaN(val) ? '12ms' : `${Math.max(5, val + Math.floor(Math.random() * 10) - 5)}ms`;
        })
      );
      setDynamicSLAs(prev =>
        prev.map(s => Math.min(100, Math.max(0, s + Math.floor(Math.random() * 3) - 1)))
      );
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Data
  const chartData: Record<'revenue' | 'volume', { label: string; value: number; color: string }[]> = {
    revenue: [
      { label: 'VISA', value: 15.2, color: 'var(--chart-1, #0070f3)' },
      { label: 'NAPAS', value: 9.0, color: 'var(--chart-2, #00b894)' },
      { label: 'MASTERCARD', value: 8.0, color: 'var(--chart-3, #fd79a8)' },
      { label: 'JCB', value: 7.0, color: 'var(--chart-4, #fdcb6e)' },
      { label: 'CUB', value: 6.0, color: 'var(--chart-5, #a29bfe)' },
    ],
    volume: [
      { label: 'VISA', value: 12450, color: 'var(--chart-1, #0070f3)' },
      { label: 'NAPAS', value: 18900, color: 'var(--chart-2, #00b894)' },
      { label: 'MASTERCARD', value: 7600, color: 'var(--chart-3, #fd79a8)' },
      { label: 'JCB', value: 4200, color: 'var(--chart-4, #fdcb6e)' },
      { label: 'CUB', value: 2100, color: 'var(--chart-5, #a29bfe)' },
    ],
  };
  const activeChartData = chartData[cardStatsView];

  const profiles = [
    { id: '1', time: '5 ngày trước', account: 'VinMart+ Quận 1', region: 'TP. Hồ Chí Minh', status: 'QUÁ HẠN SLA', statusType: 'error' as const },
    { id: '2', time: '1 ngày trước', account: 'The Coffee House HP', region: 'Hải Phòng', status: 'SẮP QUÁ SLA', statusType: 'warning' as const },
    { id: '3', time: 'Hôm nay', account: 'Annam Gourmet', region: 'Đà Nẵng', status: 'MỚI', statusType: 'success' as const },
  ];

  const filteredProfiles = profiles.filter(
    p =>
      p.account.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.region.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const apiStatus = [
    { name: 'Core Banking GW', latency: dynamicLatencies[0] ?? '12ms' },
    { name: 'NAPAS Switching', latency: dynamicLatencies[1] ?? '45ms' },
    { name: 'Visa/Master Host', latency: dynamicLatencies[2] ?? '128ms' },
    { name: 'QR Merchant Notify', latency: dynamicLatencies[3] ?? 'Timeout' },
  ];

  const branchSLAs: Array<{ name: string; variant: 'brand' | 'error' | 'warning' | 'success' | 'info' }> = [
    { name: 'CN Hồ Chí Minh', variant: 'error' },
    { name: 'CN Hà Nội', variant: 'error' },
    { name: 'CN Đà Nẵng', variant: 'warning' },
  ];

  const handleMoreClick = () => {
    console.log('More clicked');
  };

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
        <nav className="sidebar-nav">
          <div className={cn('nav-item', activeNav === 'overview' && 'active')} onClick={() => setActiveNav('overview')}>
            <RiDashboardLine /> <span>Dashboard</span>
          </div>
          <div className="nav-item" onClick={() => onPageChange('operation-center')}>
            <RiFlashlightLine /> <span>Operation Center</span>
          </div>
          <div className="nav-divider" />
          {[
            { id: 'transactions', label: 'Quản lý giao dịch', icon: <RiExchangeLine /> },
            { id: 'sales', label: 'Quản lý bán hàng', icon: <RiShoppingBag3Line /> },
            { id: 'customers', label: 'Quản lý khách hàng', icon: <RiUser3Line /> },
          ].map(item => (
            <div key={item.id} className={cn('nav-item', activeNav === item.id && 'active')} onClick={() => setActiveNav(item.id)}>
              {item.icon} {item.label}
            </div>
          ))}
          <div className="nav-divider" />
          <div className="nav-item"><RiSettings4Line /> Cài đặt hệ thống</div>
        </nav>
      </Sidebar>

      <main className="dashboard-main animate-fade-in-up">
        {/* Promo Banner */}
        <div className="dashboard-promo-banner">
          <img src={promoBanner} alt="" onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
        </div>

        {/* Header */}
        <Flex justify="between" align="center" mt="5" mb="5" pb="4" border="b">
          <Box width="12">
            <TextField.Root variant="surface" size="2" radius="full">
              <TextField.Slot><RiSearchLine /></TextField.Slot>
              <TextField.Input placeholder="Tìm kiếm hồ sơ..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            </TextField.Root>
          </Box>
          <Flex gap="3" align="center">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <div className="header-icon-btn"><RiNotificationLine /><div className="notif-dot" /></div>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Item>Chargeback vượt ngưỡng tại HCM</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item>Xem tất cả</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
            <ThemeToggle className="header-icon-btn" />
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <div className="header-icon-btn">
                  <div style={{ width: 12, height: 12, borderRadius: '50%', background: activeBrand.primaryColor }} />
                </div>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                {brands.map(brand => (
                  <DropdownMenu.Item key={brand.id} onClick={() => switchBrand(brand.id)}>
                    {brand.name}
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </Flex>
        </Flex>

        {/* Page Title */}
        <Section size="1">
          <Flex justify="between" align="end">
            <Box>
              <Heading size="8" weight="bold">TỔNG QUAN HỆ THỐNG</Heading>
              <Flex gap="3" align="center" mt="2">
                <Breadcrumbs items={[{ id: 'mms', label: 'MMS' }, { id: 'db', label: 'Dashboard', active: true }]} />
                <Badge variant="soft" color="success" size="1">Live</Badge>
              </Flex>
            </Box>
            <DatePicker mode="range" rangeValue={dateRange} onRangeChange={setDateRange} />
          </Flex>
        </Section>

        {/* KPI Metrics */}
        <Grid columns="4" gap="6">
          <MetricCard label="Tổng doanh thu" value="24.850.500.000" icon={<RiBankCardLine />} trend="up" change="+5.2%" onMoreClick={handleMoreClick} linkText="Chi tiết" />
          <MetricCard label="Lợi nhuận MDR" value="1.250.000.000" icon={<RiPushpinLine />} trend="up" change="+2.1%" onMoreClick={handleMoreClick} linkText="Báo cáo" />
          <MetricCard label="Khách hàng" value="12.450" icon={<RiUser3Line />} trend="up" change="+4.2%" onMoreClick={handleMoreClick} />
          <MetricCard label="Chênh lệch" value="0.15%" icon={<RiErrorWarningLine />} trend="down" change="RỦI RO" variant="error" onMoreClick={handleMoreClick} />
        </Grid>

        {/* Main Content */}
        <Grid columns="12" gap="6">
          <Box gridColumn="8">
            <Flex direction="column" gap="6">
              <Card title="Hồ sơ mới chờ phân bổ">
                <Table variant="surface">
                  <Table.Header>
                    <Table.Row>
                      <Table.ColumnHeaderCell>Thời gian</Table.ColumnHeaderCell>
                      <Table.ColumnHeaderCell>Chủ tài khoản</Table.ColumnHeaderCell>
                      <Table.ColumnHeaderCell>Trạng thái</Table.ColumnHeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {filteredProfiles.map(p => (
                      <Table.Row key={p.id}>
                        <Table.Cell>{p.time}</Table.Cell>
                        <Table.Cell><Text weight="bold">{p.account}</Text></Table.Cell>
                        <Table.Cell><Badge color={p.statusType}>{p.status}</Badge></Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
              </Card>

              <Card>
                {/* FIX: Use Tabs directly, not Tabs.Root */}
                <Tabs defaultValue="distribution">
                  <Flex justify="between" align="center" mb="4">
                    <Flex align="center" gap="3">
                      <Heading size="3">Phân tích hiệu suất</Heading>
                      <SegmentedControl
                        options={[
                          { label: 'Doanh thu', value: 'revenue' },
                          { label: 'Sản lượng', value: 'volume' },
                        ]}
                        value={cardStatsView}
                        onChange={val => setCardStatsView(val as 'revenue' | 'volume')}
                        size="sm"
                      />
                    </Flex>
                    <Tabs.List size="1">
                      <Tabs.Trigger value="distribution">PHÂN PHỐI THẺ</Tabs.Trigger>
                      <Tabs.Trigger value="methods">PHƯƠNG THỨC</Tabs.Trigger>
                    </Tabs.List>
                  </Flex>
                  <Tabs.Content value="distribution">
                    <Grid columns="2" gap="6">
                      <Box>
                        <PieChart data={activeChartData} donut size={220} />
                      </Box>
                      <Box>
                        <Flex direction="column" gap="4">
                          {activeChartData.map((d, i) => (
                            <Flex key={i} justify="between" align="center">
                              <Flex align="center" gap="2">
                                <Box width="px" height="px" position="relative" style={{ borderRadius: '50%', background: d.color }} />
                                <Text size="2">{d.label}</Text>
                              </Flex>
                              <Text size="2" weight="bold">{d.value}%</Text>
                            </Flex>
                          ))}
                        </Flex>
                      </Box>
                    </Grid>
                  </Tabs.Content>
                  <Tabs.Content value="methods">
                    <EmptyState title="Dữ liệu phương thức" />
                  </Tabs.Content>
                </Tabs>
              </Card>
            </Flex>
          </Box>

          <Box gridColumn="4">
            <Flex direction="column" gap="6">
              <Card title="Trung tâm tác nghiệp">
                <Timeline items={timelineItems} />
              </Card>

              <Card title="Hiệu suất API">
                <Flex direction="column" gap="4">
                  {apiStatus.map((api, i) => (
                    <Flex key={i} justify="between" align="center">
                      <Text size="2">{api.name}</Text>
                      <Badge color={api.latency === 'Timeout' ? 'error' : 'success'}>{api.latency}</Badge>
                    </Flex>
                  ))}
                </Flex>
              </Card>

              <Card title="SLA Chi nhánh">
                <Flex direction="column" gap="5">
                  {branchSLAs.map((sla, i) => (
                    <Box key={i}>
                      <Flex justify="between" mb="2">
                        <Text size="1">{sla.name}</Text>
                        <Text size="1">{dynamicSLAs[i]}%</Text>
                      </Flex>
                      <Progress value={dynamicSLAs[i] ?? 0} variant={sla.variant} />
                    </Box>
                  ))}
                </Flex>
              </Card>
            </Flex>
          </Box>
        </Grid>
      </main>
    </div>
  );
};

export default DashboardExample;
