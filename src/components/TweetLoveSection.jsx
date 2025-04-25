import React, { useEffect, useRef, useState } from "react";
import { tweetPostIdFromServices } from "../data/tweetLoveData.js";
import { Swiper, SwiperSlide } from "swiper/react";
import {
	EffectCoverflow,
	Autoplay,
	Pagination,
	Navigation,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowBigLeft, ArrowBigRight, TwitterIcon } from "lucide-react";
import { Button } from "./ui/button.jsx";
import { Tweet } from "react-tweet";
import AnimatedWaveLine from "./AnimatedUnderLine.jsx";
import RingWaveButton from "./RippleRingButton.jsx";
import MovingBorder from "./MovingBorder.jsx";

const TweetLoveSection = () => {
	const [tweetData, setTweetData] = useState([]);
	const swiperRef = useRef(null);
	const MotionRingWaveButton = motion.create(RingWaveButton);

	useEffect(() => {
		setTweetData(tweetPostIdFromServices);
	}, []);

	return (
		<section className='pb-10 bg-background '>
			<div className='mx-auto mt-20'>
				<motion.div
					className='flex flex-col items-center text-center font-Inter mb-12'
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<p className='text-lg text-muted-foreground'>
						Love that we get from our community
					</p>

					<h2 className='text-[43px] relative md:text-[72px] font-bold leading-tight'>
						Tweet Love
						<AnimatedWaveLine />
					</h2>
				</motion.div>

				<motion.div
					className='relative'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.8 }}
				>
					<div
						onMouseEnter={() => {
							if (swiperRef.current?.autoplay) {
								swiperRef.current.autoplay.stop();
								console.log("autoplay stopped");
							}
						}}
						onMouseLeave={() => {
							if (swiperRef.current?.autoplay) {
								swiperRef.current.autoplay.start();
								console.log("autoplay started");
							}
						}}
					>
						<Swiper
							modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
							onSwiper={(swiper) => {
								swiperRef.current = swiper;
							}}
							effect='coverflow'
							grabCursor={true}
							centeredSlides={true}
							slidesPerView='auto'
							loop={tweetData.length > 4}
							autoplay={{
								delay: 2500,
								disableOnInteraction: true,
							}}
							coverflowEffect={{
								rotate: 0,
								stretch: 0,
								depth: 100,
								modifier: 2.5,
								slideShadows: false,
							}}
							pagination={{ clickable: true }}
							className='w-full  relative py-20 h-[520px]'
							style={{ paddingTop: "20px" }}
						>
							{tweetData?.map((tweetId, index) => (
								<SwiperSlide
									key={index}
									className='max-w-xs md:max-w-sm lg:max-w-md'
								>
									<motion.div
										whileHover={{ scale: 1.02 }}
										transition={{
											type: "spring",
											stiffness: 300,
											damping: 30,
											mass: 1,
										}}
									>
										<Card className='w-full max-w-sm h-full bg-card border shadow-lg rounded-xl flex items-center justify-center py-0 overflow-hidden    '>
											<CardContent
												className='w-full h-[460px] px-2 py-0 overflow-y-auto custom-scrollbar [mask-image:linear-gradient(to_top,transparent_5%,black_30%)] pb-8'
												data-theme='light'
											>
												<Tweet id={tweetId} />
											</CardContent>
										</Card>
									</motion.div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>

					{/* navigation buttons  */}
					<div className='navigation absolute -bottom-10 flex items-center justify-center w-full z-20'>
						<div className='buttonContainer flex gap-52'>
							{/* Prev Button */}
							<motion.div
								initial={{ opacity: 0, scale: 0 }}
								animate={{ opacity: 1, scale: 1 }}
								whileTap={{ scale: 0.95 }}
								whileHover={{ scale: 1.05 }}
								className='prev-button'
							>
								<MotionRingWaveButton
									rippleSize={5}
									rippleColor='border-white'
									variant='icon'
									className='relative cursor-pointer bg-secondary rounded-full h-10 w-10 shadow-md overflow-hidden flex border items-center justify-center group '
									onClick={() => swiperRef.current?.slidePrev()}
									initial='rest'
									whileHover='hover'
									animate='rest'
								>
									<motion.span
										variants={{
											rest: { scale: 0, opacity: 0 },
											hover: { scale: 2, opacity: 1 },
										}}
										transition={{
											type: "spring",
											stiffness: 100,
											damping: 20,
											mass: 1,
										}}
										className='absolute inset-0 bg-primary rounded-full z-0'
									/>
									<ArrowBigLeft className='z-10 scale-110 text-foreground group-hover:text-white' />
								</MotionRingWaveButton>
							</motion.div>

							{/* Next Button */}
							<motion.div
								initial={{ opacity: 0, scale: 0 }}
								animate={{ opacity: 1, scale: 1 }}
								whileTap={{ scale: 0.95 }}
								whileHover={{ scale: 1.05 }}
								className='next-button'
							>
								<MotionRingWaveButton
									rippleSize={5}
									rippleColor='border-white'
									variant='icon'
									className='relative cursor-pointer bg-secondary border rounded-full h-10 w-10 shadow-md overflow-hidden flex items-center justify-center group'
									onClick={() => swiperRef.current?.slideNext()}
									initial='rest'
									whileHover='hover'
									animate='rest'
								>
									<motion.span
										variants={{
											rest: { scale: 0, opacity: 0 },
											hover: { scale: 2, opacity: 1 },
										}}
										transition={{
											type: "spring",
											stiffness: 100,
											damping: 20,
											mass: 1,
										}}
										className='absolute inset-0 bg-primary rounded-full z-0'
									/>
									<ArrowBigRight className='z-10 scale-110 text-foreground group-hover:text-white' />
								</MotionRingWaveButton>
							</motion.div>
						</div>
					</div>
				</motion.div>

				{/* cta  */}
				<div className='cta w-full flex justify-center mt-18'>
				<MotionRingWaveButton
  whileTap={{ scale: 0.99 }}
  whileHover={{ scale: 1.02 }}
  transition={{
    type: "spring",
    stiffness: 200,
    damping: 25,
    mass: 0.8,
  }}
  rippleColor='border-foreground'
  rippleSize={8}
  className='relative inline-flex items-center justify-center px-6 py-7 text-base font-semibold font-Inter text-foreground bg-secondary rounded-lg overflow-hidden shadow-md focus:outline-none cursor-pointer transition-colors duration-300 ease-in-out hover:bg-gradient-to-r from-primary to-complement hover:text-background border group'
>
  {/* Smooth color transition */}
  <motion.span
    initial={{ opacity: 0 }}
    whileHover={{ opacity: 0.1 }}
    transition={{
      duration: 0.4,
      ease: "easeOut",
    }}
    className='absolute inset-0 bg-foreground z-0 rounded-lg pointer-events-none'
  />

  {/* Text transition */}
  <span className='relative z-10 bg-clip-text bg-gradient-to-br from-primary to-complement text-transparent group-hover:text-foreground font-bold text-lg'>
    Join Cohorts Live Classes
  </span>
</MotionRingWaveButton>

				</div>
			</div>
		</section>
	);
};

export default TweetLoveSection;
