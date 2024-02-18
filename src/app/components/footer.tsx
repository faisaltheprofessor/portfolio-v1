import { Github } from "lucide-react";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full px-10 py-2 bg-navy text-[12px] flex flex-col">
      <div className="px-10 text-slate text-center">
        Developed with <span className="text-green">Next Js</span> by{" "}
        <span className="text-green">Faisal Khan - </span>{" "}
        <a
          href="https://github.com/faisaltheprofessor/portfolio-v1.git"
          target="_blank"
        >
          <Github
            className="inline hover:text-green transition-all"
            size={18}
          />
        </a>
        <p className="mt-2">
          Design Concept by <span className="text-green">Brittany Chiang</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
