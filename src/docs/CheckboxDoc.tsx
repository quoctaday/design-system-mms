import React, { useState } from 'react';
import { Checkbox } from '../components/ui';
import './CheckboxDoc.css';

const CheckboxDoc: React.FC = () => {
  const [checked1, setChecked1] = useState<boolean | 'indeterminate'>(true);
  const [checked2, setChecked2] = useState<boolean | 'indeterminate'>(false);
  const [indeterminate, setIndeterminate] = useState<boolean | 'indeterminate'>('indeterminate');

  const colors: Array<'brand' | 'success' | 'error' | 'warning' | 'gray'> = [
    'brand', 'success', 'error', 'warning', 'gray'
  ];

  return (
    <div className="checkbox-doc">
      <header className="doc-header">
        <h1>Checkbox</h1>
        <p className="doc-description">A control that allows the user to select one or more options from a set.</p>
      </header>

      <section className="doc-section">
        <h2>States</h2>
        <p>Checkbox supports checked, unchecked, and indeterminate states.</p>
        <div className="example-flex">
          <div className="example-item">
            <Checkbox 
              checked={checked1} 
              onCheckedChange={setChecked1} 
              label="Checked" 
            />
          </div>
          <div className="example-item">
            <Checkbox 
              checked={checked2} 
              onCheckedChange={setChecked2} 
              label="Unchecked" 
            />
          </div>
          <div className="example-item">
            <Checkbox 
              checked={indeterminate} 
              onCheckedChange={setIndeterminate} 
              label="Indeterminate" 
            />
          </div>
          <div className="example-item">
            <Checkbox checked disabled label="Disabled Checked" />
          </div>
          <div className="example-item">
            <Checkbox disabled label="Disabled Unchecked" />
          </div>
        </div>
      </section>

      <section className="doc-section">
        <h2>Sizes</h2>
        <p>Available in two sizes.</p>
        <div className="example-flex" style={{ alignItems: 'center' }}>
          <Checkbox size="1" label="Size 1 (16px)" checked />
          <Checkbox size="2" label="Size 2 (20px)" checked />
        </div>
      </section>

      <section className="doc-section">
        <h2>Colors</h2>
        <p>Use the <code>color</code> prop to change the checkbox color theme.</p>
        <div className="example-flex">
          {colors.map(color => (
            <Checkbox key={color} color={color} checked label={color.charAt(0).toUpperCase() + color.slice(1)} />
          ))}
        </div>
      </section>

      <section className="doc-section">
        <h2>Table Example</h2>
        <p>Common usage in a table header to select all rows.</p>
        <div className="table-preview">
          <table className="doc-table">
            <thead>
              <tr>
                <th style={{ width: 40 }}>
                  <Checkbox checked="indeterminate" />
                </th>
                <th>Mã phiếu</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Checkbox checked /></td>
                <td>NABSG/IN/00040</td>
                <td>Đã hủy</td>
              </tr>
              <tr>
                <td><Checkbox checked={false} /></td>
                <td>NABSG/IN/00091</td>
                <td>Nháp</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default CheckboxDoc;
