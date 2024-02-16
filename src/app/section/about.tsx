import { cn } from "@/lib/utils";
import { Calibre, SFMono } from "../fonts/fonts";
import Image from "next/image";
import { useState } from "react";
import Heading from "@/components/heading";
import { motion } from "framer-motion";

const About = () => {
  let [hoverOnImage, setHoverOnImage] = useState(false);
  const skills = [
    "Laravel",
    "JavaScript (ES6+)",
    "TypeScript",
    "Tailwind CSS",
    "Next Js",
  ];
  return (
    <motion.section
      className="h-screen flex flex-col mx-auto  justify-center lg:w-[80%]"
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Heading text="About Me" number={1} />

      <motion.div
        className={cn(
          "flex mt-10 gap-x-5 flex-col lg:flex-row items-center w-[80%]",
          Calibre.className
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="w-full lg:w-2/3">
          <motion.p
            className="text-slate text-[20px] leading-widest w-full m-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Hi, I'm <span className="text-green"> Faisal</span>, and I thrive on
            the art of web development. It all began in{" "}
            <span className="text-green"> 2015</span> when I decided to create a
            <span className="text-green"> website</span> dedicated to my
            <span className="text-green"> university library</span>. Along the
            way, I stumbled upon the task of coding a unique reblog button,
            which opened up a world of knowledge in{" "}
            <span className="text-green">HTML</span>,{" "}
            <span className="text-green">Javascript</span>,{" "}
            <span className="text-green">PHP</span>, and{" "}
            <span className="text-green">CSS</span>.
          </motion.p>

          <motion.p
            className="text-slate text-[20px] leading-widest w-full mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            Looking ahead to the present day, my professional journey has
            allowed me to join forces with diverse organizations in Kabul, along
            with contributing to a thriving startup in Berlin. My primary focus
            in recent times is centered around developing projects using Laravel
            and React (Next.js). These technologies have become my main tools
            for building robust and efficient web applications.
          </motion.p>

          <motion.p
            className="text-slate text-[20px] leading-widest w-full mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            In my recent work, I've had the opportunity to work with followin
            technologies:
          </motion.p>

          <motion.ul
            className="text-slate text-[16px] mt-5 grid grid-cols-2 gap-4 w-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
          >
            {skills.map((skill) => (
              <li className="flex items-center gap-x-2" key={skill}>
                <span className="text-green text-[14px]">▹</span>
                {skill}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          className="relative flex  w-[256px] h-[256px]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 3.5 }}
        >
          <Image
            src="/faisal.jpeg"
            alt=""
            height={400}
            width={400}
            className={cn("absolute z-100 rounded h-full transition-all", {
              "-translate-x-1 -translate-y-1": hoverOnImage,
            })}
            onMouseLeave={() => setHoverOnImage(false)}
          />

          {!hoverOnImage && (
            <div
              className={cn("absolute inset-0 bg-green opacity-50", {})}
              onMouseEnter={() => setHoverOnImage(true)}
            ></div>
          )}

          <div
            className={cn(
              "absolute border-2 border-green translate-x-3 translate-y-3 h-full w-full -z-20 rounded transition-all",
              {
                "translate-y-4 translate-x-4": hoverOnImage,
              }
            )}
          ></div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
