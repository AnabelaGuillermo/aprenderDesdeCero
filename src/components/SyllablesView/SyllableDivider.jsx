import React, { useState } from "react";
import { divide } from "../../utils/syllableUtils";

const SyllableDivider = () => {
  const [word, setWord] = useState("");
  const [syllables, setSyllables] = useState("");

  const handleWordChange = (event) => {
    setWord(event.target.value);
    setSyllables("");
  };

  const handleDivide = () => {
    const dividedSyllables = divide(word);
    setSyllables(dividedSyllables.join("-"));
  };

  const handleClear = () => {
    setWord("");
    setSyllables("");
  };

  const handleSpeak = () => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(syllables);
      utterance.rate = 0.2;
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Tu navegador no soporta síntesis de voz.");
    }
  };

  return (
    <article>
      <h1>Separar en Sílabas</h1>
      <div className="mt-3">
        <label className="palabra">Palabra: </label>
        <input
          type="text"
          value={word}
          onChange={handleWordChange}
          placeholder="Escribe una palabra"
        />
      </div>
      <div className="mt-3">
        <label className="silabas">Sílabas: </label>
        <span className="ms-2 syllables-divide">{syllables}</span>
        {syllables && (
          <button
            onClick={handleSpeak}
            className="ms-3 btn"
            aria-label="Reproducir sílabas"
          >
            <i className="bi bi-play-fill"></i>
          </button>
        )}
      </div>
      <div className="d-flex justify-content-center mt-4 button-syllableview">
        <button onClick={handleDivide} className="button-syllable w-50 me-2">
          Separar
        </button>
        <button onClick={handleClear} className="button-orange w-50">
          Borrar
        </button>
      </div>
    </article>
  );
};

export default SyllableDivider;
