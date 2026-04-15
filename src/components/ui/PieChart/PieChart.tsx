import React, { useState, useMemo } from 'react';
import { cn } from '../../../lib/utils';
import './PieChart.css';

interface PieData {
  label: string;
  value: number;
  color: string;
  id?: string;
}

interface PieChartProps {
  data: PieData[];
  title?: string;
  subtitle?: string;
  donut?: boolean;
  size?: number;
  innerRadius?: number; // 0.1 to 0.9
  className?: string;
}

const PieChart: React.FC<PieChartProps> = ({
  data,
  title,
  subtitle,
  donut = false,
  size = 200,
  innerRadius = 0.65,
  className
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const total = useMemo(() => data.reduce((sum, item) => sum + item.value, 0), [data]);

  const centerX = size / 2;
  const centerY = size / 2;
  const outerR = size / 2 - (hoveredIndex !== null ? 12 : 8); // Tokenized offsets
  const innerR = donut ? outerR * innerRadius : 0;

  const polarToCartesian = (x: number, y: number, r: number, angle: number) => {
    const rad = (angle - 90) * (Math.PI / 180.0);
    return {
      x: x + r * Math.cos(rad),
      y: y + r * Math.sin(rad)
    };
  };

  const getPathData = (startAngle: number, endAngle: number, r: number, ir: number) => {
    const startOuter = polarToCartesian(centerX, centerY, r, startAngle);
    const endOuter = polarToCartesian(centerX, centerY, r, endAngle);
    const startInner = polarToCartesian(centerX, centerY, ir, endAngle);
    const endInner = polarToCartesian(centerX, centerY, ir, startAngle);
    
    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
    
    return [
      'M', startOuter.x, startOuter.y,
      'A', r, r, 0, largeArcFlag, 1, endOuter.x, endOuter.y,
      'L', startInner.x, startInner.y,
      'A', ir, ir, 0, largeArcFlag, 0, endInner.x, endInner.y,
      'Z'
    ].join(' ');
  };

  const arcs = useMemo(() => {
    let currentAngle = 0;
    return data.map((item) => {
      const angle = (item.value / total) * 360;
      const arc = {
        startAngle: currentAngle,
        endAngle: currentAngle + angle,
        ...item
      };
      currentAngle += angle;
      return arc;
    });
  }, [data, total]);

  return (
    <div className={cn('mms-pie-chart-root', className)}>
      <div className="chart-view-area" style={{ width: size, height: size }}>
        <svg 
          width={size} 
          height={size} 
          viewBox={`0 0 ${size} ${size}`}
          className="mms-pie-canvas"
        >
          {arcs.map((arc, i) => (
            <path
              key={i}
              d={getPathData(
                arc.startAngle, 
                arc.endAngle, 
                hoveredIndex === i ? outerR + 4 : outerR, 
                donut ? (hoveredIndex === i ? innerR - 2 : innerR) : 0
              )}
              fill={arc.color}
              className={cn('pie-segment', hoveredIndex === i && 'is-active')}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                opacity: hoveredIndex !== null && hoveredIndex !== i ? 0.3 : 1,
                filter: hoveredIndex === i ? 'drop-shadow(0 var(--space-1) var(--space-3) var(--black-a4))' : 'none'
              }}
            />
          ))}
        </svg>
        {donut && (
          <div className="donut-center-info">
            <div className="center-value">{total.toLocaleString()}</div>
            <div className="center-label">{title || 'Tổng cộng'}</div>
            {subtitle && <div className="center-subtitle">{subtitle}</div>}
          </div>
        )}
      </div>

      <div className="chart-legend-area">
        {data.map((item, i) => (
          <div 
            key={i} 
            className={cn('legend-item', hoveredIndex === i && 'is-active')}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span className="legend-dot" style={{ backgroundColor: item.color }} />
            <div className="legend-text">
              <span className="legend-label">{item.label}</span>
              <span className="legend-value">{item.value.toLocaleString()} ({((item.value / total) * 100).toFixed(1)}%)</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChart;
