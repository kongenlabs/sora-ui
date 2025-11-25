import {
  type SwitchProps as RadixSwitchProps,
  type SwitchThumbProps as RadixSwitchThumbProps,
  Root,
  Thumb,
} from '@radix-ui/react-switch';
import { cx } from 'class-variance-authority';
import type { ComponentProps, ReactNode } from 'react';

// Switch Thumb
const switchThumbStyles = cx(
  '-translate-y-0.5 absolute block rounded-2xs border-2 shadow-sm ring-0 transition-all duration-150',

  // Pilled variant (v1 style)
  'group-data-[variant=pilled]:pointer-events-none group-data-[variant=pilled]:size-4',
  'group-data-[variant=pilled]:data-[state=checked]:-translate-x-full group-data-[variant=pilled]:data-[state=checked]:left-[calc(100%-2px)]',
  'group-data-[variant=pilled]:data-[state=unchecked]:left-0.5 group-data-[variant=pilled]:data-[state=unchecked]:translate-x-0',

  // Slider variant (v2 style)
  'group-data-[variant=slider]:size-6',
  'group-data-[variant=slider]:data-[state=checked]:-translate-x-3/4 group-data-[variant=slider]:data-[state=checked]:left-full',
  'group-data-[variant=slider]:data-[state=unchecked]:left-0 group-data-[variant=slider]:data-[state=unchecked]:-translate-x-1/4',

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
type SwitchThumbProps = RadixSwitchThumbProps & {
  children?: ReactNode;
};
function SwitchThumb({ className, children, ...props }: SwitchThumbProps) {
  return (
    <Thumb className={cx(switchThumbStyles, className)} data-slot='switch-thumb' {...props}>
      {children}
    </Thumb>
  );
}

// Switch Labels
const checkedLabelStyles = cx(
  '-translate-y-1/2 pointer-events-none absolute top-1/2 flex items-center justify-center text-xs leading-none transition-opacity duration-150',
  'group-data-[state=checked]:opacity-100',
  'group-data-[state=unchecked]:opacity-0',

  // Pilled variant positioning and colors
  'group-data-[variant=pilled]:left-1.5',
  'group-data-[variant=pilled]:group-data-[color=primary]:text-primary-foreground',
  'group-data-[variant=pilled]:group-data-[color=secondary]:text-secondary-foreground',
  'group-data-[variant=pilled]:group-data-[color=tertiary]:text-tertiary-foreground',
  'group-data-[variant=pilled]:group-data-[color=accent]:text-accent-foreground',

  // Slider variant positioning and colors
  'group-data-[variant=slider]:left-1/2 group-data-[variant=slider]:-translate-x-1/2',
  'group-data-[variant=slider]:group-data-[color=primary]:text-primary-background',
  'group-data-[variant=slider]:group-data-[color=secondary]:text-secondary-background',
  'group-data-[variant=slider]:group-data-[color=tertiary]:text-tertiary-background',
  'group-data-[variant=slider]:group-data-[color=accent]:text-accent-background',
);

const uncheckedLabelStyles = cx(
  '-translate-y-1/2 pointer-events-none absolute top-1/2 flex items-center justify-center text-xs leading-none transition-opacity duration-150',
  'group-data-[state=checked]:opacity-0',
  'group-data-[state=unchecked]:opacity-100',

  // Pilled variant positioning and colors
  'group-data-[variant=pilled]:right-1.5',
  'group-data-[variant=pilled]:group-data-[color=primary]:text-primary-background',
  'group-data-[variant=pilled]:group-data-[color=secondary]:text-secondary-background',
  'group-data-[variant=pilled]:group-data-[color=tertiary]:text-tertiary-background',
  'group-data-[variant=pilled]:group-data-[color=accent]:text-accent-background',

  // Slider variant positioning and colors
  'group-data-[variant=slider]:left-1/2 group-data-[variant=slider]:-translate-x-1/2',
  'group-data-[variant=slider]:group-data-[color=primary]:text-primary-foreground',
  'group-data-[variant=slider]:group-data-[color=secondary]:text-secondary-foreground',
  'group-data-[variant=slider]:group-data-[color=tertiary]:text-tertiary-foreground',
  'group-data-[variant=slider]:group-data-[color=accent]:text-accent-foreground',
);

type SwitchLabelProps = ComponentProps<'span'> & {
  children: ReactNode;
};
function SwitchCheckedLabel({ children, className, ...props }: SwitchLabelProps) {
  return (
    <span className={cx(checkedLabelStyles, className)} data-slot='switch-checked-label' {...props}>
      {children}
    </span>
  );
}
function SwitchUncheckedLabel({ children, className, ...props }: SwitchLabelProps) {
  return (
    <span className={cx(uncheckedLabelStyles, className)} data-slot='switch-unchecked-label' {...props}>
      {children}
    </span>
  );
}

// Switch Root
const switchRootStyles = cx(
  'peer group relative inline-flex shrink-0 cursor-pointer items-center rounded-xs border-2 transition-all',
  'disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none',
  'focus-visible:outline-3',
  '[&_svg]:size-4',

  // Pilled variant dimensions
  'data-[variant=pilled]:h-7 data-[variant=pilled]:w-12',

  // Slider variant dimensions
  'data-[variant=slider]:h-2 data-[variant=slider]:w-10',

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
type SwitchRootProps = RadixSwitchProps & {
  color?: 'primary' | 'secondary' | 'tertiary' | 'accent';
  variant?: 'pilled' | 'slider';
};

function SwitchRoot({ className, color = 'primary', variant = 'pilled', ...props }: SwitchRootProps) {
  return (
    <Root
      className={cx(switchRootStyles, className)}
      data-color={color}
      data-slot='switch'
      data-variant={variant}
      {...props}
    />
  );
}

// Switch
type SwitchProps = SwitchRootProps & {
  checkedLabel?: ReactNode;
  uncheckedLabel?: ReactNode;
};
function Switch({ className, checkedLabel, uncheckedLabel, variant = 'slider', ...props }: SwitchProps) {
  // For pilled variant, labels are on root
  // For slider variant, labels are inside thumb
  return (
    <SwitchRoot variant={variant} {...props}>
      {variant === 'pilled' ? (
        <>
          <SwitchThumb />
          {checkedLabel && <SwitchCheckedLabel>{checkedLabel}</SwitchCheckedLabel>}
          {uncheckedLabel && <SwitchUncheckedLabel>{uncheckedLabel}</SwitchUncheckedLabel>}
        </>
      ) : (
        <SwitchThumb>
          {checkedLabel && <SwitchCheckedLabel>{checkedLabel}</SwitchCheckedLabel>}
          {uncheckedLabel && <SwitchUncheckedLabel>{uncheckedLabel}</SwitchUncheckedLabel>}
        </SwitchThumb>
      )}
    </SwitchRoot>
  );
}

export { Switch, SwitchCheckedLabel, SwitchUncheckedLabel, SwitchThumb, SwitchRoot };
export type { SwitchProps, SwitchLabelProps, SwitchThumbProps, SwitchRootProps };
