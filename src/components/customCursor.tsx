import React from "react";

interface CustomCursorProps {
  x: number;
  y: number;
  hide: boolean;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ x, y, hide }) => {
  return (
    <div
      className={`custom-cursor fixed max-md:hidden pointer-events-none ${
        hide ? "hidden" : "opacity-100"
      }`}
      style={{ top: `${y}px`, left: `${x}px` }}
    />
  );
};

export default CustomCursor;
