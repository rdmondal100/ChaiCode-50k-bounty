import { useState } from "react";
import { Tweet } from "react-tweet";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { tweetPostIdFromServices } from "@/data/tweetLoveData";
import { Badge } from "./ui/badge";
import AnimatedWaveLine from "./AnimatedUnderLine";
import { Button } from "@/components/ui/button";


const StudentFeedback = () => {

	const featuredTweets = tweetPostIdFromServices?.filter((tweet)=>tweet?.featured)
    console.log(featuredTweets)

	return (
		<section className='py-16  px-4 md:px-6 max-w-7xl xl:container xl:mx-auto'>
			<div className='text-center mb-12 flex w-full justify-center flex-col items-center'>
				<Badge className='bg-primary/10 backdrop-blur-sm font-bold text-primary rounded-full px-2 py-1'>
					Testimonials
				</Badge>
				<div className='relative mb-5'>
					<h2 className='text-4xl font-extrabold w-fit text-foreground mb-3 flex gap-3'>
						Our Students Feedback
					</h2>
					<AnimatedWaveLine />
				</div>
				<p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
					Explore the incredible advantages of enrolling in our courses and
					enhancing your skills.
				</p>
			</div>

		<div className='columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 mx-auto block '>
				{featuredTweets.map((tweetItem, idx) => (
					<motion.div
						key={tweetItem?.id || idx}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						whileHover="hover"
						variants={{
							hover: { y: -2, scale: 0.989 },
						}}
						transition={{
							type: "spring",
							stiffness: 300,
							damping: 30,
							mass: 1,
						}}
						className='break-inside-avoid flex justify-center sm:block sm:mx-auto'
					>
						<Card className='shadow-md student-feedback rounded-2xl bg-card p-0 overflow-hidden max-w-[500px]'>
							<CardContent className='p-0 w-full overflow-hidden'>
								<div data-theme='light' className='w-full m-0 p-0'>
									<Tweet id={tweetItem?.id} className='w-full' />
								</div>
							</CardContent>
						</Card>
					</motion.div>
				))}
			</div> 

			{/* View All Button */}
			                    
				<div className='text-center mt-10'>
					<Button onClick={() => setShowAll(true)} className='rounded-full px-6 py-2'>
						View All
					</Button>
				</div>
			
		</section>
	);
};

export default StudentFeedback;
