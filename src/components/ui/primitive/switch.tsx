import { type SwitchProps as RadixSwitchProps, Root, Thumb } from '@radix-ui/react-switch';
import { cx } from 'class-variance-authority';
import type { ComponentProps, ReactNode } from 'react';

const switchRootStyles = cx(
  'peer group relative inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-xs border-2 transition-all',
  'disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none',
  'focus-visible:outline-3',
  '[&_svg]:size-4',

  // Accent
  'data-[color=accent]:border-accent-border',
  'data-[color=accent]:focus-visible:outline-accent-border/60',
  'data-[color=accent]:data-[state=checked]:bg-accent-background',
  'data-[color=accent]:data-[state=unchecked]:bg-accent-foreground',

  // Primary
  'data-[color=primary]:border-primary-border',
  'data-[color=primary]:focus-visible:outline-primary-border/60',
  'data-[color=primary]:data-[state=checked]:bg-primary-background',
  'data-[color=primary]:data-[state=unchecked]:bg-primary-foreground',

  // Secondary
  'data-[color=secondary]:border-secondary-border',
  'data-[color=secondary]:focus-visible:outline-secondary-border/60',
  'data-[color=secondary]:data-[state=checked]:bg-secondary-background',
  'data-[color=secondary]:data-[state=unchecked]:bg-secondary-foreground',

  // Tertiary
  'data-[color=tertiary]:border-tertiary-border',
  'data-[color=tertiary]:focus-visible:outline-tertiary-border/60',
  'data-[color=tertiary]:data-[state=checked]:bg-tertiary-background',
  'data-[color=tertiary]:data-[state=unchecked]:bg-tertiary-foreground',
);

const switchThumbStyles = cx(
  '-translate-y-0.5 pointer-events-none absolute block size-4 rounded-2xs border-2 shadow-sm ring-0 transition-all duration-200',
  'data-[state=checked]:-translate-x-full data-[state=checked]:left-[calc(100%-2px)] data-[state=checked]:bg-background',
  'data-[state=unchecked]:left-0.5 data-[state=unchecked]:translate-x-0',

  // Accent
  'group-data-[color=accent]:border-accent-border group-data-[color=accent]:shadow-accent-shadow',
  'group-data-[color=accent]:data-[state=unchecked]:bg-accent-background',
  'group-data-[color=accent]:data-[state=checked]:bg-accent-foreground',

  // Primary
  'group-data-[color=primary]:border-primary-border group-data-[color=primary]:shadow-primary-shadow',
  'group-data-[color=primary]:data-[state=unchecked]:bg-primary-background',
  'group-data-[color=primary]:data-[state=checked]:bg-primary-foreground',

  // Secondary
  'group-data-[color=secondary]:border-secondary-border group-data-[color=secondary]:shadow-secondary-shadow',
  'group-data-[color=secondary]:data-[state=unchecked]:bg-secondary-background',
  'group-data-[color=secondary]:data-[state=checked]:bg-secondary-foreground',

  // Tertiary
  'group-data-[color=tertiary]:border-tertiary-border group-data-[color=tertiary]:shadow-tertiary-shadow',
  'group-data-[color=tertiary]:data-[state=unchecked]:bg-tertiary-background',
  'group-data-[color=tertiary]:data-[state=checked]:bg-tertiary-foreground',
);

const checkedElementStyles = cx(
  '-translate-y-1/2 pointer-events-none absolute top-1/2 left-1.5 flex items-center justify-center text-xs leading-none transition-opacity duration-200',
  'group-data-[state=checked]:opacity-100',
  'group-data-[state=unchecked]:opacity-0',
  'group-data-[color=primary]:text-primary-foreground',
  'group-data-[color=secondary]:text-secondary-foreground',
  'group-data-[color=tertiary]:text-tertiary-foreground',
  'group-data-[color=accent]:text-accent-foreground',
);

const uncheckedElementStyles = cx(
  '-translate-y-1/2 pointer-events-none absolute top-1/2 right-1.5 flex items-center justify-center text-xs leading-none transition-opacity duration-200',
  'group-data-[state=checked]:opacity-0',
  'group-data-[state=unchecked]:opacity-100',
  'text-foreground-sub',
);

type SwitchProps = RadixSwitchProps & {
  color?: 'primary' | 'secondary' | 'tertiary' | 'accent';
};

type SwitchLabelProps = ComponentProps<'span'> & {
  children: ReactNode;
};

function SwitchCheckedLabel({ children, className, ...props }: SwitchLabelProps) {
  return (
    <span className={cx(checkedElementStyles, className)} data-slot='switch-checked-label' {...props}>
      {children}
    </span>
  );
}

function SwitchUncheckedLabel({ children, className, ...props }: SwitchLabelProps) {
  return (
    <span className={cx(uncheckedElementStyles, className)} data-slot='switch-unchecked-label' {...props}>
      {children}
    </span>
  );
}

function Switch({ className, color = 'primary', children, ...props }: SwitchProps) {
  return (
    <Root className={cx(switchRootStyles, className)} data-color={color} data-slot='switch' {...props}>
      <Thumb className={switchThumbStyles} data-slot='switch-thumb' />
      {children}
    </Root>
  );
}

export { Switch, SwitchCheckedLabel, SwitchUncheckedLabel, type SwitchProps, type SwitchLabelProps };
