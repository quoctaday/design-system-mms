import React, { useState, useEffect } from 'react';
import { 
  RiArrowRightUpLine, 
  RiArrowRightDownLine,
  RiDashboardLine,
  RiPulseLine,
  RiSignalTowerLine,
  RiHistoryLine
} from 'react-icons/ri';
import { cn } from '../../lib/utils';
import { 
  Badge, 
  Table, 
  Progress, 
  Card, 
  Timeline,
  Breadcrumbs,
  ThemeToggle,
  Sidebar,
} from '../../components/ui';
import './OperationCenter.css';

interface OperationCenterProps {
  onPageChange: (page: string) => void;
}

const nodeItems = [
  { name: 'Gateway 01', type: 'PROD', status: 'healthy', latency: 12 },
  { name: 'Gateway 02', type: 'PROD', status: 'healthy', latency: 15 },
  { name: 'NAPAS Node', type: 'EXTERNAL', status: 'warning', latency: 85 },
  { name: 'VISA/MC Host', type: 'EXTERNAL', status: 'healthy', latency: 42 },
  { name: 'Auth Server', type: 'CORE', status: 'healthy', latency: 8 },
  { name: 'Database primary', type: 'CORE', status: 'healthy', latency: 2 },
  { name: 'QR Notify', type: 'EDGE', status: 'failed', latency: 0 },
  { name: 'SMS Provider', type: 'EXTERNAL', status: 'healthy', latency: 120 },
];

