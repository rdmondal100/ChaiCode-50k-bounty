import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { getCourseBadge, getSavePercent } from "@/lib/utils";
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
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import RippleRingButton from "./RippleRingButton";
import AnimatedWaveLine from "./AnimatedUnderLine";

const StarIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='currentColor'
		viewBox='0 0 24 24'
		className='w-5 h-5 text-yellow-400'
	>
		<path d='M12 2l2.9 6.6L22 9.3l-5 4.9L18.3 22 12 18.3 5.7 22 7 14.2 2 9.3l7.1-0.7L12 2z' />
	</svg>
);

const CourseCard = ({
	title,
	subtitle,
	ytVideoCode,
	rating,
	regularPrice,
	discountedPrice,
}) => {
	const fullStars = Math.floor(rating);
	const starArray = Array.from({ length: fullStars }, (_, i) => (
		<StarIcon key={i} />
	));
	const badge = getCourseBadge(rating);

	return (
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			viewport={{ once: true }}
		>
			<Card className='bg-card border border-border rounded-xl p-4 sm:p-6 text-foreground space-y-4 h-full flex flex-col sm:flex-row justify-between w-full max-w-4xl shadow-sm'>
				<CardContent className='flex flex-col justify-between gap-4 w-full md:w-1/2'>
					<div>
						<CardTitle className='text-xl font-Inter sm:text-2xl md:text-[1.7rem] font-bold mb-1'>
							{title}
						</CardTitle>
						<CardDescription className='text-sm font-Inter text-muted-foreground'>
							{subtitle}
						</CardDescription>
					</div>

					<div className='flex items-center flex-wrap gap-2 mt-2'>
						<div className='flex items-center gap-1'>
							{starArray}
							<span className='text-sm text-muted-foreground'>{rating}</span>
						</div>
						<span
							className={`text-xs sm:text-sm px-2 py-1 font-Inter rounded-md ${badge.color}`}
						>
							{badge.label}
						</span>
					</div>
				</CardContent>

				<CardContent className='w-full md:w-1/2 max-w-md rounded-xl bg-muted border border-border shadow-md space-y-4 p-0 mx-auto'>
					<div className='bg-secondary w-full p-0 rounded-t-lg overflow-hidden'>
						<div
							className='w-full aspect-video bg-background'
							dangerouslySetInnerHTML={{ __html: ytVideoCode }}
						/>
					</div>

					<div className='flex  items-center justify-between gap-2 px-5'>
						<div className='price flex items-center gap-2'>
							<span className='text-base sm:text-lg font-bold font-Inter'>Price:</span>
							<span className='text-lg font-bold text-primary font-Inter'>
								{discountedPrice}
							</span>
							<span className='text-sm line-through text-muted-foreground font-Inter'>
								{regularPrice}
							</span>
						</div>

						{getSavePercent(regularPrice, discountedPrice) && (
							<motion.div
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.3 }}
							>
								<Badge
									variant='outline'
									className='bg-primary/10 font-Inter text-primary backdrop-blur-sm'
								>
									{getSavePercent(regularPrice, discountedPrice)}
								</Badge>
							</motion.div>
						)}
					</div>

					<div className='cta px-5 pb-5'>
            <a href="https://hitesh.ai/udemy">
            <Button className='w-full cursor-pointer font-Inter font-semibold'>Check on Udemy</Button>
            </a>
					</div>
				</CardContent>
			</Card>
		</motion.div>
	);
};

const UdemyCourses = () => {
	const swiperRef = useRef(null);
	const MotionRippleRingButton = motion.create(RippleRingButton);

	const courses = [
		{
			title: "Complete web development course",
			subtitle:
				"Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment etc",
			ytVideoCode:
				"<iframe width='100%' height='100%' src='https://www.youtube.com/embed/KZ31wDjYleI' title='Most affordable web dev course launch' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>",
			discountedPrice: "₹399",
			regularPrice: "₹1199",
			rating: 4.7,
		},
		{
			title: "Full-Stack Mastery",
			subtitle: "JavaScript, TypeScript, GraphQL, Postgres, Tailwind and more",
			ytVideoCode:
				"<iframe width='100%' height='100%' src='https://www.youtube.com/embed/KZ31wDjYleI' title='Full Stack Mastery course' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>",
			discountedPrice: "₹599",
			regularPrice: "₹2199",
			rating: 4.2,
		},
		{
			title: "Frontend Crash Course",
			subtitle: "React, Tailwind, Framer Motion, Redux Toolkit",
			ytVideoCode:
				"<iframe width='100%' height='100%' src='https://www.youtube.com/embed/KZ31wDjYleI' title='Frontend crash course' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>",
			discountedPrice: "₹999",
			regularPrice: "₹4599",
			rating: 3.9,
		},
		{
			title: "API Development Bootcamp",
			subtitle: "Node, Express, MongoDB, Prisma, REST, Postman",
			ytVideoCode:
				"<iframe width='100%' height='100%' src='https://www.youtube.com/embed/KZ31wDjYleI' title='API course' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>",
			discountedPrice: "₹299",
			regularPrice: "₹1499",
			rating: 3.3,
		},
	];

	return (
		<section id='udemy' className='relative py-10 mb-10'>
			<div className='section-heading w-full flex justify-center items-center flex-col pb-10'>
				<div className='relative'>
					<motion.h2
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className='section-title'
					>
						Udemy
					</motion.h2>
					<AnimatedWaveLine />
				</div>

				<p className=' section-desc'>
					Not only in India, we are global leaders in tech education
				</p>
			</div>

			<Swiper
				modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
				onSwiper={(swiper) => {
					swiperRef.current = swiper;
				}}
				effect='coverflow'
				grabCursor={true}
				centeredSlides={true}
				slidesPerView='auto'
				loop={courses.length > 4}
				autoplay={{
					delay: 3500,
					disableOnInteraction: true,
					pauseOnMouseEnter: true,
				}}
				coverflowEffect={{
					rotate: 0,
					stretch: 0,
					depth: 100,
					modifier: 2.5,
					slideShadows: false,
				}}
				pagination={{
					clickable: true,
					el: ".custom-swiper-pagination",
				}}
				style={{ paddingTop: "20px" }}
				className='px-2 sm:px-6'
			>
				{courses.map((course, idx) => (
					<SwiperSlide
						key={idx}
						className='w-full max-w-[95vw] sm:max-w-[700px] px-1 !h-fit'
					>
						<CourseCard {...course} />
					</SwiperSlide>
				))}
			</Swiper>
			{/* navigation buttons  */}
      
			<div className='navigations relative mt-10'>
        <div className='custom-swiper-pagination mt-6 flex justify-center gap-2' />
				<div className='navigation absolute -bottom-12 flex items-center justify-center w-full z-20'>
					<div className='buttonContainer flex gap-40'>
						{/* Prev Button */}
						<motion.div
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							whileTap={{ scale: 0.95 }}
							whileHover={{ scale: 1.05 }}
							className='prev-button'
						>
							<MotionRippleRingButton
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
							</MotionRippleRingButton>
						</motion.div>
						

						{/* Next Button */}
						<motion.div
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							whileTap={{ scale: 0.95 }}
							whileHover={{ scale: 1.05 }}
							className='next-button'
						>
							<MotionRippleRingButton
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
							</MotionRippleRingButton>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default UdemyCourses;
