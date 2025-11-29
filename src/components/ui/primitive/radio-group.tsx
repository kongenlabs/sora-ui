import type {
  RadioGroupIndicatorProps as RadixRadioGroupIndicatorProps,
  RadioGroupItemProps as RadixRadioGroupItemProps,
  RadioGroupProps as RadixRadioGroupProps,
} from '@radix-ui/react-radio-group';
import { Indicator, Item, Root } from '@radix-ui/react-radio-group';
import { cx } from 'class-variance-authority';
import { CircleIcon } from 'lucide-react';
import type { Color } from '../types';

// Radio Group
type RadioGroupRootProps = RadixRadioGroupProps & {
  color?: Color;
};
function RadioGroupRoot({ className, color = 'primary', ...props }: RadioGroupRootProps) {
  return <Root className={cx('group grid gap-3', className)} data-color={color} data-slot='radio-group' {...props} />;
}

// Radio Group Indicator
type RadioGroupIndicatorProps = RadixRadioGroupIndicatorProps & {};
function RadioGroupIndicator({ className, ...props }: RadioGroupIndicatorProps) {
  return (
    <Indicator className={cx('grid place-content-center', className)} data-slot='radio-group-indicator' {...props} />
  );
}

// Radio Group Item
const radioGroupItemStyles = cx(
  'peer cursor-pointer size-6 shrink-0 rounded-full border-2 shadow-xs transition-all duration-150 -translate-y-0.75',
  'disabled:pointer-events-none disabled:shadow-none disabled:opacity-50',
  'active:-translate-y-0.25 active:shadow-none',
  'focus-visible:outline-3',
  'data-[state=checked]:pointer-events-none',

  // Primary color
  'group-data-[color=primary]:border-primary-border group-data-[color=primary]:shadow-primary-shadow group-data-[color=primary]:bg-primary-container group-data-[color=primary]:text-primary',
  'group-data-[color=primary]:focus-visible:outline-primary-border/60',
  'group-data-[color=primary]:data-[state=checked]:border-primary-border',

  // Secondary color
  'group-data-[color=secondary]:border-secondary-border group-data-[color=secondary]:shadow-secondary-shadow group-data-[color=secondary]:bg-secondary-container group-data-[color=secondary]:text-secondary',
  'group-data-[color=secondary]:focus-visible:outline-secondary-border/60',
  'group-data-[color=secondary]:data-[state=checked]:border-secondary-border',

  // Tertiary color
  'group-data-[color=tertiary]:border-tertiary-border group-data-[color=tertiary]:shadow-tertiary-shadow group-data-[color=tertiary]:bg-tertiary-container group-data-[color=tertiary]:text-tertiary',
  'group-data-[color=tertiary]:focus-visible:outline-tertiary-border/60',
  'group-data-[color=tertiary]:data-[state=checked]:border-tertiary-border',
);
type RadioGroupItemProps = RadixRadioGroupItemProps & {};
function RadioGroupItem({ className, children, ...props }: RadioGroupItemProps) {
  if (children)
    return (
      <Item className={cx(radioGroupItemStyles, className)} data-slot='radio-group-item' {...props}>
        {children}
      </Item>
    );
}

type RadioGroupItemWithIndicatorProps = RadioGroupItemProps & {};
function RadioGroupItemWithIndicator({ className, children, ...props }: RadioGroupItemWithIndicatorProps) {
  return (
    <RadioGroupItem {...props}>
      <RadioGroupIndicator>
        <CircleIcon className='size-4 fill-current' />
      </RadioGroupIndicator>
    </RadioGroupItem>
  );
}

export { RadioGroupRoot as RadioGroup, RadioGroupItem, RadioGroupIndicator, RadioGroupItemWithIndicator };
export type { RadioGroupRootProps, RadioGroupItemProps, RadioGroupIndicatorProps, RadioGroupItemWithIndicatorProps };
