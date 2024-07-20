import me from '../app/me.jpeg';

export const name = 'Atakan Demircioglu';
export const avatar = me;
export const about = () => {
  return (
    <>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">I'm a Full Stack Developer who is passionate about making open-source more accessible, creating technology to elevate people, and building community.</p>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">Some technologies I enjoy working with include ReactJS, NextJS, NodeJS, and PHP.</p>
    </>
  );
};
export const bio = () => {
  return (
    <>
      When I'm not coding, I'm probably playing video games or learning new things. I also love to travel and explore new places.
    </>
  );
};

export const articles = [
  {
    title: 'How to improve Largest Contentful Paint (LCP)',
    read_time: '5 min read', 
    url: 'https://tech.jotform.com/we-improved-largest-contentful-paint-lcp-by-over-30-using-these-simple-techniques-91e6884cb7ba'
  },
  {
    title: 'SRP and SLAP',
    read_time: '4 min read', 
    url: 'https://tech.jotform.com/srp-and-slap-keys-to-maintainable-and-readable-code-d11396816508'
  },
  {
    title: 'Designing a Rate Limiter',
    read_time: '6 min read', 
    url: 'https://tech.jotform.com/designing-a-rate-limiter-f169db5cbf08'
  },
];

export const renderFeaturedArticles = () => {
  return (
    <div className="my-8 flex flex-col gap-2">
      {articles.map((article, index) => (
        <div className="w-full">
        <a target='_blank' href={article.url} key={index}
          className="flex items-center justify-between p-4 border border-neutral-200 dark:border-neutral-800 rounded-lg no-underline hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all">
          <div className="flex flex-col">
            <p className="font-medium text-neutral-800 dark:text-neutral-200">{article.title}</p>
            <p className="text-neutral-500 dark:text-neutral-400">{article.read_time}</p>
          </div>
          <div
            className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"></path>
            </svg>
          </div>
        </a>
        </div>
      ))}
    </div>
  );
}