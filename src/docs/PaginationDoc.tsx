import React, { useState } from 'react';
import { Pagination } from '../components/ui';
import { DocLayout } from '../components/docs/DocLayout';
import { AuroraBackground } from '../components/ui/AuroraBackground/AuroraBackground';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';

const PaginationDoc: React.FC = () => {
  const [currentPage1, setCurrentPage1] = useState(1);
  const [currentPage2, setCurrentPage2] = useState(1);

  const toc = [
    { id: 'interactive', title: 'Interactive Demo' },
    { id: 'small-range', title: 'Small Range' },
    { id: 'sizes', title: 'Sizes' },
    { id: 'api', title: 'API Reference' }
  ];

  const paginationProps = [
    { name: 'currentPage', type: 'number', default: '1', description: 'Trang hiện tại đang được hiển thị.' },
    { name: 'totalCount', type: 'number', required: true, description: 'Tổng số lượng bản ghi.' },
    { name: 'pageSize', type: 'number', default: '10', description: 'Số lượng bản ghi trên mỗi trang.' },
    { name: 'onPageChange', type: '(page: number) => void', required: true, description: 'Callback khi thay đổi trang.' },
    { name: 'siblingCount', type: 'number', default: '1', description: 'Số lượng nút trang hiển thị bên cạnh trang hiện tại.' },
    { name: 'size', type: "'1' | '2'", default: "'2'", description: 'Kích thước của các nút phân trang.' }
  ];

  return (
    <DocLayout 
      title="Pagination" 
      description="A set of interactive buttons used to navigate through multiple pages of content."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <section id="interactive" className="doc-section">
        <h2>Interactive Demo</h2>
        <p>Try switching pages to see how the ellipsis (...) logic works dynamicly.</p>
        <CodePreview
          code={`<Pagination 
  currentPage={currentPage}
  totalCount={100}
  pageSize={10}
  onPageChange={setCurrentPage}
/>`}
        >
          <div className="flex flex-col items-center gap-6 py-4">
            <Pagination 
              currentPage={currentPage1}
              totalCount={100}
              pageSize={10}
              onPageChange={setCurrentPage1}
            />
            <div className="px-3 py-1 bg-muted/20 border border-subtle rounded-full text-xs font-medium text-secondary">
              Current Page: <span className="text-strong">{currentPage1}</span> / 10
            </div>
          </div>
        </CodePreview>
      </section>

      <section id="small-range" className="doc-section">
        <h2>Small Range</h2>
        <p>Pagination without ellipsis when total pages are few.</p>
        <CodePreview
          code={`<Pagination 
  currentPage={currentPage}
  totalCount={40}
  pageSize={10}
  onPageChange={setCurrentPage}
/>`}
        >
          <div className="flex justify-center py-2">
            <Pagination 
              currentPage={currentPage2}
              totalCount={40}
              pageSize={10}
              onPageChange={setCurrentPage2}
            />
          </div>
        </CodePreview>
      </section>

      <section id="sizes" className="doc-section">
        <h2>Sizes</h2>
        <p>Available in small (size 1) and medium (size 2) compact modes.</p>
        <CodePreview
          code={`<Pagination size="1" currentPage={1} totalCount={50} />
<Pagination size="2" currentPage={1} totalCount={50} />`}
        >
          <div className="space-y-8 py-2">
            <div className="flex items-center gap-4">
              <span className="w-24 text-[10px] uppercase font-bold text-muted tracking-tighter">Small (1)</span>
              <Pagination 
                size="1"
                currentPage={1}
                totalCount={50}
                pageSize={10}
                onPageChange={() => {}}
              />
            </div>
            <div className="flex items-center gap-4">
              <span className="w-24 text-[10px] uppercase font-bold text-muted tracking-tighter">Medium (2)</span>
              <Pagination 
                size="2"
                currentPage={1}
                totalCount={50}
                pageSize={10}
                onPageChange={() => {}}
              />
            </div>
          </div>
        </CodePreview>
      </section>

      <section id="api" className="doc-section">
        <h2>API Reference</h2>
        <PropsTable props={paginationProps} />
      </section>
    </DocLayout>
  );
};

export default PaginationDoc;

