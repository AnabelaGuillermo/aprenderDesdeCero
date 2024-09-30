import React, { useState } from "react";

const Stories = ({ text }) => {
  const [isReading, setIsReading] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(null);
  const [intervalId, setIntervalId] = useState(null);

  const readStories = () => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);

    utterance.rate = 0.3;

    const palabras = text.split(" ");

    utterance.onstart = () => {
      setIsReading(true);
      let wordIndex = 0;

      const id = setInterval(() => {
        if (wordIndex < palabras.length) {
          setCurrentWordIndex(wordIndex);
          wordIndex++;
        } else {
          clearInterval(id);
        }
      }, 600);

      setIntervalId(id);
    };

    utterance.onend = () => {
      setIsReading(false);
      setCurrentWordIndex(null);
      clearInterval(intervalId);
    };

    synth.speak(utterance);
  };

  const stopReading = () => {
    const synth = window.speechSynthesis;
    synth.cancel();
    setIsReading(false);
    setCurrentWordIndex(null);
    clearInterval(intervalId);
  };

  return (
    <section className="mt-3 stories">
      <p>
        {text.split(" ").map((palabra, index) => (
          <span
            key={index}
            className={index === currentWordIndex ? "highlighted" : "normal"}
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
