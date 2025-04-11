import { motion } from 'framer-motion';

const AnimatedWaveLine = () => {
  return (
    <div className="absolute left-0 bottom-0 w-full h-[4px] pointer-events-none">
      <motion.div
        className="h-full "
        animate={{ scale: ['-100%', '100%'] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background: 'linear-gradient(to right, transparent, var(--primary), transparent)',
        }}
      />
    </div>
  );
};

export default AnimatedWaveLine;
