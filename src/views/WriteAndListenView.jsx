import React, { useState } from "react";
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
      window.speechSynthesis.cancel();

      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = "es-ES";
      speech.volume = 1;
      speech.pitch = 1;
      speech.rate = 1;

      setTimeout(() => {
        window.speechSynthesis.speak(speech);
      }, 100);
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
    <section className="container text-center virtual-keyboard mt-5">
      <h1>Escribe tu frase</h1>
      <article className="display mt-4">
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          onClick={handleCursorChange}
          placeholder="Tu frase aquí..."
        />
      </article>

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
