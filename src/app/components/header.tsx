"use client";
import { Github, Linkedin, Twitter } from "lucide-react";
import Navbar from "./navbar";
import { motion } from "framer-motion";
const Header = () => {
  const profiles = [
    {
      id: 1,
      name: "github",
      icon: Github,
      link: "https://github.com/faisaltheprofessor",
    },
    {
      id: 2,
      name: "linkedin",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/realfaisalkhan/",
    },
    {
      id: 3,
      name: "twitter",
      icon: Twitter,
      link: "https://twitter.com/faisalfazily",
    },
  ];
  return (
    <>
      <motion.header className="relative h-[80px] flex items-center text-lightest-slate  w-full">
        <Navbar />

        {/* Left Fixed Div */}
        <div className="hidden md:fixed md:flex flex-col items-center bottom-0 left-12 gap-y-10 text-light-slate">
          <motion.div
            className="h-32 w-[1px] bg-light-slate mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          ></motion.div>

          {profiles.map((profile) => (
            <motion.a
              key={profile.id}
              href={profile.link}
              target="_blank"
              className="hover:text-green hover:-translate-y-1 transition-all"
              initial={{ opacity: 0, y: 2 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <profile.icon size={23} />
            </motion.a>
          ))}
          {/* Border */}
          <motion.div
            className="h-40 w-[1px] bg-light-slate"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          ></motion.div>
        </div>

        {/* Left Fixed Div */}
        <div className="hidden md:fixed md:flex flex-col items-center bottom-2 -right-9  gap-y-20 justify-evenly">
          <motion.div
            className="h-32 w-[1px] bg-light-slate mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          ></motion.div>

          <a
            href="mailto:faisal@berlin.de"
            className="text-[13px] rotate-90 text-light-slate hover:text-green hover:-translate-y-1 transition-all tracking-widest relative -bottom-5"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              faisal@berlin.de
            </motion.span>
          </a>
          {/* Border */}
          <motion.div
            className="h-40 w-[1px] bg-light-slate mt-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          ></motion.div>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
