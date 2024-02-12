import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Header from "./components/header";
import SolidButton from "./components/SolidButton";
import { Teko } from "@next/font/google";
const teko = Teko({ subsets: ["latin"] });
const Home = () => {
  return (
    <>
      <Header />

      <main className={`p-20 flex items-center  h-screen w-1/2 mx-auto`}>
        <div
          className={`flex flex-col items-start gap-y-5  text-white mx-auto h-full`}
        >
          <h2 className="text-green">Hi, My name is</h2>
          <h1
            className={`${teko.className} text-6xl text-lightest-slate font-bold`}
          >
            Faisal Khan.
          </h1>
          <h3
            className={`${teko.className} text-6xl text-lightest-slate font-bold`}
          >
            I build things for the web.
          </h3>

          <p>
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building ecommerce applications at Brainspin.
          </p>

          <SolidButton>Download My CV</SolidButton>
        </div>
      </main>
    </>
  );
};

export default Home;
