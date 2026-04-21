'use client';

import React, { useState } from 'react';

const MMSPOC = () => {
  const [persona, setPersona] = useState('director');
  const [selectedMerchant, setSelectedMerchant] = useState(null);

  // Persona configurations with proper design tokens
  const personas = {
    director: {
      label: 'Director',
      density: 'relaxed',
      navState: 'expanded',
      shell: 'DashboardShell',
      padding: 'p-6',
      gap: 'gap-6',
    },
    accountant: {
      label: 'Accountant',
      density: 'dense',
      navState: 'expanded',
      shell: 'DataTableShell',
      padding: 'p-4',
      gap: 'gap-4',
    },
    approver: {
      label: 'Approver',
      density: 'dense',
      navState: 'collapsed',
      shell: 'WorkbenchShell',
      padding: 'p-4',
      gap: 'gap-4',
    },
  };

  const currentPersona = personas[persona];
  const navCollapsed = currentPersona.navState === 'collapsed';

  // Module structure
  const modules = [
    { group: 'Operations', icon: '📦', items: ['Merchants', 'Transactions', 'Services', 'Branches'] },
    { group: 'Logistics', icon: '🚚', items: ['Inventory', 'Products'] },
    { group: 'Finance', icon: '💰', items: ['Reports', 'Reconciliation', 'MDR Pricing'] },
    { group: 'System', icon: '⚙️', items: ['Admin Users', 'Data Source', 'Bank Data', 'Risk Control'] },
  ];

  // Mock data
  const metrics = [
    { label: 'Total Revenue', value: '$2.4M', trend: '+12%', trendDirection: 'up', color: 'emerald' },
    { label: 'New Merchants', value: '147', trend: '+8%', trendDirection: 'up', color: 'blue' },
    { label: 'Error Rate', value: '2.3%', trend: '-5%', trendDirection: 'down', color: 'amber' },
  ];

  const merchants = [
    { id: 1, name: 'Acme Corp', status: 'Active', revenue: '$45,230' },
    { id: 2, name: 'Global Trade', status: 'Pending', revenue: '$32,150' },
    { id: 3, name: 'Tech Ventures', status: 'Flagged', revenue: '$58,920' },
    { id: 4, name: 'Express Logistics', status: 'Active', revenue: '$71,340' },
    { id: 5, name: 'Prime Services', status: 'Pending', revenue: '$28,450' },
  ];

  const chartData = [
    { month: 'Jan', value: 45 },
    { month: 'Feb', value: 62 },
    { month: 'Mar', value: 51 },
    { month: 'Apr', value: 78 },
    { month: 'May', value: 85 },
    { month: 'Jun', value: 92 },
  ];

  // SVG Icons (inline remixicon style)
  const Icons = {
    Menu: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    ),
    Code: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    TrendingUp: () => (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 17" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    TrendingDown: () => (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
        <polyline points="17 18 23 18 23 12" />
      </svg>
    ),
    AlertCircle: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    Check: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    X: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    ),
  };

  // Sidebar Navigation
  const Sidebar = () => (
    <nav
      className={`border-r border-slate-200 bg-white transition-all duration-300 flex flex-col ${
        navCollapsed ? 'w-20' : 'w-64'
      } h-screen overflow-y-auto`}
      style={{ minHeight: '100vh' }}
    >
      {/* Header */}
      <div className="border-b border-slate-200 px-4 py-5 flex items-center justify-between flex-shrink-0">
        <div className={`font-bold text-lg tracking-tight text-slate-900 transition-all ${navCollapsed ? 'hidden' : 'block'}`}>
          MMS
        </div>
        <button
          onClick={() => setPersona(persona)}
          className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-500 hover:text-slate-700 transition-colors"
          title="Menu"
        >
          <Icons.Menu />
        </button>
      </div>

      {/* Navigation Groups */}
      <div className="flex-1 px-3 py-4 space-y-6">
        {modules.map((group, idx) => (
          <div key={idx} className="space-y-2">
            <div className={`text-xs font-semibold text-slate-500 uppercase tracking-widest px-3 ${navCollapsed ? 'hidden' : 'block'}`}>
              {group.group}
            </div>
            <div className="space-y-1">
              {group.items.map((item, i) => (
                <div
                  key={i}
                  className="px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-700 text-sm font-medium cursor-pointer transition-all duration-200 hover:text-slate-900"
                  title={item}
                >
                  {navCollapsed ? item.slice(0, 1) : item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );

  // Premium Metric Card
  const MetricCard = ({ label, value, trend, trendDirection, color }) => {
    const colorMap = {
      emerald: {
        bg: 'bg-emerald-50',
        border: 'border-emerald-200',
        text: 'text-emerald-900',
        trend: 'text-emerald-700',
        badge: 'bg-emerald-100',
      },
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-900',
        trend: 'text-blue-700',
        badge: 'bg-blue-100',
      },
      amber: {
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        text: 'text-amber-900',
        trend: 'text-amber-700',
        badge: 'bg-amber-100',
      },
    };

    const colors = colorMap[color] || colorMap.blue;

    return (
      <div className={`border rounded-xl ${colors.bg} ${colors.border} p-6 flex flex-col`}>
        <div className="text-sm font-medium text-slate-600 mb-2">{label}</div>
        <div className="text-4xl font-bold tracking-tight mb-4">{value}</div>
        <div className={`inline-flex items-center gap-1.5 text-sm font-semibold ${colors.trend} ${colors.badge} rounded-lg px-3 py-1 w-fit`}>
          {trendDirection === 'up' ? <Icons.TrendingUp /> : <Icons.TrendingDown />}
          {trend}
        </div>
      </div>
    );
  };

  // Professional Bar Chart
  const BarChart = () => {
    const maxValue = Math.max(...chartData.map((d) => d.value));
    return (
      <div className="border border-slate-200 rounded-xl bg-white p-6">
        <h3 className="text-base font-semibold text-slate-900 mb-6">Revenue Trend (Last 6 Months)</h3>
        <div className="flex items-end justify-between h-48 gap-3">
          {chartData.map((d, i) => (
            <div key={i} className="flex-1 flex flex-col items-center">
              <div className="w-full flex items-end justify-center h-40">
                <div
                  className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg hover:from-blue-600 hover:to-blue-500 transition-all duration-200 cursor-pointer"
                  style={{ height: `${(d.value / maxValue) * 100}%` }}
                  title={`${d.month}: $${d.value}K`}
                />
              </div>
              <div className="text-xs font-medium text-slate-600 mt-3">{d.month}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Dashboard Shell (Director) - Relaxed density
  const DashboardShell = () => (
    <div className={`flex-1 overflow-auto bg-gradient-to-br from-slate-50 to-slate-100 ${currentPersona.padding}`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">Dashboard</h1>
          <p className="text-slate-600">Overview of key metrics and revenue trends</p>
        </div>

        <div className={`grid grid-cols-3 ${currentPersona.gap} mb-8`}>
          {metrics.map((m, i) => (
            <MetricCard key={i} {...m} />
          ))}
        </div>

        <div>
          <BarChart />
        </div>
      </div>
    </div>
  );

  // Data Table Shell (Accountant) - Dense layout
  const DataTableShell = () => (
    <div className={`flex-1 overflow-auto bg-gradient-to-br from-slate-50 to-slate-100 ${currentPersona.padding}`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Transactions</h1>
        </div>

        <div className="border border-slate-200 rounded-xl bg-white overflow-hidden shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left px-6 py-4 font-semibold text-slate-900">Merchant</th>
                <th className="text-left px-6 py-4 font-semibold text-slate-900">Status</th>
                <th className="text-right px-6 py-4 font-semibold text-slate-900">Revenue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {merchants.map((m, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors duration-150">
                  <td className="px-6 py-4 text-slate-900 font-semibold">{m.name}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                        m.status === 'Active'
                          ? 'bg-emerald-100 text-emerald-800'
                          : m.status === 'Pending'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-red-100 text-red-800'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full mr-2 ${
                        m.status === 'Active'
                          ? 'bg-emerald-600'
                          : m.status === 'Pending'
                            ? 'bg-amber-600'
                            : 'bg-red-600'
                      }`}></span>
                      {m.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right text-slate-900 font-mono font-semibold">{m.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  // Workbench Shell (Approver) - Split view with focus
  const WorkbenchShell = () => (
    <div className="flex-1 flex flex-col overflow-hidden bg-slate-50">
      {/* AI Risk Alert Banner */}
      <div className="bg-red-50 border-b border-red-200 px-6 py-4 flex items-start gap-4">
        <div className="text-red-600 flex-shrink-0 mt-0.5">
          <Icons.AlertCircle />
        </div>
        <div>
          <div className="font-semibold text-red-900 text-sm">AI Risk Alert</div>
          <div className="text-sm text-red-800 mt-1">Document manipulation detected in selected merchant. Review before approval.</div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left: Merchant Queue */}
        <div className="w-80 border-r border-slate-200 bg-white flex flex-col">
          <div className="border-b border-slate-200 px-6 py-4 font-semibold text-slate-900 flex-shrink-0">
            Queue ({merchants.length})
          </div>
          <div className="flex-1 overflow-y-auto divide-y divide-slate-200">
            {merchants.map((m) => (
              <div
                key={m.id}
                onClick={() => setSelectedMerchant(m)}
                className={`px-6 py-4 cursor-pointer transition-colors duration-200 ${
                  selectedMerchant?.id === m.id
                    ? 'bg-blue-50 border-l-4 border-l-blue-500'
                    : 'hover:bg-slate-50'
                }`}
              >
                <div className="font-semibold text-slate-900 text-sm">{m.name}</div>
                <div className="text-xs text-slate-600 mt-1.5">{m.revenue}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Document Workspace */}
        <div className="flex-1 flex flex-col overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
          {selectedMerchant ? (
            <>
              <div className="border-b border-slate-200 px-6 py-5 bg-white flex-shrink-0">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">{selectedMerchant.name}</h2>
                    <p className="text-sm text-slate-600 mt-1">Review and approve merchant application</p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-200 text-slate-900">
                    {selectedMerchant.status}
                  </span>
                </div>
              </div>

              <div className="flex-1 overflow-auto p-6">
                <div className="border border-slate-200 rounded-xl bg-white p-8 shadow-sm">
                  <div className="prose prose-sm max-w-none">
                    <h3 className="text-base font-semibold text-slate-900 mb-4">Merchant Document</h3>
                    <div className="bg-slate-50 rounded-lg p-6 text-slate-700 text-sm leading-relaxed">
                      <p><strong>Business:</strong> {selectedMerchant.name}</p>
                      <p className="mt-3"><strong>Annual Revenue:</strong> {selectedMerchant.revenue}</p>
                      <p className="mt-3"><strong>Status:</strong> {selectedMerchant.status}</p>
                      <p className="mt-3 text-slate-600">Review the merchant's documentation for compliance and approve or reject the application.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200 bg-white px-6 py-4 flex-shrink-0">
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg py-3 transition-colors duration-200 font-semibold text-sm">
                    <Icons.Check /> Approve
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white rounded-lg py-3 transition-colors duration-200 font-semibold text-sm">
                    <Icons.X /> Reject
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-slate-500">
              <div className="text-center">
                <div className="text-lg font-medium mb-1">No merchant selected</div>
                <div className="text-sm">Select a merchant from the queue to begin review</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // Premium DevTool Panel
  const DevTool = () => {
    const state = {
      persona,
      density: currentPersona.density,
      navState: currentPersona.navState,
      shell: currentPersona.shell,
      selectedMerchant: selectedMerchant?.name || 'none',
    };

    return (
      <div className="fixed top-6 right-6 w-96 bg-slate-900 text-slate-100 rounded-xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col z-50 backdrop-blur-sm">
        {/* Header */}
        <div className="border-b border-slate-700 px-6 py-4 bg-slate-800 flex items-center gap-2">
          <Icons.Code />
          <span className="text-sm font-semibold tracking-wide">DevTool Panel</span>
        </div>

        {/* State Display */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {Object.entries(state).map(([key, value]) => (
            <div key={key} className="text-xs font-mono space-y-1">
              <div className="text-slate-400 uppercase tracking-widest">{key}</div>
              <div className="bg-slate-800 rounded-lg px-3 py-2 text-slate-100 font-semibold">
                {String(value)}
              </div>
            </div>
          ))}
        </div>

        {/* Persona Buttons */}
        <div className="border-t border-slate-700 p-6 bg-slate-800 grid grid-cols-3 gap-2">
          {Object.entries(personas).map(([key, config]) => (
            <button
              key={key}
              onClick={() => setPersona(key)}
              className={`py-3 px-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                persona === key
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              {config.label}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-slate-50 font-sans antialiased">
      <Sidebar />
      {persona === 'director' && <DashboardShell />}
      {persona === 'accountant' && <DataTableShell />}
      {persona === 'approver' && <WorkbenchShell />}
      <DevTool />
    </div>
  );
};

export default MMSPOC;
