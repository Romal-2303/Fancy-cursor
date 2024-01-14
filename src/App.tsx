import "./App.css";
import React, { useState } from "react";
import { usePointerPosition } from "./hooks/usePointerPosition.ts";
import { useDelayedValue } from "./hooks/useDelayedValue.ts";

function App() {
  const [shape, setShape] = useState("circle");
  const pos1 = usePointerPosition();
  const pos2 = useDelayedValue(pos1, 100);
  const pos3 = useDelayedValue(pos1, 200);
  const pos4 = useDelayedValue(pos1, 100);
  const pos5 = useDelayedValue(pos1, 50);

  return (
    <>
      <div className="header">
        <b>Select Shape:</b>
        <div className="shape-container">
          <div
            className={
              shape === "circle"
                ? "selected-item selected-item-circle"
                : "selected-item"
            }
            onClick={() => {
              setShape("circle");
            }}
          >
            <div className="shape shape-circle"></div>
          </div>
          <div
            className={
              shape === "square"
                ? "selected-item selected-item-square"
                : "selected-item"
            }
            onClick={() => {
              setShape("square");
            }}
          >
            <div className="shape shape-square"></div>
          </div>
          {/* <div className="selected-item-triangle">
            <div className="shape shape-triangle"></div>
          </div> */}
        </div>
      </div>
      <Dot position={pos1} opacity={1} shape={shape} delay={0} />
      <Dot position={pos2} opacity={0.8} shape={shape} delay={0.1} />
      <Dot position={pos3} opacity={0.6} shape={shape} delay={0.2} />
      <Dot position={pos4} opacity={0.4} shape={shape} delay={0.3} />
      <Dot position={pos5} opacity={0.2} shape={shape} delay={0.4} />
    </>
  );
}

export default App;

type position = {
  x?: number;
  y?: number;
};

type Props = {
  position?: position;
  opacity?: number;
  delay?: number;
  shape?: "circle" | "square";
};

function Dot({ position, opacity, delay = 1, shape }: Props) {
  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "pink",
        width: "40px",
        height: "40px",
        borderRadius: shape === "circle" ? "50%" : "0",
        opacity,
        transform: `translate(${position?.x}px, ${position?.y}px)`,
        // transition: `all ${delay}s linear`,
        left: -20,
        top: -20,
        pointerEvents: "none",
        zIndex: "-1",
      }}
    ></div>
  );
}
