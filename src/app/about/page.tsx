"use client";
import Header from "../components/header";
import About from "../section/about";

const Home = () => {
  return (
    <>
      <Header />

      <main className="flex items-start mt-40 justify-center md:w-full  xl:w-[50%] h-screen mx-auto">
        <About />
      </main>
    </>
  );
};

export default Home;
