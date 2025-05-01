import { Outlet } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const RootLayout = () => {
	return (
		<div className='flex flex-col min-h-screen bg-background text-foreground'>
			<NavBar />

			<div className=' overflow-hidden relative'>
				{/* Glows */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.07 }}
					transition={{ duration: 2 }}
					className='absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-primary rounded-full blur-[120px] z-10'
				/>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.07 }}
					transition={{ duration: 2, delay: 0.3 }}
					className='absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-primary rounded-full blur-[100px] z-10'
				/>
				<main className='flex-1 relative overflow-hidden '>
					<Outlet />
				</main>
			</div>

			<Footer />
		</div>
	);
};

export default RootLayout;
