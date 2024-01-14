import { useEffect, useState } from "react";

export function usePointerPosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handlerMove(e) {
      setPosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("pointermove", handlerMove);
    return () => window.removeEventListener("pointermove", handlerMove);
  }, []);

  return position;
}
