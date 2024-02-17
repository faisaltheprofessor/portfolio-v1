import React from "react";
import Header from "../components/header";
import Experience from "../section/experience";

const ExperiencePage = () => {
  return (
    <>
      <Header />

      <main className="flex items-start mt-40 justify-center  md:w-full  xl:w-[50%] h-screen mx-auto ">
        <Experience />
      </main>
    </>
  );
};

export default ExperiencePage;
