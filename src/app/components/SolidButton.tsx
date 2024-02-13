import { ReactNode } from "react";

interface props {
  children: ReactNode;
  className?: string;
}
const SolidButton = ({ className, children }: props) => {
  return (
    <button
      className={`${className} border border-green rounded px-14 py-4 text-green`}
    >
      {children}
    </button>
  );
};

export default SolidButton;
