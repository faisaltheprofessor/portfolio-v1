import { cn } from "@/lib/utils";
import { Calibre, SFMono } from "../fonts/fonts";
import Image from "next/image";
import { useState } from "react";
import Heading from "@/components/heading";

const About = () => {
  let [hoverOnImage, setHoverOnImage] = useState(false);

  return (
    <section
      className="flex flex-col h-screen items-center justify-center snap-mandatory snap-center mx-auto w-[80%] ml-0  gap-5"
      id="about"
    >
      <Heading />

      <div
        className={cn(
          "flex mt-10 gap-x-5 flex-col lg:flex-row items-center mx-auto",
          Calibre.className
        )}
      >
        <div className="w-full mx-auto  lg:w-2/3">
          <p className="text-slate text-[20px] leading-widest w-full m-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro est
            ex praesentium perspiciatis consequuntur quod, odit quia illum
            corrupti accusamus soluta officiis sapiente nisi! Iure atque tenetur
            asperiores sint in.{" "}
          </p>
          <p className="text-slate text-[20px] leading-widest mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro est
            ex praesentium perspiciatis consequuntur quod, odit quia illum
            corrupti accusamus soluta officiis sapiente nisi! Iure atque tenetur
            asperiores sint in.{" "}
          </p>
          <p className="text-slate text-[20px] leading-widest mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro est
            ex praesentium perspiciatis consequuntur quod, odit quia illum
            corrupti accusamus soluta officiis sapiente nisi! Iure atque tenetur
            asperiores sint in.{" "}
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
  );
};

export default About;
