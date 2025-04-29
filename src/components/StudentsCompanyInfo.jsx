import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useAnimationFrame } from "framer-motion";
import studentCompanyInfo from "@/data/studentCompanyLogos";
import { Card } from "./ui/card";

const MarqueeTrack = ({ reverse = false, speed = 50 }) => {
  const baseX = useRef(0);
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [tooltip, setTooltip] = useState(null);

  // Duplicate logos for infinite scroll
  const logos = [...studentCompanyInfo, ...studentCompanyInfo];

  useAnimationFrame((_, delta) => {
    if (!isHovered && containerRef.current) {
      const container = containerRef.current;
      const totalWidth = container.scrollWidth / 2; 

      const direction = reverse ? 1 : -1;
      baseX.current += (direction * speed * delta) / 1000;

      if (!reverse) {
        if (baseX.current <= -totalWidth) {
          baseX.current = 0;
        }
      } else {
        if (baseX.current >= 0) {
          baseX.current = -totalWidth; 
        }
      }

      container.style.transform = `translateX(${baseX.current}px)`;
    }
  });

  return (
    <div
      className="relative overflow-hidden w-full
        [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]
        [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setTooltip(null);
      }}
    >
      <motion.div
        ref={containerRef}
        className="flex gap-6 w-max py-2 px-8" 
        style={{ willChange: "transform" }}
      >
        {logos.map((company, idx) => (
          <motion.div
            key={idx}
            className="relative"
            onMouseMove={(e) => {
              const tooltipWidth = 160;
              const tooltipHeight = 40;
              const padding = 0;

              let x = e.clientX;
              let y = e.clientY;

              x = Math.min(window.innerWidth - tooltipWidth - padding, Math.max(padding, x));
              y = Math.min(window.innerHeight - tooltipHeight - padding, Math.max(padding, y));

              setTooltip({ x, y, name: company.name });
            }}
            onMouseLeave={() => setTooltip(null)}
          >
            <a href={company.webUrl} target="_blank" rel="noopener noreferrer">
              <Card className="flex items-center justify-center w-[120px] md:w-[140px] h-[80px] md:h-[100px] bg-white shrink-0 px-4 py-3 border shadow-sm relative overflow-visible">
                <img
                  src={company.iconUrl}
                  alt={company.name}
                  className="max-h-12 md:max-h-20 object-contain"
                />
              </Card>
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/* Tooltip */}
      <AnimatePresence>
        {tooltip?.x != null && tooltip?.y != null && (
          <motion.div
            key="tooltip"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed z-50 px-3 py-1 text-xs bg-card/80 backdrop-blur-sm border font-Inter text-card-foreground rounded-full shadow pointer-events-none font-medium"
            style={{
              top: tooltip.y - 18,
              left: tooltip.x,
              transform: "translateX(-50%)",
            }}
          >
            {tooltip.name}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const StudentsCompanyInfo = () => (
  <section className="py-2 mx-auto container  overflow-x-hidden space-y-6">
    <div className="text-center text-2xl md:text-[1.7rem] font-bold max-w-4xl mx-auto px-4 font-Inter">
      Our students are not only working in big tech companies but are now
      founders of funded startups and product creators
    </div>

    {/* Two Marquees */}
    <div className="flex flex-col gap-3 mt-16">
      <MarqueeTrack />
      <MarqueeTrack reverse />
    </div>
  </section>
);

export default StudentsCompanyInfo;
