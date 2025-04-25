import React, { useRef, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import studentCompanyInfo from "@/data/studentCompanyLogos";
import { Card } from "./ui/card";

const MarqueeTrack = ({ reverse = false, speed = 50 }) => {
  const baseX = useRef(0);
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const logos = [...studentCompanyInfo, ...studentCompanyInfo];

  useAnimationFrame((t, delta) => {
    if (!isHovered && containerRef.current) {
      const width = containerRef.current.scrollWidth / 2;
      const direction = reverse ? 1 : -1;

      baseX.current += (direction * speed * delta) / 1000;

      if (!reverse && Math.abs(baseX.current) >= width) {
        baseX.current = 0;
      } else if (reverse && baseX.current >= 0) {
        baseX.current = -width;
      }

      containerRef.current.style.transform = `translateX(${baseX.current}px)`;
    }
  });

  return (
    <div
      className="overflow-hidden w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        ref={containerRef}
        className="flex gap-6 w-max py-2 "
        style={{ willChange: "transform" }}
      >
        {logos.map((company, idx) => (
          <Card
            key={idx}
            className="flex items-center justify-center w-[120px] md:w-[140px]  h-[80px] md:h-[100px] bg-white shrink-0 px-4 py-3 border shadow-md"
          >
            <img
              src={company.iconUrl}
              alt={company.name || `Logo ${idx}`}
              className="max-h-12 md:max-h-20 object-contain hover:scale-105 transition-transform duration-300"
            />
          </Card>
        ))}
      </motion.div>
    </div>
  );
};

const StudentsCompanyInfo = () => {
  return (
    <section className="py-2 overflow-hidden space-y-6">
      <div className="text-center text-xl md:text-2xl font-medium max-w-4xl mx-auto px-4">
        Our students are not only working in big tech companies but are now
        founders of funded startups and product creators
      </div>

      <div className="flex flex-col gap-3 mt-16">
        <MarqueeTrack />
        <MarqueeTrack reverse />
      </div>
    </section>
  );
};

export default StudentsCompanyInfo;
