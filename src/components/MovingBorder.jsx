import React from 'react';
import { motion } from 'framer-motion';

const MovingBorder = ({
  children,
  width = 'w-[250px]',
  height = 'h-[250px]',
  borderColors = [
    'rgba(244, 114, 182, 0.4)', // pink-400
    'rgba(192, 132, 252, 0.4)', // purple-400
    'transparent'
  ],
  angleStop = '80deg',
  backgroundFrom = 'from-slate-800',
  backgroundTo = 'to-slate-900',
  borderFrom = 'from-slate-700',
  borderTo = 'to-slate-800',
  animationSpeed = '10s',
  className = '',
}) => {
  const gradient = `conic-gradient(${borderColors[0]} 0deg, ${borderColors[1]} 0deg, ${borderColors[2]} ${angleStop})`;

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-b ${borderFrom} ${borderTo} ${width} ${height}`}
    >
      {/* Animated Gradient Border (pseudo-element mimic) */}
      <motion.div
        className="absolute left-[-25%] top-[-25%] h-[150%] w-[150%] rounded-full"
        style={{
          background: gradient,
        }}
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, ease: 'linear', duration: parseFloat(animationSpeed) }}
      />

      {/* Inner content */}
      <div
        className={`absolute left-[1px] top-[1px] h-[calc(100%-2px)] w-[calc(100%-2px)] rounded-2xl bg-gradient-to-b ${backgroundFrom} ${backgroundTo} z-10 flex items-center justify-center p-4 text-white text-sm ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default MovingBorder;
