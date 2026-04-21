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
import DropdownMenuDoc from './docs/DropdownMenuDoc'
import TooltipDoc from './docs/TooltipDoc'
import DialogDoc from './docs/DialogDoc'
import FormsDoc from './docs/FormsDoc'
import SwitchDoc from './docs/SwitchDoc'
import DatePickerDoc from './docs/DatePickerDoc'
import ToastDoc from './docs/ToastDoc'
import DashboardExample from './pages/DashboardExample/DashboardExample'
import PieChartExample from './pages/PieChartExample/PieChartExample'
import SegmentedControlDoc from './docs/SegmentedControlDoc'
import MetricsCard from './pages/MetricsCard/MetricsCard'
import BreadcrumbsDoc from './docs/BreadcrumbsDoc'
import EmptyStateDoc from './docs/EmptyStateDoc'
import ResultDoc from './docs/ResultDoc'
import TimelineDoc from './docs/TimelineDoc'
import TypographyDoc from './docs/TypographyDoc'
import AuroraBackgroundDoc from './docs/AuroraBackgroundDoc'
import SelectDoc from './docs/SelectDoc'
import MultiSelectDoc from './docs/MultiSelectDoc'
import PremiumAestheticDoc from './docs/PremiumAestheticDoc'
import OperationCenter from './pages/OperationCenter/OperationCenter'
import SliderDoc from './docs/SliderDoc'
import PremiumBlockDoc from './docs/PremiumBlockDoc'
import OperationalDoc from './docs/OperationalDoc'
import AvatarDoc from './docs/AvatarDoc'
import LayoutDoc from './docs/LayoutDoc'
import StatusDoc from './docs/StatusDoc'
import BoxDoc from './docs/BoxDoc'
import FlexDoc from './docs/FlexDoc'
import GridDoc from './docs/GridDoc'
import ContainerDoc from './docs/ContainerDoc'
import SectionDoc from './docs/SectionDoc'
import CardDoc from './docs/CardDoc'
import MetricCardDoc from './docs/MetricCardDoc'
import SeparatorDoc from './docs/SeparatorDoc'
import SkeletonDoc from './docs/SkeletonDoc'
import SpinnerDoc from './docs/SpinnerDoc'
import PopoverDoc from './docs/PopoverDoc'
import ScrollAreaDoc from './docs/ScrollAreaDoc'
import ContextMenuDoc from './docs/ContextMenuDoc'
import AccordionDoc from './docs/AccordionDoc'
import HoverCardDoc from './docs/HoverCardDoc'
import AlertDialogDoc from './docs/AlertDialogDoc'
import AspectRatioDoc from './docs/AspectRatioDoc'
import Layout from './components/layout/Layout'
import { BrandProvider } from './contexts/BrandContext'
import { ThemeProvider } from './contexts/ThemeContext'
import { ToastProvider } from './contexts/ToastContext'
import { ToastContainer } from './components/ui/Toast/Toast'

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
            {activePage === 'dropdown' && <DropdownMenuDoc />}
            {activePage === 'tooltip' && <TooltipDoc />}
            {activePage === 'modal' && <DialogDoc />}
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
            {activePage === 'select' && <SelectDoc />}
            {activePage === 'multiselect' && <MultiSelectDoc />}
            {activePage === 'premium-aesthetic' && <PremiumAestheticDoc />}
            {activePage === 'slider' && <SliderDoc />}
            {activePage === 'dashboard' && <DashboardExample onPageChange={setActivePage} />}
            {activePage === 'operation-center' && <OperationCenter onPageChange={setActivePage} />}
            {activePage === 'pie-chart' && <PieChartExample onPageChange={setActivePage} />}
            {activePage === 'premium-block' && <PremiumBlockDoc />}
            {activePage === 'segmented-control' && <SegmentedControlDoc />}
            {activePage === 'metrics-card' && <MetricsCard onPageChange={setActivePage} />}
            {activePage === 'operational' && <OperationalDoc />}
            {activePage === 'avatar' && <AvatarDoc />}
            {activePage === 'layout' && <LayoutDoc />}
            {activePage === 'box' && <BoxDoc />}
            {activePage === 'flex' && <FlexDoc />}
            {activePage === 'grid' && <GridDoc />}
            {activePage === 'container' && <ContainerDoc />}
            {activePage === 'section' && <SectionDoc />}
            {activePage === 'card' && <CardDoc />}
            {activePage === 'metric-card' && <MetricCardDoc />}
            {activePage === 'separator' && <SeparatorDoc />}
            {activePage === 'spinner' && <SpinnerDoc />}
            {activePage === 'skeleton' && <SkeletonDoc />}
            {activePage === 'status' && <StatusDoc />}
            {activePage === 'popover' && <PopoverDoc />}
            {activePage === 'scroll-area' && <ScrollAreaDoc />}
            {activePage === 'context-menu' && <ContextMenuDoc />}
            {activePage === 'accordion' && <AccordionDoc />}
            {activePage === 'hover-card' && <HoverCardDoc />}
            {activePage === 'alert-dialog' && <AlertDialogDoc />}
            {activePage === 'aspect-ratio' && <AspectRatioDoc />}
          </Layout>
          <ToastContainer />
        </ToastProvider>
      </BrandProvider>
    </ThemeProvider>
  )
}

export default App
