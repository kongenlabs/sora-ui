import { H2, H3 } from '@/components/ui/primitive/typography';

export default function HomePage() {
  return (
    <div className='-translate-y-1/2 -translate-x-1/2 absolute top-1/2 left-1/2 mx-auto'>
      <H3 className='text-center'>I don't know what is this style called</H3>
      <H2 className='mx-auto w-fit rounded-xl border-2 border-primary-border bg-primary px-4 text-center text-on-primary'>
        Pop-brutalism?
      </H2>
    </div>
  );
}
