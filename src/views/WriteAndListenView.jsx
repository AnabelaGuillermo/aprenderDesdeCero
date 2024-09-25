import React, { useState } from "react";
import Keyboard from "../components/WriteAndListenView/Keyboard";

const VirtualKeyboard = () => {
  const [text, setText] = useState("");

  const handleAddChar = (char) => {
    setText((prevText) => prevText + (char === "Espacio" ? " " : char));
  };

  const handleDelete = () => {
    setText((prevText) => prevText.slice(0, -1));
  };

  const handlePlayText = () => {
    if (text) {
      alert(`Reproduciendo: ${text}`);
    }
  };

  return (
    <div className="virtual-keyboard">
      <h2>Escribe tu frase</h2>
      <div className="display">
        <input
          type="text"
          value={text}
          readOnly
          placeholder="Tu frase aquí..."
        />
      </div>

      <Keyboard onAddChar={handleAddChar} onDelete={handleDelete} />

      <div className="controls">
        <button onClick={handlePlayText} disabled={text.length === 0}>
          Reproducir
        </button>
      </div>
    </div>
  );
};

export default VirtualKeyboard;
