import { cx } from 'class-variance-authority';
import type { LinkProps } from 'next/link';
import Link from 'next/link';
import type { ComponentProps } from 'react';
import type { Color } from '../types';

type TypographyVariantProps = {
  variant?: 'default' | 'highlight';
  color?: Color | undefined;
};

type H1Props = ComponentProps<'h1'> & TypographyVariantProps;
function H1({ className, variant = 'default', color, ...props }: H1Props) {
  return (
    <h1
      className={cx(
        'w-fit font-extrabold font-sans text-h1-sm leading-tight tracking-tighter md:text-h1-md xl:text-h1-lg',
        'data-[variant=highlight]:rounded-xl data-[variant=highlight]:border-2 data-[variant=highlight]:px-5',
        'data-[color=primary]:data-[variant=default]:text-primary',
        'data-[color=primary]:data-[variant=highlight]:border-primary-border data-[color=primary]:data-[variant=highlight]:bg-primary data-[color=primary]:data-[variant=highlight]:text-on-primary',
        'data-[color=secondary]:data-[variant=default]:text-secondary',
        'data-[color=secondary]:data-[variant=highlight]:border-secondary-border data-[color=secondary]:data-[variant=highlight]:bg-secondary data-[color=secondary]:data-[variant=highlight]:text-on-secondary',
        'data-[color=tertiary]:data-[variant=default]:text-tertiary',
        'data-[color=tertiary]:data-[variant=highlight]:border-tertiary-border data-[color=tertiary]:data-[variant=highlight]:bg-tertiary data-[color=tertiary]:data-[variant=highlight]:text-on-tertiary',
        className,
      )}
      data-color={color}
      data-variant={variant}
      {...props}
    />
  );
}

type H2Props = ComponentProps<'h2'> & TypographyVariantProps;
function H2({ className, variant = 'default', color, ...props }: H2Props) {
  return (
    <h2
      className={cx(
        'w-fit font-bold font-sans text-h2-sm leading-tight tracking-tight md:text-h2-md xl:text-h2-lg',
        'data-[variant=highlight]:rounded-xl data-[variant=highlight]:border-2 data-[variant=highlight]:px-4',
        'data-[color=primary]:data-[variant=default]:text-primary',
        'data-[color=primary]:data-[variant=highlight]:border-primary-border data-[color=primary]:data-[variant=highlight]:bg-primary data-[color=primary]:data-[variant=highlight]:text-on-primary',
        'data-[color=secondary]:data-[variant=default]:text-secondary',
        'data-[color=secondary]:data-[variant=highlight]:border-secondary-border data-[color=secondary]:data-[variant=highlight]:bg-secondary data-[color=secondary]:data-[variant=highlight]:text-on-secondary',
        'data-[color=tertiary]:data-[variant=default]:text-tertiary',
        'data-[color=tertiary]:data-[variant=highlight]:border-tertiary-border data-[color=tertiary]:data-[variant=highlight]:bg-tertiary data-[color=tertiary]:data-[variant=highlight]:text-on-tertiary',
        className,
      )}
      data-color={color}
      data-variant={variant}
      {...props}
    />
  );
}

type H3Props = ComponentProps<'h3'> & TypographyVariantProps;
function H3({ className, variant = 'default', color, ...props }: H3Props) {
  return (
    <h3
      className={cx(
        'w-fit font-sans font-semibold text-h3-sm leading-snug tracking-tight md:text-h3-md xl:text-h3-lg',
        'data-[variant=highlight]:rounded-lg data-[variant=highlight]:border-2 data-[variant=highlight]:px-3',
        'data-[color=primary]:data-[variant=default]:text-primary',
        'data-[color=primary]:data-[variant=highlight]:border-primary-border data-[color=primary]:data-[variant=highlight]:bg-primary data-[color=primary]:data-[variant=highlight]:text-on-primary',
        'data-[color=secondary]:data-[variant=default]:text-secondary',
        'data-[color=secondary]:data-[variant=highlight]:border-secondary-border data-[color=secondary]:data-[variant=highlight]:bg-secondary data-[color=secondary]:data-[variant=highlight]:text-on-secondary',
        'data-[color=tertiary]:data-[variant=default]:text-tertiary',
        'data-[color=tertiary]:data-[variant=highlight]:border-tertiary-border data-[color=tertiary]:data-[variant=highlight]:bg-tertiary data-[color=tertiary]:data-[variant=highlight]:text-on-tertiary',
        className,
      )}
      data-color={color}
      data-variant={variant}
      {...props}
    />
  );
}

