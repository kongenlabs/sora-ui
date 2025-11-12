import { UserIcon } from 'lucide-react';
import { Button } from '@/components/ui/primitive/button';

export default function Home() {
  return (
    <div className='flex items-start gap-2 p-20'>
      <Button icon size={'sm'} tooltip='User Profile'>
        <UserIcon />
      </Button>
    </div>
  );
}
