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
import WidgetExample from './pages/WidgetExample/WidgetExample'
import Layout from './components/layout/Layout'
import { BrandProvider } from './contexts/BrandContext'
import { ToastProvider, ToastContainer } from './components/ui/Toast'

function App() {
  const [activePage, setActivePage] = useState('intro')

  return (
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
          {activePage === 'dashboard' && <DashboardExample />}
          {activePage === 'pie-chart' && <PieChartExample />}
          {activePage === 'segmented-control' && <SegmentedControlExample />}
          {activePage === 'widget-library' && <WidgetExample />}
        </Layout>
        <ToastContainer />
      </ToastProvider>
    </BrandProvider>
  )
}

export default App
