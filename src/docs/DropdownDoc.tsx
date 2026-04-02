import React from 'react';
import { Dropdown, Button } from '../components/ui';
import { 
  RiMore2Fill, 
  RiEditLine, 
  RiDeleteBinLine, 
  RiDownload2Line, 
  RiShareLine,
  RiFileCopyLine,
  RiHistoryLine,
  RiSettings4Line
} from 'react-icons/ri';
import './DropdownDoc.css';

const DropdownDoc: React.FC = () => {
  return (
    <div className="dropdown-doc">
      <header className="doc-header">
        <h1>Dropdown</h1>
        <p className="doc-description">Displays a menu to the user—such as a set of actions or functions—triggered by a button.</p>
      </header>

      <section className="doc-section">
        <h2>Basic Usage</h2>
        <div className="demo-list">
          <Dropdown.Root>
            <Dropdown.Trigger>
              <Button leftIcon={<RiMore2Fill />}>Options</Button>
            </Dropdown.Trigger>
            <Dropdown.Content align="left">
              <Dropdown.Item>View Details</Dropdown.Item>
              <Dropdown.Item>Mark as read</Dropdown.Item>
              <Dropdown.Separator />
              <Dropdown.Item disabled>Export as PDF</Dropdown.Item>
            </Dropdown.Content>
          </Dropdown.Root>
        </div>
      </section>

      <section className="doc-section">
        <h2>With Icons & Colors</h2>
        <div className="demo-list">
          <Dropdown.Root>
            <Dropdown.Trigger>
              <Button variant="outline">User Actions</Button>
            </Dropdown.Trigger>
            <Dropdown.Content align="left" width={220}>
              <Dropdown.Item leftIcon={<RiEditLine />}>Edit Profile</Dropdown.Item>
              <Dropdown.Item leftIcon={<RiFileCopyLine />}>Duplicate</Dropdown.Item>
              <Dropdown.Item leftIcon={<RiShareLine />}>Share Link</Dropdown.Item>
              <Dropdown.Item leftIcon={<RiHistoryLine />}>View History</Dropdown.Item>
              <Dropdown.Separator />
              <Dropdown.Item leftIcon={<RiSettings4Line />}>Settings</Dropdown.Item>
              <Dropdown.Separator />
              <Dropdown.Item 
                leftIcon={<RiDeleteBinLine />} 
                className="dropdown-item-danger"
              >
                Delete Account
              </Dropdown.Item>
            </Dropdown.Content>
          </Dropdown.Root>
        </div>
      </section>

      <section className="doc-section">
        <h2>Table Action Menu (Real-world example)</h2>
        <div className="demo-list">
          <div className="table-action-preview">
            <span>NABSG/IN/00040</span>
            <Dropdown.Root>
              <Dropdown.Trigger>
                <div className="action-trigger-circle">
                  <RiMore2Fill />
                </div>
              </Dropdown.Trigger>
              <Dropdown.Content align="right">
                <Dropdown.Item leftIcon={<RiEditLine />}>Hành động 1</Dropdown.Item>
                <Dropdown.Item leftIcon={<RiDownload2Line />}>Tải xuống</Dropdown.Item>
                <Dropdown.Separator />
                <Dropdown.Item leftIcon={<RiDeleteBinLine />} className="dropdown-item-danger">Xóa</Dropdown.Item>
              </Dropdown.Content>
            </Dropdown.Root>
          </div>
        </div>
      </section>

      <section className="doc-section">
        <h2>API Reference</h2>
        <div className="api-table-wrapper">
          <table className="api-table">
            <thead>
              <tr>
                <th>Component</th>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dropdown.Content</td>
                <td>align</td>
                <td>'left' | 'right'</td>
                <td>'right'</td>
                <td>Alignment of the dropdown content relative to the trigger.</td>
              </tr>
              <tr>
                <td>Dropdown.Content</td>
                <td>width</td>
                <td>number | string</td>
                <td>180</td>
                <td>Custom width for the dropdown menu.</td>
              </tr>
              <tr>
                <td>Dropdown.Item</td>
                <td>leftIcon</td>
                <td>ReactNode</td>
                <td>-</td>
                <td>Icon to display on the left side of the item.</td>
              </tr>
              <tr>
                <td>Dropdown.Item</td>
                <td>rightIcon</td>
                <td>ReactNode</td>
                <td>-</td>
                <td>Icon to display on the right side of the item.</td>
              </tr>
              <tr>
                <td>Dropdown.Item</td>
                <td>disabled</td>
                <td>boolean</td>
                <td>false</td>
                <td>Whether the item is disabled.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default DropdownDoc;
