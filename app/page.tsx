import Link from 'next/link';
import Image from 'next/image';
// import { getTweetCount } from 'lib/metrics';
import {
  ArrowIcon,
  GitHubIcon,
  TwitterIcon,
  ViewsIcon,
} from 'components/icons';
import { name, about, bio, avatar } from 'lib/info';

export const revalidate = 60;

export default async function HomePage() {
  // let starCount, views, tweetCount;

  try {
    // [views, tweetCount] = await Promise.all([
    //   getTweetCount(),
    // ]);
  } catch (error) {
    console.error(error);
  }

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">{name}</h1>
      <div className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </div>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={name}
          className="rounded-full grayscale"
          src={avatar}
          placeholder="blur"
          width={100}
          priority
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/atakde"
            className="flex items-center gap-2"
          >
            <TwitterIcon />
            {`+200 tweets all time`}
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/atakde"
            className="flex items-center gap-2"
          >
            <GitHubIcon />
            +40 public repositories
          </a>
          <Link href="/blog" className="flex items-center"><ViewsIcon />+9000 monthly blog views on medium</Link>
        </div>
      </div>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </p>
      <p>
        <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200"><span className='font-bold'>Last Side Project: </span><a target='_blank' rel='dofollow' href='https://www.creatorbook.io'>CreatorBook</a></p>
        <a className='hidden' target='_blank' rel='dofollow' href='https://www.creatorbook.io/ai-post-generation'>AI Post Generation</a>
        <a className='hidden' target='_blank' rel='dofollow' href='https://www.creatorbook.io/carousel-generator'>Linkedin Carousel Generator</a>
        <a className='hidden' target='_blank' rel='dofollow' href='https://www.creatorbook.io/viral-posts-inspirations'>Viral Posts Inspirations</a>
      </p>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/atakde"
          >
            <ArrowIcon />
            <p className="h-7">follow me on twitter</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://atakde.medium.com/subscribe"
          >
            <ArrowIcon />
            <p className="h-7">get email updates</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
