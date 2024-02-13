"use client";
import SolidButton from "./SolidButton";
import logo from "../../../public/logo.svg";
import Image from "next/image";

import { motion } from "framer-motion";
import { Menu, MenuIcon, X } from "lucide-react";
const Navbar = () => {
  const navItmes = [
    { id: 1, section: "About", link: "#about" },
    { id: 2, section: "Experience", link: "#experience" },
    { id: 3, section: "Work", link: "#work" },
    { id: 4, section: "Contact", link: "#contact" },
  ];
  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full flex flex-grow items-center  md:justify-between z-50"
      >
        <div className="w-full flex justify-between items-center">
          <a href="/">
            <Image src={logo} alt="logo" height={80} className="z-50" />
          </a>

          <MenuIcon className="text-green md:hidden" size={40} />
        </div>
        <ul className="hidden md:flex items-center gap-x-8 text-light-slate">
          {navItmes.map((item) => (
            <li className="hover:text-green" key={item.id}>
              <span className="text-green">0{item.id}. </span>
              <a href={item.link}>{item.section}</a>
            </li>
          ))}

          <li>
            <SolidButton>Resume</SolidButton>
          </li>
        </ul>
      </motion.nav>
      {/* Mobile Menu */}
      <motion.nav className="hidden md:hidden w-full">
        <div className="fixed  top-0 bottom-0 right-0 left-0 w-full bg-navy/60 backdrop-blur-sm">
          <div className="fixed top-0 bottom-0 right-0 w-2/3 bg-light-navy  shadow-md z-40 flex justify-center items-center">
            <X
              className="fixed top-10 right-10 text-green cursor-pointer"
              size={50}
            />

            <ul className="flex flex-col gap-y-10 items-center gap-x-8 text-light-slate">
              {navItmes.map((item) => (
                <li
                  className="flex flex-col  hover:text-green text-base  text-center text-lightest-slate"
                  key={item.id}
                >
                  <span className="text-green">0{item.id}. </span>
                  <a href={item.link}>{item.section}</a>
                </li>
              ))}

              <li>
                <SolidButton>Resume</SolidButton>
              </li>
            </ul>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
