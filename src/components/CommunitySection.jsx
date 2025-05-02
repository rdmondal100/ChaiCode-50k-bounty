'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AnimatedWaveLine from './AnimatedUnderLine';

export default function CommunitySection() {
  return (
    <section className="py-16 px-4 md:px-6 max-w-7xl xl:container xl:mx-auto text-foreground">
      {/* Heading */}
      <div className="w-full flex flex-col items-center justify-center mb-10">
        <div className="relative w-fit text-center">
          <h2 className="section-title text-3xl md:text-4xl font-bold">Community</h2>
          <AnimatedWaveLine />
        </div>
        <p className='section-desc mt-5'>Connect, Share & Grow Together</p>
      </div>

      {/* Content */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">
        {/* Left Side */}
        <motion.div
          className=" md:w-1/2 flex  flex-col items-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold leading-snug font-Inter text-center md:text-left">
            Join our <br className='md:block hidden'/>
            community where <br className='md:block hidden' />
            creativity thrives.
          </h2>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="w-[300px] h-[200px] border border-border rounded-lg flex items-center justify-center relative shadow-sm bg-muted"
          >
            <motion.img
              src="https://cdn.worldvectorlogo.com/logos/discord-6.svg"
              alt="Discord"
              className="absolute bottom-4 w-32"
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 200 }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Button */}
      <div className="w-full flex justify-center mt-10">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 250 }}
        >
          <Button
            variant="primary"
            className="bg-gradient-to-t from-primary to-complement text-lg font-bold px-6 py-5 h-fit w-fit font-Inter"
          >
            80,000 Active <br /> coders in Discord
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
