import { useState } from "react";
import { Tweet } from "react-tweet";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { tweetPostIdFromServices } from "@/data/tweetLoveData";
import { Badge } from "./ui/badge";
import AnimatedWaveLine from "./AnimatedUnderLine";
import { Button } from "@/components/ui/button";

const TWEET_LIMIT = 5;

const StudentFeedback = () => {
	const [showAll, setShowAll] = useState(false);

	const uniqueTweetIds = [...new Set(tweetPostIdFromServices)];
	const visibleTweets = showAll ? uniqueTweetIds : uniqueTweetIds.slice(0, TWEET_LIMIT);

	return (
		<section className='py-16 px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto'>
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

			<div className='columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6'>
				{visibleTweets.map((id, idx) => (
					<motion.div
						key={id}
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
						className='break-inside-avoid'
					>
						<Card className='shadow-md student-feedback rounded-2xl bg-card p-0 overflow-hidden max-w-fit'>
							<CardContent className='p-0 w-full overflow-hidden'>
								<div data-theme='light' className='w-full m-0 p-0'>
									<Tweet id={id} className='w-full' />
								</div>
							</CardContent>
						</Card>
					</motion.div>
				))}
			</div>

			{/* View All Button */}
			{!showAll && uniqueTweetIds.length > TWEET_LIMIT && (
				<div className='text-center mt-10'>
					<Button onClick={() => setShowAll(true)} className='rounded-full px-6 py-2'>
						View All
					</Button>
				</div>
			)}
		</section>
	);
};

export default StudentFeedback;
