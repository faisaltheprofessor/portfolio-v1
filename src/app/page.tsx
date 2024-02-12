import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Header from "./components/header";
import SolidButton from "./components/SolidButton";

import localFont from "@next/font/local";

const calibre = localFont({
  src: "fonts/calibre/CalibreMedium.otf",
});

const Home = () => {
  return (
    <>
      <Header />

      <main className={`p-20 flex  h-screen  ml-80  mt-32`}>
        <div
          className={`flex flex-col items-start gap-y-6  text-white mx-auto h-full tracking-widest`}
        >
          <h2 className="text-green">Hi, My name is</h2>
          <h1
            className={`${calibre.className} text-7xl text-lightest-slate font-bold`}
          >
            Faisal Khan.
          </h1>
          <h3 className={`${calibre.className} text-7xl text-slate font-bold`}>
            I build things for the web.
          </h3>

          <p className="text-slate tracking-tight w-1/2">
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building ecommerce applications at Brainspin.
          </p>

          <SolidButton className="mt-10 text-[13px] px-6 py-4">
            Download My CV
          </SolidButton>
        </div>
      </main>
    </>
  );
};

export default Home;
