import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { RiCalendarLine, RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { PremiumBlock } from '../PremiumBlock/PremiumBlock';
import { useControllableState, useFloating } from '../../../lib/mms-engine';
import { cn } from '../../../lib/layout-utils';
import './DatePicker.css';

export interface DateRange {
  start: Date | null;
  end: Date | null;
}

export interface DatePickerProps {
  mode?: 'single' | 'range';
  value?: Date | null;
  defaultValue?: Date | null;
  onChange?: (date: Date) => void;
  rangeValue?: DateRange;
  defaultRangeValue?: DateRange;
  onRangeChange?: (range: DateRange) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  variant?: 'surface' | 'classic' | 'soft';
  size?: '1' | '2' | '3';
  radius?: 'none' | '1' | '2' | '3' | '4' | '5' | '6' | 'full';
  highContrast?: boolean;
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const WEEK_DAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

const isSameDay = (d1: Date | null | undefined, d2: Date | null | undefined) => {
  if (!d1 || !d2) return false;
  return d1.getDate() === d2.getDate() &&
         d1.getMonth() === d2.getMonth() &&
         d1.getFullYear() === d2.getFullYear();
};

const isAfter = (d1: Date, d2: Date) => d1.getTime() > d2.getTime();

const isBetween = (target: Date, start: Date | null, end: Date | null) => {
  if (!start || !end) return false;
  return target.getTime() > start.getTime() && target.getTime() < end.getTime();
};

export const DatePicker: React.FC<DatePickerProps> = ({
  mode = 'single',
  value: valueProp,
  defaultValue,
  onChange,
  rangeValue: rangeProp,
  defaultRangeValue = { start: null, end: null },
  onRangeChange,
  placeholder = 'Select date',
  className = '',
  disabled = false,
  variant = 'surface',
  size = '2',
  radius = '4',
  highContrast = false,
}) => {
  const [isOpen, setIsOpen] = useControllableState<boolean>({
    defaultProp: false,
  });

  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange,
  });

  const [range, setRange] = useControllableState({
    prop: rangeProp,
    defaultProp: defaultRangeValue,
    onChange: onRangeChange,
  });

  const { triggerRef, contentRef, coords } = useFloating({
    open: isOpen,
    sideOffset: 8, // Tăng lên 8px để tránh xung đột với vòng focus 3px, tạo khoảng thở Premium
    align: 'start',
  });

  const [currentMonth, setCurrentMonth] = React.useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = React.useState(new Date().getFullYear());
  const [hoverDate, setHoverDate] = React.useState<Date | null>(null);

  // Sync internal view state when popover opens or value changes
  useEffect(() => {
    if (isOpen) {
      const activeDate = mode === 'range' ? (range?.start || new Date()) : (value || new Date());
      setCurrentMonth(activeDate.getMonth());
      setCurrentYear(activeDate.getFullYear());
    }
  }, [isOpen, value, range?.start, mode]);

  const handlePrevMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateSelect = (day: number) => {
    const selectedDate = new Date(currentYear, currentMonth, day);
    
    if (mode === 'single') {
      setValue(selectedDate);
      setIsOpen(false);
    } else {
      if (!range.start || (range.start && range.end)) {
        setRange({ start: selectedDate, end: null });
      } else if (range.start && !range.end) {
        if (isAfter(selectedDate, range.start)) {
          setRange({ start: range.start, end: selectedDate });
        } else {
          setRange({ start: selectedDate, end: null });
        }
      }
    }
  };

  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) => {
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1;
  };

  const renderGrid = () => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="mms-datepicker-day-empty" />);
    }

    const today = new Date();
    
    for (let day = 1; day <= daysInMonth; day++) {
      const iterDate = new Date(currentYear, currentMonth, day);
      const isToday = isSameDay(today, iterDate);
      
      const isSelected = mode === 'single' ? isSameDay(value, iterDate) : (isSameDay(range.start, iterDate) || isSameDay(range.end, iterDate));
      const inRange = mode === 'range' && range.start && (range.end ? isBetween(iterDate, range.start, range.end) : (hoverDate && isBetween(iterDate, range.start, hoverDate)));

      days.push(
        <div 
          key={day} 
          className={cn(
            "mms-datepicker-day-wrapper",
            inRange && "mms-datepicker-wrapper-in-range",
            mode === 'range' && isSameDay(range.start, iterDate) && range.end && "mms-datepicker-wrapper-start",
            mode === 'range' && isSameDay(range.end, iterDate) && "mms-datepicker-wrapper-end",
            mode === 'range' && isSameDay(range.start, iterDate) && !range.end && !hoverDate && "mms-datepicker-wrapper-alone"
          )}
        >
          <button
            className={cn(
              "mms-datepicker-day",
              isSelected && "mms-datepicker-day-selected",
              isToday && "mms-datepicker-day-today"
            )}
            onClick={(e) => { e.stopPropagation(); handleDateSelect(day); }}
            onMouseEnter={() => mode === 'range' && range.start && !range.end && setHoverDate(new Date(currentYear, currentMonth, day))}
            onMouseLeave={() => mode === 'range' && setHoverDate(null)}
            type="button"
          >
            {day}
          </button>
        </div>
      );
    }
    return days;
  };

  const getFormatString = () => {
    if (mode === 'single') {
      return value ? `${value.getDate()} ${MONTH_NAMES[value.getMonth()]} ${value.getFullYear()}` : '';
    } else {
      if (!range.start) return '';
      const startStr = `${range.start.getDate()} ${MONTH_NAMES[range.start.getMonth()].substring(0, 3)}`;
      if (range.end) {
        return `${startStr} - ${range.end.getDate()} ${MONTH_NAMES[range.end.getMonth()].substring(0, 3)} ${range.end.getFullYear()}`;
      }
      return `${startStr} - Select Date`;
    }
  };

  const formattedValue = getFormatString();

  return (
    <div className={cn("mms-datepicker-root", className)}>
      <button
        ref={triggerRef as any}
        type="button"
        className={cn(
          "mms-datepicker-trigger",
          `mms-datepicker-size-${size}`,
          `mms-datepicker-radius-${radius}`,
          `mms-variant-${variant}`,
          highContrast && "mms-high-contrast"
        )}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        data-state={isOpen ? 'open' : 'closed'}
      >
        <span className={cn(
          "mms-datepicker-trigger-content",
          !formattedValue && "mms-datepicker-placeholder"
        )}>
          {formattedValue || placeholder}
        </span>
        <RiCalendarLine className="mms-datepicker-icon" />
      </button>

      {isOpen && createPortal(
        <div 
          ref={contentRef as any}
          className={cn(
            "mms-datepicker-popover",
            highContrast && "mms-high-contrast"
          )}
          style={{
            position: 'absolute',
            top: coords.top,
            left: coords.left,
            minWidth: coords.width,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <PremiumBlock variant="surface" padding="none" radius="4">
            <PremiumBlock.Header>
              <div className="mms-datepicker-header-custom">
                <button 
                  type="button"
                  className="mms-datepicker-nav-btn" 
                  onClick={handlePrevMonth}
                  aria-label="Previous month"
                >
                  <RiArrowLeftSLine />
                </button>
                <div className="mms-datepicker-title">
                  {MONTH_NAMES[currentMonth]} {currentYear}
                </div>
                <button 
                  type="button"
                  className="mms-datepicker-nav-btn" 
                  onClick={handleNextMonth}
                  aria-label="Next month"
                >
                  <RiArrowRightSLine />
                </button>
              </div>
            </PremiumBlock.Header>
            <PremiumBlock.Body padding="none">
              <div className="mms-datepicker-grid">
                {WEEK_DAYS.map(day => (
                  <div key={day} className="mms-datepicker-weekday">{day}</div>
                ))}
                {renderGrid()}
              </div>
            </PremiumBlock.Body>
          </PremiumBlock>
        </div>,
        document.body
      )}
    </div>
  );
};
