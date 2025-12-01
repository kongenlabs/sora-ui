// TODO: Maybe need to update this component with using Container/Box styled components

import { GithubIcon } from 'lucide-react';
import { LogoWithTextHorizontal } from '@/components/ui/common/logo';
import { ThemeToggleSwitch } from '@/components/ui/common/theme-toggle-switch';
import { Button } from '@/components/ui/primitive/button';
import { A } from '@/components/ui/primitive/typography';

const HEADER_NAVIGATION_LINKS = [
  {
    href: '/documentation',
    label: 'Documentation',
  },
  {
    href: '/components',
    label: 'Components',
  },
];

const HEADER_SOCIAL_LINKS = [
  {
    href: 'https://github.com/kongenlabs/sora-ui',
    icon: GithubIcon,
    label: 'GitHub',
  },
];

export default function BaseHeader() {
  return (
    <header className='mx-auto flex max-w-7xl items-center gap-4 px-10 py-6'>
      <LogoWithTextHorizontal />
      <nav className='grow'>
        <ul className='flex items-center justify-center gap-8'>
          {HEADER_NAVIGATION_LINKS.map((link) => (
            <li key={link.href}>
              <A className='font-medium hover:text-on-primary-container' href={link.href}>
                {link.label}
              </A>
            </li>
          ))}
        </ul>
      </nav>
      <div className='flex gap-2'>
        {HEADER_SOCIAL_LINKS.map((link) => (
          <A href={link.href} key={link.href} target='_blank'>
            <Button icon size='sm'>
              <link.icon />
            </Button>
          </A>
        ))}
      </div>
      <ThemeToggleSwitch />
    </header>
  );
}
