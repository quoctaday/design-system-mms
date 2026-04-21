import React from 'react';
import { DocLayout } from '../components/docs/DocLayout';
import { DocSection, DocHeading, DocText } from '../components/docs/DocPrimitives';
import { CodePreview } from '../components/docs/CodePreview';
import { PropsTable } from '../components/docs/PropsTable';
import { MetricCard, Grid, AuroraBackground } from '../components/ui';
import { RiMoneyDollarCircleLine, RiUserHeartLine, RiGlobalLine, RiTimeLine } from 'react-icons/ri';

const MetricCardDoc: React.FC = () => {
  const toc = [
    { id: 'usage', title: 'Usage' },
    { id: 'designs', title: 'Designs' },
    { id: 'trends', title: 'Trends' },
    { id: 'api', title: 'API Reference' }
  ];

  const metricCardProps = [
    { name: 'label', type: 'string', required: true, description: 'The title of the metric.' },
    { name: 'value', type: 'string | number', required: true, description: 'The main value to display.' },
    { name: 'trend', type: '"up" | "down"', description: 'The direction of the change.' },
    { name: 'change', type: 'string', description: 'The percentage or absolute change value.' },
    { name: 'comparisonText', type: 'string', default: 'vs last month', description: 'Context for the trend.' },
    { name: 'icon', type: 'ReactNode', description: 'An icon representing the metric.' },
    { name: 'design', type: '"modern" | "linear" | "premium"', default: 'premium', description: 'The visual style of the card.' },
    { name: 'variant', type: '"primary" | "error" | "success" | "warning"', default: 'primary', description: 'The color theme of the icon and trend.' }
  ];

  return (
    <DocLayout 
      title="MetricCard" 
      description="Operational cards optimized for displaying key performance indicators (KPIs)."
      headerBackground={<AuroraBackground />}
      toc={toc}
    >
      <DocSection id="usage">
        <DocHeading>Usage</DocHeading>
        <DocText>MetricCards are designed to present complex data in a simplified, glanceable format. They are typically used in dashboard head units.</DocText>
        <CodePreview
          code={`<MetricCard 
  label="Total Revenue" 
  value="$128,430" 
  trend="up" 
  change="+12.5%" 
  icon={<RiMoneyDollarCircleLine />} 
/>`}
        >
          <MetricCard 
            label="Total Revenue" 
            value="$128,430" 
            trend="up" 
            change="+12.5%" 
            icon={<RiMoneyDollarCircleLine />} 
            className="w-full max-w-sm"
          />
        </CodePreview>
      </DocSection>

      <DocSection id="designs">
        <DocHeading>Designs</DocHeading>
        <DocText>Choose between high-fidelity Premium cards or streamlined Linear/Modern styles.</DocText>
        <Grid columns="2" gap="6" width="full" className="mt-6">
          <MetricCard 
            design="premium"
            label="Active Users" 
            value="14,200" 
            trend="up" 
            change="+5.2%" 
            icon={<RiUserHeartLine />} 
          />
          <MetricCard 
            design="linear"
            label="Response Time" 
            value="240ms" 
            trend="down" 
            change="-15%" 
            icon={<RiTimeLine />} 
            variant="success"
          />
        </Grid>
      </DocSection>

      <DocSection id="trends">
        <DocHeading>Trends</DocHeading>
        <DocText>Use trends to provide temporal context for values.</DocText>
        <Grid columns="2" gap="6" width="full" className="mt-6">
          <MetricCard 
            label="Conversion Rate" 
            value="3.42%" 
            trend="up" 
            change="+0.8%" 
            variant="success"
          />
          <MetricCard 
            label="Bounce Rate" 
            value="42.1%" 
            trend="down" 
            change="-2.1%" 
            variant="error"
          />
        </Grid>
      </DocSection>

      <DocSection id="api">
        <DocHeading>API Reference</DocHeading>
        <PropsTable props={metricCardProps} />
      </DocSection>
    </DocLayout>
  );
};

export default MetricCardDoc;
