import React, { useState, useRef, useEffect } from 'react';
import { RiCalendarLine, RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import './DatePicker.css';

export interface DateRange {
  start: Date | null;
  end: Date | null;
}

export interface DatePickerProps {
  mode?: 'single' | 'range';
  value?: Date | null;
  onChange?: (date: Date) => void;
  rangeValue?: DateRange;
  onRangeChange?: (range: DateRange) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  size?: '1' | '2' | '3';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const WEEK_DAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

// Helpers
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
  value,
  onChange,
  rangeValue,
  onRangeChange,
  placeholder = 'Select date',
  className = '',
  disabled = false,
  size = '2',
  radius = 'md',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Base month view state
  const baseDate = mode === 'range' ? (rangeValue?.start || new Date()) : (value || new Date());
  const [currentMonth, setCurrentMonth] = useState(baseDate.getMonth());
  const [currentYear, setCurrentYear] = useState(baseDate.getFullYear());
  
  // Range interacting state
  const [hoverDate, setHoverDate] = useState<Date | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Sync internal view state if value changes externally
  useEffect(() => {
    if (mode === 'single' && value) {
      setCurrentMonth(value.getMonth());
      setCurrentYear(value.getFullYear());
    } else if (mode === 'range' && rangeValue?.start) {
      setCurrentMonth(rangeValue.start.getMonth());
      setCurrentYear(rangeValue.start.getFullYear());
    }
  }, [value, rangeValue?.start, mode]);

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
      onChange?.(selectedDate);
      setIsOpen(false);
    } else {
      // Range mode logic
      if (!rangeValue) return;

      if (!rangeValue.start || (rangeValue.start && rangeValue.end)) {
        // Reset and start new range
        onRangeChange?.({ start: selectedDate, end: null });
      } else if (rangeValue.start && !rangeValue.end) {
        // Selecting end
        if (isAfter(selectedDate, rangeValue.start)) {
          onRangeChange?.({ start: rangeValue.start, end: selectedDate });
          // Optional: close after selecting end
          // setIsOpen(false);
        } else {
          // You clicked a date BEFORE the start date, restart range
          onRangeChange?.({ start: selectedDate, end: null });
        }
      }
    }
  };

  const handleDayEnter = (day: number) => {
    if (mode === 'range' && rangeValue?.start && !rangeValue.end) {
      setHoverDate(new Date(currentYear, currentMonth, day));
    }
  };

  const handleDayLeave = () => {
    if (mode === 'range') setHoverDate(null);
  };

  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) => {
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1; // Convert Sunday=0 to Monday=0
  };

  const renderGrid = () => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
    const days = [];

    // Empty previous month cells
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="mms-datepicker-day mms-datepicker-day-empty" />);
    }

    const today = new Date();
    
    for (let day = 1; day <= daysInMonth; day++) {
      const iterDate = new Date(currentYear, currentMonth, day);
      const isToday = isSameDay(today, iterDate);
      
      const wrapperClasses = ['mms-datepicker-day-wrapper'];
      const classes = ['mms-datepicker-day'];
      
      if (mode === 'single') {
        if (isSameDay(value, iterDate)) classes.push('mms-datepicker-day-selected');
        if (isToday) classes.push('mms-datepicker-day-today');
      } else if (mode === 'range') {
        const isStart = isSameDay(rangeValue?.start, iterDate);
        const isEnd = isSameDay(rangeValue?.end, iterDate);
        
        let inRange = false;
        if (rangeValue?.start && rangeValue?.end) {
          inRange = isBetween(iterDate, rangeValue.start, rangeValue.end);
        } else if (rangeValue?.start && hoverDate) {
          if (isAfter(hoverDate, rangeValue.start)) {
             inRange = isBetween(iterDate, rangeValue.start, hoverDate);
          }
        }

        if (isStart) {
          classes.push('mms-datepicker-day-selected');
          wrapperClasses.push('mms-datepicker-wrapper-start');
        }
        if (isEnd) {
          classes.push('mms-datepicker-day-selected');
          wrapperClasses.push('mms-datepicker-wrapper-end');
        }
        
        if (isStart && !rangeValue?.end && !hoverDate) {
           wrapperClasses.push('mms-datepicker-wrapper-alone');
        }

        if (inRange) wrapperClasses.push('mms-datepicker-wrapper-in-range');
        if (isToday) classes.push('mms-datepicker-day-today');
      }

      days.push(
        <div key={day} className={wrapperClasses.join(' ')}>
          <button
            className={classes.join(' ')}
            onClick={(e) => { e.stopPropagation(); handleDateSelect(day); }}
            onMouseEnter={() => handleDayEnter(day)}
            onMouseLeave={handleDayLeave}
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
      if (!rangeValue?.start) return '';
      const startStr = `${rangeValue.start.getDate()} ${MONTH_NAMES[rangeValue.start.getMonth()].substring(0, 3)} ${rangeValue.start.getFullYear()}`;
      if (rangeValue.end) {
        const endStr = `${rangeValue.end.getDate()} ${MONTH_NAMES[rangeValue.end.getMonth()].substring(0, 3)} ${rangeValue.end.getFullYear()}`;
        return `${startStr} - ${endStr}`;
      }
      return `${startStr} - Select End`;
    }
  };

  const formattedValue = getFormatString();

  return (
    <div className={`mms-datepicker-container ${className}`} ref={containerRef}>
      <button
        type="button"
        className={`mms-datepicker-trigger mms-datepicker-size-${size} mms-datepicker-radius-${radius}`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        data-state={isOpen ? 'open' : 'closed'}
      >
        <span className={formattedValue ? '' : 'mms-datepicker-trigger-placeholder'}>
          {formattedValue || placeholder}
        </span>
        <RiCalendarLine className="mms-datepicker-icon" />
      </button>

      {isOpen && (
        <div className="mms-datepicker-popover">
          <div className="mms-datepicker-header">
            <button className="mms-datepicker-nav-btn" onClick={handlePrevMonth} type="button">
              <RiArrowLeftSLine fontSize={20} />
            </button>
            <div className="mms-datepicker-title">
              {MONTH_NAMES[currentMonth]} {currentYear}
            </div>
            <button className="mms-datepicker-nav-btn" onClick={handleNextMonth} type="button">
              <RiArrowRightSLine fontSize={20} />
            </button>
          </div>
          
          <div className="mms-datepicker-grid">
            {WEEK_DAYS.map(day => (
              <div key={day} className="mms-datepicker-weekday">{day}</div>
            ))}
            {renderGrid()}
          </div>
        </div>
      )}
    </div>
  );
};
