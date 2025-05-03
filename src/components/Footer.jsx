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
						<Youtube className='hover:text-red-500 cursor-pointer ' />
						<Instagram className='hover:text-pink-500 cursor-pointer' />
						<Github className='hover:text-gray-400 cursor-pointer' />
						<Twitter className='hover:text-sky-400 cursor-pointer' />
						<Linkedin className='hover:text-blue-500 cursor-pointer' />
						<Bot className='hover:text-violet-500 cursor-pointer' />
					</div>

					<p className='text-xs text-muted-foreground pt-4 font-Inter'>
						© 2024 Chaicode. All rights reserved.
					</p>
				</div>

				{/* Right Side Links */}
				<div className='grid grid-cols-2 gap-6 text-sm text-muted-foreground'>
					<div className='space-y-2 font-Inter'>
						<p className='font-semibold text-foreground'>Explore</p>
						<ul className='space-y-1'>
							<li>
								{" "}
								<a
									href='https://courses.chaicode.com/learn'
									className=' cursor-pointer'
								>
									Courses{" "}
								</a>{" "}
							</li>
							<li>
								<a
									href='https://courses.chaicode.com/learn/view-all?show=batch&type=17'
									className=' cursor-pointer'
								>
									Cohort{" "}
								</a>
							</li>
							<li>
								<a
									href='https://courses.chaicode.com/learn/batch/about?bundleId=226894'
									className=' cursor-pointer'
								>
									Coding Hero{" "}
								</a>
							</li>
							<li>
								<a href='https://freeapi.app/' className=' cursor-pointer'>
									FreeAPI{" "}
								</a>
							</li>
							<li>
								<a href='https://masterji.co/' className=' cursor-pointer'>
									Masterji{" "}
								</a>
							</li>
						</ul>
					</div>
					<div className='space-y-2 font-Inter'>
						<p className='font-semibold text-foreground'>Legal</p>
						<ul className='space-y-1'>
							<li>
								<Link to='/docs'>Docs</Link>
							</li>
							<li>
								<Link to='/privacy-policy'>Privacy Policy</Link>
							</li>
							<li>
								<Link to='/terms-of-services'>Terms of Service</Link>
							</li>
							<li>
								<Link to='/pricing-policy'>Pricing Policy</Link>
							</li>
							<li>
								<Link to='/refund-policy'>Refund Policy</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			{/* Background Big Text */}
			<h1 className='relative font-Inter text-center text-[3rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] font-bold text-transparent bg-gradient-to-b from-primary  to-background bg-clip-text  bottom-0 left-0 leading-none'>
				CHAIAURCODE
			</h1>
		</footer>
	);
};

export default Footer;
