import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export const revalidate = 60;

export default async function BlogPage() {
  let articles = [];

  try {
    const res = await fetch("https://nodejs-medium-fetcher.vercel.app/?username=atakde&limit=100&responseType=json");
    articles = await res.json();
    console.log(articles);
  } catch (error) {
    console.log(error);
  }

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">Blog</h1>
      {articles.map((post) => (
        <Link
          key={post.link}
          className="flex flex-col space-y-1 mb-4"
          href={post.link}
        >
          <div className="w-full flex flex-col">
            <p>{post.title}</p>
            <p className="font-mono text-sm text-neutral-500 tracking-tighter">
              {post.date}
            </p>
          </div>
        </Link>
      ))}
    </section>
  );
} 