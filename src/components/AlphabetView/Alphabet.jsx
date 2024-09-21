import React, { useState } from "react";

export const AlphabetButton = ({ letter }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);

    let pronunciation = letter;
    if (letter === "V") pronunciation = "ve";
    if (letter === "W") pronunciation = "doble ve";
    if (letter === "Y") pronunciation = "i griega";

    const utterance = new SpeechSynthesisUtterance(pronunciation);
    utterance.lang = "es-ES";
    speechSynthesis.speak(utterance);
  };

  return <button onClick={handleButtonClick}>{letter}</button>;
};

export default AlphabetButton;
