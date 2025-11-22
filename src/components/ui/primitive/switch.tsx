import * as SwitchPrimitive from '@radix-ui/react-switch';
import { cva, cx, type VariantProps } from 'class-variance-authority';
import type * as React from 'react';

const switchRootVariants = cva(
  cx(
    'peer inline-flex h-7 w-9 shrink-0 cursor-pointer items-center rounded-xs border-2 outline-none transition-all',
    'data-[state=unchecked]:bg-background',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
  ),
  {
    defaultVariants: {
      color: 'primary',
    },
    variants: {
      color: {
        accent: 'border-accent-border data-[state=checked]:bg-accent-background',
        primary: 'border-primary-border data-[state=checked]:bg-primary-background',
        secondary: 'border-secondary-border data-[state=checked]:bg-secondary-background',
        tertiary: 'border-tertiary-border data-[state=checked]:bg-tertiary-background',
      },
    },
  },
);

const switchThumbVariants = cva(
  cx(
    '-translate-y-0.5 pointer-events-none block size-4 rounded-2xs border-2 shadow-sm ring-0 transition-all duration-200',
    'data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=checked]:bg-background',
    'data-[state=unchecked]:translate-x-0.5',
  ),
  {
    defaultVariants: {
      color: 'primary',
    },
    variants: {
      color: {
        accent: 'border-accent-border shadow-accent-shadow data-[state=unchecked]:bg-accent-background',
        primary: 'border-primary-border shadow-primary-shadow data-[state=unchecked]:bg-primary-background',
        secondary: 'border-secondary-border shadow-secondary-shadow data-[state=unchecked]:bg-secondary-background',
        tertiary: 'border-tertiary-border shadow-tertiary-shadow data-[state=unchecked]:bg-tertiary-background',
      },
    },
  },
);

type SwitchProps = React.ComponentProps<typeof SwitchPrimitive.Root> & VariantProps<typeof switchRootVariants>;

function Switch({ className, color, ...props }: SwitchProps) {
  return (
    <SwitchPrimitive.Root className={cx(switchRootVariants({ color }), className)} data-slot='switch' {...props}>
      <SwitchPrimitive.Thumb className={cx(switchThumbVariants({ color }))} data-slot='switch-thumb' />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