type H4Props = ComponentProps<'h4'> & TypographyVariantProps;
function H4({ className, variant = 'default', color, ...props }: H4Props) {
  return (
    <h4
      className={cx(
        'w-fit font-sans font-semibold text-h4-sm leading-snug tracking-normal md:text-h4-md xl:text-h4-lg',
        'data-[variant=highlight]:rounded-lg data-[variant=highlight]:border-2 data-[variant=highlight]:px-3',
        'data-[color=primary]:data-[variant=default]:text-primary',
        'data-[color=primary]:data-[variant=highlight]:border-primary-border data-[color=primary]:data-[variant=highlight]:bg-primary data-[color=primary]:data-[variant=highlight]:text-on-primary',
        'data-[color=secondary]:data-[variant=default]:text-secondary',
        'data-[color=secondary]:data-[variant=highlight]:border-secondary-border data-[color=secondary]:data-[variant=highlight]:bg-secondary data-[color=secondary]:data-[variant=highlight]:text-on-secondary',
        'data-[color=tertiary]:data-[variant=default]:text-tertiary',
        'data-[color=tertiary]:data-[variant=highlight]:border-tertiary-border data-[color=tertiary]:data-[variant=highlight]:bg-tertiary data-[color=tertiary]:data-[variant=highlight]:text-on-tertiary',
        className,
      )}
      data-color={color}
      data-variant={variant}
      {...props}
    />
  );
}

type H5Props = ComponentProps<'h5'> & TypographyVariantProps;
function H5({ className, variant = 'default', color, ...props }: H5Props) {
  return (
    <h5
      className={cx(
        'w-fit font-medium font-sans text-h5-sm leading-normal tracking-normal md:text-h5-md xl:text-h5-lg',
        'data-[variant=highlight]:rounded-md data-[variant=highlight]:border-2 data-[variant=highlight]:px-2',
        'data-[color=primary]:data-[variant=default]:text-primary',
        'data-[color=primary]:data-[variant=highlight]:border-primary-border data-[color=primary]:data-[variant=highlight]:bg-primary data-[color=primary]:data-[variant=highlight]:text-on-primary',
        'data-[color=secondary]:data-[variant=default]:text-secondary',
        'data-[color=secondary]:data-[variant=highlight]:border-secondary-border data-[color=secondary]:data-[variant=highlight]:bg-secondary data-[color=secondary]:data-[variant=highlight]:text-on-secondary',
        'data-[color=tertiary]:data-[variant=default]:text-tertiary',
        'data-[color=tertiary]:data-[variant=highlight]:border-tertiary-border data-[color=tertiary]:data-[variant=highlight]:bg-tertiary data-[color=tertiary]:data-[variant=highlight]:text-on-tertiary',
        className,
      )}
      data-color={color}
      data-variant={variant}
      {...props}
    />
  );
}

