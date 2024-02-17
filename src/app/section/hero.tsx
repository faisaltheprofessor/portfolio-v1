import { motion, AnimatePresence } from "framer-motion";
import SolidButton from "../components/SolidButton";
import { Calibre } from "../fonts/fonts";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Hero = () => {
  const [showDevelopmentText, setShowDevelopmentText] = useState(true);

  // setTimeout(() => setShowDevelopmentText(false), 3000);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="min-h-screen flex items-center snap-center -mt-20 md:mt-0"
      id="#"
    >
      <div
        className={`flex flex-col items-start gap-y-6  text-white mx-auto -mt-20 font-medium md:px-20`}
      >
        <h2 className="text-green">Hi, My name is</h2>
        <h1
          className={`${Calibre.className} text-5xl md:text-6xl lg:text-8xl text-lightest-slate font-bold tracking-wider`}
        >
          Faisal Khan.
        </h1>
        <h3
          className={`${Calibre.className} text-4xl md:text-6xl lg:text-7xl text-slate font-medium tracking-tight`}
        >
          I am a Software Engineer.
        </h3>
        <p className="text-slate tracking-tight w-2/3">
          I love building web applications! Currently, I am focused on creating
          user-friendly tools using Laravel and Next.js.
        </p>
        <div className="h-20 w-auto">
          <div className="h-10">
            <AnimatePresence>
              {showDevelopmentText && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={cn(
                    "text-[#e67e22] bg-light-navy p-2 text-[13px] text-center rounded flex gap-x-4 flex-wrap"
                  )}
                >
                  Still in development:{" "}
                  <span className="bg-slate rounded p-1 text-navy text-[10px]">
                    Next JS
                  </span>{" "}
                  <span className="bg-slate rounded p-1 text-navy text-[10px]">
                    Tailwind CSS
                  </span>{" "}
                  <span className="bg-slate rounded p-1 text-navy text-[10px]">
                    Framer Motion
                  </span>{" "}
                  <span className="bg-slate rounded p-1 text-navy text-[10px]">
                    Shadcn/UI
                  </span>{" "}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <SolidButton className="mt-10 text-[13px] px-6 py-6 hover:border-b-8 hover:border-r-8 border-green transition-all hover:-translate-x-6 box-border">
            <a href="https://v1.iamfaisal.de" target="_blank">
              See Previous Version
            </a>
          </SolidButton>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
