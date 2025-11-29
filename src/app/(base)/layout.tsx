import type { ReactNode } from 'react';
import BaseHeader from './_components/header';

export default function BaseLayout({ children }: { children: Readonly<ReactNode> }) {
  return (
    <>
      <BaseHeader />
      {children}
    </>
  );
}
