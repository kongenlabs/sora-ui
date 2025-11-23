import {
  Indicator,
  Item,
  type RadioGroupIndicatorProps as RadixRadioGroupIndicatorProps,
  type RadioGroupItemProps as RadixRadioGroupItemProps,
  type RadioGroupProps as RadixRadioGroupProps,
  Root,
} from '@radix-ui/react-radio-group';
import { cx } from 'class-variance-authority';
import { CircleIcon } from 'lucide-react';

// Radio Group
type RadioGroupProps = RadixRadioGroupProps & {
  color?: 'primary' | 'secondary' | 'tertiary' | 'accent';
};
function RadioGroup({ className, color = 'primary', ...props }: RadioGroupProps) {
  return <Root className={cx('group grid gap-3', className)} data-color={color} data-slot='radio-group' {...props} />;
}

// Radio Group Indicator
type RadioGroupIndicatorProps = RadixRadioGroupIndicatorProps;
function RadioGroupIndicator({ className, ...props }: RadioGroupIndicatorProps) {
  return (
    <Indicator className={cx('grid place-content-center', className)} data-slot='radio-group-indicator' {...props} />
  );
}

// Radio Group Item
const radioGroupItemStyles = cx(
  'peer cursor-pointer size-6 shrink-0 rounded-full border-2 shadow-sm transition-all duration-150',
  'disabled:pointer-events-none disabled:shadow-none disabled:opacity-50',
  'active:translate-y-1 active:shadow-none',
  'focus-visible:outline-3',
  'data-[state=checked]:pointer-events-none',

  // Primary color
  'group-data-[color=primary]:border-primary-border group-data-[color=primary]:shadow-primary-shadow group-data-[color=primary]:bg-primary-background',
  'group-data-[color=primary]:focus-visible:outline-primary-border/60',
  'group-data-[color=primary]:data-[state=checked]:border-primary-border group-data-[color=primary]:data-[state=checked]:bg-primary-background group-data-[color=primary]:data-[state=checked]:text-primary-foreground',

  // Secondary color
  'group-data-[color=secondary]:border-secondary-border group-data-[color=secondary]:shadow-secondary-shadow group-data-[color=secondary]:bg-secondary-background',
  'group-data-[color=secondary]:focus-visible:outline-secondary-border/60',
  'group-data-[color=secondary]:data-[state=checked]:border-secondary-border group-data-[color=secondary]:data-[state=checked]:bg-secondary-background group-data-[color=secondary]:data-[state=checked]:text-secondary-foreground',

  // Tertiary color
  'group-data-[color=tertiary]:border-tertiary-border group-data-[color=tertiary]:shadow-tertiary-shadow group-data-[color=tertiary]:bg-tertiary-background',
  'group-data-[color=tertiary]:focus-visible:outline-tertiary-border/60',
  'group-data-[color=tertiary]:data-[state=checked]:border-tertiary-border group-data-[color=tertiary]:data-[state=checked]:bg-tertiary-background group-data-[color=tertiary]:data-[state=checked]:text-tertiary-foreground',

  // Accent color
  'group-data-[color=accent]:border-accent-border group-data-[color=accent]:shadow-accent-shadow group-data-[color=accent]:bg-accent-background',
  'group-data-[color=accent]:focus-visible:outline-accent-border/60',
  'group-data-[color=accent]:data-[state=checked]:border-accent-border group-data-[color=accent]:data-[state=checked]:bg-accent-background group-data-[color=accent]:data-[state=checked]:text-accent-foreground',
);
type RadioGroupItemProps = RadixRadioGroupItemProps;
function RadioGroupItem({ className, children, ...props }: RadioGroupItemProps) {
  if (children)
    return (
      <Item className={cx(radioGroupItemStyles, className)} data-slot='radio-group-item' {...props}>
        {children}
      </Item>
    );

  return (
    <Item className={cx(radioGroupItemStyles, className)} data-slot='radio-group-item' {...props}>
      <RadioGroupIndicator>
        <CircleIcon className='size-2.5 fill-current' />
      </RadioGroupIndicator>
    </Item>
  );
}

export { RadioGroup, RadioGroupItem, RadioGroupIndicator };
export type { RadioGroupProps, RadioGroupItemProps, RadioGroupIndicatorProps };
