import { motion } from "framer-motion";

const Section = ({ title, children }) => (
	<div className='mb-10'>
		<motion.h2
			className='text-2xl font-semibold text-foreground mb-2'
			initial={{ opacity: 0, y: 10 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
		>
			{title}
		</motion.h2>
		<motion.div
			className='text-muted-foreground space-y-2'
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6 }}
		>
			{children}
		</motion.div>
	</div>
);

const RefundPolicy = () => {
	return (
		<section className='relative min-h-screen xl:container xl:mx-auto py-5'>
			<div className='mt-16 px-4 w-full justify-center items-center'>
				<motion.h1
					className='text-4xl font-extrabold mb-6 text-center'
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					Refund Policy
				</motion.h1>

				<Section title='Introduction'>
					<p>
						At Chai Code, we strive to deliver the highest quality online
						learning experiences. Please read our refund policy carefully before
						making a purchase.
					</p>
				</Section>

				<Section title='1. Digital Course Purchases – No Refund Policy'>
					<p>
						All our courses are digital products and are non-refundable. Once a
						course has been purchased, we do not offer refunds under any
						circumstances unless explicitly mentioned.
					</p>
					<p>
						To help you make an informed decision:
						<ul className='list-disc ml-6 mt-2'>
							<li>Most courses offer free sample videos for preview.</li>
							<li>
								You can also explore our content on YouTube to assess the
								teaching style and course quality before purchasing.
							</li>
						</ul>
					</p>
				</Section>

				<Section title='2. Course/Batches Cancellation by Chai Code'>
					<p>
						In the rare event that a course or scheduled batch is cancelled by
						Chai Code and we are unable to deliver the promised service, a 100%
						refund will be issued to the original payment method.
					</p>
				</Section>

				<Section title='3. No Refunds on Sale or Discounted Courses'>
					<p>
						Courses purchased at a discounted price or during special sales are
						not eligible for refunds under any condition.
					</p>
				</Section>

				<Section title='4. No Exchanges'>
					<p>
						Each course is a self-contained digital property. Therefore, we do
						not allow exchanges between courses or upgrades after purchase.
					</p>
				</Section>

				<Section title='5. Gifting Courses'>
					<p>
						Currently, we do not support gifting of courses. All purchases are
						for individual use only.
					</p>
				</Section>

				<Section title='6. No Physical Shipping'>
					<p>
						All our offerings are delivered digitally through our website. We do
						not ship physical copies like CDs or DVDs.
					</p>
				</Section>

				<Section title='7. Need Help?'>
					<p>
						If you believe there has been an error in your purchase or if you
						face any issues accessing your course, feel free to contact our
						support team:
					</p>
					<p>
						📧{" "}
						<a
							href='mailto:team@chaicode.com'
							className='text-primary hover:text-primary/80'
						>
							team@chaicode.com
						</a>
					</p>
				</Section>
			</div>
		</section>
	);
};

export default RefundPolicy;
