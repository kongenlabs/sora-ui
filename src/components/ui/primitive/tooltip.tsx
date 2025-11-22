import {
  Content,
  Portal,
  Provider,
  type TooltipContentProps as RadixTooltipContentProps,
  type TooltipProps as RadixTooltipProps,
  type TooltipProviderProps as RadixTooltipProviderProps,
  type TooltipTriggerProps as RadixTooltipTriggerProps,
  Root,
  Trigger,
} from '@radix-ui/react-tooltip';
import { cva, cx, type VariantProps } from 'class-variance-authority';

// Tooltip Provider
export type TooltipProviderProps = RadixTooltipProviderProps;
export function TooltipProvider({ ...props }: TooltipProviderProps) {
  return <Provider data-slot='tooltip-provider' {...props} />;
}

// Tooltip
export type TooltipProps = RadixTooltipProps;
export function Tooltip({ ...props }: TooltipProps) {
  return (
    <TooltipProvider>
      <Root data-slot='tooltip' {...props} />
    </TooltipProvider>
  );
}

// Tooltip Trigger
export type TooltipTriggerProps = RadixTooltipTriggerProps;
export function TooltipTrigger({ ...props }: TooltipTriggerProps) {
  return <Trigger data-slot='tooltip-trigger' {...props} />;
}

// Tooltip Content
const tooltipContentVariants = cva(
  cx(
    'fade-in-0 zoom-in-95 -translate-y-2.5 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) animate-in text-balance rounded border-2 px-3 py-1.5 font-medium text-small',
    'data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:animate-out',
    'data-[side=bottom]:slide-in-from-top-2',
    'data-[side=left]:slide-in-from-right-2',
    'data-[side=top]:slide-in-from-bottom-2',
    'data-[side=right]:slide-in-from-left-2',
    'before:-translate-x-1/2 before:-translate-y-1/3 before:absolute before:top-full before:left-1/2 before:size-2.5 before:rotate-45 before:border-r-2 before:border-b-2',
  ),
  {
    defaultVariants: {
      color: 'tertiary',
    },
    variants: {
      color: {
        accent: cx(
          'border-accent-border bg-accent-background text-accent-foreground shadow-accent-shadow',
          'before:border-accent-border before:bg-accent-background',
        ),
        primary: cx(
          'border-primary-border bg-primary-background text-primary-foreground shadow-primary-shadow',
          'before:border-primary-border before:bg-primary-background',
        ),
        secondary: cx(
          'border-secondary-border bg-secondary-background text-secondary-foreground shadow-secondary-shadow',
          'before:border-secondary-border before:bg-secondary-background',
        ),
        tertiary: cx(
          'border-tertiary-border bg-tertiary-background text-tertiary-foreground shadow-tertiary-shadow',
          'before:border-tertiary-border before:bg-tertiary-background',
        ),
      },
    },
  },
);
export type TooltipContentProps = RadixTooltipContentProps & VariantProps<typeof tooltipContentVariants>;
export function TooltipContent({ className, children, color, ...props }: TooltipContentProps) {
  return (
    <Portal>
      <Content className={cx(tooltipContentVariants({ color }), className)} data-slot='tooltip-content' {...props}>
        {children}
      </Content>
    </Portal>
  );
}
