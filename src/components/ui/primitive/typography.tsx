import type { LinkProps } from 'next/link';
import Link from 'next/link';
import type { ComponentProps } from 'react';
import { cn } from '@/utils/tailwind';

export function H1({ className, ...props }: ComponentProps<'h1'>) {
  return <h1 className={cn('font-extrabold font-sans text-h1 leading-tight tracking-tighter', className)} {...props} />;
}

export function H2({ className, ...props }: ComponentProps<'h2'>) {
  return <h2 className={cn('font-bold font-sans text-h2 leading-tight tracking-tight', className)} {...props} />;
}

export function H3({ className, ...props }: ComponentProps<'h3'>) {
  return <h3 className={cn('font-sans font-semibold text-h3 leading-snug tracking-tight', className)} {...props} />;
}

export function H4({ className, ...props }: ComponentProps<'h4'>) {
  return <h4 className={cn('font-sans font-semibold text-h4 leading-snug tracking-normal', className)} {...props} />;
}

export function H5({ className, ...props }: ComponentProps<'h5'>) {
  return <h5 className={cn('font-medium font-sans text-h5 leading-normal tracking-normal', className)} {...props} />;
}

export function H6({ className, ...props }: ComponentProps<'h6'>) {
  return <h6 className={cn('font-medium font-sans text-h6 leading-normal tracking-wide', className)} {...props} />;
}

export function Paragraph({ className, ...props }: ComponentProps<'p'>) {
  return <p className={cn('font-serif text-p leading-relaxed tracking-normal', className)} {...props} />;
}

export function A({ className, ...props }: LinkProps & ComponentProps<'a'>) {
  return (
    <Link
      className={cn('font-serif text-a leading-relaxed tracking-normal', 'hover:underline', className)}
      {...props}
    />
  );
}

export function Strong({ className, ...props }: ComponentProps<'strong'>) {
  return <strong className={cn('text-strong leading-relaxed tracking-normal', className)} {...props} />;
}

export function Emphasis({ className, ...props }: ComponentProps<'em'>) {
  return <em className={cn('text-em leading-relaxed tracking-normal', className)} {...props} />;
}

export function Small({ className, ...props }: ComponentProps<'small'>) {
  return <small className={cn('text-small leading-relaxed tracking-wide', className)} {...props} />;
}

export function Blockquote({ className, ...props }: ComponentProps<'blockquote'>) {
  return (
    <blockquote className={cn('font-serif text-blockquote leading-relaxed tracking-tight', className)} {...props} />
  );
}

export function Pre({ className, ...props }: ComponentProps<'pre'>) {
  return <pre className={cn('font-mono text-pre leading-relaxed tracking-tight', className)} {...props} />;
}

export function Code({ className, ...props }: ComponentProps<'code'>) {
  return <code className={cn('font-mono text-code leading-relaxed tracking-tight', className)} {...props} />;
}

export function Kbd({ className, ...props }: ComponentProps<'kbd'>) {
  return <kbd className={cn('font-mono text-kbd leading-relaxed tracking-wide', className)} {...props} />;
}

export function Figcaption({ className, ...props }: ComponentProps<'figcaption'>) {
  return <figcaption className={cn('font-serif text-figcaption tracking-normal', className)} {...props} />;
}
