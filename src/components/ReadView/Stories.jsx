import React, { useState } from "react";

const Stories = ({ text }) => {
  const [isReading, setIsReading] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(null);
  const [selectedWord, setSelectedWord] = useState(null);

  const readWord = (palabra) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(palabra);
    synth.cancel();

    utterance.rate = 0.4;

    utterance.onstart = () => {
      setIsReading(true);
      setSelectedWord(palabra);
    };

    utterance.onend = () => {
      setIsReading(false);
    };

    synth.speak(utterance);
  };

  const readStories = () => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);

    utterance.rate = 0.4;

    const palabras = text.split(" ");

    utterance.onboundary = (event) => {
      if (event.charIndex < text.length) {
        const wordIndex = palabras.findIndex((_, index) => {
          const start = text.indexOf(palabras[index]);
          const end = start + palabras[index].length;
          return event.charIndex >= start && event.charIndex < end;
        });

        setCurrentWordIndex(wordIndex);
      }
    };

    utterance.onstart = () => {
      setIsReading(true);
      setCurrentWordIndex(0);
      setSelectedWord(null);
    };

    utterance.onend = () => {
      setIsReading(false);
      setCurrentWordIndex(null);
    };

    synth.speak(utterance);
  };

  const stopReading = () => {
    const synth = window.speechSynthesis;
    synth.cancel();
    setIsReading(false);
    setCurrentWordIndex(null);
    setSelectedWord(null);
  };

  return (
    <section className="mt-3 stories">
      <p>
        {text.split(" ").map((palabra, index) => (
          <span
            key={index}
            onClick={() => {
              readWord(palabra);
              setSelectedWord(palabra);
              setCurrentWordIndex(index);
            }}
            className={
              index === currentWordIndex
                ? "highlighted"
                : palabra === selectedWord
                ? "highlighted"
                : "normal"
            }
          >
            {palabra}{" "}
          </span>
        ))}
      </p>
      <button
        onClick={readStories}
        disabled={isReading}
        className="reproducir text-white"
      >
        {isReading ? "Leyendo..." : "Reproducir"}
      </button>
      <button
        onClick={stopReading}
        disabled={!isReading}
        className={isReading ? "stop-button active" : "stop-button"}
      >
        Detener
      </button>
    </section>
  );
};

export default Stories;
