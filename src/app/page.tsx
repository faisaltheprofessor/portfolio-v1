"use client";
import Header from "./components/header";
import About from "./section/about";
import Hero from "./section/hero";

const Home = () => {
  return (
    <>
      <Header />

      <main className="overflow-scroll w-full ml-10">
        <Hero />
      </main>
    </>
  );
};

export default Home;
