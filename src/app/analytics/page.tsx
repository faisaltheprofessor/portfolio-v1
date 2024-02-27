import { cn } from "@/lib/utils";
import { analytics } from "@/utils/analytics";
import React from "react";
import { Calibre } from "../fonts/fonts";

const Page = async () => {
  const pageview = await analytics.retrieveDays("pageview", 2);
  return (
    <main className="flex items-center  justify-center w-full  xl:w-[50%] h-screen mx-auto flex-col md:w-1/2 gap-y-4">
      <h1 className={cn("text-7xl font-bold text-white", Calibre.className)}>
        {" "}
        <pre>{JSON.stringify(pageview)}</pre>
      </h1>
    </main>
  );
};
export default Page;
