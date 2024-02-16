import React from "react";
import Header from "../components/header";
import Experience from "../section/experience";

const ExperiencePage = () => {
  return (
    <>
      <Header />

      <main className="overflow-scroll w-full ml-10">
        <Experience />
      </main>
    </>
  );
};

export default ExperiencePage;
