import React from 'react';
import { MetricCard } from '../../components/ui';
import { 
  RiSearchLine,
  RiNotification3Line,
  RiSettings4Line,
  RiCodeSSlashLine,
  RiShieldStarLine
} from 'react-icons/ri';
import './MetricsCard.css';

interface MetricsCardProps {
  onPageChange: (page: string) => void;
}

const MetricsCard: React.FC<MetricsCardProps> = ({ onPageChange }) => {
  return (
    <div className="metrics-card-page">
      <header className="page-header">
        <div className="header-left">
          <h1 className="page-title">Metrics Card</h1>
          <div className="header-breadcrumbs">
            <button className="breadcrumb-btn" onClick={() => onPageChange('dashboard')}>Dashboard</button>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Metrics Card</span>
          </div>
          <p className="page-subtitle">A standardized, airy component system for data visualization and operational KPIs.</p>
        </div>
        <div className="header-actions">
           <div className="search-bar">
            <RiSearchLine />
            <input type="text" placeholder="Search components..." />
          </div>
          <div className="header-icon-btn">
            <RiNotification3Line />
          </div>
          <div className="header-icon-btn">
            <RiSettings4Line />
          </div>
        </div>
      </header>

      {/* SECTION 0: TECHNICAL SPECS */}
      <section className="specs-section">
        <div className="section-header-row">
          <RiShieldStarLine className="section-icon" />
          <h2 className="section-title">Design System Specifications</h2>
        </div>
        <div className="specs-grid">
          <div className="spec-card">
            <h4>Google-Style Minimal</h4>
            <p>Focuses on large numerical data with integrated trend indicators and bottom-aligned sparklines.</p>
          </div>
          <div className="spec-card">
            <h4>Smart Radius</h4>
            <p>Clamped at <code>min(Master, 24px)</code> to maintain architectural stability for containers.</p>
          </div>
          <div className="spec-card">
            <h4>Dotted Sparkline</h4>
            <p>Uses a <code>stroke-dasharray</code> SVG path to represent trends without visual clutter.</p>
          </div>
          <div className="spec-card">
            <h4>Contextual Trend</h4>
            <p>Displays percentage and comparison period inline next to the main value for instant feedback.</p>
          </div>
        </div>
      </section>

      {/* SECTION 1: VISUAL SHOWCASE */}
      <section className="example-section">
        <div className="section-header-row">
          <h2 className="section-title">Linear Design Aesthetic</h2>
          <span className="section-tag">Retina Ready</span>
        </div>
        <div className="widget-grid-4">
          <MetricCard 
            design="linear"
            label="Tổng doanh thu" 
            value="24.8B" 
            trend="up" 
            change="5.2%" 
            comparisonText="vs last month"
            chartData={true}
            onMoreClick={() => {}}
          />
          <MetricCard 
            design="linear"
            label="Lợi nhuận MDR" 
            value="1.2B" 
            trend="up" 
            change="2.1%" 
            comparisonText="vs last month"
            chartData={true}
            onMoreClick={() => {}}
          />
          <MetricCard 
            design="linear"
            label="Tổng khách hàng" 
            value="12.4k" 
            trend="up" 
            change="4.2%" 
            comparisonText="vs yesterday"
            chartData={true}
            onMoreClick={() => {}}
          />
          <MetricCard 
            design="linear"
            label="Tỷ lệ chênh lệch" 
            value="1.2%" 
            trend="down" 
            change="0.5%" 
            comparisonText="vs last week"
            chartData={true}
            onMoreClick={() => {}}
          />
        </div>
      </section>

      {/* SECTION 2: MODERN STYLE (PREVIOUS) */}
      <section className="example-section">
        <div className="section-header-row">
          <h2 className="section-title">Standard Modern Style</h2>
        </div>
        <div className="widget-grid-4">
          <MetricCard 
            label="Tổng doanh thu" 
            value="24.8B" 
            trend="up" 
            change="5.2%" 
            chartData={true}
          />
          <MetricCard 
            label="Lợi nhuận MDR" 
            value="1.2B" 
            trend="up" 
            change="2.1%" 
            chartData={true}
          />
          <MetricCard 
            label="Tổng khách hàng" 
            value="12.4k" 
            trend="up" 
            change="4.2%" 
            chartData={true}
          />
          <MetricCard 
            label="Tỷ lệ chênh lệch" 
            value="1.2%" 
            trend="down" 
            change="0.5%" 
            chartData={true}
          />
        </div>
      </section>

      <div className="widget-row-split">
        <section className="example-section flex-1">
          <h2 className="section-title">Large Impact (lg)</h2>
          <div className="widget-grid-2">
            <MetricCard 
              size="lg"
              label="Hệ thống ổn định" 
              value="99.98%" 
              trend="up" 
              change="0.02%" 
              comparisonText="last 30 days"
            />
            <MetricCard 
              size="lg"
              label="Lưu lượng quốc tế" 
              value="4.2 TB" 
              trend="up" 
              change="15.4%" 
              comparisonText="vs target"
            />
          </div>
        </section>

        <section className="example-section flex-1">
          <h2 className="section-title">Small Utility (sm)</h2>
          <div className="widget-grid-2">
            <MetricCard 
              size="sm"
              label="Hỗ trợ online" 
              value="12" 
              comparisonText="Staff Online"
              chartData={false}
            />
            <MetricCard 
              size="sm"
              label="Khiếu nại mở" 
              value="3" 
              trend="up"
              change="+2"
              comparisonText="pending"
              chartData={false}
              onMoreClick={() => {}}
            />
          </div>
        </section>
      </div>

      <section className="example-section">
        <div className="section-header-row">
          <RiCodeSSlashLine className="section-icon" />
          <h2 className="section-title">Implementation</h2>
        </div>
        <div className="code-block-mock">
          <pre>
{`<MetricCard 
  size="md"
  label="Revenue"
  value="$45.2k"
  trend="up"
  change="12%"
  comparisonText="vs last month"
  chartData={true}
  onMoreClick={handleMenu}
/>`}
          </pre>
        </div>
      </section>
    </div>
  );
};

export default MetricsCard;
