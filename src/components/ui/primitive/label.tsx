import type { LabelProps as RadixLabelProps } from '@radix-ui/react-label';
import { Label as RadixLabel } from '@radix-ui/react-label';
import { cx } from 'class-variance-authority';

type LabelProps = RadixLabelProps & {};
function Label({ className, ...props }: LabelProps) {
  return (
    <RadixLabel
      className={cx(
        'flex select-none items-center gap-2 leading-none',
        'group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50',
        'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        className,
      )}
      data-slot='label'
      {...props}
    />
  );
}

export { Label };
export type { LabelProps };
