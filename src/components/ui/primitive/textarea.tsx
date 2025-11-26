import { cx } from 'class-variance-authority';
import type { ComponentProps } from 'react';
import type { Color } from '../types';

const textareaStyles = cx(
  'field-sizing-content flex min-h-16 resize-none w-full rounded border-2 bg-background px-3 py-2 text-p transition-colors outline-none',
  'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
  'placeholder:text-muted-foreground',

  // Primary color
  'data-[color=primary]:border-primary-border data-[color=primary]:text-on-primary-container',
  'data-[color=primary]:selection:bg-primary data-[color=primary]:selection:text-on-primary',
  'data-[color=primary]:focus-visible:border-primary-border data-[color=primary]:focus-visible:bg-primary-container',

  // Secondary color
  'data-[color=secondary]:border-secondary-border data-[color=secondary]:text-on-secondary-container',
  'data-[color=secondary]:selection:bg-secondary data-[color=secondary]:selection:text-on-secondary',
  'data-[color=secondary]:focus-visible:border-secondary-border data-[color=secondary]:focus-visible:bg-secondary-container',

  // Tertiary color
  'data-[color=tertiary]:border-tertiary-border data-[color=tertiary]:text-on-tertiary-container',
  'data-[color=tertiary]:selection:bg-tertiary data-[color=tertiary]:selection:text-on-tertiary',
  'data-[color=tertiary]:focus-visible:border-tertiary-border data-[color=tertiary]:focus-visible:bg-tertiary-container',
);

type TextareaProps = ComponentProps<'textarea'> & {
  color?: Color;
};

function Textarea({ className, color = 'primary', ...props }: TextareaProps) {
  return <textarea className={cx(textareaStyles, className)} data-color={color} data-slot='textarea' {...props} />;
}

export { Textarea };
export type { TextareaProps };
