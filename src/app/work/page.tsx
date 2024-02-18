"use client";
import Heading from "@/components/heading";
import { ExternalLink, Github, Link } from "lucide-react";
import Image from "next/image";
const Home = () => {
  return (
    <>
      <main className="flex flex-col items-center mt-40 justify-start md:w-full  xl:w-[80%] h-screen mx-auto">
        <Heading text="What i have done" number={3} />
        <div className="flex justify-between gap-x-5 w-1/2">
          <div className="relative">
            <Image
              src={"/work/clap.webp"}
              height={500}
              width={500}
              alt="portfolio"
              layout="responsive"
              objectFit="contain"
              className="aspect-w-1 aspect-h-1"
            />
          </div>

          <div className="text-slate flex flex-col justify-between items-end  md:w-1/2 lg:w-2/3 relative">
            <div className="flex flex-col gap-y-3 justify-end text-green text-sm place-items-end">
              <h1 className="text-xs ">Featured Project</h1>
              <h1 className="text-light-slate text-xl font-bold">
                Monitoring & Evaluation
              </h1>
            </div>

            <div className="relative md:absolute top-[40%] -left-20 bg-light-navy w-[124%]  shadow-md p-4 px-12 text-sm rounded text-center">
              A comprehensive monitoring and evaluation web app theme tailored
              for tracking the progress of planned activities against actual
              outcomes. Featuring a clean interface designed for precision and
              clarity
            </div>

            <div>
              <ul className="flex gap-3 text-sm ">
                <li>Phpstorm</li>
                <li>Laravel</li>
                <li>XAMPP</li>
                <li>MySQL</li>
                <li>jQuery</li>
              </ul>
              <div className="flex gap-x-2 items-end justify-end mt-2">
                <Github size={20} />
                <ExternalLink size={20} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
