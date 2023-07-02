import { name } from 'lib/info';
import type { Metadata } from 'next';
import StartImage from '../start.jpeg';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Getting Started',
  description: 'I help developers level up their skills ⚡ Join me on Medium for insights, tips, and new tech trends.'
};

export default function UsesPage() {
  return (
    <section>
      <div className='flex flex-col gap-5'>
        <h2 className='text-center mb-4'><span className='text-3xl font-bold	bg-gradient-to-b leading-9 tracking-wide gradient-title'>Getting Started</span></h2>
        <Image
          alt={name}
          className="object-cover grayscale w-full rounded-lg"
          src={StartImage}
          height={400}
          placeholder="blur"
        />
        <div>
          <h3><a href='/subscribe' target='_blank' className='text-xl font-bold leading-9 tracking-wide hover:underline gradient-title'>01: Subscribe to Newsletter</a></h3>
          <p className='text-lg leading-8 mt-2 text-gray-600'><a className='font-bold underline' href="/subscribe" target='_blank'>Click here</a> to stay up to date on my latest resources on how to become a better developer, tips, and new tech trends.</p>
        </div>
        <div>
          <h3><a href='https://twitter.com/atakde' target='_blank' className='text-xl font-bold leading-9 tracking-wide hover:underline gradient-title'>02: Follow Me on Twitter</a></h3>
          <p className='text-lg leading-8 mt-2 text-gray-600'><a className='font-bold underline' href="https://twitter.com/atakde" target='_blank'>Click here</a> to stay up to date on my latest tweets on how to become a better developer, tips, and new tech trends. I also share my latest articles and videos.</p>
        </div>
        <div>
          <h3><a href='https://atakde.medium.com' target='_blank' className='text-xl font-bold leading-9 tracking-wide	hover:underline gradient-title'>03: Follow Me on Medium</a></h3>
          <p className='text-lg leading-8 mt-2 text-gray-600'><a className='font-bold underline' href="https://atakde.medium.com" target='_blank'>Click here</a> to stay up to date on my latest blog posts. I am just starting out on Medium, so I would appreciate your support.</p>
        </div>
      </div>
    </section>
  );
}
