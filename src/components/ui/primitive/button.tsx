import { cva, cx, type VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';
import {
  Tooltip,
  TooltipContent,
  type TooltipContentProps,
  type TooltipProps,
  TooltipTrigger,
  type TooltipTriggerProps,
} from './tooltip';

const buttonVariants = cva(
  cx(
    '-translate-y-1 relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap border-2 font-medium leading-none shadow-sm transition-all duration-125',
    '[&_svg]:pointer-events-none [&_svg]:shrink-0',
    'focus-visible:outline-3 focus-visible:outline-offset-1',
    'disabled:translate-none disabled:cursor-not-allowed disabled:opacity-70 disabled:shadow-none',
    'hover:brightness-95',
    'active:translate-none active:shadow-none active:brightness-90',
  ),
  {
    compoundVariants: [
      {
        className: 'px-2.5 py-1.5',
        icon: false,
        size: 'sm',
      },
      {
        className: 'px-3 py-2',
        icon: false,
        size: 'md',
      },
      {
        className: 'px-3.5 py-2.5',
        icon: false,
        size: 'lg',
      },
      {
        className: 'p-1.5',
        icon: true,
        size: 'sm',
      },
      {
        className: 'p-2',
        icon: true,
        size: 'md',
      },
      {
        className: 'p-2.5',
        icon: true,
        size: 'lg',
      },
    ],
    defaultVariants: {
      color: 'primary',
      icon: false,
      size: 'md',
    },
    variants: {
      color: {
        accent: cx(
          'border-accent-border bg-accent-background text-accent-foreground shadow-accent-shadow',
          'focus:outline-accent-border/80',
        ),
        primary: cx(
          'border-primary-border bg-primary-background text-primary-foreground shadow-primary-shadow',
          'focus:outline-primary-border/80',
        ),
        secondary: cx(
          'border-secondary-border bg-secondary-background text-secondary-foreground shadow-secondary-shadow',
          'focus:outline-secondary-border/80',
        ),
        tertiary: cx(
          'border-tertiary-border bg-tertiary-background text-tertiary-foreground shadow-tertiary-shadow',
          'focus:outline-tertiary-border/80',
        ),
      },
      icon: {
        false: '',
        true: '',
      },
      size: {
        lg: cx('gap-2 rounded-lg text-button-lg', "[&_svg:not([class*='size-'])]:size-4.5"),
        md: cx('gap-1.5 rounded text-button-md', "[&_svg:not([class*='size-'])]:size-4"),
        sm: cx('gap-1 rounded-sm text-button-sm', "[&_svg:not([class*='size-'])]:size-3.5"),
      },
    },
  },
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export type ButtonProps = ComponentProps<'button'> &
  ButtonVariantProps & {
    tooltip?: string;
    tooltipOptions?: TooltipProps;
    tooltipTriggerOptions?: TooltipTriggerProps;
    tooltipContentOptions?: TooltipContentProps;
  };

export function Button({
  className,
  icon,
  color,
  size,
  disabled,
  tooltip,
  tooltipOptions,
  tooltipTriggerOptions,
  tooltipContentOptions,
  ...props
}: ButtonProps) {
  const button = (
    <button
      className={cx(
        buttonVariants({
          color,
          icon,
          size,
        }),
        className,
      )}
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
