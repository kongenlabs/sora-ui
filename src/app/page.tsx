'use client';

import { LoaderCircleIcon, PlusIcon, SendHorizonalIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/primitive/button';

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <div className='flex items-start gap-2 p-10'>
      <Button size={'sm'}>
        Click <SendHorizonalIcon />
      </Button>
      <Button>
        Click <SendHorizonalIcon />
      </Button>
      <Button color={'primary-5'} size={'lg'}>
        Click <SendHorizonalIcon />
      </Button>
      <Button
        color={'primary-5'}
        disabled={isLoading}
        onClick={() => {
          setIsLoading(true);
        }}
      >
        Click {isLoading ? <LoaderCircleIcon className='animate-spin' /> : <SendHorizonalIcon />}
      </Button>
      <Button icon>
        <PlusIcon />
      </Button>
      <Button color={'primary-1'} icon size={'sm'}>
        <PlusIcon />
      </Button>
      <Button color={'primary-1'} icon variant={'plain'}>
        <PlusIcon />
      </Button>
      <Button color={'primary-3'} icon size={'lg'}>
        <PlusIcon />
      </Button>
      <Button color={'primary-4'} icon>
        <PlusIcon />
      </Button>
      <Button color={'primary-5'} icon>
        <PlusIcon />
      </Button>
    </div>
  );
}
