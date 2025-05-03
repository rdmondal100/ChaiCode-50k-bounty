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

const PricingPolicy = () => {
	return (
		<section
			className='relative min-h-screen xl:container xl:mx-auto 
     py-5'
		>
			<div className=' mt-16 px-4 w-full justify-center items-center'>
				<motion.h1
					className='text-4xl font-extrabold mb-6 text-center'
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					Pricing Policy
				</motion.h1>

				<Section title='Introduction'>
					<p>
						At Chai Code, transparency, fairness, and customer satisfaction are
						central to our pricing structure. This Pricing Policy outlines the
						terms related to pricing, payments, discounts, and related matters
						associated with our services and offerings.
					</p>
				</Section>

				<Section title='1. Customized Pricing'>
					<p>
						We offer personalized pricing based on the scope, complexity, and
						outcomes of the services requested. Each service quote is shared
						with you in advance, reflecting the time, effort, and quality
						involved. Typically, our pricing ranges from INR 500 to INR 14,000
						depending on the nature of the service.
					</p>
				</Section>

				<Section title='2. Payment Schedule'>
					<p>
						Certain services are available on a subscription or time-bound
						basis. The duration for such services varies from 1 month to 1 year,
						as clearly mentioned in the service description. All payments must
						be made upfront unless otherwise specified in the agreement.
					</p>
				</Section>

				<Section title='3. Price Matching'>
					<p>
						We are committed to offering competitive pricing. If you find a
						similar product or service (matching in specifications, color, and
						size) at a lower price from a comparable retailer, we will do our
						best to match that price.
					</p>
					<p className=' italic'>
						Note: We do not match prices from auction sites, outlet stores, or
						websites offering discount coupons, promotional pricing, shipping
						offers, or gift card incentives.
					</p>
				</Section>

				<Section title='4. Sale Adjustments'>
					<p>
						If an item or service you have purchased is reduced in price within
						14 days of your purchase, you are eligible for a one-time price
						adjustment. To request a sale adjustment, please contact our support
						team with your order details. Our Platform run sales offer time to
						time and such offers are not eligible for further adjustments.
					</p>
					<p className=' italic'>
						Note: Designer services or items bought on sale are not eligible for
						further adjustments. Discounted offers on other platforms are not
						applicable.
					</p>
				</Section>

				<Section title='5. Pricing Errors'>
					<p>
						While we strive for complete accuracy, inadvertent pricing errors
						may occur. If a product or service is listed at an incorrect price,
						we reserve the right to cancel the order and notify you of the
						error. If the correct price is higher than what was displayed, you
						may choose to proceed with the updated amount or cancel your order
						without penalty.
					</p>
				</Section>

				<Section title='6. Shopping Cart Policy'>
					<p>
						Prices displayed in your shopping cart reflect the most recent
						pricing from the product or service page. This price may differ from
						the one shown when you initially added the item. All offerings are
						intended for personal use only. We reserve the right to refuse
						orders that appear to be intended for resale.
					</p>
					<p>
						If you have any questions or need further assistance, please reach
						out to our Customer Service Team at 
						<a href='mailto:team@chaicode.com' className=" text-primary hover:text-primary/80"> team@chaicode.com</a> — available
						24/7 to support you.
					</p>
				</Section>
			</div>
		</section>
	);
};

export default PricingPolicy;
