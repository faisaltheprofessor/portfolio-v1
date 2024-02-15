"use client";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Header from "./components/header";
import SolidButton from "./components/SolidButton";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";

const calibre = localFont({
  src: "/fonts/calibre/CalibreLight.otf",
});

const SFMono = localFont({ src: "fonts/SF-Mono/SF-Mono-Light.otf" });

const Home = () => {
  let [hoverOnImage, setHoverOnImage] = useState(false);
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
              className={`${calibre.className} text-5xl md:text-6xl lg:text-7xl text-lightest-slate font-bold`}
            >
              Faisal Khan.
            </h1>
            <h3
              className={`${calibre.className} text-5xl md:text-6xl lg:text-7xl text-slate font-bold`}
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
        <section
          className="ml-0 flex flex-col h-screen items-center justify-center snap-mandatory snap-center mx-auto w-[85%] md:w-[60%]  md:ml-30 gap-5"
          id="about"
        >
          <h1
            className={cn(
              "text-3xl text-lightest-slate leading-[35px]",
              calibre.className
            )}
          >
            <span
              className={cn(
                "text-green text-[25px] font-bold",
                SFMono.className
              )}
            >
              01.
            </span>{" "}
            About Me
          </h1>

          <div
            className={cn(
              "flex mt-10 gap-x-5 flex-col md:flex-row",
              calibre.className
            )}
          >
            <div className="">
              <p className="text-slate text-[20px] leading-widest">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                est ex praesentium perspiciatis consequuntur quod, odit quia
                illum corrupti accusamus soluta officiis sapiente nisi! Iure
                atque tenetur asperiores sint in.{" "}
              </p>
              <p className="text-slate text-[20px] leading-widest mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                est ex praesentium perspiciatis consequuntur quod, odit quia
                illum corrupti accusamus soluta officiis sapiente nisi! Iure
                atque tenetur asperiores sint in.{" "}
              </p>
              <p className="text-slate text-[20px] leading-widest mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                est ex praesentium perspiciatis consequuntur quod, odit quia
                illum corrupti accusamus soluta officiis sapiente nisi! Iure
                atque tenetur asperiores sint in.{" "}
              </p>
            </div>

            <div className="relative flex  w-[256px] h-[256px]">
              <Image
                src="/faisal.webp"
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
            </div>
          </div>
        </section>

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
