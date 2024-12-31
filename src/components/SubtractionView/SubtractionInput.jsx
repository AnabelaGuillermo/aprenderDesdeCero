import React, { useState } from "react";

const SubtractionInput = ({ onStartSubtraction, highlightIndex, subtraction }) => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (number1 && number2) {
      onStartSubtraction(Number(number1), Number(number2));
    } else {
      alert("Por favor ingresa ambos números.");
    }
  };

  const getHighlightedNumber = (number, index) => {
    const digits = number.toString().split("");
    const reversedDigits = digits.reverse();
    return reversedDigits
      .map((digit, i) => (
        <span key={i} className={i === index ? "highlight" : ""}>
          {digit}
        </span>
      ))
      .reverse();
  };

  return (
    <form className="form-subtraction" onSubmit={handleSubmit}>
      <div className="subtraction mb-3">
        <label className="me-3">Número 1:</label>
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
          placeholder="Número 1"
        />
      </div>
      <div className="mb-3">
        <label className="me-3">Número 2:</label>
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
          placeholder="Número 2"
        />
      </div>
      <div className="d-flex justify-content-center">
        <button className="button-orange btn-subtract mb-3" type="submit">
          Iniciar resta
        </button>
      </div>
      <div className="number-subtraction">
        {number1 && number2 && "-"}{" "}
        {getHighlightedNumber(number1, highlightIndex)}
      </div>
      <div className="number-subtraction">
        {getHighlightedNumber(number2, highlightIndex)}
      </div>
      {subtraction !== null && (
        <div className="number-subtraction result mb-4">
          <div className="line">—————</div>
          <strong>{subtraction}</strong>
        </div>
      )}
    </form>
  );
};

export default SubtractionInput;