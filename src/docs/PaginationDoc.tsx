import React, { useState } from 'react';
import { Pagination } from '../components/ui';
import './PaginationDoc.css';

const PaginationDoc: React.FC = () => {
  const [currentPage1, setCurrentPage1] = useState(1);
  const [currentPage2, setCurrentPage2] = useState(1);
  const [currentPage3, setCurrentPage3] = useState(1);

  return (
    <div className="pagination-doc">
      <header className="doc-header">
        <h1>Pagination</h1>
        <p className="doc-description">A set of buttons used to navigate through a series of related content.</p>
      </header>

      <section className="doc-section">
        <h2>Interactive Demo</h2>
        <p>Try switching pages to see how the ellipsis (...) logic works.</p>
        <div className="example-center">
          <Pagination 
            currentPage={currentPage1}
            totalCount={100}
            pageSize={10}
            onPageChange={setCurrentPage1}
          />
          <div className="page-indicator">Current Page: {currentPage1} / 10</div>
        </div>
      </section>

      <section className="doc-section">
        <h2>Small Range</h2>
        <p>Pagination without ellipsis when total pages are few.</p>
        <div className="example-center">
          <Pagination 
            currentPage={currentPage2}
            totalCount={40}
            pageSize={10}
            onPageChange={setCurrentPage2}
          />
        </div>
      </section>

      <section className="doc-section">
        <h2>Sizes</h2>
        <p>Available in small (size 1) and medium (size 2).</p>
        <div className="example-flex">
          <div className="example-column">
            <h4>Size 1 (Small)</h4>
            <Pagination 
              size="1"
              currentPage={1}
              totalCount={50}
              pageSize={10}
              onPageChange={() => {}}
            />
          </div>
          <div className="example-column">
            <h4>Size 2 (Medium)</h4>
            <Pagination 
              size="2"
              currentPage={1}
              totalCount={50}
              pageSize={10}
              onPageChange={() => {}}
            />
          </div>
        </div>
      </section>

      <section className="doc-section">
        <h2>Usage in Table Footers</h2>
        <p>Exactly how it appears at the bottom of the "Phiếu Nhập Kho" dashboard.</p>
        <div className="table-footer-preview">
          <div className="items-info">Hiển thị 1-10 của 90 kết quả</div>
          <Pagination 
            currentPage={currentPage3}
            totalCount={90}
            pageSize={10}
            onPageChange={setCurrentPage3}
          />
        </div>
      </section>
    </div>
  );
};

export default PaginationDoc;
