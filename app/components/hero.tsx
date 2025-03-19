import Section from '@/components/section';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Hero() {
  return (
    <Section className='h-full flex flex-col lg:flex-row lg:items-center justify-center gap-[3rem] bg-[url("/images/hero-bg.svg")] bg-cover bg-no-repeat'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-4xl lg:text-6xl font-bold'>
          <span className='text-blue-600 block md:inline lg:block'>Focus on growth,</span> we handle
          the tech
        </h1>
        <p className='text-xl text-slate-600'>
          Focus on what you do best—running your business. We take care of the software development,
          ensuring seamless, efficient solutions that drive your success.
        </p>
        <div className='flex gap-2'>
          <Button className='lg:p-5 text-base cursor-pointer'>Schedule a call</Button>
          <Button className='lg:p-5 text-base cursor-pointer' variant={'outline'}>
            See our work
          </Button>
        </div>
      </div>
      <div className='relative w-full h-64 md:h-80'>
        <Image fill className='object-fit' src='/images/hero-image.svg' alt='Hero Image' />
      </div>
    </Section>
  );
}
