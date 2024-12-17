import React, { useState } from "react";

const SumInput = ({ onStartSum, highlightIndex, sum }) => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (number1 && number2) {
      onStartSum(Number(number1), Number(number2));
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
    <form className="form-addition" onSubmit={handleSubmit}>
      <div className="addition mb-3">
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
      <button className="button-orange btn-sum mb-3" type="submit">
        Iniciar suma
      </button>
      <div className="number-addition">
        {number1 && number2 && "+"}{" "}
        {getHighlightedNumber(number1, highlightIndex)}
      </div>
      <div className="number-addition">
        {getHighlightedNumber(number2, highlightIndex)}
      </div>
      {sum !== null && (
        <div className="number-addition result mb-4">
          <div className="line">—————</div>
          <strong>{sum}</strong>
        </div>
      )}
    </form>
  );
};

export default SumInput;
