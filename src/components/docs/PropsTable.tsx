import React from 'react';
import './PropsTable.css';

interface PropDef {
  name: string;
  type: string;
  default?: string;
  required?: boolean;
  description: string;
}

export type { PropDef };

interface PropsTableProps {
  props: PropDef[];
}

export const PropsTable: React.FC<PropsTableProps> = ({ props }) => {
  return (
    <div className="props-table-wrapper">
      <table className="props-table">
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((p, idx) => (
            <tr key={idx}>
              <td className="prop-name">
                <code>{p.name}</code>
                {p.required && <span className="text-error" title="Required">*</span>}
              </td>
              <td className="prop-type"><code>{p.type}</code></td>
              <td className="prop-default">{p.default ? <code>{p.default}</code> : <span className="prop-none">-</span>}</td>
              <td className="prop-desc">{p.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