type H6Props = ComponentProps<'h6'> & TypographyVariantProps;
function H6({ className, variant = 'default', color, ...props }: H6Props) {
  return (
    <h6
      className={cx(
        'w-fit font-medium font-sans text-h6-sm leading-normal tracking-wide md:text-h6-md xl:text-h6-lg',
        'data-[variant=highlight]:rounded-md data-[variant=highlight]:border-2 data-[variant=highlight]:px-2',
        'data-[color=primary]:data-[variant=default]:text-primary',
        'data-[color=primary]:data-[variant=highlight]:border-primary-border data-[color=primary]:data-[variant=highlight]:bg-primary data-[color=primary]:data-[variant=highlight]:text-on-primary',
        'data-[color=secondary]:data-[variant=default]:text-secondary',
        'data-[color=secondary]:data-[variant=highlight]:border-secondary-border data-[color=secondary]:data-[variant=highlight]:bg-secondary data-[color=secondary]:data-[variant=highlight]:text-on-secondary',
        'data-[color=tertiary]:data-[variant=default]:text-tertiary',
        'data-[color=tertiary]:data-[variant=highlight]:border-tertiary-border data-[color=tertiary]:data-[variant=highlight]:bg-tertiary data-[color=tertiary]:data-[variant=highlight]:text-on-tertiary',
        className,
      )}
      data-color={color}
      data-variant={variant}
      {...props}
    />
  );
}

type ParagraphProps = ComponentProps<'p'> & TypographyVariantProps;
function Paragraph({ className, variant = 'default', color, ...props }: ParagraphProps) {
  return (
    <p
      className={cx(
        'w-fit font-serif text-p leading-relaxed tracking-normal',
        'data-[variant=highlight]:rounded-md data-[variant=highlight]:border-2 data-[variant=highlight]:px-2 data-[variant=highlight]:py-1',
        'data-[color=primary]:data-[variant=default]:text-primary',
        'data-[color=primary]:data-[variant=highlight]:border-primary-border data-[color=primary]:data-[variant=highlight]:bg-primary data-[color=primary]:data-[variant=highlight]:text-on-primary',
        'data-[color=secondary]:data-[variant=default]:text-secondary',
        'data-[color=secondary]:data-[variant=highlight]:border-secondary-border data-[color=secondary]:data-[variant=highlight]:bg-secondary data-[color=secondary]:data-[variant=highlight]:text-on-secondary',
        'data-[color=tertiary]:data-[variant=default]:text-tertiary',
        'data-[color=tertiary]:data-[variant=highlight]:border-tertiary-border data-[color=tertiary]:data-[variant=highlight]:bg-tertiary data-[color=tertiary]:data-[variant=highlight]:text-on-tertiary',
        className,
      )}
      data-color={color}
      data-variant={variant}
      {...props}
    />
  );
}

type AProps = LinkProps & ComponentProps<'a'> & TypographyVariantProps;
function A({ className, variant = 'default', color, ...props }: AProps) {
  return (
    <Link
      className={cx(
        'w-fit font-serif text-a leading-relaxed tracking-normal',
        'hover:underline',
        'data-[variant=highlight]:rounded-md data-[variant=highlight]:border-2 data-[variant=highlight]:px-2 data-[variant=highlight]:py-1',
        'data-[color=primary]:data-[variant=default]:text-primary',
        'data-[color=primary]:data-[variant=highlight]:border-primary-border data-[color=primary]:data-[variant=highlight]:bg-primary data-[color=primary]:data-[variant=highlight]:text-on-primary',
        'data-[color=secondary]:data-[variant=default]:text-secondary',
        'data-[color=secondary]:data-[variant=highlight]:border-secondary-border data-[color=secondary]:data-[variant=highlight]:bg-secondary data-[color=secondary]:data-[variant=highlight]:text-on-secondary',
        'data-[color=tertiary]:data-[variant=default]:text-tertiary',
        'data-[color=tertiary]:data-[variant=highlight]:border-tertiary-border data-[color=tertiary]:data-[variant=highlight]:bg-tertiary data-[color=tertiary]:data-[variant=highlight]:text-on-tertiary',
        className,
      )}
      data-color={color}
      data-variant={variant}
      {...props}
    />
  );
}

