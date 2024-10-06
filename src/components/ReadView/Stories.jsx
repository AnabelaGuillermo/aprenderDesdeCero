import React, { useState } from "react";

const Stories = ({ text }) => {
  const [isReading, setIsReading] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(null);
  const [selectedWordIndex, setSelectedWordIndex] = useState(null);

  const readWord = (palabra, index) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(palabra);
    synth.cancel();

    utterance.rate = 0.4;

    utterance.onstart = () => {
      setIsReading(true);
      setCurrentWordIndex(index);
      setSelectedWordIndex(index);
    };

    utterance.onend = () => {
      setIsReading(false);
    };

    synth.speak(utterance);
  };

  const readStories = () => {
    const synth = window.speechSynthesis;
    const palabras = text.split(" ");

    const startIndex = selectedWordIndex !== null ? selectedWordIndex : 0;

    const textToRead = palabras.slice(startIndex).join(" ");

    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.rate = 0.4;

    utterance.onboundary = (event) => {
      if (event.charIndex < textToRead.length) {
        const wordIndex = palabras.findIndex((_, index) => {
          const start = textToRead.indexOf(palabras[index + startIndex]);
          const end = start + palabras[index + startIndex].length;
          return event.charIndex >= start && event.charIndex < end;
        });

        setCurrentWordIndex(wordIndex + startIndex);
      }
    };

    utterance.onstart = () => {
      setIsReading(true);
      setCurrentWordIndex(startIndex);
      setSelectedWordIndex(null);
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
    setSelectedWordIndex(null);
  };

  return (
    <section className="mt-3 stories">
      <p>
        {text.split(" ").map((palabra, index) => (
          <span
            key={index}
            onClick={() => {
              readWord(palabra, index);
            }}
            className={
              index === currentWordIndex
                ? "highlighted"
                : index === selectedWordIndex
                ? "highlighted"
                : "normal"
            }
          >
            {palabra}{" "}
          </span>
        ))}
      </p>
      <article className="button-stories">
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
      </article>
    </section>
  );
};

export default Stories;
