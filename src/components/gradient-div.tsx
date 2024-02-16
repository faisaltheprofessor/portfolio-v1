import React, { ReactNode } from "react";

const GradientPosition = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const windowWidth = window.innerHeight;

  React.useEffect(() => {
    const updateMousePosition = (ev: any) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
};

interface GradientdivProps {
  children: ReactNode;
  className: string;
}
const Gradientdiv: React.FC<GradientdivProps> = ({ children, className }) => {
  return (
    <div
      style={{
        backgroundImage: `radial-gradient( circle at ${
          GradientPosition().x
        }px ${GradientPosition().y}px, rgba(2,12,27,0.7) ,#0a192f 30% )`,
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default Gradientdiv;

// navy': '#0a192f',
//         'light-navy': '#112240',
//         'lightest-navy':  '#233554',
//         'navy-shadow': 'rgba(2,12,27,0.7)',
