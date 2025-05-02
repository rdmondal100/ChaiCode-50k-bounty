import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { whyChaiCodeImg } from "@/assets";
import AnimatedWaveLine from "./AnimatedUnderLine";

const features = [
  {
    title: "Comprehensive Curriculum",
    description:
      "Master key concepts and hands-on skills with clarity and confidence. Learn what truly matters, the right way, thorough, practical, and easy to understand.",
  },
  {
    title: "You finish it",
    description:
      "Our cohorts are a collaborative journey, students learn together, stay motivated, and complete the course on time as a community.",
  },
  {
    title: "Industry Guests",
    description:
      "We’re connected with industry experts and regularly bring them into our classes for engaging, fun, and insightful sessions with students.",
  },
  {
    title: "Code and Chill",
    description:
      "Coding should be fun, not frightening. It might feel tough at first, but with time and practice, everything starts to click and fall into place.",
  },
  {
    title: "Improve Communication",
    description:
      "One of the best ways to boost communication skills is through practice. Our peer classes make it happen where co-learners teach, share, and grow together.",
  },
  {
    title: "Bounties",
    description:
      "Every cohort comes with exciting cash prizes and some even feature a MacBook giveaway! It’s our way of keeping the motivation high and the learning fun.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      type: "spring",
      stiffness: 100,
    },
  }),
};

const WhyChaiCode = () => {
  return (
    <section className='py-16 px-4 md:px-10 bg-background text-foreground'>
      <div className='w-full flex justify-center items-center flex-col text-center pb-14'>
        <div className='relative w-fit'>
          <h2 className='section-title'>But Why ChaiCode ?</h2>
          <AnimatedWaveLine />
        </div>
        <p className='section-desc mt-3'>ChaiCode exists because we love tech and teaching</p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'>
        <div className='flex flex-col gap-6'>
          {features.slice(0, 3).map((feature, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial='hidden'
              className="h-fit w-fit overflow-hidden  rounded-xl"
              whileInView='visible'
              viewport={{ once: true, amount: 0.4 }}
              custom={idx}
              whileHover={{ scale: 1.03, boxShadow: "0px 12px 20px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className='p-6 border border-border shadow-md h-full min-h-[150px]'>
                <h3 className='text-lg font-semibold mb-1'>{feature.title}</h3>
                <p className='text-sm text-muted-foreground'>{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className='h-fit w-fit overflow-hidden  rounded-xl'
          variants={cardVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.4 }}
          custom={3}
          whileHover={{ scale: 1.03, boxShadow: "0px 12px 20px rgba(0,0,0,0.1)" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Card className='px-3 py-3 border gap-2 border-border shadow-md flex flex-col items-center justify-around lg:min-h-[560px]  rounded-xl min-h-[150px]'>
            <div className='rounded-xl overflow-hidden w-full'>
              <img
                src={whyChaiCodeImg}
                alt='Hitesh Choudhary'
                className='w-full object-cover rounded-xl scale-[1.08]'
              />
            </div>
            <div className='flex flex-col justify-center items-center gap-3'>
              <h3 className='text-2xl font-bold text-center'>Hitesh Choudhary</h3>
              <p className='text-sm text-muted-foreground text-center'>
                retired from corporate and full time YouTuber, x founder of LCO (acquired), x CTO,
                Sr. Director at PW. 2 YT channels (950k & 470k), stepped into 43 countries.
              </p>
            </div>
            <div className='flex w-full flex-col justify-center items-center gap-3'>
              <h4 className='mt-4 font-semibold text-xl'>Approach</h4>
              <p className='text-sm text-muted-foreground text-center'>
                Project based courses with peer learning and bounties with many activities
              </p>
            </div>
            <div className='flex space-x-2 mt-4'>
              <div className='w-5 h-5 bg-muted rounded' />
              <div className='w-5 h-5 bg-muted rounded' />
              <div className='w-5 h-5 bg-muted rounded' />
            </div>
          </Card>
        </motion.div>

        <div className='flex flex-col gap-6'>
          {features.slice(3).map((feature, idx) => (
            <motion.div
              key={idx + 3}
              variants={cardVariants}
              initial='hidden'
              whileInView='visible'
              className=" h-fit w-fit overflow-hidden  rounded-xl"
              viewport={{ once: true, amount: 0.4 }}
              custom={idx + 3}
              whileHover={{ scale: 1.03, boxShadow: "0px 12px 20px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className='p-6 border border-border shadow-md h-full'>
                <h3 className='text-lg font-semibold mb-1'>{feature.title}</h3>
                <p className='text-sm text-muted-foreground'>{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div className='cta w-full flex justify-center mt-18'>
        <motion.a
          whileTap={{ scale: 0.99 }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200, damping: 25, mass: 0.8 }}
          href='https://courses.chaicode.com/learn/view-all?show=batch&type=17'
        >
          <Button className='relative inline-flex items-center justify-center px-6 py-7 text-base font-semibold font-Inter text-foreground bg-secondary rounded-lg overflow-hidden shadow-md focus:outline-none cursor-pointer transition-colors duration-300 ease-in-out hover:bg-gradient-to-r from-primary to-complement hover:text-background border group'>
            <motion.span
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className='absolute inset-0 bg-foreground z-0 rounded-lg pointer-events-none'
            />
            <span className='relative z-10 bg-clip-text bg-gradient-to-br from-primary to-complement text-transparent group-hover:text-foreground font-bold text-lg'>
              Join Cohorts Live Classes
            </span>
          </Button>
        </motion.a>
      </div>
    </section>
  );
};

export default WhyChaiCode;