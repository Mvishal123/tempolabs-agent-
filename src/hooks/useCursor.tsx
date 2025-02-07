import { useState, useEffect } from "react";

const useCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hideCursor, setHideCursor] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  return { cursorPos, hideCursor, setHideCursor };
};

export default useCursor;
