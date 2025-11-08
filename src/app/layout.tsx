import { fonts } from '@/configs/font';
import '@/styles/globals.css';
import type { ReactNode } from 'react';
import { cn } from '@/utils/tailwind';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { noto, roboto } = fonts;

  return (
    <html className={cn(noto.variable, roboto.variable)} lang='en'>
      <body className={cn('scroll-smooth antialiased')}>{children}</body>
    </html>
  );
}
