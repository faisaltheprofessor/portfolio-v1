"use client";
import Header from "./components/header";
import { Calibre } from "./fonts/fonts";
const NotFound = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <h1
          className={`${Calibre.className} text-5xl md:text-6xl lg:text-2xl text-light-slate tracking-wider`}
        >
          Not Found
        </h1>
      </div>
    </>
  );
};

export default NotFound;
