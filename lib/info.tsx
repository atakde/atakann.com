import me from '../app/me.jpeg';

export const name = 'Atakan Demircioglu';
export const avatar = me;
export const about = () => {
  return (
    <>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">I'm a Full Stack Developer who is passionate about making open-source more accessible, creating technology to elevate people, and building community.</p>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">Some technologies I enjoy working with include ReactJS, NextJS, NodeJS, and PHP.</p>
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
