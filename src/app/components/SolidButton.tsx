import { ReactNode } from "react";

interface props {
  children: ReactNode;
  className?: string;
}
const SolidButton = ({ className, children }: props) => {
  return (
    <button
      className={`${className} border border-green rounded px-4 py-2 text-green hover:border-r-4 hover:border-b-4 transition-all`}
    >
      {children}
    </button>
  );
};

export default SolidButton;
