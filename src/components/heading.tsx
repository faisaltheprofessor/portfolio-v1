import { Calibre, SFMono } from "@/app/fonts/fonts";
import { cn } from "@/lib/utils";
import React from "react";

const Heading = () => {
  return (
    <div className="flex">
      <h1
        className={cn(
          "text-3xl text-lightest-slate leading-[35px] after:content-[''] after:w-5 after:bg-gray-100",
          Calibre.className
        )}
      >
        <span
          className={cn("text-green text-[25px] font-bold", SFMono.className)}
        >
          01.
        </span>{" "}
        About Me
      </h1>
    </div>
  );
};

export default Heading;
