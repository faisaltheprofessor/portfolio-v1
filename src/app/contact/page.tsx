"use client";
import { Calibre } from "../fonts/fonts";
import { cn } from "@/lib/utils";
import SolidButton from "../components/SolidButton";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.main
      className="flex items-center  justify-center w-full  xl:w-[50%] h-screen mx-auto flex-col md:w-1/2 gap-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className={cn("text-7xl font-bold text-white", Calibre.className)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {" "}
        Get in touch
      </motion.h1>

      <motion.p
        className="text-slate w-1/2 mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        I&apos;d love to hear from you! Whether you have a project in mind, a
        question, or just want to say hello, feel free to reach out to me using
        the contact form below. I look forward to connecting with you!
      </motion.p>

      <motion.a
        href="mailto:faisal@berlin.de"
        target="_blank"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <SolidButton className="w-24 h-12">Say Hello</SolidButton>
      </motion.a>
    </motion.main>
  );
};

export default Contact;
