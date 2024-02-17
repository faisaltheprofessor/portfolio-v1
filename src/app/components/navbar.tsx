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
import Link from "next/link";
const Navbar = () => {
  const navItmes = [
    { id: 1, section: "About", link: "/about" },
    { id: 2, section: "Experience", link: "/experience" },
    { id: 3, section: "Work", link: "/work" },
    { id: 4, section: "Contact", link: "/contact" },
  ];

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <>
      <motion.nav className="w-full h-full flex justify-start md:items-center md:justify-between px-4">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            height={80}
            className="z-50"
            priority={true}
          />
        </Link>
        <ul className="hidden md:flex items-center justify-center gap-x-8 text-light-slate">
          {navItmes.map((item) => (
            <li
              className={cn("hover:text-green flex", SFMono.className)}
              key={item.id}
            >
              <span className="text-green">0{item.id}. </span>
              <Link href={item.link}>{item.section}</Link>
            </li>
          ))}
          <div className="w-32  h-full flex items-center">
            <SolidButton className={cn("px-6 py-2  ml-2", SFMono.className)}>
              <a
                href="https://v1.iamfaisal.de/documents/faisal.pdf"
                target="_blank"
              >
                Resume
              </a>
            </SolidButton>
          </div>
        </ul>
      </motion.nav>

      <Sheet open={isMobileNavOpen}>
        <SheetTrigger className="md:hidden pr-4">
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
    </>
  );
};

export default Navbar;
