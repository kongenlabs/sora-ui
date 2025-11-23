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
import { cx } from 'class-variance-authority';

// Tooltip Provider
type TooltipProviderProps = RadixTooltipProviderProps;
function TooltipProvider({ ...props }: TooltipProviderProps) {
  return <Provider data-slot='tooltip-provider' {...props} />;
}

// Tooltip
type TooltipProps = RadixTooltipProps;
function Tooltip({ ...props }: TooltipProps) {
  return (
    <TooltipProvider>
      <Root data-slot='tooltip' {...props} />
    </TooltipProvider>
  );
}

// Tooltip Trigger
type TooltipTriggerProps = RadixTooltipTriggerProps;
function TooltipTrigger({ ...props }: TooltipTriggerProps) {
  return <Trigger data-slot='tooltip-trigger' {...props} />;
}

// Tooltip Content
const tooltipContentStyles = cx(
  'fade-in-0 zoom-in-95 -translate-y-2.5 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) animate-in text-balance rounded border-2 px-3 py-1.5 font-medium text-small',
  'data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:animate-out',
  'data-[side=bottom]:slide-in-from-top-2',
  'data-[side=left]:slide-in-from-right-2',
  'data-[side=top]:slide-in-from-bottom-2',
  'data-[side=right]:slide-in-from-left-2',
  'before:-translate-x-1/2 before:-translate-y-1/3 before:absolute before:top-full before:left-1/2 before:size-2.5 before:rotate-45 before:border-r-2 before:border-b-2',

  // Primary color
  'data-[color=primary]:border-primary-border data-[color=primary]:bg-primary-background data-[color=primary]:text-primary-foreground data-[color=primary]:shadow-primary-shadow',
  'data-[color=primary]:before:border-primary-border data-[color=primary]:before:bg-primary-background',

  // Secondary color
  'data-[color=secondary]:border-secondary-border data-[color=secondary]:bg-secondary-background data-[color=secondary]:text-secondary-foreground data-[color=secondary]:shadow-secondary-shadow',
  'data-[color=secondary]:before:border-secondary-border data-[color=secondary]:before:bg-secondary-background',

  // Tertiary color
  'data-[color=tertiary]:border-tertiary-border data-[color=tertiary]:bg-tertiary-background data-[color=tertiary]:text-tertiary-foreground data-[color=tertiary]:shadow-tertiary-shadow',
  'data-[color=tertiary]:before:border-tertiary-border data-[color=tertiary]:before:bg-tertiary-background',

  // Accent color
  'data-[color=accent]:border-accent-border data-[color=accent]:bg-accent-background data-[color=accent]:text-accent-foreground data-[color=accent]:shadow-accent-shadow',
  'data-[color=accent]:before:border-accent-border data-[color=accent]:before:bg-accent-background',
);

type TooltipContentProps = RadixTooltipContentProps & {
  color?: 'primary' | 'secondary' | 'tertiary' | 'accent';
};
function TooltipContent({ className, children, color = 'tertiary', ...props }: TooltipContentProps) {
  return (
    <Portal>
      <Content
        className={cx(tooltipContentStyles, className)}
        data-color={color}
        data-slot='tooltip-content'
        {...props}
      >
        {children}
      </Content>
    </Portal>
  );
}

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };
export type { TooltipProps, TooltipContentProps, TooltipProviderProps, TooltipTriggerProps };
