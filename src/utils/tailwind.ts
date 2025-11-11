import { cx } from 'class-variance-authority';
import type { ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return cx(inputs);
}
