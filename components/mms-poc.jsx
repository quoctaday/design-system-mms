'use client';

import React, { useState } from 'react';

const MMSPOC = () => {
  const [persona, setPersona] = useState('director');
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [selectedMerchant, setSelectedMerchant] = useState(null);

  // Persona configurations
  const personas = {
    director: {
      label: 'Director',
      density: 'relaxed',
      navState: 'expanded',
      shell: 'DashboardShell',
      padding: 'p-5',
      gap: 'gap-6',
    },
    accountant: {
      label: 'Accountant',
      density: 'dense',
      navState: 'expanded',
      shell: 'DataTableShell',
      padding: 'p-3',
      gap: 'gap-4',
    },
    approver: {
      label: 'Approver',
      density: 'dense',
      navState: 'collapsed',
      shell: 'WorkbenchShell',
      padding: 'p-3',
      gap: 'gap-4',
    },
  };

  const currentPersona = personas[persona];
  const navCollapsed = currentPersona.navState === 'collapsed';

  // Module structure
  const modules = [
    { group: 'Operations', items: ['Merchants', 'Transactions', 'Services', 'Branches'] },
    { group: 'Logistics', items: ['Inventory', 'Products'] },
    { group: 'Finance', items: ['Reports', 'Reconciliation', 'MDR Pricing'] },
    { group: 'System', items: ['Admin Users', 'Data Source', 'Bank Data', 'Risk Control'] },
  ];

  // Mock data
  const metrics = [
    { label: 'Total Revenue', value: '$2.4M', trend: '+12%', color: 'emerald' },
    { label: 'New Merchants', value: '147', trend: '+8%', color: 'blue' },
    { label: 'Errors', value: '23', trend: '-5%', color: 'red' },
  ];

  const merchants = [
    { id: 1, name: 'Merchant A', status: 'Active', revenue: '$45,230', doc: 'Doc A' },
    { id: 2, name: 'Merchant B', status: 'Pending', revenue: '$32,150', doc: 'Doc B' },
    { id: 3, name: 'Merchant C', status: 'Flagged', revenue: '$58,920', doc: 'Doc C' },
    { id: 4, name: 'Merchant D', status: 'Active', revenue: '$71,340', doc: 'Doc D' },
    { id: 5, name: 'Merchant E', status: 'Pending', revenue: '$28,450', doc: 'Doc E' },
  ];

  const chartData = [
    { month: 'Jan', value: 65 },
    { month: 'Feb', value: 78 },
    { month: 'Mar', value: 54 },
    { month: 'Apr', value: 92 },
    { month: 'May', value: 88 },
    { month: 'Jun', value: 104 },
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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    ChevronRight: () => (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="9 18 15 12 9 6" />
      </svg>
    ),
    TrendingUp: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 17" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    BarChart: () => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="17" x2="12" y2="3" />
        <line x1="19" y1="8" x2="19" y2="17" />
        <line x1="5" y1="13" x2="5" y2="17" />
      </svg>
    ),
    AlertCircle: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    Check: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    X: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    ),
  };

  // Sidebar Navigation
  const Sidebar = () => (
    <nav
      className={`border-r border-slate-200 bg-white transition-all duration-300 ${
        navCollapsed ? 'w-16' : 'w-56'
      } h-screen flex flex-col`}
    >
      <div className={`${currentPersona.padding} border-b border-slate-200 flex items-center justify-between`}>
        <div className={`font-bold text-slate-900 ${navCollapsed ? 'hidden' : 'block'}`}>MMS</div>
        <button
          onClick={() => setSidebarExpanded(!sidebarExpanded)}
          className="p-1 hover:bg-slate-100 rounded-lg text-slate-600"
        >
          <Icons.Menu />
        </button>
      </div>

      <div className={`flex-1 overflow-y-auto ${currentPersona.padding}`}>
        {modules.map((group, idx) => (
          <div key={idx} className={`${idx > 0 ? currentPersona.gap : ''}`}>
            <div className={`text-xs font-semibold text-slate-500 uppercase tracking-wider ${currentPersona.padding}`}>
              {navCollapsed ? group.group.slice(0, 3) : group.group}
            </div>
            <div className="space-y-1">
              {group.items.map((item, i) => (
                <div
                  key={i}
                  className="p-2 rounded-lg hover:bg-slate-100 text-slate-700 text-sm cursor-pointer transition-colors"
                  title={item}
                >
                  {navCollapsed ? item.slice(0, 2) : item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );

  // Metric Card
  const MetricCard = ({ label, value, trend, color }) => {
    const colorMap = {
      emerald: 'border-emerald-200 bg-emerald-50 text-emerald-900',
      blue: 'border-blue-200 bg-blue-50 text-blue-900',
      red: 'border-red-200 bg-red-50 text-red-900',
    };
    return (
      <div className={`border rounded-lg ${colorMap[color]} ${currentPersona.padding}`}>
        <div className="text-sm font-medium opacity-75">{label}</div>
        <div className="text-3xl font-bold mt-2">{value}</div>
        <div className="text-xs mt-2 flex items-center gap-1 opacity-75">
          <Icons.TrendingUp /> {trend}
        </div>
      </div>
    );
  };

  // Bar Chart Mock
  const BarChart = () => {
    const maxValue = Math.max(...chartData.map((d) => d.value));
    return (
      <div className={`border border-slate-200 rounded-lg bg-white ${currentPersona.padding}`}>
        <h3 className="font-semibold text-slate-900 mb-4">Revenue Trend</h3>
        <div className="flex items-end justify-between h-32 gap-2">
          {chartData.map((d, i) => (
            <div key={i} className="flex-1 flex flex-col items-center">
              <div className="w-full bg-blue-500 rounded-t-sm" style={{ height: `${(d.value / maxValue) * 120}px` }} />
              <div className="text-xs text-slate-600 mt-2">{d.month}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Dashboard Shell (Director)
  const DashboardShell = () => (
    <div className={`flex-1 overflow-auto bg-slate-50 ${currentPersona.padding}`}>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">Dashboard</h1>
        <div className={`grid grid-cols-3 ${currentPersona.gap}`}>
          {metrics.map((m, i) => (
            <MetricCard key={i} {...m} />
          ))}
        </div>
        <div className={`mt-${currentPersona.gap === 'gap-6' ? '6' : '4'}`}>
          <BarChart />
        </div>
      </div>
    </div>
  );

  // Data Table Shell (Accountant)
  const DataTableShell = () => (
    <div className={`flex-1 overflow-auto bg-slate-50 ${currentPersona.padding}`}>
      <h1 className="text-2xl font-bold text-slate-900 mb-4">Transactions</h1>
      <div className="border border-slate-200 rounded-lg bg-white overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="text-left p-3 font-semibold text-slate-900">Merchant</th>
              <th className="text-left p-3 font-semibold text-slate-900">Status</th>
              <th className="text-right p-3 font-semibold text-slate-900">Revenue</th>
            </tr>
          </thead>
          <tbody>
            {merchants.map((m, i) => (
              <tr key={i} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <td className="p-3 text-slate-900 font-medium">{m.name}</td>
                <td className="p-3">
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-md ${
                      m.status === 'Active'
                        ? 'bg-emerald-100 text-emerald-800'
                        : m.status === 'Pending'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {m.status}
                  </span>
                </td>
                <td className="p-3 text-right font-mono text-slate-900">{m.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  // Workbench Shell (Approver)
  const WorkbenchShell = () => (
    <div className="flex-1 flex flex-col overflow-hidden bg-slate-50">
      {/* Risk Alert Banner */}
      <div className="bg-red-50 border-b border-red-200 px-4 py-3 flex items-start gap-3">
        <Icons.AlertCircle />
        <div>
          <div className="font-semibold text-red-900">AI Risk Alert</div>
          <div className="text-sm text-red-800">Document manipulation detected. Review before approval.</div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left: Merchant Queue */}
        <div className={`w-80 border-r border-slate-200 bg-white overflow-y-auto`}>
          <div className={`border-b border-slate-200 ${currentPersona.padding} font-semibold text-slate-900`}>
            Queue ({merchants.length})
          </div>
          <div className="space-y-0">
            {merchants.map((m) => (
              <div
                key={m.id}
                onClick={() => setSelectedMerchant(m)}
                className={`border-b border-slate-200 p-3 cursor-pointer transition-colors ${
                  selectedMerchant?.id === m.id ? 'bg-blue-50' : 'hover:bg-slate-50'
                }`}
              >
                <div className="font-medium text-slate-900 text-sm">{m.name}</div>
                <div className="text-xs text-slate-600 mt-1">{m.doc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Document Workspace */}
        <div className={`flex-1 flex flex-col ${currentPersona.padding}`}>
          {selectedMerchant ? (
            <>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-slate-900">{selectedMerchant.name}</h2>
                <span className="text-xs text-slate-600">{selectedMerchant.doc}</span>
              </div>
              <div className="flex-1 border border-slate-200 rounded-lg bg-white p-4 mb-4 text-slate-600">
                <p className="text-sm">Document Preview: {selectedMerchant.doc}</p>
                <p className="text-xs text-slate-500 mt-2">Mock document content would appear here.</p>
              </div>
              <div className="sticky bottom-0 flex gap-3 bg-white border-t border-slate-200 pt-3">
                <button className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 text-white rounded-lg py-2 hover:bg-emerald-700 transition-colors font-medium text-sm">
                  <Icons.Check /> Approve
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-red-600 text-white rounded-lg py-2 hover:bg-red-700 transition-colors font-medium text-sm">
                  <Icons.X /> Reject
                </button>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-slate-500">Select a merchant to review</div>
          )}
        </div>
      </div>
    </div>
  );

  // DevTool Panel
  const DevTool = () => {
    const state = {
      persona,
      density: currentPersona.density,
      navState: currentPersona.navState,
      shell: currentPersona.shell,
      sidebarExpanded,
      selectedMerchant: selectedMerchant?.name || null,
    };

    return (
      <div className="fixed top-4 right-4 w-80 max-h-96 bg-slate-900 text-slate-100 rounded-xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col z-50">
        <div className="border-b border-slate-700 p-3 flex items-center justify-between bg-slate-800">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Icons.Code /> DevTool
          </div>
          <button
            onClick={() => {}}
            className="text-slate-400 hover:text-slate-200 transition-colors"
          />
        </div>

        <div className="flex-1 overflow-y-auto p-3">
          <div className="text-xs font-mono space-y-2">
            <div className="text-slate-400">
              <span className="text-slate-300">Persona:</span>
              <span className="text-emerald-400 ml-2">{persona}</span>
            </div>
            <div className="text-slate-400">
              <span className="text-slate-300">Density:</span>
              <span className="text-blue-400 ml-2">{currentPersona.density}</span>
            </div>
            <div className="text-slate-400">
              <span className="text-slate-300">NavState:</span>
              <span className="text-amber-400 ml-2">{currentPersona.navState}</span>
            </div>
            <div className="text-slate-400">
              <span className="text-slate-300">Shell:</span>
              <span className="text-purple-400 ml-2">{currentPersona.shell}</span>
            </div>
            <div className="text-slate-400 mt-3 pt-3 border-t border-slate-700">
              <span className="text-slate-300">Selected:</span>
              <span className="text-cyan-400 ml-2">{state.selectedMerchant || 'none'}</span>
            </div>
          </div>
        </div>

        <div className={`border-t border-slate-700 p-3 grid grid-cols-3 gap-2 bg-slate-800`}>
          {Object.entries(personas).map(([key, config]) => (
            <button
              key={key}
              onClick={() => setPersona(key)}
              className={`py-2 px-3 rounded-lg text-xs font-semibold transition-colors ${
                persona === key
                  ? 'bg-blue-600 text-white'
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
    <div className="flex h-screen bg-slate-50 font-sans">
      <Sidebar />
      {persona === 'director' && <DashboardShell />}
      {persona === 'accountant' && <DataTableShell />}
      {persona === 'approver' && <WorkbenchShell />}
      <DevTool />
    </div>
  );
};

export default MMSPOC;
