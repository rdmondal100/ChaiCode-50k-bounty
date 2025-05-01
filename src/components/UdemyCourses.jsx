import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { getCourseBadge, getSavePercent } from "@/lib/utils";

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-5 h-5 text-yellow-400"
  >
    <path d="M12 2l2.9 6.6L22 9.3l-5 4.9L18.3 22 12 18.3 5.7 22 7 14.2 2 9.3l7.1-0.7L12 2z" />
  </svg>
);


const CourseCard = ({ title, subtitle, ytVideoCode, rating, regularPrice, discountedPrice }) => {
  const fullStars = Math.floor(rating);
  const starArray = Array.from({ length: fullStars }, (_, i) => <StarIcon key={i} />);
  const badge = getCourseBadge(rating);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Card className='bg-card border border-border rounded-xl p-4 sm:p-6 text-foreground space-y-4 h-full flex flex-col md:flex-row justify-between w-full max-w-4xl shadow-sm'>
        <CardContent className='flex flex-col justify-between gap-4 w-full md:w-1/2'>
          <div>
            <CardTitle className='text-xl sm:text-2xl md:text-3xl font-bold mb-1'>{title}</CardTitle>
            <CardDescription className='text-sm text-muted-foreground'>{subtitle}</CardDescription>
          </div>

          <div className='flex items-center flex-wrap gap-2 mt-2'>
            <div className='flex items-center gap-1'>
              {starArray}
              <span className='text-sm text-muted-foreground'>{rating}</span>
            </div>
            <span className={`text-xs sm:text-sm px-2 py-1 rounded-md ${badge.color}`}>
              {badge.label}
            </span>
          </div>
        </CardContent>

        <CardContent className='w-full md:w-1/2 max-w-md rounded-xl bg-muted border border-border shadow-md space-y-4 p-0 mx-auto'>
          <div className='bg-secondary w-full p-0 rounded-t-lg overflow-hidden'>
            <div className="w-full aspect-video bg-background" dangerouslySetInnerHTML={{ __html: ytVideoCode }} />
          </div>

          <div className='flex flex-col sm:flex-row items-center justify-between gap-2 px-5'>
            <div className='price flex items-center gap-2'>
              <span className="text-base sm:text-lg font-bold">Price:</span>
              <span className='text-lg font-bold text-primary'>{discountedPrice}</span>
              <span className='text-sm line-through text-muted-foreground'>{regularPrice}</span>
            </div>

            {getSavePercent(regularPrice, discountedPrice) && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Badge variant='outline' className='bg-primary/10 text-primary backdrop-blur-sm'>
                  {getSavePercent(regularPrice, discountedPrice)}
                </Badge>
              </motion.div>
            )}
          </div>

          <div className="cta px-5 pb-5">
            <Button className='w-full'>Check on Udemy</Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const UdemyCourses = () => {
  const courses = [
    {
      title: "Complete web development course",
      subtitle: "Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment etc",
      ytVideoCode: "<iframe width='100%' height='100%' src='https://www.youtube.com/embed/KZ31wDjYleI' title='Most affordable web dev course launch' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>",
      discountedPrice: "₹399",
      regularPrice: "₹1199",
      rating: 4.7,
    },
    {
      title: "Full-Stack Mastery",
      subtitle: "JavaScript, TypeScript, GraphQL, Postgres, Tailwind and more",
      ytVideoCode: "<iframe width='100%' height='100%' src='https://www.youtube.com/embed/KZ31wDjYleI' title='Full Stack Mastery course' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>",
      discountedPrice: "₹599",
      regularPrice: "₹2199",
      rating: 4.2,
    },
    {
      title: "Frontend Crash Course",
      subtitle: "React, Tailwind, Framer Motion, Redux Toolkit",
      ytVideoCode: "<iframe width='100%' height='100%' src='https://www.youtube.com/embed/KZ31wDjYleI' title='Frontend crash course' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>",
      discountedPrice: "₹999",
      regularPrice: "₹4599",
      rating: 3.9,
    },
    {
      title: "API Development Bootcamp",
      subtitle: "Node, Express, MongoDB, Prisma, REST, Postman",
      ytVideoCode: "<iframe width='100%' height='100%' src='https://www.youtube.com/embed/KZ31wDjYleI' title='API course' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>",
      discountedPrice: "₹299",
      regularPrice: "₹1499",
      rating: 3.3,
    },
  ];

  return (
    <section className='relative py-20'>
      <div className='absolute left-4 top-6 sm:left-6 sm:top-10 text-xs sm:text-sm leading-tight'>
        Sliders<br />as more courses are<br />on the way
        <div className='border-l border-border h-8 sm:h-10 ml-2 mt-2' />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-1'
      >
        Udemy
      </motion.h2>

      <p className='text-center text-sm sm:text-base mb-12'>
        Not only in India, we are
        <br className='hidden sm:block' />
        global leaders in tech education
      </p>

      <Swiper
        effect='coverflow'
        grabCursor={true}
        centeredSlides={true}
        slidesPerView='auto'
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: true }}
        coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5, slideShadows: false }}
        pagination={{ clickable: true }}
        className='px-2 sm:px-6'
      >
        {courses.map((course, idx) => (
          <SwiperSlide key={idx} className='w-full max-w-[95vw] sm:max-w-[700px] px-1 !h-fit'>
            <CourseCard {...course} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default UdemyCourses;
