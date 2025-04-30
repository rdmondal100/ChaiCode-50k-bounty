import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import RippleRingButton from "./RippleRingButton";

const ToggleTheme = React.forwardRef(({ theme, onToggle, ...props }, ref) => {
	return (
		<RippleRingButton
			rippleColor='border-foreground'
			rippleSize={5}
			ref={ref}
			variant='icon'
			className='bg-muted w-10 h-10 rounded-full relative overflow-hidden shadow-md border-border border cursor-pointer'
			onClick={onToggle}
			{...props}
		>
			<AnimatePresence mode='wait' initial={false}>
				{theme === "light" ? (
					<motion.div
						key='sun'
						initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
						animate={{ rotate: 0, opacity: 1, scale: 1 }}
						exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
						transition={{ duration: 0.3 }}
						className='absolute inset-0 flex items-center justify-center'
					>
						{/* Sun Icon */}
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='lucide lucide-sun'
						>
							<circle cx='12' cy='12' r='4' />
							<path d='M12 2v2' />
							<path d='M12 20v2' />
							<path d='m4.93 4.93 1.41 1.41' />
							<path d='m17.66 17.66 1.41 1.41' />
							<path d='M2 12h2' />
							<path d='M20 12h2' />
							<path d='m6.34 17.66-1.41 1.41' />
							<path d='m19.07 4.93-1.41 1.41' />
						</svg>
					</motion.div>
				) : (
					<motion.div
						key='moon'
						initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
						animate={{ rotate: 0, opacity: 1, scale: 1 }}
						exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
						transition={{ duration: 0.3 }}
						className='absolute inset-0 flex items-center justify-center'
					>
						{/* Moon Icon */}
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='lucide lucide-moon'
						>
							<path d='M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z' />
						</svg>
					</motion.div>
				)}
			</AnimatePresence>
		</RippleRingButton>
	);
});

export default ToggleTheme;
