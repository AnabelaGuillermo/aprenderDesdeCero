import React, { useState } from 'react';
import AlphabetButton from '../components/AlphabetView/Alphabet';

const alphabet = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');

function App() {
  const [word, setWord] = useState('');

  const handleAddLetter = (letter) => {
    setWord(prevWord => prevWord + letter);
  };

  const handlePlayWord = () => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "es-ES";
    speechSynthesis.speak(utterance);
  };

  const handleAddSpace = () => {
    setWord(prevWord => prevWord + ' ');
  };

  return (
    <div className="App">
      <h1>Abecedario</h1>
      <div className="alphabet-buttons">
        {alphabet.map(letter => (
          <AlphabetButton key={letter} letter={letter} onAddLetter={handleAddLetter} />
        ))}
        <button onClick={handleAddSpace}>Espacio</button>
      </div>
      <div className="word-display">
        <p>Palabra formada:</p>
        <h2>{word}</h2>
      </div>
      <button onClick={handlePlayWord} disabled={!word.trim()}>Reproducir Palabra</button>
    </div>
  );
}

export default App;
