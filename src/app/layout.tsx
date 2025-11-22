import '@/styles/globals.css';

import { cx } from 'class-variance-authority';
import type { ReactNode } from 'react';
import { fonts } from '@/configs/font';
import { ThemeProvider } from '@/contexts/theme';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { noto, roboto } = fonts;

  return (
    <html className={cx(noto.variable, roboto.variable)} lang='en' suppressHydrationWarning>
      <body className={cx('scroll-smooth bg-background text-foreground antialiased')}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
