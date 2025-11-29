import Link from 'next/link';
import { Button } from '../primitive/button';
import { H1 } from '../primitive/typography';

export function Logo() {
  return (
    <Link href='/'>
      <Button color='primary' icon size='sm'>
        空
      </Button>
    </Link>
  );
}

export function LogoWithTextVertical() {
  return (
    <Link className='flex flex-col items-center' href='/'>
      <Button color='primary' icon size='sm'>
        空
      </Button>
      <H1 className='text-lg! text-on-primary-container'>SoraUI</H1>
    </Link>
  );
}

export function LogoWithTextHorizontal() {
  return (
    <Link className='flex items-center justify-center gap-2' href='/'>
      <Button color='primary' icon size='sm'>
        空
      </Button>
      <H1 className='text-lg! text-on-primary-container'>SoraUI</H1>
    </Link>
  );
}
