import React, { useState } from "react";
import { divide } from "../../utils/syllableUtils";

const SyllableDivider = () => {
  const [word, setWord] = useState("");
  const [syllables, setSyllables] = useState("");
  const [selectedSyllable, setSelectedSyllable] = useState(null);

  const removeAccents = (text) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const handleWordChange = (event) => {
    setWord(event.target.value);
    setSyllables("");
  };

  const handleDivide = () => {
    const words = word.trim().split(" ");

    const syllabifiedWords = words.map((singleWord) => {
      const dividedSyllables = divide(singleWord);
      return dividedSyllables.join("-");
    });

    setSyllables(syllabifiedWords.join(" "));
  };

  const handleClear = () => {
    setWord("");
    setSyllables("");
    setSelectedSyllable(null);
  };

  const handleSpeak = (syllable) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(removeAccents(syllable));
      utterance.rate = 0.5;
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Tu navegador no soporta síntesis de voz.");
    }
  };

  const handleSyllableClick = (syllable) => {
    setSelectedSyllable(syllable);
    handleSpeak(syllable);
  };

  return (
    <article>
      <h1 className="text-center">Separar en sílabas</h1>
      <p className="mb-5 text-center">
        Haz clic en separar para dividir en sílabas. También puedes hacer clic
        sobre cada sílaba para escucharla.
      </p>
      <div className="mt-3">
        <label className="palabra">Palabra: </label>
        <input
          type="text"
          value={word}
          onChange={handleWordChange}
          placeholder="Escribe una palabra o una oración"
        />
      </div>
      <div className="mt-3">
        <label className="silabas">Sílabas: </label>
        <span className="ms-2 syllables-divide">
          {syllables.split(" ").map((word, index) => (
            <span key={index}>
              {word.split("-").map((syllable, idx, arr) => (
                <span key={idx}>
                  <span
                    className={`syllable ${
                      selectedSyllable === syllable ? "highlighted" : ""
                    }`}
                    onClick={() => handleSyllableClick(syllable)}
                  >
                    {syllable}
                  </span>
                  {idx < arr.length - 1 && "-"}
                </span>
              ))}{" "}
            </span>
          ))}
        </span>
        {syllables && (
          <button
            onClick={() => handleSpeak(syllables)}
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
