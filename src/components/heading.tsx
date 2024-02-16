import { Calibre, SFMono } from "@/app/fonts/fonts";
import { cn } from "@/lib/utils";
import React from "react";
interface Props {
  text: string;
  number?: number;
}

const Heading = ({ text, number = 1 }: Props) => {
  return (
    <div className="flex items-center">
      <h1
        className={cn(
          "text-3xl text-lightest-slate leading-[35px] after:content-[''] after:w-5 after:bg-gray-100",
          Calibre.className
        )}
      >
        <span
          className={cn("text-green text-[25px] font-bold", SFMono.className)}
        >
          0{number}.
        </span>{" "}
        {text}
      </h1>

      <span className="ml-4   h-[1px] w-[150px] bg-gray-600/80"></span>
    </div>
  );
};

export default Heading;
