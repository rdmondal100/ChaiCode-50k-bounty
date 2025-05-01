import React from "react";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion } from "framer-motion";
import { LiveClasses } from "@/data/LiveTrainingClassesData";
import { CalendarDays, Clock } from "lucide-react";
import RippleRingButton from "./RippleRingButton";
import AnimatedWaveLine from "./AnimatedUnderLine";
import { getSavePercent } from "@/lib/utils";



const LiveTrainingClasses = () => (
	<section id='cohorts' className='xl:container xl:mx-auto py-16 px-4 md:px-6'>
		<div className=' mx-auto'>
			<div className='text-3xl selection-heading text-center mb-8 font-Inter flex w-full justify-center flex-col items-center '>
                <div className=" relative w-fit">
                <h2 className=' section-title '>Cohorts</h2>
				<AnimatedWaveLine/>

				</div>

                <p className="section-desc">Live Training Classes</p>
				
			</div>
			<div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				{LiveClasses.map((cls, idx) => (
					<motion.div
						key={idx}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						whileHover='hover'
						variants={{
							hover: { y: -2, scale: 0.989 },
						}}
						transition={{
							type: "spring",
							stiffness: 300,
							damping: 30,
							mass: 1,
						}}
					>
						<Card className='relative shadow-md overflow-hidden flex flex-col h-full rounded-2xl bg-card pt-0 group font-Inter'>
							{/* LIVE badge */}
							<Badge
								className='absolute top-2 right-2 z-10'
								variant='destructive'
							>
								LIVE
							</Badge>

							{/* Video with scale on hover */}
							<motion.div
								variants={{
									hover: { scale: 1.005 },
								}}
								transition={{ type: "spring", stiffness: 150, damping: 20 }}
								className='transition-transform'
							>
								<AspectRatio
									ratio={16 / 9}
									className='w-full rounded-t-2xl bg-muted top-0 overflow-hidden'
								>
									<div
										className='w-full aspect-video h-full'
										dangerouslySetInnerHTML={{ __html: cls.ytEmbadeCode }}
									/>
								</AspectRatio>
							</motion.div>

							{/* Content */}
							<CardHeader className='px-6 pb-0'>
								<div className='flex flex-wrap gap-2'>
									{cls.keywords.map((kw, i) => (
										<Badge
											key={i}
											variant='secondary'
											className='truncate bg-primary/10 backdrop-blur-sm text-primary/80'
										>
											{kw}
										</Badge>
									))}
								</div>
								<CardTitle className='text-xl font-semibold line-clamp-2 h-16'>
									{cls.title}
								</CardTitle>
								<CardDescription className='text-sm text-muted-foreground line-clamp-3'>
									{cls.desc}
								</CardDescription>
							</CardHeader>

							<CardContent className='px-6 flex-1 flex flex-col'>
								<div className='flex flex-wrap justify-between text-xs text-muted-foreground mb-4'>
									<span className='truncate text-md flex items-center gap-1'>
										<CalendarDays width={18} className='text-primary/50' />
										<b>Start:</b> {cls.startDate}
									</span>
									<span className='truncate flex items-center gap-1'>
										<Clock width={18} className='text-primary/50' />
										<b>Duration:</b> {cls.duration}
									</span>
								</div>

								<div className='flex items-center gap-6 mb-2'>
									<div className='price flex items-center gap-1'>
										<span className='text-lg font-bold text-foreground'>
											{cls.discountedPrice}
										</span>
										<span className='text-sm line-through text-muted-foreground truncate'>
											{cls.regularPrice}
										</span>
									</div>

									{getSavePercent(cls.regularPrice, cls.discountedPrice) && (
										<Badge
											variant='outline'
											className='flex items-center bg-primary/20 backdrop-blur-sm text-primary'
										>
											{getSavePercent(cls.regularPrice, cls.discountedPrice)}
										</Badge>
									)}
								</div>
							</CardContent>

							<CardFooter className='px-6 pb-6'>
								<RippleRingButton
									rippleColor='border-foreground'
									rippleSpread={2.5}
									rippleSize={7}
									className='w-full cursor-pointer p-0'
								>
									<a
										href={cls.ctaLink}
										target='_blank'
										className=' w-full'
										rel='noopener noreferrer'
									>
										{cls.ctaName}
									</a>
								</RippleRingButton>
							</CardFooter>
						</Card>
					</motion.div>
				))}
			</div>
		</div>
	</section>
);

export default LiveTrainingClasses;
