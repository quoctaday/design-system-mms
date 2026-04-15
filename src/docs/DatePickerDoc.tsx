import React, { useState } from 'react';
import { DatePicker } from '../components/ui';
import { DocLayout } from '../components/docs/DocLayout';
import { AuroraBackground } from '../components/ui/AuroraBackground/AuroraBackground';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';

const DatePickerDoc: React.FC = () => {
  const [date1, setDate1] = useState<Date | null>(new Date());
  const [date2, setDate2] = useState<Date | null>(null);
  const [range1, setRange1] = useState<{start: Date | null, end: Date | null}>({ start: null, end: null });

  const toc = [
    { id: 'basic', title: 'Basic Usage' },
    { id: 'prefilled', title: 'Pre-filled & Disabled' },
    { id: 'range', title: 'Date Range Picker' },
    { id: 'sizes', title: 'Sizes & Radius' },
    { id: 'api', title: 'API Reference' }
  ];

  const datePickerProps = [
    { name: 'value', type: 'Date | null', default: 'null', description: 'Ngày được chọn hiện tại.' },
    { name: 'onChange', type: '(date: Date | null) => void', description: 'Callback khi thay đổi ngày.' },
    { name: 'mode', type: "'single' | 'range'", default: "'single'", description: 'Chế độ chọn ngày đơn hoặc khoảng ngày.' },
    { name: 'rangeValue', type: '{ start: Date | null, end: Date | null }', description: 'Khoảng ngày được chọn (cho mode range).' },
    { name: 'onRangeChange', type: '(range: { start: Date | null, end: Date | null }) => void', description: 'Callback khi thay đổi khoảng ngày.' },
    { name: 'placeholder', type: 'string', default: "'Select date'", description: 'Text hiển thị khi chưa chọn ngày.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Vô hiệu hóa component.' },
    { name: 'size', type: "'1' | '2' | '3'", default: "'2'", description: 'Kích thước của date picker.' },
    { name: 'radius', type: "'none' | '1' | '2' | '3' | '4' | '5' | '6' | 'full'", default: "'md'", description: 'Độ bo góc của date picker.' }
  ];

  return (
    <DocLayout 
      title="DatePicker" 
      description="A component that allows users to select a specific date from a visual calendar overlay."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <section id="basic" className="doc-section">
        <h2>Basic Usage</h2>
        <p>A basic date picker that triggers a popover calendar.</p>
        <CodePreview
          code={`<DatePicker 
  value={date} 
  onChange={setDate} 
  placeholder="Pick a date"
/>`}
        >
          <div className="max-w-[280px]">
            <DatePicker 
              value={date2} 
              onChange={setDate2} 
              placeholder="Pick a date"
            />
            {date2 && (
              <p className="mt-3 text-xs text-brand-alpha-60 font-medium">
                Selected: {date2.toLocaleDateString('vi-VN')}
              </p>
            )}
          </div>
        </CodePreview>
      </section>

      <section id="prefilled" className="doc-section">
        <h2>Pre-filled & Disabled</h2>
        <p>A date picker can have an initial value or be disabled to prevent user interaction.</p>
        <CodePreview
          code={`<div className="flex flex-wrap gap-6">
  <div className="w-64">
    <label className="block text-xs font-bold text-strong mb-2 uppercase tracking-wider">Default Date</label>
    <DatePicker value={date1} onChange={setDate1} />
  </div>
  
  <div className="w-64">
    <label className="block text-xs font-bold text-strong mb-2 uppercase tracking-wider">Disabled</label>
    <DatePicker value={new Date()} disabled />
  </div>
</div>`}
        >
          <div className="flex flex-wrap gap-8">
            <div className="w-full max-w-[280px]">
              <span className="block mb-2 text-xs font-bold text-strong/80 uppercase tracking-tighter">Default Date</span>
              <DatePicker 
                value={date1} 
                onChange={setDate1} 
              />
            </div>
            
            <div className="w-full max-w-[280px]">
              <span className="block mb-2 text-xs font-bold text-strong/80 uppercase tracking-tighter">Disabled</span>
              <DatePicker 
                value={new Date()} 
                disabled={true} 
              />
            </div>
          </div>
        </CodePreview>
      </section>

      <section id="range" className="doc-section">
        <h2>Date Range Picker</h2>
        <p>Using <code>mode="range"</code> to select a start and end date.</p>
        <CodePreview
          code={`<DatePicker 
  mode="range"
  rangeValue={range} 
  onRangeChange={setRange} 
  placeholder="Select date range"
/>`}
        >
          <div className="max-w-[300px]">
            <DatePicker 
              mode="range"
              rangeValue={range1} 
              onRangeChange={setRange1} 
              placeholder="Select date range"
            />
            {(range1.start || range1.end) && (
              <div className="mt-4 p-3 bg-muted/20 border border-subtle rounded-lg text-xs space-y-1">
                {range1.start && <div><span className="text-secondary">Start:</span> <span className="font-bold text-strong">{range1.start.toLocaleDateString('vi-VN')}</span></div>}
                {range1.end && <div><span className="text-secondary">End:</span> <span className="font-bold text-strong">{range1.end.toLocaleDateString('vi-VN')}</span></div>}
              </div>
            )}
          </div>
        </CodePreview>
      </section>

      <section id="sizes" className="doc-section">
        <h2>Sizes & Radius</h2>
        <p>Standardizing the DatePicker trigger to match input field aesthetics.</p>
        <CodePreview
          code={`<DatePicker size="1" radius="2" />
<DatePicker size="2" radius="4" />
<DatePicker size="3" radius="5" />`}
        >
          <div className="flex flex-col gap-6 max-w-[320px] py-2">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase font-bold text-muted tracking-tighter">Size 1 (Small) + SM Radius</span>
              <DatePicker size="1" radius="2" placeholder="Small date picker" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase font-bold text-muted tracking-tighter">Size 2 (Medium) + MD Radius</span>
              <DatePicker size="2" radius="4" placeholder="Medium date picker" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase font-bold text-muted tracking-tighter">Size 3 (Large) + LG Radius</span>
              <DatePicker size="3" radius="5" placeholder="Large date picker" />
            </div>
          </div>
        </CodePreview>
      </section>

      <section id="api" className="doc-section">
        <h2>API Reference</h2>
        <PropsTable props={datePickerProps} />
      </section>
    </DocLayout>
  );
};

export default DatePickerDoc;
