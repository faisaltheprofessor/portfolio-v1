"use client";
import SolidButton from "./SolidButton";
import logo from "../../../public/logo.svg";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { motion } from "framer-motion";
import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { SFMono } from "../fonts/fonts";
const Navbar = () => {
  const navItmes = [
    { id: 1, section: "About", link: "#about" },
    { id: 2, section: "Experience", link: "#experience" },
    { id: 3, section: "Work", link: "#work" },
    { id: 4, section: "Contact", link: "#contact" },
  ];

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <>
      <motion.nav className="w-full flex items-center  md:justify-between z-50">
        <div className="w-full flex justify-between items-center">
          <a href="/">
            <Image
              src={logo}
              alt="logo"
              height={80}
              className="z-50"
              priority={true}
            />
          </a>
        </div>

        <ul className="hidden md:flex items-center gap-x-8 text-light-slate">
          {navItmes.map((item) => (
            <li
              className={cn("hover:text-green flex", SFMono.className)}
              key={item.id}
            >
              <span className="text-green">0{item.id}. </span>
              <a href={item.link}>{item.section}</a>
            </li>
          ))}

          <li>
            <SolidButton className={cn("px-4 py-3", SFMono.className)}>
              Resume
            </SolidButton>
          </li>
        </ul>

        <Sheet open={isMobileNavOpen}>
          <SheetTrigger className="md:hidden">
            <MenuIcon
              className="text-green"
              size={46}
              onClick={() => setIsMobileNavOpen(true)}
            />
          </SheetTrigger>
          <SheetContent className="bg-light-navy shadow-md border-none text-white backdrop-blur-md items-center justify-center flex">
            <div
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary hover:cursor-pointer"
              onClick={() => setIsMobileNavOpen(false)}
            >
              <X size={46} className="text-green" />
              <span className="sr-only">Close</span>
            </div>
            <ul className="flex flex-col gap-y-10 items-center gap-x-8 text-light-slate">
              {navItmes.map((item) => (
                <li
                  className="flex flex-col  hover:text-green text-base  text-center text-lightest-slate"
                  key={item.id}
                  onClick={(e) => setIsMobileNavOpen(false)}
                >
                  <span className="text-green">0{item.id}. </span>
                  <a href={item.link}>{item.section}</a>
                </li>
              ))}

              <li>
                <SolidButton className={cn("", SFMono.className)}>
                  Resume
                </SolidButton>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </motion.nav>
    </>
  );
};

export default Navbar;
