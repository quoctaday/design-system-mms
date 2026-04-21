import React, { useState } from 'react';
import { DatePicker } from '../components/ui';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { AuroraBackground } from '../components/ui';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';

const DatePickerDoc: React.FC = () => {
  const [date1, setDate1] = useState<Date | null>(new Date());
  const [date2, setDate2] = useState<Date | null>(null);
  const [range1, setRange1] = useState<{start: Date | null, end: Date | null}>({ start: null, end: null });

  const toc = [
    { id: 'basic', title: 'Basic Usage' },
    { id: 'variants', title: 'Materiality Variants' },
    { id: 'range', title: 'Date Range Selection' },
    { id: 'contrast', title: 'High Contrast Mode' },
    { id: 'sizes', title: 'Sizes & Radius' },
    { id: 'api', title: 'API Reference' }
  ];

  const datePickerProps = [
    { name: 'value', type: 'Date | null', default: 'null', description: 'Ngày được chọn hiện tại (Single mode).' },
    { name: 'defaultValue', type: 'Date | null', description: 'Giá trị mặc định ban đầu.' },
    { name: 'onChange', type: '(date: Date | null) => void', description: 'Callback khi thay đổi ngày.' },
    { name: 'mode', type: "'single' | 'range'", default: "'single'", description: 'Chế độ chọn ngày đơn hoặc khoảng ngày.' },
    { name: 'rangeValue', type: '{ start: Date | null, end: Date | null }', description: 'Khoảng ngày được chọn (Range mode).' },
    { name: 'onRangeChange', type: '(range: DateRange) => void', description: 'Callback khi thay đổi khoảng ngày.' },
    { name: 'variant', type: "'surface' | 'classic' | 'soft'", default: "'surface'", description: 'Biến thể vật liệu theo chuẩn MMS.' },
    { name: 'highContrast', type: 'boolean', default: 'false', description: 'Tăng cường độ tương phản cho các trạng thái active.' },
    { name: 'placeholder', type: 'string', default: "'Select date'", description: 'Text hiển thị khi chưa chọn ngày.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Vô hiệu hóa tương tác.' },
    { name: 'size', type: "'1' | '2' | '3'", default: "'2'", description: 'Kích thước của linh kiện.' },
    { name: 'radius', type: "'none' | '1' | '2' | '3' | '4' | '5' | '6' | 'full'", default: "'4'", description: 'Độ bo góc theo Scale Radix.' }
  ];

  return (
    <DocLayout 
      title="DatePicker" 
      description="Linh kiện chọn ngày đỉnh cao, đạt 100% Mirror-Parity với kiến trúc Select. Tích hợp PremiumBlock để tạo ra cấu trúc phân tầng sắc sảo và tuân thủ tuyệt đối giao thức Shadow-Ring của hệ thống."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <DocSection id="basic">
        <DocHeading>Elite Architecture</DocHeading>
        <DocText>
          DatePicker được tái cấu trúc để trở thành một bản sao hoàn hảo về mặt thị giác của linh kiện Select. 
          Sử dụng Mechanical Floating Engine với <code>sideOffset: 8</code> để đảm bảo khoảng hở cao cấp và tránh xung đột với vòng nhẫn Focus.
        </DocText>
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
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="variants">
        <DocHeading>Materiality Variants</DocHeading>
        <DocText>Ba biến thể vật liệu mang lại các cảm xúc thị giác khác nhau, phù hợp cho nhiều bối cảnh giao diện.</DocText>
        <CodePreview
          code={`<div className="space-y-4">
  <DatePicker variant="surface" placeholder="Surface Variant" />
  <DatePicker variant="classic" placeholder="Classic Variant" />
  <DatePicker variant="soft" placeholder="Soft Variant" />
</div>`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-muted uppercase tracking-widest">Surface</span>
              <DatePicker variant="surface" placeholder="Surface (Flat)" />
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-muted uppercase tracking-widest">Classic</span>
              <DatePicker variant="classic" placeholder="Classic (Raised)" />
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-muted uppercase tracking-widest">Soft</span>
              <DatePicker variant="soft" placeholder="Soft (Translucent)" />
            </div>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="range">
        <DocHeading>Date Range Selection</DocHeading>
        <DocText>Chế độ chọn vùng ngày với hiệu ứng "Range Connector" mượt mà giữa các điểm mốc.</DocText>
        <CodePreview
          code={`<DatePicker 
  mode="range"
  rangeValue={range} 
  onRangeChange={setRange} 
  variant="classic"
/>`}
        >
          <div className="max-w-[320px]">
            <DatePicker 
              mode="range"
              rangeValue={range1} 
              onRangeChange={setRange1} 
              variant="classic"
            />
            {(range1.start || range1.end) && (
              <div className="mt-4 p-4 rounded-xl border border-subtle bg-surface-component/50 backdrop-blur-sm">
                 <div className="text-[10px] uppercase font-bold text-muted mb-2 tracking-widest">Selected Period</div>
                 <div className="flex items-center gap-3 text-sm">
                    <span className="font-bold text-strong">{range1.start?.toLocaleDateString('vi-VN') || '...'}</span>
                    <span className="text-muted">→</span>
                    <span className="font-bold text-strong">{range1.end?.toLocaleDateString('vi-VN') || '...'}</span>
                 </div>
              </div>
            )}
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="contrast">
        <DocHeading>High Contrast Mode</DocHeading>
        <DocText>Sử dụng <code>highContrast</code> để làm nổi bật các trạng thái được chọn, phù hợp cho các giao diện cần tính tập trung cao.</DocText>
        <CodePreview
          code={`<DatePicker highContrast variant="surface" />`}
        >
          <div className="flex gap-6 items-end">
            <div className="w-64">
              <span className="block mb-2 text-xs font-bold text-strong/80 uppercase tracking-tighter">Normal</span>
              <DatePicker variant="surface" defaultValue={new Date()} />
            </div>
            <div className="w-64">
              <span className="block mb-2 text-xs font-bold text-strong/80 uppercase tracking-tighter text-accent-9">High Contrast</span>
              <DatePicker variant="surface" defaultValue={new Date()} highContrast />
            </div>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="sizes">
        <DocHeading>Sizes & Radius</DocHeading>
        <DocText>Sử dụng hệ thống kích thước và bo góc chuẩn Radix để tạo sự đồng nhất tuyệt đối.</DocText>
        <CodePreview
          code={`<DatePicker size="1" radius="2" />
<DatePicker size="3" radius="6" />`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-muted uppercase">Size 1 + Radius 2</span>
              <DatePicker size="1" radius="2" placeholder="Small & Rounded" />
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-muted uppercase">Size 3 + Radius 6</span>
              <DatePicker size="3" radius="6" placeholder="Large & Extra Round" />
            </div>
          </div>
        </CodePreview>
      </DocSection>

      <DocSection id="api">
        <DocHeading>API Reference</DocHeading>
        <PropsTable props={datePickerProps} />
      </DocSection>
    </DocLayout>
  );
};

export default DatePickerDoc;
