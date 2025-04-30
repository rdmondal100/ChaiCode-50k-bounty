

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; 

const RippleRingButton = React.forwardRef(
  (
    {
      children,
      className,
      onClick,
      rippleColor = "border-blue-500",
      rippleSize = 12,
      rippleSpread = 3,
      rippleDuration = 0.6,
      rippleCount = 2,
      delayIncrement = 0.15,
      variant = "default",
      ...props
    },
    ref
  ) => {
    const [ripples, setRipples] = useState([]);

    const handleClick = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const baseTime = Date.now();

      const newRipples = Array.from({ length: rippleCount }).map((_, i) => ({
        id: baseTime + i,
        x,
        y,
        delay: i * delayIncrement,
      }));

      setRipples((prev) => [...prev, ...newRipples]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id < baseTime));
      }, 1000);

      if (onClick) onClick(e);
    };

    return (
      <Button
        ref={ref}
        variant={variant}
        className={cn("relative overflow-hidden", className)}
        onClick={handleClick}
        {...props}
      >
        {children}
        <AnimatePresence>
          {ripples.map((ripple) => (
            <motion.span
              key={ripple.id}
              initial={{ scale: 0, opacity: 0.5 }}
              animate={{ scale: rippleSpread, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: rippleDuration,
                delay: ripple.delay,
                ease: "easeOut",
              }}
              className={cn(
                "absolute pointer-events-none rounded-full border",
                rippleColor
              )}
              style={{
                width: rippleSize * 2,
                height: rippleSize * 2,
                left: ripple.x - rippleSize,
                top: ripple.y - rippleSize,
              }}
            />
          ))}
        </AnimatePresence>
      </Button>
    );
  }
);

export default RippleRingButton;

