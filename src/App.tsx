import { useState } from 'react'
import BadgeDoc from './docs/BadgeDoc'
import TabsDoc from './docs/TabsDoc'
import ColorsDoc from './docs/ColorsDoc'
import ButtonDoc from './docs/ButtonDoc'
import InputDoc from './docs/InputDoc'
import IntroDoc from './docs/IntroDoc'
import ThemingDoc from './docs/ThemingDoc'
import CheckboxDoc from './docs/CheckboxDoc'
import PaginationDoc from './docs/PaginationDoc'
import TableDoc from './docs/TableDoc'
import DropdownDoc from './docs/DropdownDoc'
import TooltipDoc from './docs/TooltipDoc'
import ModalDoc from './docs/ModalDoc'
import FormsDoc from './docs/FormsDoc'
import SwitchDoc from './docs/SwitchDoc'
import DatePickerDoc from './docs/DatePickerDoc'
import ToastDoc from './docs/ToastDoc'
import DashboardExample from './pages/DashboardExample/DashboardExample'
import PieChartExample from './pages/PieChartExample/PieChartExample'
import SegmentedControlExample from './pages/SegmentedControlExample/SegmentedControlExample'
import MetricsCard from './pages/MetricsCard/MetricsCard'
import BreadcrumbsDoc from './docs/BreadcrumbsDoc'
import EmptyStateDoc from './docs/EmptyStateDoc'
import ResultDoc from './docs/ResultDoc'
import TimelineDoc from './docs/TimelineDoc'
import TypographyDoc from './docs/TypographyDoc'
import AuroraBackgroundDoc from './docs/AuroraBackgroundDoc'
import OperationCenter from './pages/OperationCenter/OperationCenter'
import Layout from './components/layout/Layout'
import { BrandProvider } from './contexts/BrandContext'
import { ThemeProvider } from './contexts/ThemeContext'
import { ToastProvider, ToastContainer } from './components/ui/Toast'

function App() {
  const [activePage, setActivePage] = useState('intro')

  return (
    <ThemeProvider>
      <BrandProvider>
        <ToastProvider>
          <Layout activePage={activePage} onPageChange={setActivePage}>
          {activePage === 'badge' && <BadgeDoc />}
          {activePage === 'tabs' && <TabsDoc />}
          {activePage === 'button' && <ButtonDoc />}
          {activePage === 'input' && <InputDoc />}
          {activePage === 'checkbox' && <CheckboxDoc />}
          {activePage === 'pagination' && <PaginationDoc />}
          {activePage === 'table' && <TableDoc />}
          {activePage === 'dropdown' && <DropdownDoc />}
          {activePage === 'tooltip' && <TooltipDoc />}
          {activePage === 'modal' && <ModalDoc />}
          {activePage === 'forms' && <FormsDoc />}
          {activePage === 'switch' && <SwitchDoc />}
          {activePage === 'datepicker' && <DatePickerDoc />}
          {activePage === 'toast' && <ToastDoc />}
          {activePage === 'colors' && <ColorsDoc />}
          {activePage === 'intro' && <IntroDoc />}
          {activePage === 'theme' && <ThemingDoc />}
          {activePage === 'breadcrumbs' && <BreadcrumbsDoc />}
          {activePage === 'empty-state' && <EmptyStateDoc />}
          {activePage === 'result' && <ResultDoc />}
          {activePage === 'timeline' && <TimelineDoc />}
          {activePage === 'typography' && <TypographyDoc />}
          {activePage === 'aurora' && <AuroraBackgroundDoc />}
          {activePage === 'dashboard' && <DashboardExample onPageChange={setActivePage} />}
          {activePage === 'operation-center' && <OperationCenter onPageChange={setActivePage} />}
          {activePage === 'pie-chart' && <PieChartExample onPageChange={setActivePage} />}
          {activePage === 'segmented-control' && <SegmentedControlExample onPageChange={setActivePage} />}
          {activePage === 'metrics-card' && <MetricsCard onPageChange={setActivePage} />}
        </Layout>
        <ToastContainer />
      </ToastProvider>
    </BrandProvider>
  </ThemeProvider>
  )
}

export default App
