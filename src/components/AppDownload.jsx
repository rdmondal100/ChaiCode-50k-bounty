import { motion } from "framer-motion";
import { appStoreDownload, playStoreDownload } from "@/assets";
import AnimatedWaveLine from "./AnimatedUnderLine";
import { Layers, User, Zap } from "lucide-react";

const AppDownload = () => {
  return (
    <section className="xl:container xl:mx-auto py-16 px-4 md:px-6">
         {/* Heading */}
      <div className="w-full flex flex-col items-center justify-center mb-10">
        <div className="relative w-fit text-center">
          <h2 className="section-title text-3xl md:text-4xl font-bold">            Get the ChaiCode App
          </h2>
          <AnimatedWaveLine />
        </div>
        <p className='section-desc mt-5'>            Access courses, join live sessions, and connect with the community on the go.
        </p>
      </div>
      <div className=" px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* App Mockup */}
        <div className="relative ">
          <div className="relative mx-auto max-w-[300px]">
            <div
              className="relative z-10 border-[8px] border-[hsl(var(--foreground))] rounded-[40px] overflow-hidden shadow-xl"
              style={{
                boxShadow:
                  "rgba(249, 115, 22, 0.37) 0px 0px 6.9297px",
              }}
            >
              <div className="aspect-[9/19] bg-[hsl(var(--background))] overflow-hidden">
                <div className="h-full w-full relative">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-[hsl(var(--primary-foreground))]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <polyline points="16 18 22 12 16 6"></polyline>
                          <polyline points="8 6 2 12 8 18"></polyline>
                        </svg>
                        <span className="text-[hsl(var(--primary-foreground))] font-bold">
                          ChaiCode
                        </span>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-[hsl(var(--primary-foreground))]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M10.268 21a2 2 0 0 0 3.464 0" />
                        <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
                      </svg>
                    </div>
                  </div>

                  {/* Course Cards */}
                  <div className="p-3">
                    {[
                      {
                        tag: "TRENDING",
                        title: "React Native Masterclass",
                        rating: "4.8 ★ • 2.5h",
                        badge: "LIVE",
                        tagColor: "text-[hsl(var(--primary))]",
                        badgeBg: "bg-[hsl(var(--primary))]",
                        badgeText: "text-[hsl(var(--primary-foreground))]",
                      },
                      {
                        tag: "POPULAR",
                        title: "Full Stack JavaScript",
                        rating: "4.9 ★ • 8h",
                        badge: "ENROLLED",
                        tagColor: "text-[hsl(var(--secondary))]",
                        badgeBg: "bg-[hsl(var(--accent))]",
                        badgeText: "text-[hsl(var(--accent-foreground))]",
                      },
                      {
                        tag: "NEW",
                        title: "AI with JavaScript",
                        rating: "5.0 ★ • 4h",
                        badge: "ENROLL",
                        tagColor: "text-green-400",
                        badgeBg: "bg-[hsl(var(--accent))]",
                        badgeText: "text-[hsl(var(--accent-foreground))]",
                      },
                    ].map((course, i) => (
                      <div
                        key={i}
                        className="bg-[hsl(var(--muted))] rounded-lg p-3 mb-3 last:mb-0"
                      >
                        <div
                          className={`text-xs font-medium mb-1 ${course.tagColor}`}
                        >
                          {course.tag}
                        </div>
                        <div className="text-sm font-bold mb-1 text-[hsl(var(--foreground))]">
                          {course.title}
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-xs text-[hsl(var(--muted-foreground))]">
                            {course.rating}
                          </div>
                          <div
                            className={`text-xs px-2 py-0.5 rounded ${course.badgeBg} ${course.badgeText}`}
                          >
                            {course.badge}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Navigation */}
                  <div className="absolute bottom-0 left-0 right-0 bg-[hsl(var(--muted))] p-2 flex justify-around">
                    {[
                      {
                        label: "Courses",
                        iconColor: "text-primary",
                        icon: <Layers className="w-4 h-4 text-primary"/>
                      },
                      {
                        label: "Live",
                        iconColor: "text-muted-foreground",
                        icon: <Zap className="w-4 h-4 text-muted-foreground"/>
                      },
                      {
                        label: "Profile",
                        iconColor: "text-muted-foreground",
                        icon: <User className="w-4 h-4 text-muted-foreground"/>
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col items-center">
                       {item?.icon}
                        <span className={`text-[10px] ${item.iconColor}`}>
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text & Download Buttons */}
        <div className=" text-center md:text-left">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Learn on the go
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Take your coding journey anywhere with the ChaiCode mobile app.
            Access courses, join live sessions, and connect with the community
            - all from your pocket.
          </motion.p>
          <ul className="text-left text-muted-foreground mb-8 space-y-2">
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-[hsl(var(--primary))] mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Offline course access
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-[hsl(var(--primary))] mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Live session notifications
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-[hsl(var(--primary))] mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Revision while commuting
            </li>
          </ul>
          <div className="flex  justify-center md:justify-start items-center gap-6">
            <motion.a
              href="https://apps.apple.com/app/id6504993143"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={appStoreDownload}
                alt="Download on the App Store"
                className="md:h-14"
              />
            </motion.a>
            <motion.a
              href="https://play.google.com/store/apps/details?id=com.chaicode.courses"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={playStoreDownload}
                alt="Get it on Google Play"
                className="md:h-14"
              />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
