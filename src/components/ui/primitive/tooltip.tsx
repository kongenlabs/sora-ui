import type {
  TooltipContentProps as RadixTooltipContentProps,
  TooltipProps as RadixTooltipProps,
  TooltipProviderProps as RadixTooltipProviderProps,
  TooltipTriggerProps as RadixTooltipTriggerProps,
} from '@radix-ui/react-tooltip';
import { Content, Portal, Provider, Root, Trigger } from '@radix-ui/react-tooltip';
import { cx } from 'class-variance-authority';

// Tooltip Provider
type TooltipProviderProps = RadixTooltipProviderProps & {};
function TooltipProvider({ ...props }: TooltipProviderProps) {
  return <Provider data-slot='tooltip-provider' {...props} />;
}

// Tooltip
type TooltipProps = RadixTooltipProps & {};
function Tooltip({ ...props }: TooltipProps) {
  return (
    <TooltipProvider>
      <Root data-slot='tooltip' {...props} />
    </TooltipProvider>
  );
}

// Tooltip Trigger
type TooltipTriggerProps = RadixTooltipTriggerProps & {};
function TooltipTrigger({ ...props }: TooltipTriggerProps) {
  return <Trigger data-slot='tooltip-trigger' {...props} />;
}

// Tooltip Content
const tooltipContentStyles = cx(
  'fade-in-0 zoom-in-95 -translate-y-2.5 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) animate-in text-balance rounded border-2 px-3 py-1.5 font-medium text-small bg-background text-foreground',
  'data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:animate-out',
  'data-[side=bottom]:slide-in-from-top-2',
  'data-[side=left]:slide-in-from-right-2',
  'data-[side=top]:slide-in-from-bottom-2',
  'data-[side=right]:slide-in-from-left-2',
  'before:-translate-x-1/2 before:-translate-y-1/3 before:absolute before:top-full before:left-1/2 before:size-2.5 before:rotate-45 before:border-r-2 before:border-b-2 before:bg-background',
);

type TooltipContentProps = RadixTooltipContentProps & {};
function TooltipContent({ className, children, color = 'primary', ...props }: TooltipContentProps) {
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
