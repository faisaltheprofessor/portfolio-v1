"use client";
import Header from "../components/header";
import About from "../section/about";

const Home = () => {
  return (
    <>
      <Header />

      <main className="overflow-scroll w-full ml-10">
        <About />
      </main>
    </>
  );
};

export default Home;
