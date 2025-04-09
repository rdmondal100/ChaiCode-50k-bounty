
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { X } from "lucide-react"; // Optional: for close icon
import React from "react";

const MobileNav = React.forwardRef(
	({ navItems = [], onClose, ...prop }, ref) => {
		return (

			<motion.nav
				{...prop}
				ref={ref}
				initial={{ y: '100%'}}
				animate={{ y:0 }}
				exit={{ y: "100%" }}
				transition={{
					type: "spring",
					stiffness: 300,
					damping: 40,
					mass: 1
				}}
				className='fixed bottom-0 left-0 right-0 z-50 bg-popover text-popover-foreground w-full h-[70vh] px-5 py-6 rounded-t-2xl mybox-shadow flex flex-col gap-6'
			>
				{/* Close Button */}
				<div className='flex justify-end'>
					{onClose && (
						<Button
							variant='ghost'
							size='icon'
							onClick={onClose}
							className='text-muted-foreground'
						>
							<X className='w-6 h-6' />
						</Button>
					)}
				</div>

				{/* Nav Items */}
				<div className='flex flex-col gap-4'>
					{navItems.map((item, idx) => (
						<Button
							key={idx}
							variant='ghost'
							className='justify-start cursor-pointer text-lg font-medium text-foreground hover:text-primary transition-all duration-300'
						>
							{item}
						</Button>
					))}
				</div>
			</motion.nav>

		);
	}
);

export default MobileNav;
