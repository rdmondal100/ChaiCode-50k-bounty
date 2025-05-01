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
  animate={{ opacity: 1 }}
  transition={{ duration: 2 }}
  className='absolute -top-32 -left-32 w-[400px] h-[400px] bg-primary/20 dark:bg-primary/15 rounded-full blur-[160px] z-10 pointer-events-none dark:mix-blend-screen'
/>

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 2, delay: 0.3 }}
  className='absolute -top-32 -right-32 w-[400px] h-[400px] bg-primary/20 dark:bg-primary/15 rounded-full blur-[160px] z-10 pointer-events-none dark:mix-blend-screen'
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
