import React, { useState } from "react";
import Keyboard from "../components/WriteAndListenView/Keyboard";

import "../css/WriteAndListenView.css";

const VirtualKeyboard = () => {
  const [text, setText] = useState("");
  const [cursorPosition, setCursorPosition] = useState(null);

  const handleAddChar = (char) => {
    const position = cursorPosition !== null ? cursorPosition : text.length;
    const newText =
      text.slice(0, position) +
      (char === "Espacio" ? " " : char) +
      text.slice(position);
    setText(newText);
    setCursorPosition(position + 1);
  };

  const handleDelete = () => {
    if (cursorPosition > 0) {
      const newText =
        text.slice(0, cursorPosition - 1) + text.slice(cursorPosition);
      setText(newText);
      setCursorPosition(cursorPosition - 1);
    }
  };

  const handleClearText = () => {
    setText("");
    setCursorPosition(null);
  };

  const handlePlayText = () => {
    if (text) {
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = "es-ES";
      window.speechSynthesis.speak(speech);
    }
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
    setCursorPosition(e.target.selectionStart);
  };

  const handleCursorChange = (e) => {
    setCursorPosition(e.target.selectionStart);
  };

  return (
    <section className="container text-center virtual-keyboard mt-4">
      <h2>Escribe tu frase</h2>
      <article className="display">
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          onClick={handleCursorChange}
          placeholder="Tu frase aquí..."
        />
      </article>

      <Keyboard onAddChar={handleAddChar} onDelete={handleDelete} />

      <article className="controls">
        <button onClick={handlePlayText} disabled={text.length === 0}>
          Reproducir
        </button>
        <button onClick={handleClearText} disabled={text.length === 0}>
          Borrar todo
        </button>
      </article>
    </section>
  );
};

export default VirtualKeyboard;
