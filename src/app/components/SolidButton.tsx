import { ReactNode } from "react";

interface props {
  children: ReactNode;
}
const SolidButton = ({ children }: props) => {
  return (
    <button className="border border-green rounded px-4 py-2 text-green">
      {children}
    </button>
  );
};

export default SolidButton;
