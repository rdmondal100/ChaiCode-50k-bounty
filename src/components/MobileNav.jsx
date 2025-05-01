
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { X } from "lucide-react"; // Optional: for close icon
import React from "react";
import { Link } from "react-router-dom";

const MobileNav = React.forwardRef(
	({ navItems = [], setIsOpenMenu, onClose,className, ...prop }, ref) => {
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
				className={`fixed bottom-0 z-50 left-0 right-0  bg-popover text-popover-foreground w-full h-[70vh] px-5 py-6 rounded-t-2xl  flex flex-col gap-6 backdrop-blur-xs ${className}`}
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
						
							item?.smooth ? ( <a key={item?.name} onClick={()=>setIsOpenMenu(false)} href={item?.link} className="w-full">
<Button
								key={idx}
								variant='ghost'
								className='justify-start cursor-pointer w-full text-lg font-medium text-foreground hover:text-primary transition-all duration-300'
							>
								{item?.name}
							</Button>
							</a> ):(<Link key={item?.name} onClick={()=>setIsOpenMenu(false)} to={item?.link} className="w-full">
								<Button
								key={idx}
								variant='ghost'
								className='justify-start cursor-pointer w-full text-lg font-medium text-foreground hover:text-primary transition-all duration-300'
							>
								{item?.name}
							</Button>
							</Link>)
						
						
					))}
				</div>
			</motion.nav>

		);
	}
);

export default MobileNav;
