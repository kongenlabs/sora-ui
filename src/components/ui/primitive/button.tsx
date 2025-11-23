import { cx } from 'class-variance-authority';
import type { ComponentProps } from 'react';
import {
  Tooltip,
  TooltipContent,
  type TooltipContentProps,
  type TooltipProps,
  TooltipTrigger,
  type TooltipTriggerProps,
} from './tooltip';

const buttonStyles = cx(
  '-translate-y-1 relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap border-2 font-medium leading-none shadow-sm transition-all duration-125',
  '[&_svg]:pointer-events-none [&_svg]:shrink-0',
  'focus-visible:outline-3 focus-visible:outline-offset-1',
  'disabled:translate-none disabled:opacity-70 disabled:shadow-none disabled:pointer-events-none',
  'hover:brightness-95',
  'active:translate-none active:shadow-none active:brightness-90',

  // Size variants
  'data-[size=sm]:gap-1 data-[size=sm]:rounded-sm data-[size=sm]:text-button-sm data-[size=sm]:[&_svg:not([class*="size-"])]:size-3.5',
  'data-[size=md]:gap-1.5 data-[size=md]:rounded data-[size=md]:text-button-md data-[size=md]:[&_svg:not([class*="size-"])]:size-4',
  'data-[size=lg]:gap-2 data-[size=lg]:rounded-lg data-[size=lg]:text-button-lg data-[size=lg]:[&_svg:not([class*="size-"])]:size-4.5',

  // Icon padding variants
  'data-[icon=false]:data-[size=sm]:px-2.5 data-[icon=false]:data-[size=sm]:py-1.5',
  'data-[icon=false]:data-[size=md]:px-3 data-[icon=false]:data-[size=md]:py-2',
  'data-[icon=false]:data-[size=lg]:px-3.5 data-[icon=false]:data-[size=lg]:py-2.5',
  'data-[icon=true]:data-[size=sm]:p-1.5',
  'data-[icon=true]:data-[size=md]:p-2',
  'data-[icon=true]:data-[size=lg]:p-2.5',

  // Primary color
  'data-[color=primary]:border-primary-border',
  'data-[color=primary]:bg-primary-background',
  'data-[color=primary]:text-primary-foreground',
  'data-[color=primary]:shadow-primary-shadow',
  'data-[color=primary]:focus:outline-primary-border/80',

  // Secondary color
  'data-[color=secondary]:border-secondary-border',
  'data-[color=secondary]:bg-secondary-background',
  'data-[color=secondary]:text-secondary-foreground',
  'data-[color=secondary]:shadow-secondary-shadow',
  'data-[color=secondary]:focus:outline-secondary-border/80',

  // Tertiary color
  'data-[color=tertiary]:border-tertiary-border',
  'data-[color=tertiary]:bg-tertiary-background',
  'data-[color=tertiary]:text-tertiary-foreground',
  'data-[color=tertiary]:shadow-tertiary-shadow',
  'data-[color=tertiary]:focus:outline-tertiary-border/80',

  // Accent color
  'data-[color=accent]:border-accent-border',
  'data-[color=accent]:bg-accent-background',
  'data-[color=accent]:text-accent-foreground',
  'data-[color=accent]:shadow-accent-shadow',
  'data-[color=accent]:focus:outline-accent-border/80',
);

export type ButtonProps = ComponentProps<'button'> & {
  color?: 'primary' | 'secondary' | 'tertiary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  icon?: boolean;
  tooltip?: string;
  tooltipOptions?: TooltipProps;
  tooltipTriggerOptions?: TooltipTriggerProps;
  tooltipContentOptions?: TooltipContentProps;
};

export function Button({
  className,
  icon = false,
  color = 'primary',
  size = 'md',
  disabled,
  tooltip,
  tooltipOptions,
  tooltipTriggerOptions,
  tooltipContentOptions,
  ...props
}: ButtonProps) {
  const button = (
    <button
      className={cx(buttonStyles, className)}
      data-color={color}
      data-icon={icon}
      data-size={size}
      data-slot='button'
      disabled={disabled}
      {...props}
    />
  );

  if (!tooltip) return button;

  return (
    <Tooltip delayDuration={100} {...tooltipOptions}>
      <TooltipTrigger asChild {...tooltipTriggerOptions}>
        {button}
      </TooltipTrigger>
      <TooltipContent {...tooltipContentOptions}>{tooltip}</TooltipContent>
    </Tooltip>
  );
}
