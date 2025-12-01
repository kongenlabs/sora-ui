import type {
  TooltipContentProps as RadixTooltipContentProps,
  TooltipPortalProps as RadixTooltipPortalProps,
  TooltipProps as RadixTooltipProps,
  TooltipProviderProps as RadixTooltipProviderProps,
  TooltipTriggerProps as RadixTooltipTriggerProps,
} from '@radix-ui/react-tooltip';
import {
  Tooltip as RadixTooltip,
  TooltipContent as RadixTooltipContent,
  TooltipPortal as RadixTooltipPortal,
  TooltipProvider as RadixTooltipProvider,
  TooltipTrigger as RadixTooltipTrigger,
} from '@radix-ui/react-tooltip';
import { cx } from 'class-variance-authority';

// Tooltip Provider
type TooltipProviderProps = RadixTooltipProviderProps & {};
function TooltipProvider({ ...props }: TooltipProviderProps) {
  return <RadixTooltipProvider data-slot='tooltip-provider' {...props} />;
}

// Tooltip
type TooltipProps = RadixTooltipProps & {};
function Tooltip({ ...props }: TooltipProps) {
  return <RadixTooltip data-slot='tooltip' {...props} />;
}

// Tooltip Trigger
type TooltipTriggerProps = RadixTooltipTriggerProps & {};
function TooltipTrigger({ ...props }: TooltipTriggerProps) {
  return <RadixTooltipTrigger data-slot='tooltip-trigger' {...props} />;
}

type TooltipPortalProps = RadixTooltipPortalProps & {};
function TooltipPortal({ ...props }: TooltipPortalProps) {
  return <RadixTooltipPortal data-slot='tooltip-portal' {...props} />;
}

// Tooltip Content
type TooltipContentProps = RadixTooltipContentProps & {};
function TooltipContent({ className, children, color = 'primary', ...props }: TooltipContentProps) {
  return (
    <RadixTooltipContent
      className={cx(
        'fade-in-0 zoom-in-95 -translate-y-2.5 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) animate-in text-balance rounded border-2 bg-background px-3 py-1.5 font-medium text-foreground text-small',
        'data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:animate-out',
        'data-[side=bottom]:slide-in-from-top-2',
        'data-[side=left]:slide-in-from-right-2',
        'data-[side=top]:slide-in-from-bottom-2',
        'data-[side=right]:slide-in-from-left-2',
        'before:-translate-x-1/2 before:-translate-y-1/3 before:absolute before:top-full before:left-1/2 before:size-2.5 before:rotate-45 before:border-r-2 before:border-b-2 before:bg-background',
        className,
      )}
      data-color={color}
      data-slot='tooltip-content'
      {...props}
    >
      {children}
    </RadixTooltipContent>
  );
}

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, TooltipPortal };
export type { TooltipProps, TooltipContentProps, TooltipProviderProps, TooltipTriggerProps, TooltipPortalProps };
