import { blackChaiCodeLogo, whiteChaiCodeLogo } from "@/assets";
import { motion } from "framer-motion";
import {
	Bot,
	Gamepad,
	Github,
	Instagram,
	Linkedin,
	Twitter,
	Youtube,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	const listVariant = {
		hidden: { opacity: 0, y: 20 },
		visible: (i = 1) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.1,
				duration: 0.4,
				ease: "easeOut",
			},
		}),
	};
	return (
		<footer className='relative xl:container xl:mx-auto   pt-12 px-6 sm:px-12 border border-primary rounded-t-3xl overflow-hidden'>
			<div className='flex flex-col md:flex-row justify-between items-start gap-10 z-10 relative'>
				{/* Left Side */}
				<div className='space-y-4 max-w-sm'>
					<div className='flex items-center gap-2'>
						<img
							src={blackChaiCodeLogo}
							alt='ChaiCode Logo Light'
							className='w-[100px] md:w-[150px] h-auto block dark:hidden'
						/>

						{/* Dark mode logo */}
						<img
							src={whiteChaiCodeLogo}
							alt='ChaiCode Logo Dark'
							className='w-[100px] md:w-[150px] h-auto hidden dark:block'
						/>
					</div>
					<p className='text-sm text-muted-foreground font-Inter'>
						Home for programmers
					</p>

					{/* Social Icons */}
					<div className='flex gap-4 text-xl mt-2'>
						<motion.a
							href='https://www.youtube.com/@chaiaurcode'
							rel='noopener noreferrer'
							target='_blank'
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.95 }}
						>
							<Youtube className='hover:text-red-500 cursor-pointer' />
						</motion.a>

						<motion.a
							href='https://www.instagram.com/hiteshchoudharyofficial'
							rel='noopener noreferrer'
							target='_blank'
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.95 }}
						>
							<Instagram className='hover:text-pink-500 cursor-pointer' />
						</motion.a>

						<motion.a
							href='https://github.com/hiteshchoudhary'
							rel='noopener noreferrer'
							target='_blank'
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.95 }}
						>
							<Github className='hover:text-gray-400 cursor-pointer' />
						</motion.a>

						<motion.a
							href='https://x.com/Hiteshdotcom'
							rel='noopener noreferrer'
							target='_blank'
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.95 }}
						>
							<Twitter className='hover:text-sky-400 cursor-pointer' />
						</motion.a>

						<motion.a
							href='https://www.linkedin.com/in/hiteshchoudhary/'
							rel='noopener noreferrer'
							target='_blank'
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.95 }}
						>
							<Linkedin className='hover:text-blue-500 cursor-pointer' />
						</motion.a>

						<motion.a
							href='https://hitesh.ai/discord'
							rel='noopener noreferrer'
							target='_blank'
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.95 }}
						>
							<Bot className='hover:text-violet-500 cursor-pointer' />
						</motion.a>
					</div>
					<p className='text-xs text-muted-foreground pt-4 font-Inter'>
						© 2024 Chaicode. All rights reserved.
					</p>
				</div>

				{/* Right Side Links */}
				<motion.div
					className='grid grid-cols-2 gap-6 text-sm text-muted-foreground'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
				>
					<div className='space-y-2 font-Inter'>
						<p className='font-semibold text-foreground'>Explore</p>
						<ul className='space-y-1'>
							{[
								{
									label: "Courses",
									href: "https://courses.chaicode.com/learn",
								},
								{
									label: "Cohort",
									href: "https://courses.chaicode.com/learn/view-all?show=batch&type=17",
								},
								{
									label: "Coding Hero",
									href: "https://courses.chaicode.com/learn/batch/about?bundleId=226894",
								},
								{ label: "FreeAPI", href: "https://freeapi.app/" },
								{ label: "Masterji", href: "https://masterji.co/" },
							].map((item, index) => (
								<motion.li
									key={item.label}
									custom={index}
									variants={listVariant}
									whileHover={{ scale: 1.05, x: 4 }}
									className='cursor-pointer'
								>
									<a href={item.href}>{item.label}</a>
								</motion.li>
							))}
						</ul>
					</div>

					<div className='space-y-2 font-Inter'>
						<p className='font-semibold text-foreground'>Legal</p>
						<ul className='space-y-1'>
							{[
								{ label: "Docs", to: "/docs" },
								{ label: "Privacy Policy", to: "/privacy-policy" },
								{ label: "Terms of Service", to: "/terms-of-services" },
								{ label: "Pricing Policy", to: "/pricing-policy" },
								{ label: "Refund Policy", to: "/refund-policy" },
							].map((item, index) => (
								<motion.li
									key={item.label}
									custom={index}
									variants={listVariant}
									whileHover={{ scale: 1.05, x: 4 }}
									className='cursor-pointer'
								>
									<Link to={item.to}>{item.label}</Link>
								</motion.li>
							))}
						</ul>
					</div>
				</motion.div>
			</div>
			{/* Background Big Text */}
			<h1 className='relative font-Inter text-center text-[3rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] font-bold text-transparent bg-gradient-to-b from-primary  to-background bg-clip-text  bottom-0 left-0 leading-none'>
				CHAIAURCODE
			</h1>
		</footer>
	);
};

export default Footer;
