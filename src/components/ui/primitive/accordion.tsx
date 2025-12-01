import type {
  AccordionContentProps as RadixAccordionContentProps,
  AccordionHeaderProps as RadixAccordionHeaderProps,
  AccordionItemProps as RadixAccordionItemProps,
  AccordionMultipleProps as RadixAccordionMultipleProps,
  AccordionSingleProps as RadixAccordionSingleProps,
  AccordionTriggerProps as RadixAccordionTriggerProps,
} from '@radix-ui/react-accordion';
import {
  Accordion as RadixAccordion,
  AccordionContent as RadixAccordionContent,
  AccordionHeader as RadixAccordionHeader,
  AccordionItem as RadixAccordionItem,
  AccordionTrigger as RadixAccordionTrigger,
} from '@radix-ui/react-accordion';
import { cx } from 'class-variance-authority';
import { ChevronDownIcon } from 'lucide-react';
import type { Color } from '../types';

// Accordion
type AccordionProps = (RadixAccordionSingleProps | RadixAccordionMultipleProps) & { color?: Color };
function Accordion({ className, children, color = 'primary', ...props }: AccordionProps) {
  return (
    <RadixAccordion
      className={cx(
        'group w-full overflow-hidden rounded border-2 shadow-sm',
        'data-[color=primary]:border-primary-border data-[color=primary]:shadow-primary-shadow',
        'data-[color=secondary]:border-secondary-border data-[color=secondary]:shadow-secondary-shadow',
        'data-[color=tertiary]:border-tertiary-border data-[color=tertiary]:shadow-tertiary-shadow',
        'has-[[data-slot=accordion-item][data-state=open]:last-child]:shadow-none has-[[data-slot=accordion-item][data-state=open]:last-child]:delay-25',
        'has-[[data-slot=accordion-item][data-state=closed]:last-child]:shadow-sm has-[[data-slot=accordion-item][data-state=closed]:last-child]:delay-175',
        className,
      )}
      data-color={color}
      data-slot='accordion'
      {...props}
    >
      {children}
    </RadixAccordion>
  );
}

// AccordionItem
type AccordionItemProps = RadixAccordionItemProps & {};
function AccordionItem({ className, ...props }: AccordionItemProps) {
  return (
    <RadixAccordionItem
      className={cx(
        'border-b-2',
        'last:border-b-0',
        'group-data-[color=primary]:border-primary-border',
        'group-data-[color=secondary]:border-secondary-border',
        'group-data-[color=tertiary]:border-tertiary-border',
        className,
      )}
      data-slot='accordion-item'
      {...props}
    />
  );
}

// AccordionHeader
type AccordionHeaderProps = RadixAccordionHeaderProps & {};
function AccordionHeader({ className, ...props }: AccordionHeaderProps) {
  return (
    <RadixAccordionHeader
      className={cx(
        'relative flex border-b-2 shadow-sm',
        'data-[state=closed]:border-b-0 data-[state=closed]:delay-200',
        'group-data-[color=primary]:border-primary-border group-data-[color=primary]:shadow-primary-shadow',
        'group-data-[color=secondary]:border-secondary-border group-data-[color=secondary]:shadow-secondary-shadow',
        'group-data-[color=tertiary]:border-tertiary-border group-data-[color=tertiary]:shadow-tertiary-shadow',
        className,
      )}
      data-slot='accordion-header'
      {...props}
    />
  );
}

// AccordionTrigger
type AccordionTriggerProps = RadixAccordionTriggerProps & {};
function AccordionTrigger({ className, children, ...props }: AccordionTriggerProps) {
  return (
    <RadixAccordionTrigger
      className={cx(
        'flex flex-1 cursor-pointer justify-between gap-4 p-4 transition-all',
        'group-data-[color=primary]:bg-primary group-data-[color=primary]:text-on-primary',
        'group-data-[color=secondary]:bg-secondary group-data-[color=secondary]:text-on-secondary',
        'group-data-[color=tertiary]:bg-tertiary group-data-[color=tertiary]:text-on-tertiary',
        'focus-visible:outline-3',
        'hover:brightness-95',
        'disabled:pointer-events-none disabled:opacity-50',
        '[&[data-state=open]>svg]:rotate-180',
        className,
      )}
      data-slot='accordion-trigger'
      {...props}
    >
      {children}
      <ChevronDownIcon className='pointer-events-none size-6 shrink-0 translate-y-0.5 transition-transform duration-200' />
    </RadixAccordionTrigger>
  );
}

// AccordionContent
type AccordionContentProps = RadixAccordionContentProps & {};
function AccordionContent({ className, children, ...props }: AccordionContentProps) {
  return (
    <RadixAccordionContent
      className={cx(
        'overflow-hidden',
        'group-data-[color=primary]:bg-primary-container group-data-[color=primary]:text-on-primary-container',
        'group-data-[color=secondary]:bg-secondary-container group-data-[color=secondary]:text-on-secondary-container',
        'group-data-[color=tertiary]:bg-tertiary-container group-data-[color=tertiary]:text-on-tertiary-container',
        'data-[state=closed]:animate-accordion-up',
        'data-[state=open]:animate-accordion-down',
        className,
      )}
      data-slot='accordion-content'
      {...props}
    >
      <div className='p-4'>{children}</div>
    </RadixAccordionContent>
  );
}

export { Accordion, AccordionItem, AccordionHeader, AccordionTrigger, AccordionContent };
export type { AccordionProps, AccordionItemProps, AccordionHeaderProps, AccordionTriggerProps, AccordionContentProps };
