import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Navbar from "./components/navbar";

const Home = () => {
  const profiles = [
    { id: 1, name: "github", icon: Github, link: "" },
    { id: 2, name: "linkedin", icon: Linkedin, link: "" },
    { id: 2, name: "twitter", icon: Twitter, link: "" },
    { id: 2, name: "instagram", icon: Instagram, link: "" },
  ];
  return (
    <>
      {/* Navbar */}
      <header className="relative flex items-center text-lightest-slate px-[50px] w-full">
        <Navbar />

        {/* Left Fixed Div */}
        <div className="fixed flex flex-col items-center bottom-0 gap-y-8">
          {profiles.map((profile) => (
            <a
              href={profile.link}
              className="hover:text-green hover:-translate-y-1 transition-all"
            >
              <profile.icon size={20} />
            </a>
          ))}
          {/* Border */}
          <div className="h-20 w-[1px] bg-white"></div>
        </div>

        {/* Left Fixed Div */}
        <div className="fixed flex flex-col items-center bottom-0 right-20 gap-y-20">
          <a
            href="#"
            className="text-[12px] rotate-90 hover:text-green hover:-translate-y-1 transition-all"
          >
            faisalfazily@gmail.com
          </a>
          {/* Border */}
          <div className="h-20 w-[1px] bg-white"></div>
        </div>
      </header>

      <main>
        <h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            neque quae corporis maiores impedit nulla porro maxime temporibus
            distinctio culpa. Autem quo magnam vitae molestias. Temporibus
            aperiam est voluptatibus incidunt!
          </p>
        </h1>
      </main>
    </>
  );
};

export default Home;
