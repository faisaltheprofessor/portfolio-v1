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
import Hero from "./section/hero";

const Home = () => {
  return (
    <>
      <Header />

      <main className={`w-[90%] md:w-[75%] h-screen mx-auto transition-all`}>
        <Hero />
        <About />
      </main>
    </>
  );
};

export default Home;
