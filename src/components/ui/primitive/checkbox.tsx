import type {
  CheckboxIndicatorProps as RadixCheckboxIndicatorProps,
  CheckboxProps as RadixCheckboxProps,
} from '@radix-ui/react-checkbox';
import { Checkbox as RadixCheckbox, CheckboxIndicator as RadixCheckboxIndicator } from '@radix-ui/react-checkbox';
import { cx } from 'class-variance-authority';
import type { Color } from '../types';
import { Label } from './label';

// Checkbox Indicator
type CheckboxIndicatorProps = RadixCheckboxIndicatorProps & {};
function CheckboxIndicator({ className, children, ...props }: CheckboxIndicatorProps) {
  return (
    <RadixCheckboxIndicator
      className={cx('grid place-content-center', '[&_svg]:size-3.5', className)}
      data-slot='checkbox-indicator'
      {...props}
    >
      {children ?? (
        <svg
          aria-hidden='true'
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            className='animate-tick'
            d='M4 11l5 5L20 5'
            style={{
              strokeDasharray: 1000,
              strokeDashoffset: 1000,
            }}
          />
        </svg>
      )}
    </RadixCheckboxIndicator>
  );
}

// Checkbox Root
type CheckboxRootProps = RadixCheckboxProps & {
  color?: Color;
};
function CheckboxRoot({ className, color = 'primary', ...props }: CheckboxRootProps) {
  return (
    <RadixCheckbox
      className={cx(
        'peer -translate-y-1 size-6 shrink-0 cursor-pointer rounded-xs border-2 shadow-sm transition-all duration-150',
        'disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none',
        'active:translate-y-0 active:shadow-none',
        'focus-visible:outline-3',
        'data-[state=checked]:-translate-y-0.5 data-[state=checked]:shadow-xs',
        'data-[state=checked]:active:translate-y-0 data-[state=checked]:active:shadow-none',

        // Primary color
        'data-[color=primary]:border-primary-border data-[color=primary]:bg-primary-container data-[color=primary]:shadow-primary-shadow',
        'data-[color=primary]:focus-visible:outline-primary-border/60',
        'data-[color=primary]:data-[state=checked]:border-primary-border data-[color=primary]:data-[state=checked]:bg-primary data-[color=primary]:data-[state=checked]:text-on-primary',

        // Secondary color
        'data-[color=secondary]:border-secondary-border data-[color=secondary]:bg-secondary-container data-[color=secondary]:shadow-secondary-shadow',
        'data-[color=secondary]:focus-visible:outline-secondary-border/60',
        'data-[color=secondary]:data-[state=checked]:border-secondary-border data-[color=secondary]:data-[state=checked]:bg-secondary data-[color=secondary]:data-[state=checked]:text-on-secondary',

        // Tertiary color
        'data-[color=tertiary]:border-tertiary-border data-[color=tertiary]:bg-tertiary-container data-[color=tertiary]:shadow-tertiary-shadow',
        'data-[color=tertiary]:focus-visible:outline-tertiary-border/60',
        'data-[color=tertiary]:data-[state=checked]:border-tertiary-border data-[color=tertiary]:data-[state=checked]:bg-tertiary data-[color=tertiary]:data-[state=checked]:text-on-tertiary',
        className,
      )}
      data-color={color}
      data-slot='checkbox'
      {...props}
    />
  );
}

// Checkbox
type CheckboxProps = CheckboxRootProps & {};
function Checkbox({ children, ...props }: CheckboxProps) {
  return (
    <CheckboxRoot {...props}>
      <CheckboxIndicator />
      <Label>{children}</Label>
    </CheckboxRoot>
  );
}

export { type CheckboxRoot, CheckboxIndicator, Checkbox };
export type { CheckboxRootProps, CheckboxIndicatorProps, CheckboxProps };
