import { motion, AnimatePresence } from "framer-motion";
import SolidButton from "../components/SolidButton";
import { Calibre } from "../fonts/fonts";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  const [showDevelopmentText, setShowDevelopmentText] = useState(false);

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
        <motion.p
          className="text-green"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Hi, My name is
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className={`${Calibre.className} text-5xl md:text-6xl lg:text-8xl text-lightest-slate font-bold tracking-wider`}
        >
          Faisal Khan.
        </motion.h1>
        <motion.h2
          className={`${Calibre.className} text-4xl md:text-6xl lg:text-7xl text-slate font-medium tracking-tight`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          I am a Software Engineer.
        </motion.h2>
        <motion.p
          className="text-slate tracking-tight w-2/3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          I love building web applications! Currently, I am focused on creating
          user-friendly tools using Laravel and Next.js.
        </motion.p>
        <motion.div
          className="h-20 w-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <div className="h-13">
            <AnimatePresence>
              {showDevelopmentText && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={cn(
                    "text-[#e67e22] bg-light-navy p-2 text-[11px] text-center rounded flex gap-x-1 gap-y-1 flex-wrap w-[80%]"
                  )}
                >
                  The website is currently being developed with:
                  <Badge className="text-[9px]">Next JS</Badge>
                  <Badge className="text-[9px]">Tailwind CSS</Badge>
                  <Badge className="text-[9px]">Framer Motion</Badge>
                  <Badge className="text-[9px]">Shadcn/ui</Badge>
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* <SolidButton className="mt-10 text-[13px] px-6 py-6 md:hover:border-b-8 md:hover:border-r-8 border-green transition-all md:hover:-translate-x-6  hover:-border-b-4 hover:-border-r-4 hover:translate-x-1 hover:translate-y-1">
            <a
              rel="noopener"
              aria-label="Visit Previous Version"
              href="https://v1.iamfaisal.de"
              target="_blank"
            >
              See Previous Version
            </a>
          </SolidButton> */}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
