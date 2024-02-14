"use client";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import Navbar from "./navbar";
import { motion } from "framer-motion";
const Header = () => {
  const profiles = [
    { id: 1, name: "github", icon: Github, link: "" },
    { id: 2, name: "linkedin", icon: Linkedin, link: "" },
    { id: 3, name: "twitter", icon: Twitter, link: "" },
    { id: 4, name: "instagram", icon: Instagram, link: "" },
  ];
  return (
    <>
      <motion.header className="relative flex items-center text-lightest-slate px-[50px] w-full">
        <Navbar />

        {/* Left Fixed Div */}
        <div className="hidden md:fixed md:flex flex-col items-center bottom-0 left-12 gap-y-10 text-light-slate">
          {profiles.map((profile) => (
            <a
              key={profile.id}
              href={profile.link}
              className="hover:text-green hover:-translate-y-1 transition-all"
            >
              <profile.icon size={23} />
            </a>
          ))}
          {/* Border */}
          <div className="h-20 w-[1px] bg-light-slate"></div>
        </div>

        {/* Left Fixed Div */}
        <div className="hidden md:fixed md:flex flex-col items-center bottom-2 -right-9  gap-y-20">
          <a
            href="#"
            className="text-[13px] rotate-90 text-light-slate hover:text-green hover:-translate-y-1 transition-all tracking-widest"
          >
            faisal@berlin.de
          </a>
          {/* Border */}
          <div className="h-20 w-[1px] bg-light-slate mt-10"></div>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
