import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Tweet } from "react-tweet";

const RenderTweetsReview = ({ allTweets }) => {

	return (
		allTweets.map((tweetItem, idx) => (
			<motion.div
				key={tweetItem?.id || idx}
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
				className='break-inside-avoid  flex justify-center sm:block sm:mx-auto'
			>
				<Card className='shadow-md student-feedback rounded-2xl bg-card p-0 overflow-hidden max-w-[500px] w-full'>
					<CardContent className='p-0 w-full overflow-hidden'>
						<div data-theme='light' className='w-full m-0 p-0'>
							<Tweet id={tweetItem?.id} className='w-full' />
						</div>
					</CardContent>
				</Card>
			</motion.div>
		))
	);
};

export default RenderTweetsReview;
