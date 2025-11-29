import { H2, H3 } from '@/components/ui/primitive/typography';

export default function HomePage() {
  return (
    <div className='-translate-y-1/2 -translate-x-1/2 absolute top-1/2 left-1/2 w-full max-w-7xl'>
      <H3 className='mx-auto'>I don't know what is this style called</H3>
      <H2 className='mx-auto' color='primary' variant='highlight'>
        Pop-brutalism?
      </H2>
    </div>
  );
}
