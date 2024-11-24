import React, { useState } from "react";
import ColorButtons from "../components/HomeView/ColorButtons";

import "../css/WriteAndListenView.css";

const VirtualKeyboard = () => {
  const [text, setText] = useState("");
  const [cursorPosition, setCursorPosition] = useState(null);
  const [playbackRate, setPlaybackRate] = useState(1);

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
      speech.rate = playbackRate;

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
        <button
          onClick={handleClearText}
          disabled={text.length === 0}
          className="button-orange"
        >
          Borrar todo
        </button>
      </article>

      <article className="playback-controls mt-3">
        <button
          onClick={() => setPlaybackRate(1)}
          className={`playback-button ${playbackRate === 1 ? "active" : ""}`}
        >
          1x
        </button>
        <button
          onClick={() => setPlaybackRate(0.75)}
          className={`playback-button ${playbackRate === 0.75 ? "active" : ""}`}
        >
          0.75x
        </button>
        <button
          onClick={() => setPlaybackRate(0.5)}
          className={`playback-button ${playbackRate === 0.5 ? "active" : ""}`}
        >
          0.5x
        </button>
        <button
          onClick={() => setPlaybackRate(0.2)}
          className={`playback-button ${playbackRate === 0.2 ? "active" : ""}`}
        >
          0.2x
        </button>
      </article>
      <article className="mt-5 mb-2">
        <hr />
        <ColorButtons />
      </article>
    </section>
  );
};

export default VirtualKeyboard;
