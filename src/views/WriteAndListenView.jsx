import React, { useState } from "react";
import ColorButtons from "../components/HomeView/ColorButtons";

import "../css/WriteAndListenView.css";

const VirtualKeyboard = () => {
  const [text, setText] = useState("");
  const [cursorPosition, setCursorPosition] = useState(null);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [highlightedWord, setHighlightedWord] = useState(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
    setCursorPosition(e.target.selectionStart);
  };

  const handleCursorChange = (e) => {
    setCursorPosition(e.target.selectionStart);
  };

  const handleWordClick = (word) => {
    setHighlightedWord(word);

    const speech = new SpeechSynthesisUtterance(word);
    speech.lang = "es-ES";
    speech.rate = playbackRate;
    speech.volume = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  };

  const renderTextAsWords = () => {
    return text.split(" ").map((word, index) => (
      <span
        key={index}
        onClick={() => handleWordClick(word)}
        className={`highlighted-word ${
          word === highlightedWord ? "highlighted" : ""
        }`}
      >
        {word}
      </span>
    ));
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
      <article className="interactive-text">
        <p>{renderTextAsWords()}</p>
      </article>
      <article className="controls">
        <button disabled={text.length === 0}>Reproducir</button>
        <button
          onClick={() => setText("")}
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
