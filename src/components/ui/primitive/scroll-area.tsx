import type {
  ScrollAreaCornerProps as RadixScrollAreaCornerProps,
  ScrollAreaProps as RadixScrollAreaProps,
  ScrollAreaScrollbarProps as RadixScrollAreaScrollbarProps,
  ScrollAreaThumbProps as RadixScrollAreaThumbProps,
  ScrollAreaViewportProps as RadixScrollAreaViewportProps,
} from '@radix-ui/react-scroll-area';
import {
  ScrollArea as RadixScrollArea,
  ScrollAreaCorner as RadixScrollAreaCorner,
  ScrollAreaScrollbar as RadixScrollAreaScrollbar,
  ScrollAreaThumb as RadixScrollAreaThumb,
  ScrollAreaViewport as RadixScrollAreaViewport,
} from '@radix-ui/react-scroll-area';
import { cx } from 'class-variance-authority';

type ScrollAreaRootProps = RadixScrollAreaProps & {};
function ScrollAreaRoot({ className, children, ...props }: ScrollAreaRootProps) {
  return <RadixScrollArea className={cx('relative', className)} data-slot='scroll-area' {...props} />;
}

type ScrollAreaViewportProps = RadixScrollAreaViewportProps & {};
function ScrollAreaViewport({ className, children, ...props }: ScrollAreaViewportProps) {
  return (
    <RadixScrollAreaViewport
      className={cx(
        'size-full rounded-[inherit] outline-none transition-[color,box-shadow] focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50',
        className,
      )}
      data-slot='scroll-area-viewport'
      {...props}
    />
  );
}

type ScrollAreaScrollBarProps = RadixScrollAreaScrollbarProps & {};
function ScrollAreaScrollBar({ className, orientation = 'vertical', ...props }: ScrollAreaScrollBarProps) {
  return (
    <RadixScrollAreaScrollbar
      className={cx(
        'flex touch-none select-none p-px transition-colors',
        orientation === 'vertical' && 'h-full w-2.5 border-l border-l-transparent',
        orientation === 'horizontal' && 'h-2.5 flex-col border-t border-t-transparent',
        className,
      )}
      data-slot='scroll-area-scrollbar'
      orientation={orientation}
      {...props}
    />
  );
}

type ScrollAreaScrollBarThumbProps = RadixScrollAreaThumbProps & {};
function ScrollAreaScrollBarThumb({ className, ...props }: ScrollAreaScrollBarThumbProps) {
  return (
    <RadixScrollAreaThumb className='relative flex-1 rounded-full bg-border' data-slot='scroll-area-thumb' {...props} />
  );
}

type ScrollAreaCornerProps = RadixScrollAreaCornerProps & {};
function ScrollAreaCorner({ className, ...props }: ScrollAreaCornerProps) {
  return <RadixScrollAreaCorner className={cx('size-2', className)} data-slot='scroll-area-corner' {...props} />;
}

export { ScrollAreaRoot, ScrollAreaScrollBar, ScrollAreaScrollBarThumb, ScrollAreaViewport, ScrollAreaCorner };
export type {
  ScrollAreaRootProps,
  ScrollAreaScrollBarProps,
  ScrollAreaScrollBarThumbProps,
  ScrollAreaViewportProps,
  ScrollAreaCornerProps,
};
