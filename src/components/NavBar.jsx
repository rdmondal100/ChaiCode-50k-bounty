
import { useEffect, useState } from "react";
import { AnimatePresence, motion, easeInOut } from "framer-motion";
import { blackChaiCodeLogo, whiteChaiCodeLogo } from "@/assets/index";
import { Button } from "./ui/button";
import ToggleTheme from "./ToggleTheme";
import { CHAICODE_CURRENT_THEME } from "@/lib/constant";
import MobileNav from "./MobileNav";
import { useOutsideClick } from "@/hooks/useClickOutside";

const navItems = ["Cohorts", "Udemy", "Docs", "Reviews"];

const NavBar = () => {
  const [theme, setTheme] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(CHAICODE_CURRENT_THEME)) || "dark";
    } catch {
      return "dark";
    }
  });

  const [hovered, setHovered] = useState(null);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const ref = useOutsideClick(() => setIsOpenMenu(false));

  // Theme toggle
  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
      localStorage.setItem(CHAICODE_CURRENT_THEME, JSON.stringify("dark"));
    } else {
      html.classList.remove("dark");
      localStorage.setItem(CHAICODE_CURRENT_THEME, JSON.stringify("light"));
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Scroll hide/reveal
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNav(currentScrollY < lastScrollY || currentScrollY < 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Variants
  const buttonVariants = {
    initial: { opacity: 0, y: 5 },
    animate: { opacity: 1, y: 0 },
    whileHover: {
      y: -2,
      boxShadow: "0 8px 20px rgba(241, 158, 24, 0.25)",
    },
    whileTap: {
      y: 1,
      scale: 0.98,
      boxShadow: "0 4px 12px rgba(241, 158, 24, 0.15)",
    },
  };

  const mobileMenuButtonVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    whileHover: { y: -2, scale: 1.2 },
    whileTap: { scale: 0.95 },
  };

  return (
    <>
      <motion.header
        className={`px-4 py-3 text-foreground mybox-shadow bg-primary/0 backdrop-blur fixed z-30 w-full`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: showNav ? 1 : 0, y: showNav ? 0 : -20 }}
        transition={{ duration: 0.5, ease: easeInOut }}
      >
        <div className="container flex items-center justify-between mx-auto">
          {/* Logo */}
          <motion.a
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="cursor-pointer"
            href="#"
          >
            <img
              src={theme === "dark" ? whiteChaiCodeLogo : blackChaiCodeLogo}
              alt="ChaiCode Logo"
              className="w-[100px] md:w-[150px] h-auto"
            />
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden sm:block relative w-full">
            <motion.nav className="max-w-md mx-auto rounded-full px-2 py-1 flex">
              {navItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                  className="cursor-pointer group relative w-full flex justify-center items-center py-1.5 font-InterDisplay text-[12px] md:text-[16px] font-[400]"
                >
                  <motion.div className="relative z-20 group-hover:text-muted-foreground">
                    {item}
                    {hovered === idx && (
                      <motion.span
                        layoutId="hover-line"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                          mass: 0.8,
                        }}
                        className="absolute inset-0 top-6 border-primary w-auto border-b-3"
                      ></motion.span>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </motion.nav>
          </div>

          {/* Right Side */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ y: -10, x: 5, opacity: 0 }}
            animate={{ y: 0, x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {/* Login Button */}
            <motion.div
              variants={buttonVariants}
              whileHover="whileHover"
              whileTap="whileTap"
              transition={{ duration: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="rounded-md cursor-pointer"
            >
              <Button
                variant="outline"
                className="rounded-md font-Inter text-foreground border-0 hover:bg-accent hover:text-accent-foreground transition bg-gradient-to-r from-primary to-complement mybox-shadow text-base sm:text-[12px] md:text-[16px] font-[500] cursor-pointer "
              >
                Login
              </Button>
            </motion.div>

            {/* Theme Toggle */}
            <motion.div
              variants={buttonVariants}
              whileHover="whileHover"
              whileTap="whileTap"
              transition={{ duration: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="rounded-full"
            >
              <ToggleTheme theme={theme} onToggle={toggleTheme} />
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="sm:hidden flex items-center">
              <motion.div
                variants={mobileMenuButtonVariants}
                whileHover="whileHover"
                whileTap="whileTap"
                className="cursor-pointer scale-110"
                onClick={() => setIsOpenMenu((prev) => !prev)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-align-right"
                >
                  <path d="M21 12H9" />
                  <path d="M21 18H7" />
                  <path d="M21 6H3" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpenMenu && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
              onClick={() => setIsOpenMenu(false)}
            />
            <MobileNav
              ref={ref}
              navItems={navItems}
              onClose={() => setIsOpenMenu(false)}
              className=""
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
