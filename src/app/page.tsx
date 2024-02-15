"use client";
import Header from "./components/header";
import About from "./section/about";
import Hero from "./section/hero";

const Home = () => {
  return (
    <>
      <Header />

      <main className={`w-[90%] md:w-[75%] h-screen mx-auto transition-all`}>
        <Hero />
        <About />
      </main>
    </>
  );
};

export default Home;
