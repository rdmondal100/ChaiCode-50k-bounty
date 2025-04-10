

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
	const videoCard = useRef(null);

	// Scroll-based progress
	const { scrollYProgress } = useScroll({
		target: videoCard,
		offset: ["start end", "end start"],
	});

	// Smooth scale based on scroll
	const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1.2]);

	// Text reveal animation
	const textReveal = {
		hidden: { opacity: 0, y: 30 },
		visible: (i = 1) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.2,
				duration: 0.6,
				ease: "easeOut",
			},
		}),
	};

	return (
		<section className='relative min-h-screen flex items-center justify-center px-4 md:px-6 bg-background overflow-hidden pt-24 py-10'>
			{/* Glows */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.07 }}
				transition={{ duration: 2 }}
				className='absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-primary rounded-full blur-[120px] z-0'
			/>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.07 }}
				transition={{ duration: 2, delay: 0.3 }}
				className='absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-complement rounded-full blur-[100px] z-0'
			/>

			{/* Content */}
			<div className='relative z-10 container max-w-6xl mx-auto text-center font-Inter'>
				{/* Badge */}
				<motion.div
					variants={textReveal}
					initial='hidden'
					animate='visible'
					custom={0}
					className='inline-block text-[12px] font-semibold bg-secondary px-3 py-1 rounded-full mybox-shadow mb-4'
				>
					Trusted by{" "}
					<span className='bg-gradient-to-br from-complement to-primary bg-clip-text text-transparent'>
						1.5M+
					</span>{" "}
					Code Learners
				</motion.div>

				{/* Heading */}
				<motion.h1
					variants={textReveal}
					initial='hidden'
					animate='visible'
					custom={1}
					className='text-4xl md:text-6xl font-bold leading-[1.2] mb-6 tracking-tight'
				>
					<span className='bg-gradient-to-r from-primary to-complement bg-clip-text text-transparent'>
						Consistency
					</span>{" "}
					and{" "}
					<span className='bg-gradient-to-r from-complement to-primary bg-clip-text text-transparent'>
						Community
					</span>
					<br />
					Driven Coding Courses.
				</motion.h1>

				{/* Description */}
				<motion.p
					variants={textReveal}
					initial='hidden'
					animate='visible'
					custom={2}
					className='text-accent-foreground text-base md:text-lg max-w-3xl mx-auto mb-8 leading-relaxed'
				>
					Content is everywhere. What sets us apart is a purpose-built learning
					experience—bounties, peer learning, code reviews, virtual hostel,
					alumni network, group projects, and personal mentorship that keeps
					your momentum strong.
				</motion.p>

				{/* CTA */}
				<motion.div
					variants={textReveal}
					initial='hidden'
					animate='visible'
					custom={3}
				>
					<motion.button
						whileHover={{
							scale: 1.05,
							boxShadow: "0 0 15px rgba(241, 158, 24, 0.5)",
						}}
						whileTap={{ scale: 0.95 }}
						transition={{ duration: 0.3 }}
						className='relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-foreground bg-gradient-to-r from-primary to-complement rounded-lg overflow-hidden shadow-lg focus:outline-none cursor-pointer'
					>
						<span className='relative z-10'>Check All Live Cohorts</span>
					</motion.button>
				</motion.div>

				{/* Embedded Video with Scroll-Based Scale */}
				<motion.div
  ref={videoCard}
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 1.2,
    delay: 0.5,
    ease: "easeOut",
  }}
  className="mt-15 "
>
  <motion.div
    style={{
      scale, // Scale applied only to the video container
    }}
    className="aspect-video"
  >
    <iframe className=" w-full h-full rounded-2xl" src="https://www.youtube.com/embed/W43v7ePnjAA" title="Launching our platform and courses | Chai Code" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  </motion.div>
</motion.div>

			</div>
		</section>
	);
};

export default HeroSection;
