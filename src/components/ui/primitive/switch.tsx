import type {
  SwitchProps as RadixSwitchProps,
  SwitchThumbProps as RadixSwitchThumbProps,
} from '@radix-ui/react-switch';
import { Root as RadixSwitchRoot, SwitchThumb as RadixSwitchThumb } from '@radix-ui/react-switch';
import { cx } from 'class-variance-authority';
import type { ComponentProps, ReactNode } from 'react';
import type { Color } from '../types';

// Switch Thumb
type SwitchThumbProps = RadixSwitchThumbProps;
function SwitchThumb({ className, ...props }: SwitchThumbProps) {
  return (
    <RadixSwitchThumb
      className={cx(
        'absolute block rounded-xs border-2 bg-background shadow-sm ring-0 transition-all duration-150',

        // Pilled variant
        'group-data-[variant=pilled]:-translate-y-0.75 group-data-[variant=pilled]:pointer-events-none group-data-[variant=pilled]:size-4',
        'group-data-[variant=pilled]:data-[state=checked]:-translate-x-full group-data-[variant=pilled]:data-[state=checked]:left-[calc(100%-2px)]',
        'group-data-[variant=pilled]:data-[state=unchecked]:left-0.5 group-data-[variant=pilled]:data-[state=unchecked]:translate-x-0',

        // Slider variant
        'group-data-[variant=slider]:-translate-y-1 group-data-[variant=slider]:size-6',
        'group-data-[variant=slider]:data-[state=checked]:-translate-x-3/4 group-data-[variant=slider]:data-[state=checked]:left-full',
        'group-data-[variant=slider]:data-[state=unchecked]:-translate-x-1/4 group-data-[variant=slider]:data-[state=unchecked]:left-0',

        // Thumb press animation - uncomment to enable
        // 'group-active:shadow-none',
        // 'group-data-[variant=pilled]:group-active:data-[state=checked]:translate-y-0.25',
        // 'group-data-[variant=pilled]:group-active:data-[state=unchecked]:translate-y-0.25',
        // 'group-data-[variant=slider]:group-active:data-[state=checked]:translate-y-0',
        // 'group-data-[variant=slider]:group-active:data-[state=unchecked]:translate-y-0',

        // Primary
        'group-data-[color=primary]:border-primary-border group-data-[color=primary]:bg-primary group-data-[color=primary]:shadow-primary-shadow',

        // Secondary
        'group-data-[color=secondary]:border-secondary-border group-data-[color=secondary]:bg-secondary group-data-[color=secondary]:shadow-secondary-shadow',

        // Tertiary
        'group-data-[color=tertiary]:border-tertiary-border group-data-[color=tertiary]:bg-tertiary group-data-[color=tertiary]:shadow-tertiary-shadow',
        className,
      )}
      data-slot='switch-thumb'
      {...props}
    />
  );
}

// Switch Labels
type SwitchLabelProps = ComponentProps<'span'> & {
  children: ReactNode;
};
function SwitchCheckedLabel({ children, className, ...props }: SwitchLabelProps) {
  return (
    <span
      className={cx(
        '-translate-y-1/2 pointer-events-none absolute top-1/2 flex items-center justify-center text-xs leading-none transition-opacity duration-150',
        'group-data-[state=checked]:opacity-100',
        'group-data-[state=unchecked]:opacity-0',

        // Pilled variant positioning and colors
        'group-data-[variant=pilled]:left-1.5',
        'group-data-[variant=pilled]:group-data-[color=primary]:text-on-primary-container',
        'group-data-[variant=pilled]:group-data-[color=secondary]:text-on-secondary-container',
        'group-data-[variant=pilled]:group-data-[color=tertiary]:text-on-tertiary-container',

        // Slider variant positioning and colors
        'group-data-[variant=slider]:-translate-x-1/2 group-data-[variant=slider]:left-1/2',
        'group-data-[variant=slider]:group-data-[color=primary]:text-on-primary',
        'group-data-[variant=slider]:group-data-[color=secondary]:text-on-secondary',
        'group-data-[variant=slider]:group-data-[color=tertiary]:text-on-tertiary',
        className,
      )}
      data-slot='switch-checked-label'
      {...props}
    >
      {children}
    </span>
  );
}
function SwitchUncheckedLabel({ children, className, ...props }: SwitchLabelProps) {
  return (
    <span
      className={cx(
        '-translate-y-1/2 pointer-events-none absolute top-1/2 flex items-center justify-center text-xs leading-none transition-opacity duration-150',
        'group-data-[state=checked]:opacity-0',
        'group-data-[state=unchecked]:opacity-100',

        // Pilled variant positioning and colors
        'group-data-[variant=pilled]:right-1.5',
        'group-data-[variant=pilled]:group-data-[color=primary]:text-on-primary-container',
        'group-data-[variant=pilled]:group-data-[color=secondary]:text-on-secondary-container',
        'group-data-[variant=pilled]:group-data-[color=tertiary]:text-on-tertiary-container',

        // Slider variant positioning and colors
        'group-data-[variant=slider]:-translate-x-1/2 group-data-[variant=slider]:left-1/2',
        'group-data-[variant=slider]:group-data-[color=primary]:text-on-primary',
        'group-data-[variant=slider]:group-data-[color=secondary]:text-on-secondary',
        'group-data-[variant=slider]:group-data-[color=tertiary]:text-on-tertiary',
        className,
      )}
      data-slot='switch-unchecked-label'
      {...props}
    >
      {children}
    </span>
  );
}

// Switch Root
type SwitchRootProps = RadixSwitchProps & {
  color?: Color;
  variant?: 'pilled' | 'slider';
};

function SwitchRoot({ className, color = 'primary', variant = 'pilled', ...props }: SwitchRootProps) {
  return (
    <RadixSwitchRoot
      className={cx(
        'peer group relative inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 transition-all',
        'disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none',
        'focus-visible:outline-3',
        '[&_svg]:size-4',

        // Pilled variant dimensions
        'data-[variant=pilled]:h-6.5 data-[variant=pilled]:w-12',

        // Slider variant dimensions
        'data-[variant=slider]:h-2 data-[variant=slider]:w-10',

        // Primary
        'data-[color=primary]:border-primary-border',
        'data-[color=primary]:focus-visible:outline-primary-border/60',
        'data-[color=primary]:data-[state=checked]:bg-primary-container',

        // Secondary
        'data-[color=secondary]:border-secondary-border',
        'data-[color=secondary]:focus-visible:outline-secondary-border/60',
        'data-[color=secondary]:data-[state=checked]:bg-secondary-container',

        // Tertiary
        'data-[color=tertiary]:border-tertiary-border',
        'data-[color=tertiary]:focus-visible:outline-tertiary-border/60',
        'data-[color=tertiary]:data-[state=checked]:bg-tertiary-container',
        className,
      )}
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
