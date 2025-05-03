import React from 'react';
import AnimatedWaveLine from './AnimatedUnderLine';

const topics = [
  {
    name: 'Python',
    url: 'https://www.youtube.com/watch?v=Ca5DLSDfPec&list=PLu71SKxNbfoBsMugTFALhdLlZ5VOqCg2s',
  },
  {
    name: 'Docker',
    url: 'https://www.youtube.com/watch?v=rr9cI4u1_88&pp=ygUNZG9ja2VyIGhpdGVzaA%3D%3D',
  },
  {
    name: 'React Native',
    url: 'https://www.youtube.com/watch?v=kGtEax1WQFg&list=PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c',
  },
  {
    name: 'NextJS',
    url: 'https://www.youtube.com/watch?v=OgS1ZWZItno&list=PLu71SKxNbfoBAaWGtn9GA2PTw0HO0tXzq',
  },
  {
    name: 'NodeJS',
    url: 'https://www.youtube.com/watch?v=EH3vGeqeIAo&list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW',
  },
  {
    name: 'TailwindCSS',
    url: 'https://www.youtube.com/watch?v=eiRcOPiNoDs&t=48s&pp=ygUadGFpbHdpbmQgY3NzIGNoYWkgYXVyIGNvZGU%3D',
  },
  {
    name: 'TypeScript',
    url: 'https://www.youtube.com/watch?v=ZchBYjHFCC4&t=1552s&pp=ygUUdHlwZXNjcmlwdCBieSBoaXRlc2g%3D',
  },

  {
    name: 'React',
    url: 'https://www.youtube.com/watch?v=vz1RlUyrc3w&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige',
  },
  {
    name: 'JavaScript',
    url: 'https://www.youtube.com/watch?v=Hr5iLG7sUa0&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37',
  },
  {
    name: 'Pydantic',
    url: 'https://youtu.be/rE-y-yMIeok?si=7cPkecFIEmqHsC1t',
  },
  
  {
    name: 'Jupyter Notebook',
    url: 'https://www.youtube.com/watch?v=_mowKpIZpbU&list=PLu71SKxNbfoAvRjhCwrRx39NssrrHt95G',
  },
  {
    name: 'Numpy',
    url: 'https://www.youtube.com/watch?v=x7ULDYs4X84&list=PLu71SKxNbfoDzco7QLan_WqsRKndIycxH',
  },
  {
    name: 'C++',
    url: 'https://www.youtube.com/watch?v=gCkPJTSZ9mU&list=PLu71SKxNbfoCPfgKZS8UE0MDuwiKvL8zi&pp=0gcJCV8EOCosWNin',
  },
  {
    name: 'Django',
    url: 'https://www.youtube.com/watch?v=j6szNSzw4BU&list=PLu71SKxNbfoDOf-6vAcKmazT92uLnWAgy',
  },

];

const TopicsCloud = () => {
  return (
    <section className='xl:container xl:mx-auto py-16 px-4 md:px-6'>
      {/* Heading */}
      <div className='w-full flex justify-center items-center flex-col text-center pb-14'>
        <div className='relative w-fit'>
          <h2 className='section-title'>Topics Cloud</h2>
          <AnimatedWaveLine />
        </div>
        <p className='section-desc mt-3'>
          You can find videos and courses on topics and much more
        </p>
      </div>

      {/* Tags Grid */}
      <div className='max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
        {topics.map((topic, index) => (
          <a
            key={index}
            href={topic.url}
            target='_blank'
            rel='noopener noreferrer'
            className='border bg-secondary border-border rounded-xl text-center py-3 px-5 text-foreground text-base font-medium hover:bg-accent hover:text-accent-foreground transition-transform transform hover:scale-105 duration-300 ease-in-out'
          >
            {topic.name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default TopicsCloud;
