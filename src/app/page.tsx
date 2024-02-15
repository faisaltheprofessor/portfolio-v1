"use client";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Header from "./components/header";
import SolidButton from "./components/SolidButton";
import { motion } from "framer-motion";
import { SFMono, Calibre } from "./fonts/fonts";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";
import About from "./section/about";

const Home = () => {
  return (
    <>
      <Header />

      <main
        className={`w-[90%] md:w-auto md:ml-[15%] lg:ml-[20%] h-screen mx-auto transition-all`}
      >
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-screen flex items-center  snap-center"
          id="#"
        >
          <div
            className={`flex flex-col items-start gap-y-6  text-white mx-auto  tracking-widest`}
          >
            <h2 className="text-green">Hi, My name is</h2>
            <h1
              className={`${Calibre.className} text-5xl md:text-6xl lg:text-7xl text-lightest-slate font-bold`}
            >
              Faisal Khan.
            </h1>
            <h3
              className={`${Calibre.className} text-5xl md:text-6xl lg:text-7xl text-slate font-bold`}
            >
              I am a Software Engineer.
            </h3>
            <p className="text-slate tracking-tight w-full md:w-2/3">
              lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem
              ipsum dolor sit amet. lorem ipsum dolor sit amet.
            </p>
            <SolidButton className="mt-10 text-[13px] px-6 py-4">
              Hire Me
            </SolidButton>
          </div>
        </motion.section>

        {/* About Me Section */}
        <About />

        <section
          className="h-screen flex items-center snap-mandatory snap-center"
          id="work"
        >
          <p className="text-white">My Work</p>
        </section>

        <section
          className="h-screen flex items-center snap-mandatory snap-center"
          id="contact"
        >
          <p className="text-white">Contact me</p>
        </section>
      </main>
    </>
  );
};

export default Home;
