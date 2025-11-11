import { cva, cx, type VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip';

const buttonVariants = cva(
  cx(
    'relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap font-medium leading-none transition-all duration-150',
    '[&_svg]:pointer-events-none [&_svg]:shrink-0',
    'focus-visible:outline-3 focus-visible:outline-offset-1',
    'disabled:translate-none disabled:cursor-not-allowed disabled:opacity-70 disabled:shadow-none',
    'hover:brightness-95',
    'active:brightness-90',
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
      color: 'primary-4',
      icon: false,
      size: 'md',
      variant: 'raised',
    },
    variants: {
      color: {
        'primary-1': cx(
          'border-primary-800 bg-primary-300 text-primary-950 shadow-primary-900',
          'focus:outline-primary-600/80',
        ),
        'primary-2': cx(
          'border-primary-800 bg-primary-400 text-primary-950 shadow-primary-900',
          'focus:outline-primary-600/80',
        ),
        'primary-3': cx(
          'border-primary-800 bg-primary-500 text-primary-950 shadow-primary-900',
          'focus:outline-primary-600/80',
        ),
        'primary-4': cx(
          'border-primary-800 bg-primary-600 text-primary-950 shadow-primary-900',
          'focus:outline-primary-600/80',
        ),
        'primary-5': cx(
          'border-primary-800 bg-primary-700 text-primary-50 shadow-primary-900',
          'focus:outline-primary-600/80',
        ),
        'secondary-1': cx(
          'border-secondary-800 bg-secondary-300 text-secondary-950 shadow-secondary-900',
          'focus:outline-secondary-600/80',
        ),
        'secondary-2': cx(
          'border-secondary-800 bg-secondary-400 text-secondary-950 shadow-secondary-900',
          'focus:outline-secondary-600/80',
        ),
        'secondary-3': cx(
          'border-secondary-800 bg-secondary-500 text-secondary-950 shadow-secondary-900',
          'focus:outline-secondary-600/80',
        ),
        'secondary-4': cx(
          'border-secondary-800 bg-secondary-600 text-secondary-50 shadow-secondary-900',
          'focus:outline-secondary-600/80',
        ),
        'secondary-5': cx(
          'border-secondary-800 bg-secondary-700 text-secondary-50 shadow-secondary-900',
          'focus:outline-secondary-600/80',
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
      variant: {
        elevated: cx('-translate-y-1 border-2 shadow-sm', 'active:translate-none active:shadow-none'),
        flat: 'border-2',
        plain: '',
        raised: cx(
          'border-2',
          'focus-visible:-translate-y-1 focus-visible:shadow-sm',
          'hover:-translate-y-1 hover:shadow-sm',
          'active:translate-none active:shadow-none',
        ),
      },
    },
  },
);

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

type ButtonProps = ComponentProps<'button'> &
  ButtonVariantProps & {
    tooltip?: string;
    tooltipOptions?: ComponentProps<typeof Tooltip>;
    tooltipContentOptions?: ComponentProps<typeof TooltipContent>;
    tooltipProviderOptions?: ComponentProps<typeof TooltipProvider>;
  };

export function Button({
  className,
  icon,
  variant,
  color,
  size,
  disabled,
  tooltip,
  tooltipOptions,
  tooltipContentOptions,
  tooltipProviderOptions,
  ...props
}: ButtonProps) {
  const button = (
    <button
      className={cx(
        buttonVariants({
          color,
          icon,
          size,
          variant,
        }),
        className,
      )}
      disabled={disabled}
      {...props}
    />
  );

  if (!tooltip) return button;

  return (
    <TooltipProvider delayDuration={100} {...tooltipProviderOptions}>
      <Tooltip {...tooltipOptions}>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent {...tooltipContentOptions}>{tooltip}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
