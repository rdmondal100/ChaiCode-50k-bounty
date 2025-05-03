import React from 'react';
import AnimatedWaveLine from './AnimatedUnderLine';
import { topics } from '@/data/cloudTopicsData';



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
