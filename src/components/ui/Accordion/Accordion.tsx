import React, { 
  createContext, 
  useContext, 
  forwardRef, 
  useState, 
  useCallback 
} from 'react';
import { cn } from '../../../lib/utils';
import { useControllableState } from '../../../lib/mms-engine';
import { extractMMSProps } from '../../../helpers/extract-mms-props';
import './Accordion.css';

// --- Context ---
interface AccordionContextValue {
  value: string[];
  onValueChange: (value: string) => void;
  type: 'single' | 'multiple';
  collapsible: boolean;
}

const AccordionContext = createContext<AccordionContextValue | undefined>(undefined);

const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) throw new Error('Accordion components must be used within an Accordion.Root');
  return context;
};

// --- Root ---
export interface AccordionRootProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'single' | 'multiple';
  value?: string | string[];
  defaultValue?: string | string[];
  onValueChange?: (value: any) => void;
  collapsible?: boolean;
}

export const AccordionRoot = forwardRef<HTMLDivElement, AccordionRootProps>((props, ref) => {
  const {
    type = 'single',
    value: propValue,
    defaultValue,
    onValueChange,
    collapsible = false,
    className,
    children,
    ...rootProps
  } = props;

  const [value, setValue] = useControllableState({
    prop: propValue,
    defaultProp: defaultValue,
    onChange: onValueChange
  });

  const resolvedValue = Array.isArray(value) ? value : value ? [value] : [];

  const handleValueChange = useCallback((itemValue: string) => {
    if (type === 'single') {
      const isCurrentlyExpanded = resolvedValue[0] === itemValue;
      if (isCurrentlyExpanded && collapsible) {
        setValue([]);
      } else {
        setValue(itemValue);
      }
    } else {
      const isCurrentlyExpanded = resolvedValue.includes(itemValue);
      if (isCurrentlyExpanded) {
        setValue(resolvedValue.filter(v => v !== itemValue));
      } else {
        setValue([...resolvedValue, itemValue]);
      }
    }
  }, [type, collapsible, resolvedValue, setValue]);

  return (
    <AccordionContext.Provider value={{ value: resolvedValue, onValueChange: handleValueChange, type, collapsible }}>
      <div ref={ref} className={cn('mms-accordion-root', className)} {...rootProps}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
});

// --- Item ---
export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  disabled?: boolean;
}

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>((props, ref) => {
  const { value, className, ...itemProps } = props;
  const context = useAccordion();
  const isExpanded = context.value.includes(value);

  return (
    <div 
      ref={ref} 
      className={cn('mms-accordion-item', isExpanded && 'mms-accordion-item-expanded', className)} 
      data-state={isExpanded ? 'open' : 'closed'}
      {...itemProps} 
    />
  );
});

// --- Trigger ---
export const AccordionTrigger = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>((props, ref) => {
  const { children, className, ...triggerProps } = props;
  const context = useAccordion();
  const itemValue = (props as any)['data-value']; // Internal trick to access parent value if needed, but we rely on data attributes if possible

  // We need to find the value of the parent Item. 
  // In a real library we'd use another context for the Item.
  
  return (
    <div className="mms-accordion-header">
      <button
        ref={ref}
        type="button"
        className={cn('mms-accordion-trigger', className)}
        {...triggerProps}
      >
        {children}
        <span className="mms-accordion-chevron" aria-hidden="true">›</span>
      </button>
    </div>
  );
});

// --- Content ---
export const AccordionContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { children, className, ...contentProps } = props;
  return (
    <div ref={ref} className={cn('mms-accordion-content', className)} {...contentProps}>
      <div className="mms-accordion-content-inner">
        {children}
      </div>
    </div>
  );
});

// --- Refined Trigger with Item Context ---
const AccordionItemContext = createContext<{ value: string } | undefined>(undefined);

export const AccordionItemWithContext = forwardRef<HTMLDivElement, AccordionItemProps>((props, ref) => {
  const { value, ...rest } = props;
  return (
    <AccordionItemContext.Provider value={{ value }}>
      <AccordionItem value={value} ref={ref} {...rest} />
    </AccordionItemContext.Provider>
  );
});

export const AccordionTriggerWithContext = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>((props, ref) => {
  const itemContext = useContext(AccordionItemContext);
  const accordionContext = useAccordion();
  if (!itemContext) throw new Error('AccordionTrigger must be used within Accordion.Item');
  
  const isExpanded = accordionContext.value.includes(itemContext.value);

  return (
    <AccordionTrigger 
      ref={ref} 
      onClick={() => accordionContext.onValueChange(itemContext.value)}
      data-state={isExpanded ? 'open' : 'closed'}
      aria-expanded={isExpanded}
      {...props} 
    />
  );
});

export const AccordionContentWithContext = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const itemContext = useContext(AccordionItemContext);
  const accordionContext = useAccordion();
  if (!itemContext) throw new Error('AccordionContent must be used within Accordion.Item');
  
  const isExpanded = accordionContext.value.includes(itemContext.value);

  return (
    <AccordionContent 
      ref={ref} 
      data-state={isExpanded ? 'open' : 'closed'}
      style={{ 
        display: isExpanded ? 'block' : 'none' // Basic display management, CSS will handle transition if possible
      }}
      {...props} 
    />
  );
});

export const Accordion = {
  Root: AccordionRoot,
  Item: AccordionItemWithContext,
  Trigger: AccordionTriggerWithContext,
  Content: AccordionContentWithContext,
};

export default Accordion;