type StrongProps = ComponentProps<'strong'> & TypographyVariantProps;
function Strong({ className, variant = 'default', color, ...props }: StrongProps) {
  return (
    <strong
      className={cx(
        'w-fit text-strong leading-relaxed tracking-normal',
        'data-[variant=highlight]:rounded data-[variant=highlight]:border-2 data-[variant=highlight]:px-1.5 data-[variant=highlight]:py-0.5',
        'data-[color=primary]:data-[variant=default]:text-primary',
        'data-[color=primary]:data-[variant=highlight]:border-primary-border data-[color=primary]:data-[variant=highlight]:bg-primary data-[color=primary]:data-[variant=highlight]:text-on-primary',
        'data-[color=secondary]:data-[variant=default]:text-secondary',
        'data-[color=secondary]:data-[variant=highlight]:border-secondary-border data-[color=secondary]:data-[variant=highlight]:bg-secondary data-[color=secondary]:data-[variant=highlight]:text-on-secondary',
        'data-[color=tertiary]:data-[variant=default]:text-tertiary',
        'data-[color=tertiary]:data-[variant=highlight]:border-tertiary-border data-[color=tertiary]:data-[variant=highlight]:bg-tertiary data-[color=tertiary]:data-[variant=highlight]:text-on-tertiary',
        className,
      )}
      data-color={color}
      data-variant={variant}
      {...props}
    />
  );
}

type EmphasisProps = ComponentProps<'em'> & TypographyVariantProps;
function Emphasis({ className, variant = 'default', color, ...props }: EmphasisProps) {
  return (
    <em
      className={cx(
        'w-fit text-em leading-relaxed tracking-normal',
        'data-[variant=highlight]:rounded data-[variant=highlight]:border-2 data-[variant=highlight]:px-1.5 data-[variant=highlight]:py-0.5',
        'data-[color=primary]:data-[variant=default]:text-primary',
        'data-[color=primary]:data-[variant=highlight]:border-primary-border data-[color=primary]:data-[variant=highlight]:bg-primary data-[color=primary]:data-[variant=highlight]:text-on-primary',
        'data-[color=secondary]:data-[variant=default]:text-secondary',
        'data-[color=secondary]:data-[variant=highlight]:border-secondary-border data-[color=secondary]:data-[variant=highlight]:bg-secondary data-[color=secondary]:data-[variant=highlight]:text-on-secondary',
        'data-[color=tertiary]:data-[variant=default]:text-tertiary',
        'data-[color=tertiary]:data-[variant=highlight]:border-tertiary-border data-[color=tertiary]:data-[variant=highlight]:bg-tertiary data-[color=tertiary]:data-[variant=highlight]:text-on-tertiary',
        className,
      )}
      data-color={color}
      data-variant={variant}
      {...props}
    />
  );
}

type SmallProps = ComponentProps<'small'> & TypographyVariantProps;
function Small({ className, variant = 'default', color, ...props }: SmallProps) {
  return (
    <small
      className={cx(
        'w-fit text-small-sm leading-relaxed tracking-wide md:text-small-md xl:text-small-lg',
        'data-[variant=highlight]:rounded data-[variant=highlight]:border-2 data-[variant=highlight]:px-1.5 data-[variant=highlight]:py-0.5',
        'data-[color=primary]:data-[variant=default]:text-primary',
        'data-[color=primary]:data-[variant=highlight]:border-primary-border data-[color=primary]:data-[variant=highlight]:bg-primary data-[color=primary]:data-[variant=highlight]:text-on-primary',
        'data-[color=secondary]:data-[variant=default]:text-secondary',
        'data-[color=secondary]:data-[variant=highlight]:border-secondary-border data-[color=secondary]:data-[variant=highlight]:bg-secondary data-[color=secondary]:data-[variant=highlight]:text-on-secondary',
        'data-[color=tertiary]:data-[variant=default]:text-tertiary',
        'data-[color=tertiary]:data-[variant=highlight]:border-tertiary-border data-[color=tertiary]:data-[variant=highlight]:bg-tertiary data-[color=tertiary]:data-[variant=highlight]:text-on-tertiary',
        className,
      )}
      data-color={color}
      data-variant={variant}
      {...props}
    />
  );
}

