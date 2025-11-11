import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';
import { cn } from '@/utils/tailwind';

const buttonVariants = cva(
  cn(
    'flex cursor-pointer items-center justify-center whitespace-nowrap font-medium leading-none transition-all duration-150',
    'focus-visible:outline-2 focus-visible:outline-offset-2',
    "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  ),
  {
    defaultVariants: {
      color: 'primary-3',
      size: 'md',
      variant: 'raised',
    },
    variants: {
      color: {
        'primary-1': cn(
          'border-primary-800 bg-primary-300 text-primary-950 shadow-primary-900',
          'focus:outline-primary-950',
        ),
        'primary-2': cn(
          'border-primary-800 bg-primary-400 text-primary-950 shadow-primary-900',
          'focus-visible:outline-primary-950',
        ),
        'primary-3': cn(
          'border-primary-800 bg-primary-500 text-primary-950 shadow-primary-900',
          'focus-visible:outline-primary-950',
        ),
        'primary-4': cn(
          'border-primary-800 bg-primary-600 text-primary-50 shadow-primary-900',
          'focus-visible:outline-primary-950',
        ),
        'primary-5': cn(
          'border-primary-800 bg-primary-700 text-primary-50 shadow-primary-900',
          'focus-visible:outline-primary-950',
        ),
        'secondary-1': cn(
          'border-secondary-800 bg-secondary-300 text-secondary-950 shadow-secondary-900',
          'focus-visible:outline-secondary-950',
        ),
        'secondary-2': cn(
          'border-secondary-800 bg-secondary-400 text-secondary-950 shadow-secondary-900',
          'focus-visible:outline-secondary-950',
        ),
        'secondary-3': cn(
          'border-secondary-800 bg-secondary-500 text-secondary-950 shadow-secondary-900',
          'focus-visible:outline-secondary-950',
        ),
        'secondary-4': cn(
          'border-secondary-800 bg-secondary-600 text-secondary-50 shadow-secondary-900',
          'focus-visible:outline-secondary-950',
        ),
        'secondary-5': cn(
          'border-secondary-800 bg-secondary-700 text-secondary-50 shadow-secondary-900',
          'focus-visible:outline-secondary-950',
        ),
      },
      size: {
        lg: 'h-11 rounded-lg px-5.5 text-button-lg',
        md: 'h-10 rounded px-5 text-button-md',
        sm: 'h-9 rounded-sm px-4.5 text-button-sm',
      },
      variant: {
        elevated: cn(
          '-translate-y-1 border-2 shadow-sm',
          'hover:brightness-95',
          'active:translate-none active:shadow-none active:brightness-90',
        ),
        flat: cn('border-2', 'hover:brightness-95', 'active:brightness-90'),
        plain: '',
        raised: cn(
          'border-2',
          'focus-visible:-translate-y-1 focus-visible:shadow-sm',
          'hover:-translate-y-1 hover:shadow-sm hover:brightness-95',
          'active:translate-none active:shadow-none active:brightness-90',
        ),
      },
    },
  },
);

function Button({
  className,
  variant,
  color,
  size,
  asChild = false,
  ...props
}: ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return <Comp className={cn(buttonVariants({ className, color, size, variant }))} data-slot='button' {...props} />;
}

export { Button, buttonVariants };
