"use client";
import SolidButton from "./SolidButton";
import logo from "../../../public/logo.svg";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import { motion } from "framer-motion";
import { MenuIcon, X } from "lucide-react";
const Navbar = () => {
  const navItmes = [
    { id: 1, section: "About", link: "#about" },
    { id: 2, section: "Experience", link: "#experience" },
    { id: 3, section: "Work", link: "#work" },
    { id: 4, section: "Contact", link: "#contact" },
  ];

  return (
    <>
      <motion.nav className="w-full flex items-center  md:justify-between z-50">
        <div className="w-full flex justify-between items-center">
          <a href="/">
            <Image src={logo} alt="logo" height={80} className="z-50" />
          </a>
        </div>

        <ul className="hidden md:flex items-center gap-x-8 text-light-slate">
          {navItmes.map((item) => (
            <li className="hover:text-green flex" key={item.id}>
              <span className="text-green">0{item.id}. </span>
              <a href={item.link}>{item.section}</a>
            </li>
          ))}

          <li>
            <SolidButton className="px-4 py-3">Resume</SolidButton>
          </li>
        </ul>

        <Sheet>
          <SheetTrigger className="md:hidden">
            <MenuIcon className="text-green" size={46} />
          </SheetTrigger>
          <SheetContent className="bg-light-navy shadow-md border-none text-white backdrop-blur-md items-center justify-center flex">
            <SheetHeader>
              <SheetDescription>
                <ul className="flex flex-col gap-y-10 items-center gap-x-8 text-light-slate">
                  {navItmes.map((item) => (
                    <li
                      className="flex flex-col  hover:text-green text-base  text-center text-lightest-slate"
                      key={item.id}
                    >
                      <span className="text-green">0{item.id}. </span>
                      <SheetClose>
                        <a href={item.link}>{item.section}</a>
                      </SheetClose>
                    </li>
                  ))}

                  <li>
                    <SolidButton>Resume</SolidButton>
                  </li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </motion.nav>
    </>
  );
};

export default Navbar;
