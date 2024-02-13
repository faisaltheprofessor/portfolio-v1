"use client";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Header from "./components/header";
import SolidButton from "./components/SolidButton";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const calibre = localFont({
  src: "fonts/calibre/CalibreMedium.otf",
});

const Home = () => {
  return (
    <>
      <Header />w
      <main
        className={`w-full ml-10 md:w-auto md:ml-40 lg:ml-80 h-screen mx-auto transition-all`}
      >
        <motion.section
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-screen flex items-center snap-mandatory snap-end"
          id="about"
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
            <p className="text-slate tracking-tight w-2/3">
              I’m a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I’m focused
              on building ecommerce applications at Brainspin.
            </p>
            <SolidButton className="mt-10 text-[13px] px-6 py-4">
              Hire Me
            </SolidButton>
          </div>
        </motion.section>

        <section
          className="h-screen flex items-center snap-mandatory snap-center"
          id="experience"
        >
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eius
            commodi molestias consectetur? Ut eos suscipit aut, eveniet, quis ad
            obcaecati dicta in sapiente velit doloribus rerum quaerat dolore
            recusandae!
          </p>
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