type BlockquoteProps = ComponentProps<'blockquote'> & TypographyVariantProps;
function Blockquote({ className, variant = 'default', color, ...props }: BlockquoteProps) {
  return (
    <blockquote
      className={cx(
        'w-fit font-serif text-blockquote leading-relaxed tracking-tight',
        'data-[variant=highlight]:rounded-md data-[variant=highlight]:border-2 data-[variant=highlight]:px-3 data-[variant=highlight]:py-2',
        'data-[color=primary]:data-[variant=default]:text-primary',
        'data-[color=primary]:data-[variant=highlight]:border-primary-border data-[color=primary]:data-[variant=highlight]:bg-primary data-[color=primary]:data-[variant=highlight]:text-on-primary',
        'data-[color=secondary]:data-[variant=default]:text-secondary',
        'data-[color=secondary]:data-[variant=highlight]:border-secondary-border data-[color=secondary]:data-[variant=highlight]:bg-secondary data-[color=secondary]:data-[variant=highlight]:text-on-secondary',
        'data-[color=tertiary]:data-[variant=default]:text-tertiary',
        'data-[color=tertiary]:data-[variant=highlight]:border-tertiary-border data-[color=tertiary]:data-[variant=highlight]:bg-tertiary data-[color=tertiary]:data-[variant=highlight]:text-on-tertiary',
        className,
      )}
      data-color={color}
      data-variant={variant}
      {...props}
    />
  );
}

type PreProps = ComponentProps<'pre'> & TypographyVariantProps;
function Pre({ className, variant = 'default', color, ...props }: PreProps) {
  return (
    <pre
      className={cx(
        'w-fit font-mono text-pre leading-relaxed tracking-tight',
        'data-[variant=highlight]:rounded-md data-[variant=highlight]:border-2 data-[variant=highlight]:px-3 data-[variant=highlight]:py-2',
        'data-[color=primary]:data-[variant=default]:text-primary',
        'data-[color=primary]:data-[variant=highlight]:border-primary-border data-[color=primary]:data-[variant=highlight]:bg-primary data-[color=primary]:data-[variant=highlight]:text-on-primary',
        'data-[color=secondary]:data-[variant=default]:text-secondary',
        'data-[color=secondary]:data-[variant=highlight]:border-secondary-border data-[color=secondary]:data-[variant=highlight]:bg-secondary data-[color=secondary]:data-[variant=highlight]:text-on-secondary',
        'data-[color=tertiary]:data-[variant=default]:text-tertiary',
        'data-[color=tertiary]:data-[variant=highlight]:border-tertiary-border data-[color=tertiary]:data-[variant=highlight]:bg-tertiary data-[color=tertiary]:data-[variant=highlight]:text-on-tertiary',
        className,
      )}
      data-color={color}
      data-variant={variant}
      {...props}
    />
  );
}

type CodeProps = ComponentProps<'code'> & TypographyVariantProps;
function Code({ className, variant = 'default', color, ...props }: CodeProps) {
  return (
    <code
      className={cx(
        'w-fit font-mono text-code leading-relaxed tracking-tight',
        'data-[variant=highlight]:rounded data-[variant=highlight]:border-2 data-[variant=highlight]:px-1.5 data-[variant=highlight]:py-0.5',
        'data-[color=primary]:data-[variant=default]:text-primary',
        'data-[color=primary]:data-[variant=highlight]:border-primary-border data-[color=primary]:data-[variant=highlight]:bg-primary data-[color=primary]:data-[variant=highlight]:text-on-primary',
        'data-[color=secondary]:data-[variant=default]:text-secondary',
        'data-[color=secondary]:data-[variant=highlight]:border-secondary-border data-[color=secondary]:data-[variant=highlight]:bg-secondary data-[color=secondary]:data-[variant=highlight]:text-on-secondary',
        'data-[color=tertiary]:data-[variant=default]:text-tertiary',
        'data-[color=tertiary]:data-[variant=highlight]:border-tertiary-border data-[color=tertiary]:data-[variant=highlight]:bg-tertiary data-[color=tertiary]:data-[variant=highlight]:text-on-tertiary',
        className,
      )}
      data-color={color}
      data-variant={variant}
      {...props}
    />
  );
}

