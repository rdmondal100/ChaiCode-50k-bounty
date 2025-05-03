"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const allAvatars = Array.from({ length: 15 }, (_, idx) => ({
  id: idx,
  src: `https://i.pravatar.cc/150?img=${idx + 10}`,
}));

const MAX_VISIBLE = 14;
const AVATAR_SIZE = 56;

const generateInstanceId = () => crypto.randomUUID();

const FloatingAvatar = ({ src, parentRef }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const velocity = useRef({
    x: (Math.random() - 0.5) * 0.8,
    y: (Math.random() - 0.5) * 0.8,
  });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      setPosition((prev) => {
        const parent = parentRef.current?.getBoundingClientRect();
        if (!parent) return prev;

        const maxX = parent.width - AVATAR_SIZE;
        const maxY = parent.height - AVATAR_SIZE;

        let newX = prev.x + velocity.current.x;
        let newY = prev.y + velocity.current.y;

        if (newX <= 0 || newX >= maxX) velocity.current.x *= -1;
        if (newY <= 0 || newY >= maxY) velocity.current.y *= -1;

        newX = Math.max(0, Math.min(newX, maxX));
        newY = Math.max(0, Math.min(newY, maxY));

        return { x: newX, y: newY };
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const parent = parentRef.current?.getBoundingClientRect();
    if (parent) {
      setPosition({
        x: Math.random() * (parent.width - AVATAR_SIZE),
        y: Math.random() * (parent.height - AVATAR_SIZE),
      });
    }

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [parentRef]);

  return (
    <motion.div
      initial={{ scale: 0.1, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        x: position.x,
        y: position.y,
      }}
      exit={{ scale: 0.1, opacity: 0 }}
      transition={{
        scale: { duration: 0.6, ease: "easeOut" },
        x: { duration: 0.05, ease: "linear" },
        y: { duration: 0.05, ease: "linear" },
        opacity: { duration: 0.4 },
      }}
      className="absolute w-14 h-14 rounded-full border-2 border-primary shadow-xl overflow-hidden bg-background"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      style={{ zIndex: hovering ? 10 : 1 }}
    >
      <motion.div
        className="relative w-full h-full"
        whileHover={{ scale: 1.15, transition: { duration: 0.3 } }}
      >
        <Avatar className="w-full h-full">
          <AvatarFallback>HC</AvatarFallback>
          <AvatarImage src={src} alt="avatar" className="object-cover rounded-full" />
        </Avatar>
        <div className="absolute inset-0 rounded-full pointer-events-none">
          <div className="group-hover:animate-ping absolute inset-0 rounded-full z-0" />
          <div className="absolute inset-0 rounded-full shadow-[0_0_8px_2px_rgba(0,123,255,0.3)]" />
        </div>
      </motion.div>
    </motion.div>
  );
};

const AlumniNetwork = () => {
  const boxRef = useRef(null);
  const [visibleAvatars, setVisibleAvatars] = useState(() =>
    allAvatars.slice(0, MAX_VISIBLE).map((a) => ({ ...a, instanceId: generateInstanceId() }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleAvatars((prev) => {
        const remaining = allAvatars.filter((a) => !prev.some((p) => p.id === a.id));
        const toRemove = Math.min(Math.floor(Math.random() * 2) + 1, prev.length);
        const toAdd = remaining.slice(0, toRemove).map((a) => ({
          ...a,
          instanceId: generateInstanceId(),
        }));

        const newVisible = [...prev];
        for (let i = 0; i < toRemove; i++) {
          const index = Math.floor(Math.random() * newVisible.length);
          newVisible.splice(index, 1);
        }

        return [...newVisible, ...toAdd].slice(0, MAX_VISIBLE);
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="xl:container xl:mx-auto py-16 px-4 md:px-6 ">
      <Card className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div
          ref={boxRef}
          className="relative w-full lg:w-1/2 h-[300px] rounded-xl border-2 border-md shadow-md bg-muted/20 overflow-hidden group"
        >
          <AnimatePresence>
            {visibleAvatars.map((avatar) => (
              <FloatingAvatar
                key={avatar.instanceId}
                src={avatar.src}
                parentRef={boxRef}
              />
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          className=" w-full lg:w-1/2 "
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="">
            <div className="p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold  mb-5">
                Alumni Network and Job Listings
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The alumni network you've always wished for in your college.
                We have a dedicated platform where students get to know each other,
                collaborate on projects, form agencies, and participate in hackathons.
                Our HR team also posts regular job updates that you can apply to directly whenever you're ready.
              </p>
            </div>
          </div>
        </motion.div>
      </Card>
    </section>
  );
};

export default AlumniNetwork;