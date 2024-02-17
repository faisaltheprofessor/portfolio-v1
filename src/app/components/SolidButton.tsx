import { ReactNode } from "react";

interface props {
  children: ReactNode;
  className?: string;
}
const SolidButton = ({ className, children }: props) => {
  return (
    <button
      className={`${className} border border-green rounded  text-green text-[13px]  hover:border-b-4 hover:border-r-4  transition-all hover:-translate-x-1 hover:-translate-y-1`}
    >
      {children}
    </button>
  );
};

export default SolidButton;
