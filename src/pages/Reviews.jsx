import AnimatedWaveLine from "@/components/AnimatedUnderLine";
import RenderTweetsReview from "@/components/RenderTweetsReview";
import { tweetPostIdFromServices } from "@/data/tweetLoveData";
import React from "react";

const Reviews = () => {
	return (
		<section className=" container mx-auto my-20">
            <div className='text-center mb-12 flex w-full justify-center flex-col items-center'>
				
				<div className='relative mb-5'>
					<h2 className='text-4xl font-Inter font-extrabold w-fit text-foreground mb-3 flex gap-3'>
						Our Students Feedback
					</h2>
					<AnimatedWaveLine />
				</div>
				<p className='text-muted-foreground font-Inter text-lg max-w-2xl mx-auto'>
					Explore the incredible advantages of enrolling in our courses and
					enhancing your skills.
				</p>
			</div>
			<div className='columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 mx-auto block '>
				<RenderTweetsReview allTweets={tweetPostIdFromServices} />
			</div>
		</section>
	);
};

export default Reviews;