type KbdProps = ComponentProps<'kbd'> & TypographyVariantProps;
function Kbd({ className, variant = 'default', color, ...props }: KbdProps) {
  return (
    <kbd
      className={cx(
        'w-fit font-mono text-kbd leading-relaxed tracking-wide',
        'data-[variant=highlight]:rounded data-[variant=highlight]:border-2 data-[variant=highlight]:px-1.5 data-[variant=highlight]:py-0.5',
        'data-[color=primary]:data-[variant=default]:text-primary',
        'data-[color=primary]:data-[variant=highlight]:border-primary-border data-[color=primary]:data-[variant=highlight]:bg-primary data-[color=primary]:data-[variant=highlight]:text-on-primary',
        'data-[color=secondary]:data-[variant=default]:text-secondary',
        'data-[color=secondary]:data-[variant=highlight]:border-secondary-border data-[color=secondary]:data-[variant=highlight]:bg-secondary data-[color=secondary]:data-[variant=highlight]:text-on-secondary',
        'data-[color=tertiary]:data-[variant=default]:text-tertiary',
        'data-[color=tertiary]:data-[variant=highlight]:border-tertiary-border data-[color=tertiary]:data-[variant=highlight]:bg-tertiary data-[color=tertiary]:data-[variant=highlight]:text-on-tertiary',
        className,
      )}
      data-color={color}
      data-variant={variant}
      {...props}
    />
  );
}

type FigcaptionProps = ComponentProps<'figcaption'> & TypographyVariantProps;
function Figcaption({ className, variant = 'default', color, ...props }: FigcaptionProps) {
  return (
    <figcaption
      className={cx(
        'w-fit font-serif text-figcaption tracking-normal',
        'data-[variant=highlight]:rounded data-[variant=highlight]:border-2 data-[variant=highlight]:px-1.5 data-[variant=highlight]:py-0.5',
        'data-[color=primary]:data-[variant=default]:text-primary',
        'data-[color=primary]:data-[variant=highlight]:border-primary-border data-[color=primary]:data-[variant=highlight]:bg-primary data-[color=primary]:data-[variant=highlight]:text-on-primary',
        'data-[color=secondary]:data-[variant=default]:text-secondary',
        'data-[color=secondary]:data-[variant=highlight]:border-secondary-border data-[color=secondary]:data-[variant=highlight]:bg-secondary data-[color=secondary]:data-[variant=highlight]:text-on-secondary',
        'data-[color=tertiary]:data-[variant=default]:text-tertiary',
        'data-[color=tertiary]:data-[variant=highlight]:border-tertiary-border data-[color=tertiary]:data-[variant=highlight]:bg-tertiary data-[color=tertiary]:data-[variant=highlight]:text-on-tertiary',
        className,
      )}
      data-color={color}
      data-variant={variant}
      {...props}
    />
  );
}

export { H1, H2, H3, H4, H5, H6, Paragraph, A, Strong, Emphasis, Small, Blockquote, Pre, Code, Kbd, Figcaption };

export type {
  H1Props,
  H2Props,
  H3Props,
  H4Props,
  H5Props,
  H6Props,
  ParagraphProps,
  AProps,
  StrongProps,
  EmphasisProps,
  SmallProps,
  BlockquoteProps,
  PreProps,
  CodeProps,
  KbdProps,
  FigcaptionProps,
  TypographyVariantProps,
};
