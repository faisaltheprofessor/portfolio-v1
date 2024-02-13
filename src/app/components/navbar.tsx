"use client";
import SolidButton from "./SolidButton";
import logo from "../../../public/logo.svg";
import Image from "next/image";

import { motion } from "framer-motion";
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
        className="h-[42] w-full  px-20 flex items-center justify-between fixed left-0 bg-navy/90 backdrop-blur  border-b-1"
      >
        <a href="#">
          <Image src={logo} alt="logo" height={100} />
        </a>
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
    </>
  );
};

export default Navbar;
