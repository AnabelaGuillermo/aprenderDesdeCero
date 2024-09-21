import React, { useState } from "react";
import AlphabetButton from "../components/AlphabetView/Alphabet";

const alphabet = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("");

function Alphabet() {
  const [word, setWord] = useState("");

  const handleAddLetter = (letter) => {
    setWord((prevWord) => prevWord + letter);
  };

  return (
    <section className="Alphabet">
      <h1>Abecedario</h1>
      <article className="alphabet-buttons">
        {alphabet.map((letter) => (
          <AlphabetButton
            key={letter}
            letter={letter}
            onAddLetter={handleAddLetter}
          />
        ))}
      </article>
    </section>
  );
}

export default Alphabet;
