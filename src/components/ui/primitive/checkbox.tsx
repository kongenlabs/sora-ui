import type {
  CheckboxIndicatorProps as RadixCheckboxIndicatorProps,
  CheckboxProps as RadixCheckboxProps,
} from '@radix-ui/react-checkbox';
import { Indicator, Root } from '@radix-ui/react-checkbox';
import { cx } from 'class-variance-authority';
import type { Color } from '../types';

// Checkbox Indicator
type CheckboxIndicatorProps = RadixCheckboxIndicatorProps & {};
function CheckboxIndicator({ className, ...props }: CheckboxIndicatorProps) {
  return <Indicator className='grid place-content-center text-current' data-slot='checkbox-indicator' {...props} />;
}

// Checkbox Root
const checkboxRootStyles = cx(
  'peer cursor-pointer size-6 shrink-0 rounded-2xs border-2 shadow-xs transition-all duration-150 -translate-y-0.75',
  'disabled:pointer-events-none disabled:shadow-none disabled:opacity-50',
  'active:-translate-y-0.25 active:shadow-none',
  'focus-visible:outline-3',

  // Primary color
  'data-[color=primary]:border-primary-border data-[color=primary]:shadow-primary-shadow data-[color=primary]:bg-primary-container',
  'data-[color=primary]:focus-visible:outline-primary-border/60',
  'data-[color=primary]:data-[state=checked]:border-primary-border data-[color=primary]:data-[state=checked]:bg-primary data-[color=primary]:data-[state=checked]:text-on-primary',

  // Secondary color
  'data-[color=secondary]:border-secondary-border data-[color=secondary]:shadow-secondary-shadow data-[color=secondary]:bg-secondary-container',
  'data-[color=secondary]:focus-visible:outline-secondary-border/60',
  'data-[color=secondary]:data-[state=checked]:border-secondary-border data-[color=secondary]:data-[state=checked]:bg-secondary data-[color=secondary]:data-[state=checked]:text-on-secondary',

  // Tertiary color
  'data-[color=tertiary]:border-tertiary-border data-[color=tertiary]:shadow-tertiary-shadow data-[color=tertiary]:bg-tertiary-container',
  'data-[color=tertiary]:focus-visible:outline-tertiary-border/60',
  'data-[color=tertiary]:data-[state=checked]:border-tertiary-border data-[color=tertiary]:data-[state=checked]:bg-tertiary data-[color=tertiary]:data-[state=checked]:text-on-tertiary',
);
type CheckboxRootProps = RadixCheckboxProps & {
  color?: Color;
};
function CheckboxRoot({ className, color = 'primary', ...props }: CheckboxRootProps) {
  return <Root className={cx(checkboxRootStyles, className)} data-color={color} data-slot='checkbox' {...props} />;
}

// Checkbox
type CheckboxProps = CheckboxRootProps & {};
function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <CheckboxRoot {...props}>
      <CheckboxIndicator>
        <svg
          aria-hidden='true'
          className='size-3.5'
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
      </CheckboxIndicator>
    </CheckboxRoot>
  );
}

export { Checkbox, CheckboxIndicator, CheckboxRoot };
export type { CheckboxProps, CheckboxRootProps, CheckboxIndicatorProps };
