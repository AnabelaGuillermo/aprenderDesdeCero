import React, { useState } from "react";
import { divide, stress, difficulty } from "../../utils/syllableUtils";

const SyllableDivider = () => {
  const [word, setWord] = useState("");
  const [syllables, setSyllables] = useState("");
  const [strong, setStrong] = useState("");
  const [difficultyLevel, setDifficultyLevel] = useState([]);

  const handleWordChange = (event) => {
    setWord(event.target.value);
  };

  const handleDivide = () => {
    const dividedSyllables = divide(word);
    setSyllables(dividedSyllables.join("-"));
    const stressIndex = stress(dividedSyllables);
    setStrong(dividedSyllables[stressIndex]);
    setDifficultyLevel(difficulty(dividedSyllables));
  };

  return (
    <article>
      <h1>Separar en Sílabas</h1>
      <div>
        <label>Palabra: </label>
        <input type="text" value={word} onChange={handleWordChange} />
      </div>
      <div>
        <label>Sílabas: </label>
        <input type="text" value={syllables} readOnly />
      </div>
      <br />
      <button onClick={handleDivide}>Separar</button>
    </article>
  );
};

export default SyllableDivider;
