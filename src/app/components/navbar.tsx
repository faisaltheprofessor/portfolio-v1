import SolidButton from "./SolidButton";
import logo from "../../../public/logo.svg";
import Image from "next/image";
const Navbar = () => {
  const navItmes = [
    { id: 1, section: "About" },
    { id: 2, section: "Experience" },
    { id: 3, section: "Work" },
    { id: 4, section: "Contact" },
  ];
  return (
    <nav className="h-[42] w-full flex items-center justify-between stick">
      <a href="#">
        <Image src={logo} alt="logo" height={150} />
      </a>
      <ul className="hidden md:flex items-center gap-x-8 text-light-slate">
        {navItmes.map((item) => (
          <li className="hover:text-green" key={item.id}>
            <span className="text-green">0{item.id}. </span>
            <a href="#">{item.section}</a>
          </li>
        ))}

        <li>
          <SolidButton>Resume</SolidButton>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
