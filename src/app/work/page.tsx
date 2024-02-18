"use client";
import Heading from "@/components/heading";

const Home = () => {
  return (
    <>
      <main className="flex items-start mt-40 justify-center md:w-full  xl:w-[50%] h-screen mx-auto">
        <Heading text="What i have done" number={3} />
      </main>
    </>
  );
};

export default Home;
