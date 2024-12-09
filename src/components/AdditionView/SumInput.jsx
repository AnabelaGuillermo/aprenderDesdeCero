import React, { useState } from "react";

const SumInput = ({ onStartSum }) => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (number1 && number2) {
      onStartSum(Number(number1), Number(number2)); // Llamar al inicio de la suma
    } else if (!number1 || !number2) {
      alert("Por favor ingresa ambos números.");
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
        placeholder="Número 1"
      />
      <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
        placeholder="Número 2"
      />
      <button type="submit">Iniciar suma</button>
    </form>
  );
};

export default SumInput;