const OperationCenter: React.FC<OperationCenterProps> = ({ onPageChange }) => {
  const [metrics, setMetrics] = useState({
    throughput: 450,
    errorRate: 0.12,
    activeTrx: 1240,
    latencyAvg: 42
  });

  const incidents = [
    { id: 'INC-88A', title: 'Slow response from OCB Gateway', severity: 'critical', time: '10:24:05', status: 'Investigating' },
    { id: 'INC-88B', title: 'NAPAS latency alert (>100ms)', severity: 'warning', time: '10:22:12', status: 'In Progress' },
    { id: 'INC-88C', title: 'Card processing partial success', severity: 'warning', time: '10:15:45', status: 'Resolved' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setMetrics(prev => ({
        throughput: prev.throughput + (Math.floor(Math.random() * 21) - 10),
        errorRate: Math.max(0, prev.errorRate + (Math.random() * 0.05 - 0.025)),
        activeTrx: prev.activeTrx + (Math.floor(Math.random() * 11) - 5),
        latencyAvg: Math.max(5, prev.latencyAvg + (Math.floor(Math.random() * 7) - 3))
      }));
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mms-operation-center">
      <Sidebar 
        onLogoClick={() => onPageChange('intro')}
        footer={
          <div className="user-profile">
            <div className="user-avatar">JW</div>
            <div className="user-info">
              <div className="user-name">John Woker</div>
              <div className="user-role">Admin</div>
            </div>
          </div>
        }
      >
        <div className="oc-nav">
          <div className="nav-item active" onClick={() => onPageChange('operation-center')}>
            <RiDashboardLine /> <span>Monitoring</span>
          </div>
          <div className="nav-item" onClick={() => onPageChange('dashboard')}>
            <RiDashboardLine /> <span>Dashboard</span>
          </div>
          <div className="nav-divider" />
          <div className="nav-item">
            <RiPulseLine /> <span>Logs</span>
          </div>
          <div className="nav-item">
            <RiSignalTowerLine /> <span>Nodes</span>
          </div>
          <div className="nav-item">
            <RiHistoryLine /> <span>History</span>
          </div>
        </div>
      </Sidebar>

      <div className="oc-main animate-fade-in-up">
        <Breadcrumbs 
          items={[
            { id: 'home', label: 'Hệ thống' },
            { id: 'oc', label: 'Operation Center', active: true }
          ]} 
        />
        <header className="oc-header" style={{ marginTop: 12 }}>
          <div className="oc-title-group">
            <h1>MMS OPERATION CENTER</h1>
            <div className="oc-status-badge">
              <div className="oc-pulse-dot" />
              SYSTEM STATUS: NOMINAL (UPTIME: 99.98%)
            </div>
          </div>
          <div className="oc-header-actions" style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <ThemeToggle />
            <Badge variant="surface" color="gray">REGION: ASIA/SE</Badge>
            <Badge variant="surface" color="brand">ENV: PRODUCTION</Badge>
          </div>
        </header>

        <div className="oc-grid">
          <div className="oc-monitor-card">
            <div className="oc-monitor-label">THROUGHPUT (TPS)</div>
            <div className="oc-monitor-value">{metrics.throughput}</div>
            <div className="oc-monitor-trend trend-up">
              <RiArrowRightUpLine /> +1.2%
            </div>
            <Progress value={75} variant="success" size="sm" />
          </div>

          <div className="oc-monitor-card">
            <div className="oc-monitor-label">ERROR RATE (%)</div>
            <div className="oc-monitor-value" style={{ color: metrics.errorRate > 0.5 ? 'var(--red-9)' : 'inherit' }}>
              {metrics.errorRate.toFixed(2)}%
            </div>
            <div className={cn("oc-monitor-trend", metrics.errorRate > 0.5 ? "trend-up" : "trend-down")}>
              {metrics.errorRate > 0.5 ? <RiArrowRightUpLine /> : <RiArrowRightDownLine />} 
              {metrics.errorRate > 0.5 ? "ABNORMAL" : "OPTIMAL"}
            </div>
            <Progress value={Math.min(100, metrics.errorRate * 20)} variant={metrics.errorRate > 0.5 ? "error" : "success"} size="sm" />
          </div>

          <div className="oc-monitor-card">
            <div className="oc-monitor-label">ACTIVE TRANSACTIONS</div>
            <div className="oc-monitor-value">{metrics.activeTrx}</div>
            <div className="oc-monitor-trend trend-up">
              <RiArrowRightUpLine /> 42 new / s
            </div>
            <Progress value={60} variant="brand" size="sm" />
          </div>

          <div className="oc-monitor-card">
            <div className="oc-monitor-label">AVG LATENCY (MS)</div>
            <div className="oc-monitor-value">{metrics.latencyAvg}ms</div>
            <div className="oc-monitor-trend trend-down">
              <RiArrowRightDownLine /> -5ms
            </div>
            <Progress value={Math.min(100, metrics.latencyAvg * 0.5)} variant="warning" size="sm" />
          </div>
        </div>

        <div className="oc-layout-cols">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <Card title="Node Status Matrix" headerExtra={<span style={{ fontSize: 12, opacity: 0.6 }}>8 active instances</span>}>
              <div className="node-grid">
                {nodeItems.map((node, i) => (
                  <div key={i} className={cn("node-item", node.status === 'failed' && "check-failed")}>
                    <div className="node-item-header">
                      <span className="node-name">{node.name}</span>
                      <div className={cn("status-dot", node.status)} />
                    </div>
                    <div className="node-latency">
                      {node.status === 'failed' ? 'Offline' : `${node.latency}ms`}
                    </div>
                    <Progress value={node.status === 'failed' ? 0 : 100} variant={node.status === 'healthy' ? 'success' : 'warning'} size="sm" />
                  </div>
                ))}
              </div>
            </Card>

            <Card title="Open Incidents" headerExtra={<Badge color="error">Critical Alert</Badge>}>
              <Table variant="surface">
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Severity</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Time</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Assignee</Table.ColumnHeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {incidents.map((incident, i) => (
                    <Table.Row key={i} className={incident.severity === 'critical' ? 'incident-row-critical' : 'incident-row-warning'}>
                      <Table.Cell><b>{incident.id}</b></Table.Cell>
                      <Table.Cell>{incident.title}</Table.Cell>
                      <Table.Cell>
                        <Badge color={incident.severity === 'critical' ? 'error' : 'warning'} size="1" radius="small">
                          {incident.severity.toUpperCase()}
                        </Badge>
                      </Table.Cell>
                      <Table.Cell>{incident.time}</Table.Cell>
                      <Table.Cell>
                        <Badge variant="soft" color="gray" size="1">Ops Team A</Badge>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </Card>
          </div>

          <aside style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <Card title="System Events History">
              <Timeline 
                items={[
                  { id: 'ev1', status: 'completed', label: 'Primary switch over', description: 'Auto-switched to Node 02', timestamp: '10:24:05' },
                  { id: 'ev2', status: 'error', label: 'Core DB Threshold', description: 'Disk I/O latency > 200ms', timestamp: '10:15:30' },
                  { id: 'ev3', status: 'completed', label: 'Security Patch applied', description: 'Vulnerability #CVE-424 fix', timestamp: '09:42:00' },
                  { id: 'ev4', status: 'completed', label: 'Backup job finished', description: 'Volume snapshot #S-8812', timestamp: '08:00:00' },
                ]}
              />
            </Card>

            <Card title="Deploy Info">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
                  <span style={{ color: 'var(--content-subtle)' }}>Last build</span>
                  <span style={{ fontWeight: 600, color: 'var(--content-strong)' }}>v2.4.12-release</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
                  <span style={{ color: 'var(--content-subtle)' }}>Status</span>
                  <Badge color="success" size="1">HEALTHY</Badge>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
                  <span style={{ color: 'var(--content-subtle)' }}>Resources</span>
                  <span style={{ color: 'var(--content-strong)' }}>CPU 42% | RAM 12G</span>
                </div>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default OperationCenter;
