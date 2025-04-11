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

const TweetLoveSection = () => {
	const [tweetData, setTweetData] = useState([]);
	const swiperRef = useRef(null);

	useEffect(() => {
		setTweetData(tweetPostIdFromServices);
	}, []);

	return (
		<section className='pb-36 bg-background '>
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
									<Card className='w-full max-w-sm h-full bg-card border shadow-lg rounded-xl flex items-center justify-center py-0 overflow-hidden mybox-shadow '>
										<CardContent
											className='w-full h-[450px] px-2 py-0 overflow-y-auto custom-scrollbar'
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
					{/*Navigation Buttons */}
					<div className='navigation absolute -bottom-10 flex items-center justify-center w-full z-20'>
						<div className='buttonContainer flex gap-52'>
							<motion.div
								initial={{
									opacity: 0,
									scale: 0,
								}}
								whileTap={{
									scale: 0.9,
								}}
								animate={{
									opacity: 1,
									scale: 1,
								}}
								whileHover={{
									scale: 1.1,
								}}
								className='prev-button '
							>
								<Button
									variant={"icon"}
									className='cursor-pointer bg-secondary rounded-full h-10 w-10 mybox-shadow'
									onClick={() => {
										if (swiperRef.current) swiperRef.current.slidePrev();
									}}
								>
									<ArrowBigLeft />
								</Button>
							</motion.div>

							<motion.div
								initial={{
									opacity: 0,
									scale: 0,
								}}
								whileTap={{
									scale: 0.9,
								}}
								animate={{
									opacity: 1,
									scale: 1,
								}}
								whileHover={{
									scale: 1.1,
								}}
								className='next-button'
							>
								<Button
									variant={"icon"}
									className='cursor-pointer mybox-shadow bg-secondary rounded-full h-10 w-10'
									onClick={() => {
										if (swiperRef.current) swiperRef.current.slideNext();
									}}
								>
									<ArrowBigRight />
								</Button>
							</motion.div>
						</div>
					</div>
				</motion.div>

				{/* cta  */}

				<motion.div className='mt-24 flex w-full justify-center'>
					<motion.div
						whileHover={{
							scale: 1.05,
							boxShadow: "0 0 15px rgba(241, 158, 24, 0.5)",
						}}
						whileTap={{ scale: 0.95 }}
						transition={{ duration: 0.3 }}
						className='p-[2px] rounded-lg bg-gradient-to-r from-primary via-primary/80 to-complement group'
					>
						<button className='relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-foreground bg-secondary rounded-lg overflow-hidden shadow-lg focus:outline-none cursor-pointer w-full h-full group-hover:bg-primary '>
							<span className='relative z-10 font-Inter'>Join Cohorts Live Classes</span>
						</button>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default TweetLoveSection;
