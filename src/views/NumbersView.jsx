import React, { useState } from "react";
import "../css/NumberView.css";

function capitalizeFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function numberToWords(num) {
  const units = [
    "",
    "uno",
    "dos",
    "tres",
    "cuatro",
    "cinco",
    "seis",
    "siete",
    "ocho",
    "nueve",
  ];
  const teens = [
    "diez",
    "once",
    "doce",
    "trece",
    "catorce",
    "quince",
    "dieciséis",
    "diecisiete",
    "dieciocho",
    "diecinueve",
  ];
  const tens = [
    "",
    "",
    "veinte",
    "treinta",
    "cuarenta",
    "cincuenta",
    "sesenta",
    "setenta",
    "ochenta",
    "noventa",
  ];
  const hundreds = [
    "",
    "ciento",
    "doscientos",
    "trescientos",
    "cuatrocientos",
    "quinientos",
    "seiscientos",
    "setecientos",
    "ochocientos",
    "novecientos",
  ];

  if (num === 0) return "cero";
  if (num === 100) return "cien";
  if (num < 10) return units[num];
  if (num < 20) return teens[num - 10];
  if (num < 100)
    return (
      tens[Math.floor(num / 10)] +
      (num % 10 !== 0 ? " y " + units[num % 10] : "")
    );
  if (num < 1000)
    return (
      hundreds[Math.floor(num / 100)] +
      (num % 100 !== 0 ? " " + numberToWords(num % 100) : "")
    );

  if (num < 1000000) {
    const thousands = Math.floor(num / 1000);
    const rest = num % 1000;
    return (
      (thousands === 1 ? "mil" : numberToWords(thousands) + " mil") +
      (rest !== 0 ? " " + numberToWords(rest) : "")
    );
  }

  if (num < 1000000000) {
    const millions = Math.floor(num / 1000000);
    const rest = num % 1000000;
    return (
      (millions === 1 ? "un millón" : numberToWords(millions) + " millones") +
      (rest !== 0 ? " " + numberToWords(rest) : "")
    );
  }

  return "Número demasiado grande";
}

function NumbersView() {
  const [number, setNumber] = useState("");
  const [numberInWords, setNumberInWords] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setNumber(value);
      if (value) {
        const words = numberToWords(parseInt(value, 10));
        setNumberInWords(capitalizeFirstLetter(words));
      } else {
        setNumberInWords("");
      }
    }
  };

  const handleSpeak = () => {
    if (number) {
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(numberInWords);
      utterance.lang = "es-ES";
      utterance.volume = 1;
      utterance.pitch = 1;
      utterance.rate = 1;

      setTimeout(() => {
        window.speechSynthesis.speak(utterance);
      }, 100);
    }
  };

  const handleClear = () => {
    setNumber("");
    setNumberInWords("");
  };

  return (
    <section className="container text-center mt-5">
      <h1>Conoce los números</h1>
      <article className="display mt-4">
        <input
          type="text"
          placeholder="Escribe un número"
          value={number}
          onChange={handleChange}
        />
      </article>
      <article className="controls">
        <button onClick={handleSpeak} disabled={number.length === 0}>
          Reproducir
        </button>
        <button onClick={handleClear} disabled={number.length === 0}>
          Borrar todo
        </button>
      </article>
      <article className="mt-5 numWord">
        {numberInWords && <p>{numberInWords}</p>}
      </article>
    </section>
  );
}

export default NumbersView;
