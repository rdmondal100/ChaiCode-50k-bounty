import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";
import { Link } from "react-router-dom";
import { CHAICODE_CURRENT_THEME } from "@/lib/constant";

const NotFound = () => {
    const [theme, setTheme] = useState(() => {
      try {
        return JSON.parse(localStorage.getItem(CHAICODE_CURRENT_THEME)) || "dark";
      } catch {
        return "dark";
      }
    });
    useEffect(() => {
      const html = document.documentElement;
    
      if (theme === "dark") {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }
    }, [theme]);
    
    console.log(theme)
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black opacity-80 z-0" />

      <motion.div
        initial={{ y: -20 }}
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="z-10 mb-8"
      >
        <Ghost className="w-24 h-24 text-primary/60 animate-pulse " />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-extrabold tracking-tight z-10 mb-4 text-foreground"
      >
        <span className="glitch text-foreground" data-text="404 - Lost in Code">
          404 - Lost in Code
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="text-muted-foreground max-w-2xl text-lg md:text-xl mb-8 z-10"
      >
        Looks like this page doesn’t exist. But don’t worry — at <strong className="text-primary">chaicode.com</strong>, every wrong turn is just another step in learning to code like a pro.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="z-10"
      >
        <Link to="/" className="h-fit">
          <Button className="text-base cursor-pointer  h-full px-6 py-3 rounded-xl font-semibold shadow-md transition-transform hover:scale-105">
            Return to Homepage
          </Button>
        </Link>
      </motion.div>

      {/* Glitch effect */}
      <style>{`
        .glitch {
          position: relative;
        }

        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          width: 100%;
          overflow: hidden;
        }

        .glitch::before {
          animation: glitchTop 2s infinite linear alternate-reverse;
          top: -2px;
          color: #ff00c8;
        }

        .glitch::after {
          animation: glitchBottom 1.5s infinite linear alternate-reverse;
          top: 2px;
          color: #00fff7;
        }

        @keyframes glitchTop {
          0% {
            clip: rect(0, 9999px, 0, 0);
          }
          20% {
            clip: rect(0, 9999px, 8px, 0);
          }
          40% {
            clip: rect(0, 9999px, 0, 0);
          }
          60% {
            clip: rect(2px, 9999px, 10px, 0);
          }
          80% {
            clip: rect(0, 9999px, 6px, 0);
          }
          100% {
            clip: rect(0, 9999px, 0, 0);
          }
        }

        @keyframes glitchBottom {
          0% {
            clip: rect(0, 9999px, 0, 0);
          }
          25% {
            clip: rect(4px, 9999px, 10px, 0);
          }
          50% {
            clip: rect(0, 9999px, 0, 0);
          }
          75% {
            clip: rect(6px, 9999px, 12px, 0);
          }
          100% {
            clip: rect(0, 9999px, 0, 0);
          }
        }
      `}</style>
    </section>
  );
};

export default NotFound;
