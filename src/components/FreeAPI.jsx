
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AnimatedWaveLine from './AnimatedUnderLine';

const FreeAPI = () => {
  return (
    <section className="xl:container xl:mx-auto py-16 px-4 md:px-6">

        <div className='text-3xl selection-heading text-center mb-8 font-Inter flex w-full justify-center flex-col items-center '>
                <div className=" relative w-fit">
                <h2 className=' section-title '>            FreeAPI - Open Source
                </h2>
				<AnimatedWaveLine/>

				</div>

                <p className="section-desc mt-5">Master you front-end knowledge with the FREEAPI</p>
				
			</div>

      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-5 min-h-[500px] ">
        
        {/* Left Side */}
        <motion.div
          className="lg:w-1/2  w-full h-full flex flex-col justify-between gap-5 items-start"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-Inter tracking-tight text-foreground w-full text-center lg:text-left">
            Unlock Your Potential with Our API Hub

          </h2>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-Inter w-full text-center lg:text-left">
            Our API Hub is designed to streamline your learning experience in API handling across various programming languages.
            With this resource, you can effortlessly build and showcase your front-end portfolio in both web and mobile applications.
            Join us to enhance your skills and take your coding projects to the next level!
          </p>

<div className=' w-full justify-center items-center flex'>

<a href="https://api.freeapi.app/">
          <Button
            className="mt-6 px-6 py-3 h-fit text-lg font-semibold  text-primary font-Inter cursor-pointer"
            variant="outline"
          >
            Check FreeAPI Docs
          </Button>
          </a>
          </div>

        </motion.div>

        {/* Right Side */}
        <motion.div
          className="lg:w-1/2 w-full aspect-video rounded-xl overflow-hidden min-w-xs bg-muted max-w-xl"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
        
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/DxedlhTyR7Q"
                title="FreeAPI - Our open source project got an upgrade"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeAPI;
