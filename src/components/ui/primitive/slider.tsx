import type {
  SliderProps as RadixSliderProps,
  SliderRangeProps as RadixSliderRangeProps,
  SliderThumbProps as RadixSliderThumbProps,
  SliderTrackProps as RadixSliderTrackProps,
} from '@radix-ui/react-slider';
import { Range, Root, Thumb, Track } from '@radix-ui/react-slider';
import { cx } from 'class-variance-authority';
import type { Color } from '../types';

// Slider Root
const sliderRootStyles = cx(
  'group relative flex w-full touch-none select-none items-center',
  'data-[disabled]:opacity-50',
  'data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col',
);
type SliderRootProps = RadixSliderProps & {
  color?: Color;
};
function SliderRoot({ className, color = 'primary', ...props }: SliderRootProps) {
  return <Root className={cx(sliderRootStyles, className)} data-color={color} data-slot='slider-root' {...props} />;
}

// Slider Track
const sliderTrackStyles = cx(
  'relative grow overflow-hidden rounded-full transition-colors duration-150 border-2 bg-background',
  'data-[orientation=horizontal]:h-2 data-[orientation=horizontal]:w-full',
  'data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2',

  // Primary color
  'group-data-[color=primary]:border-primary-border group-data-[color=primary]:bg-primary-container',

  // Secondary color
  'group-data-[color=secondary]:border-secondary-border group-data-[color=secondary]:bg-secondary-container',

  // Tertiary color
  'group-data-[color=tertiary]:border-tertiary-border group-data-[color=tertiary]:bg-tertiary-container',
);
type SliderTrackProps = RadixSliderTrackProps & {};
function SliderTrack({ className, ...props }: SliderTrackProps) {
  return <Track className={cx(sliderTrackStyles, className)} data-slot='slider-track' {...props} />;
}

// Slider Range
const sliderRangeStyles = cx(
  'absolute transition-colors duration-150',
  'data-[orientation=horizontal]:h-full',
  'data-[orientation=vertical]:w-full',

  // Primary color
  'group-data-[color=primary]:bg-primary',

  // Secondary color
  'group-data-[color=secondary]:bg-secondary',

  // Tertiary color
  'group-data-[color=tertiary]:bg-tertiary',
);
type SliderRangeProps = RadixSliderRangeProps & {};
function SliderRange({ className, ...props }: SliderRangeProps) {
  return <Range className={cx(sliderRangeStyles, className)} data-slot='slider-range' {...props} />;
}

// Slider Thumb
const sliderThumbStyles = cx(
  'block size-4 shrink-0 cursor-pointer rounded-full border-2 shadow-xs -translate-y-0.25 transition-transform duration-150',
  'focus-visible:outline-3',

  // Primary color
  'group-data-[color=primary]:border-primary-border group-data-[color=primary]:bg-primary group-data-[color=primary]:shadow-primary-shadow',
  'group-data-[color=primary]:focus-visible:outline-primary-border/60',

  // Secondary color
  'group-data-[color=secondary]:border-secondary-border group-data-[color=secondary]:bg-secondary group-data-[color=secondary]:shadow-secondary-shadow',
  'group-data-[color=secondary]:focus-visible:outline-secondary-border/60',

  // Tertiary color
  'group-data-[color=tertiary]:border-tertiary-border group-data-[color=tertiary]:bg-tertiary group-data-[color=tertiary]:shadow-tertiary-shadow',
  'group-data-[color=tertiary]:focus-visible:outline-tertiary-border/60',
);
type SliderThumbProps = RadixSliderThumbProps & {};
function SliderThumb({ className, ...props }: SliderThumbProps) {
  return <Thumb className={cx(sliderThumbStyles, className)} data-slot='slider-thumb' {...props} />;
}

// Slider
type SliderProps = SliderRootProps & {};
function Slider({ className, ...props }: SliderProps) {
  return (
    <SliderRoot {...props}>
      <SliderTrack>
        <SliderRange />
      </SliderTrack>
      <SliderThumb />
    </SliderRoot>
  );
}

export { Slider, SliderRange, SliderThumb, SliderTrack };
export type { SliderProps, SliderRangeProps, SliderThumbProps, SliderTrackProps };
