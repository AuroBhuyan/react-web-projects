import { useState } from "react";
import styles from "./RandomColor.module.css";

function RandomColor() {
  const [colour, setColour] = useState("#000000");

  function genrateRandom(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomColour() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[genrateRandom(hex.length)];
    }

    setColour(hexColor);
  }

  return (
    <div
      style={{
        width: "100vh",
        height: "100vh",
        background: colour,
      }}
    >
      <button onClick={() => handleCreateRandomColour()}>Generate</button>
    </div>
  );
}

export default RandomColor;
