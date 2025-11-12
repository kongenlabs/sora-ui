'use client';

import {
  Content,
  Portal,
  Provider,
  Root,
  type TooltipContentProps,
  type TooltipProps,
  type TooltipProviderProps,
  type TooltipTriggerProps,
  Trigger,
} from '@radix-ui/react-tooltip';
import { cx } from 'class-variance-authority';

export function TooltipProvider({ ...props }: TooltipProviderProps) {
  return <Provider data-slot='tooltip-provider' {...props} />;
}

export function Tooltip({ ...props }: TooltipProps) {
  return (
    <TooltipProvider>
      <Root data-slot='tooltip' {...props} />
    </TooltipProvider>
  );
}

export function TooltipTrigger({ ...props }: TooltipTriggerProps) {
  return <Trigger data-slot='tooltip-trigger' {...props} />;
}

export function TooltipContent({ className, children, ...props }: TooltipContentProps) {
  return (
    <Portal>
      <Content
        className={cx(
          'fade-in-0 zoom-in-95 -translate-y-2.5 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) animate-in text-balance px-3 py-1.5 text-small shadow-xs',
          'rounded border-2 bg-primary-50 text-primary-950',
          'data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:animate-out',
          'data-[side=bottom]:slide-in-from-top-2',
          'data-[side=left]:slide-in-from-right-2',
          'data-[side=top]:slide-in-from-bottom-2',
          'data-[side=right]:slide-in-from-left-2',
          'before:-translate-x-1/2 before:-translate-y-1/4 before:absolute before:top-full before:left-1/2 before:size-2.5 before:rotate-45 before:border-primary-950 before:border-r-4 before:border-b-4 before:bg-primary-50',
          className,
        )}
        data-slot='tooltip-content'
        {...props}
      >
        {children}
      </Content>
    </Portal>
  );
}
