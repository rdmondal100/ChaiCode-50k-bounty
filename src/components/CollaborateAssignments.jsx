import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const CollaborateAssignments = () => {
	return (
		<section className=' xl:container xl:mx-auto py-16 px-4 md:px-6'>
			<div className='relative grid grid-cols-1 mb-10 md:grid-cols-2 gap-8 bg-background p-8  overflow-hidden'>
				{/* Center Glowing Divider */}
				<div className='hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent animate-pulse' />

				{/* Collaborate Section */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<Card className='bg-card backdrop-blur-sm border border-border/40'>
						<CardContent className='p-6'>
							<h2 className='text-3xl font-semibold mb-3 text-primary'>
								Collaborate
							</h2>
							<p className='text-sm text-muted-foreground mb-6'>
								Work with peers in real-time, solve challenges together, and
								improve your problem-solving skills.
							</p>
							<div className='flex items-center gap-4'>
								<div className='flex -space-x-3'>
									<Avatar>
										<AvatarImage src='https://i.pravatar.cc/150?img=1' />
									</Avatar>
									<Avatar>
										<AvatarImage src='https://i.pravatar.cc/150?img=2' />
									</Avatar>
									<Avatar>
										<AvatarImage src='https://i.pravatar.cc/150?img=3' />
									</Avatar>
									<Avatar>
										<AvatarImage src='https://i.pravatar.cc/150?img=4' />
									</Avatar>
								</div>
								<Button
									size='sm'
									variant='secondary'
									className='cursor-pointer'
								>
									Find Partner
								</Button>
							</div>
						</CardContent>
					</Card>
				</motion.div>

				{/* Assignments Section */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
				>
					<Card className='bg-card backdrop-blur-sm border border-border/40'>
						<CardContent className='p-6'>
							<h2 className='text-3xl font-semibold mb-3 text-primary'>
								Assignments
							</h2>
							<p className='text-sm text-muted-foreground mb-6'>
								Take on challenging assignments designed to test your knowledge
								and improve your coding expertise.
							</p>
							<div className='flex gap-3'>
								<a href='https://masterji.co/dashboard'>
									<Button
										variant='secondary'
										size='sm'
										className=' cursor-pointer'
									>
										Realtime Grading
									</Button>
								</a>
								<a href='https://masterji.co/dashboard/all-assignments'>
									<Button size='sm' className='cursor-pointer'>
										Attempt Now
									</Button>
								</a>
							</div>
						</CardContent>
					</Card>
				</motion.div>
			</div>
		</section>
	);
};

export default CollaborateAssignments;
