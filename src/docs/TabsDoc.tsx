import React from 'react';
import { Tabs } from '../components/ui/Tabs/Tabs';
import './TabsDoc.css';

const TabsDoc: React.FC = () => {
  return (
    <div className="tabs-doc">
      <header className="doc-header">
        <h1>Tabs</h1>
        <p className="doc-description">A set of layered sections of content, known as tab panels, that are displayed one at a time.</p>
      </header>
      
      <section className="doc-section">
        <h2>Line</h2>
        <p>The default style with a bottom indicator line. Best for high-level navigation.</p>
        <div className="example-container">
          <Tabs defaultValue="account" variant="line">
            <Tabs.List>
              <Tabs.Trigger value="account">Account</Tabs.Trigger>
              <Tabs.Trigger value="profile" disabled>Profile</Tabs.Trigger>
              <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="account">Manage your account details and security settings.</Tabs.Content>
            <Tabs.Content value="settings">Adjust your preferences and application settings.</Tabs.Content>
          </Tabs>
        </div>
      </section>

      <section className="doc-section">
        <h2>Border</h2>
        <p>A bordered variant that clearly separates the active tab from its context.</p>
        <div className="example-container">
          <Tabs defaultValue="overview" variant="border">
            <Tabs.List>
              <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
              <Tabs.Trigger value="analytics">Analytics</Tabs.Trigger>
              <Tabs.Trigger value="reports">Reports</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="overview">A quick summary of your recent activities and performance metrics.</Tabs.Content>
            <Tabs.Content value="analytics">Deep dive into your data with advanced charting tools.</Tabs.Content>
            <Tabs.Content value="reports">Download and share detailed performance reports.</Tabs.Content>
          </Tabs>
        </div>
      </section>

      <section className="doc-section">
        <h2>Simple</h2>
        <p>A minimalist design that uses background highlighting for the active state.</p>
        <div className="example-container">
          <Tabs defaultValue="inbox" variant="simple">
            <Tabs.List>
              <Tabs.Trigger value="inbox">Inbox</Tabs.Trigger>
              <Tabs.Trigger value="sent">Sent</Tabs.Trigger>
              <Tabs.Trigger value="archived">Archived</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="inbox">Your incoming messages are listed here.</Tabs.Content>
            <Tabs.Content value="sent">Review messages you have sent to others.</Tabs.Content>
            <Tabs.Content value="archived">Access your saved and archived conversations.</Tabs.Content>
          </Tabs>
        </div>
      </section>

      <section className="doc-section">
        <h2>Toggle</h2>
        <p>A segmented control style, ideal for toggling between small sets of mutually exclusive options.</p>
        <div className="example-container">
          <Tabs defaultValue="weekly" variant="toggle">
            <Tabs.List>
              <Tabs.Trigger value="daily">Daily</Tabs.Trigger>
              <Tabs.Trigger value="weekly">Weekly</Tabs.Trigger>
              <Tabs.Trigger value="monthly">Monthly</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="daily">Viewing data for today.</Tabs.Content>
            <Tabs.Content value="weekly">Viewing data for the current week.</Tabs.Content>
            <Tabs.Content value="monthly">Viewing data for the current month.</Tabs.Content>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default TabsDoc;
