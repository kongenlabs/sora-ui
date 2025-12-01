import { cx } from 'class-variance-authority';
import type { ComponentProps } from 'react';
import type { Color } from '../types';

type InputProps = ComponentProps<'input'> & {
  color?: Color;
};

function Input({ className, type, color = 'primary', ...props }: InputProps) {
  return (
    <input
      className={cx(
        'h-10 w-full min-w-0 rounded border-2 bg-background px-3 py-1 text-p outline-none transition-colors',
        'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        'focus-within:placeholder:opacity-0',
        'file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm',

        // Primary color
        'data-[color=primary]:border-primary-border data-[color=primary]:bg-primary-container data-[color=primary]:text-on-primary-container data-[color=primary]:placeholder:text-on-primary-container/30',
        'data-[color=primary]:selection:bg-primary data-[color=primary]:selection:text-on-primary',

        // Secondary color
        'data-[color=secondary]:border-secondary-border data-[color=secondary]:bg-secondary-container data-[color=secondary]:text-on-secondary-container data-[color=secondary]:placeholder:text-on-secondary-container/30',
        'data-[color=secondary]:selection:bg-secondary data-[color=secondary]:selection:text-on-secondary',

        // Tertiary color
        'data-[color=tertiary]:border-tertiary-border data-[color=tertiary]:bg-tertiary-container data-[color=tertiary]:text-on-tertiary-container data-[color=tertiary]:placeholder:text-on-tertiary-container/30',
        'data-[color=tertiary]:selection:bg-tertiary data-[color=tertiary]:selection:text-on-tertiary',
        className,
      )}
      data-color={color}
      data-slot='input'
      type={type}
      {...props}
    />
  );
}

export { Input };
export type { InputProps };
