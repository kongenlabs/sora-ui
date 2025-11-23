import { Indicator, type CheckboxProps as RadixCheckboxProps, Root } from '@radix-ui/react-checkbox';
import { cx } from 'class-variance-authority';
import { CheckIcon } from 'lucide-react';

const checkboxStyles = cx(
  'peer size-6 shrink-0 rounded-2xs border-2 shadow-sm outline-none transition-all',
  'disabled:cursor-not-allowed disabled:opacity-50',
  'active:translate-y-1 active:shadow-none',
  'focus-visible:outline-3',

  // Primary color
  'data-[color=primary]:border-primary-border',
  'data-[color=primary]:shadow-primary-shadow',
  'data-[color=primary]:focus-visible:outline-primary-border/60',
  'data-[color=primary]:data-[state=checked]:border-primary-border',
  'data-[color=primary]:data-[state=checked]:bg-primary-background',
  'data-[color=primary]:data-[state=checked]:text-primary-foreground',

  // Secondary color
  'data-[color=secondary]:border-secondary-border',
  'data-[color=secondary]:shadow-secondary-shadow',
  'data-[color=secondary]:focus-visible:outline-secondary-border/60',
  'data-[color=secondary]:data-[state=checked]:border-secondary-border',
  'data-[color=secondary]:data-[state=checked]:bg-secondary-background',
  'data-[color=secondary]:data-[state=checked]:text-secondary-foreground',

  // Tertiary color
  'data-[color=tertiary]:border-tertiary-border',
  'data-[color=tertiary]:shadow-tertiary-shadow',
  'data-[color=tertiary]:focus-visible:outline-tertiary-border/60',
  'data-[color=tertiary]:data-[state=checked]:border-tertiary-border',
  'data-[color=tertiary]:data-[state=checked]:bg-tertiary-background',
  'data-[color=tertiary]:data-[state=checked]:text-tertiary-foreground',

  // Accent color
  'data-[color=accent]:border-accent-border',
  'data-[color=accent]:shadow-accent-shadow',
  'data-[color=accent]:focus-visible:outline-accent-border/60',
  'data-[color=accent]:data-[state=checked]:border-accent-border',
  'data-[color=accent]:data-[state=checked]:bg-accent-background',
  'data-[color=accent]:data-[state=checked]:text-accent-foreground',
);

type CheckboxProps = RadixCheckboxProps & {
  color?: 'primary' | 'secondary' | 'tertiary' | 'accent';
};

function Checkbox({ className, color = 'primary', ...props }: CheckboxProps) {
  return (
    <Root className={cx(checkboxStyles, className)} data-color={color} data-slot='checkbox' {...props}>
      <Indicator className='grid place-content-center text-current transition-none' data-slot='checkbox-indicator'>
        <CheckIcon className='size-3.5' />
      </Indicator>
    </Root>
  );
}

export { Checkbox, type CheckboxProps };
