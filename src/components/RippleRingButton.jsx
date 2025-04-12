import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const RingWaveButton = React.forwardRef(({ rippleSpred, children, className, onClick, ...props }, ref) => {
	const [ripples, setRipples] = useState([]);

	const handleClick = (e) => {
		// Run ripple effect
		const rect = e.currentTarget.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		const baseTime = Date.now();

		const newRipples = [0, 1].map((i) => ({
			id: baseTime + i,
			x,
			y,
			delay: i * 0.15,
		}));

		setRipples((prev) => [...prev, ...newRipples]);

		setTimeout(() => {
			setRipples((prev) => prev.filter((r) => r.id < baseTime));
		}, 800);

		// Call parent onClick if provided
		if (onClick) onClick(e);
	};

	return (
		<Button
			ref={ref}
			variant='default'
			className={`relative h-auto w-auto p-0 m-0 cursor-pointer ${className}`}
			onClick={handleClick}
			{...props}
		>
			{children}
			<AnimatePresence>
				{ripples.map((ripple) => (
					<motion.span
						key={ripple.id}
						initial={{ scale: 0, opacity: 0.5 }}
						animate={{ scale: rippleSpred ?? 2.8, opacity: 0 }}
						exit={{ opacity: 0 }}
						transition={{
							duration: 0.5,
							delay: ripple.delay,
							ease: "easeOut",
						}}
						className='absolute pointer-events-none border border-foreground rounded-full w-4 h-4'
						style={{
							left: ripple.x - 8,
							top: ripple.y - 8,
						}}
					/>
				))}
			</AnimatePresence>
		</Button>
	);
});

export default RingWaveButton;
