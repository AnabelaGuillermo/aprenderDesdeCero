import React, { useState } from "react";

export const AlphabetButton = ({ letter, onAddLetter }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
    const utterance = new SpeechSynthesisUtterance(letter);
    utterance.lang = "es-ES";
    speechSynthesis.speak(utterance);
  };

  const handleAdd = () => {
    onAddLetter(letter);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={handleButtonClick}>{letter}</button>
      {isModalOpen && (
        <div className="modal">
          <p>¿Quieres añadir la letra {letter}?</p>
          <button onClick={handleAdd}>Añadir</button>
          <button onClick={handleCancel}>Cancelar</button>
        </div>
      )}
    </>
  );
};

export default AlphabetButton;
