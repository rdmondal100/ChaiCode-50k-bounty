import { useState } from "react";
import { Tweet } from "react-tweet";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { tweetPostIdFromServices } from "@/data/tweetLoveData";
import { Badge } from "./ui/badge";
import AnimatedWaveLine from "./AnimatedUnderLine";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import RenderTweetsReview from "./RenderTweetsReview";


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
				<RenderTweetsReview allTweets={featuredTweets}/>
			</div> 

			{/* View All Button */}
			                    
				<div  className='flex justify-center mt-10 '>
                    <motion.div
                    whileHover={{
                        scale:1.03
                    }}
                    whileTap={{
                        scale: .988
                    }}
                     className=" w-fit">
                    <Link to="/reviews" onClick={() => setShowAll(true)} className='rounded-md px-6 py-3 bg-primary text-foreground '>
						View All Reviews
					</Link>
                    </motion.div>
					
				</div>
			
		</section>
	);
};

export default StudentFeedback;
