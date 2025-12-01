import type {
  DialogCloseProps as RadixDialogCloseProps,
  DialogContentProps as RadixDialogContentProps,
  DialogDescriptionProps as RadixDialogDescriptionProps,
  DialogOverlayProps as RadixDialogOverlayProps,
  DialogPortalProps as RadixDialogPortalProps,
  DialogProps as RadixDialogProps,
  DialogTitleProps as RadixDialogTitleProps,
  DialogTriggerProps as RadixDialogTriggerProps,
} from '@radix-ui/react-dialog';
import {
  Dialog as RadixDialog,
  DialogClose as RadixDialogClose,
  DialogContent as RadixDialogContent,
  DialogDescription as RadixDialogDescription,
  DialogOverlay as RadixDialogOverlay,
  DialogPortal as RadixDialogPortal,
  DialogTitle as RadixDialogTitle,
  DialogTrigger as RadixDialogTrigger,
} from '@radix-ui/react-dialog';
import { cx } from 'class-variance-authority';
import type { ComponentProps } from 'react';

type DialogProps = RadixDialogProps & {};
function Dialog({ ...props }: DialogProps) {
  return <RadixDialog data-slot='dialog' {...props} />;
}

type DialogTriggerProps = RadixDialogTriggerProps & {};
function DialogTrigger({ ...props }: DialogTriggerProps) {
  return <RadixDialogTrigger data-slot='dialog-trigger' {...props} />;
}

type DialogPortalProps = RadixDialogPortalProps & {};
function DialogPortal({ ...props }: DialogPortalProps) {
  return <RadixDialogPortal data-slot='dialog-portal' {...props} />;
}

type DialogCloseProps = RadixDialogCloseProps & {};
function DialogClose({ ...props }: DialogCloseProps) {
  return <RadixDialogClose data-slot='dialog-close' {...props} />;
}

type DialogOverlayProps = RadixDialogOverlayProps & {};
function DialogOverlay({ className, ...props }: DialogOverlayProps) {
  return (
    <RadixDialogOverlay
      className={cx(
        'fixed inset-0 z-50 bg-black/50',
        'data-[state=closed]:fade-out-0 data-[state=closed]:animate-out',
        'data-[state=open]:fade-in-0 data-[state=open]:animate-in',
        className,
      )}
      data-slot='dialog-overlay'
      {...props}
    />
  );
}

type DialogContentProps = RadixDialogContentProps & {};
function DialogContent({ className, children, ...props }: DialogContentProps) {
  return (
    <RadixDialogContent
      className={cx(
        '-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 z-50 w-[calc(100%-1rem)] max-w-7xl space-y-4 rounded-xl border-2 bg-background p-6 duration-200',
        'data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:animate-out',
        'data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:animate-in',
        className,
      )}
      data-slot='dialog-content'
      {...props}
    >
      {children}
    </RadixDialogContent>
  );
}

type DialogHeaderProps = ComponentProps<'div'> & {};
function DialogHeader({ className, ...props }: DialogHeaderProps) {
  return (
    <div
      className={cx('flex flex-col gap-2 text-center sm:text-left', className)}
      data-slot='dialog-header'
      {...props}
    />
  );
}

type DialogFooterProps = ComponentProps<'div'> & {};
function DialogFooter({ className, ...props }: DialogFooterProps) {
  return (
    <div
      className={cx('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)}
      data-slot='dialog-footer'
      {...props}
    />
  );
}

type DialogTitleProps = RadixDialogTitleProps & {};
function DialogTitle({ className, ...props }: DialogTitleProps) {
  return <RadixDialogTitle className={cx(className)} data-slot='dialog-title' {...props} />;
}

type DialogDescriptionProps = RadixDialogDescriptionProps & {};
function DialogDescription({ className, ...props }: DialogDescriptionProps) {
  return <RadixDialogDescription className={cx(className)} data-slot='dialog-description' {...props} />;
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
export type {
  DialogProps,
  DialogTriggerProps,
  DialogPortalProps,
  DialogCloseProps,
  DialogOverlayProps,
  DialogContentProps,
  DialogTitleProps,
  DialogDescriptionProps,
  DialogHeaderProps,
  DialogFooterProps,
};
