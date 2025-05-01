import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import RippleRingButton from "./RippleRingButton";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const HeroSection = () => {
	const videoCard = useRef(null);
	const VideoCardElement = motion.create(Card);
	const { scrollYProgress } = useScroll({
		target: videoCard,
		offset: ["start end", "end start"],
	});

	const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1.2]);

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
		<section className='relative min-h-screen xl:container xl:mx-auto flex items-center justify-center px-4 md:px-6 bg-background overflow-hidden pt-24 py-10'>
			{/* Content */}
			<div className='relative z-10 container max-w-6xl mx-auto text-center font-Inter'>
				{/* Badge */}
				<motion.div
					variants={textReveal}
					initial='hidden'
					animate='visible'
					custom={0}
					className='inline-block text-[12px] font-semibold bg-secondary px-3 py-1 rounded-full  mb-4'
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
					<motion.div
						className=' w-fit rounded-md mx-auto'
						whileTap={{
							scale: 0.99,
						}}
						whileHover={{
							scale: 1.05,
						}}
						transition={{
							type: "spring",
							stiffness: 300,
							damping: 30,
							mass: 1,
						}}
					>
						<a href='https://courses.chaicode.com/learn/view-all?show=batch&type=17'>
							<Button className='relative inline-flex items-center justify-center px-8 py-7 text-base font-bold font-Inter text-foreground bg-gradient-to-r from-primary to-complement rounded-lg overflow-hidden shadow-md focus:outline-none cursor-pointer'>
								<span className='relative z-10'>Check All Live Cohorts</span>
							</Button>
						</a>
					</motion.div>
				</motion.div>

				{/* video card  */}

				<VideoCardElement
					ref={videoCard}
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 1.2,
						delay: 0.5,
						ease: "easeOut",
					}}
					style={{
						scale,
					}}
					className='aspect-video shadow rounded-2xl overflow-hidden bg-accent m-0 p-0  mt-15 '
				>
					<iframe
						className=' w-full h-full '
						src='https://www.youtube.com/embed/W43v7ePnjAA'
						title='Launching our platform and courses | Chai Code'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						referrerPolicy='strict-origin-when-cross-origin'
						allowFullScreen
					></iframe>
				</VideoCardElement>
			</div>
		</section>
	);
};

export default HeroSection;
