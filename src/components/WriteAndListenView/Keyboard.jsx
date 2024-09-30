import React from "react";
import Key from "./Key";

const Keyboard = ({ onAddChar, onDelete }) => {
  const alphabet = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("");
  const specialChars = [" ", ".", ",", "¡", "!", "¿", "?", "Borrar"];

  return (
    <section>
      <article className="alphabet">
        {alphabet.map((char) => (
          <Key key={char} label={char} onClick={onAddChar} />
        ))}
      </article>
      <div className="special-keys">
        <Key label="Espacio" onClick={onAddChar} />
        <Key label="." onClick={onAddChar} />
        <Key label="," onClick={onAddChar} />
        <Key label="¡" onClick={onAddChar} />
        <Key label="!" onClick={onAddChar} />
        <Key label="¿" onClick={onAddChar} />
        <Key label="?" onClick={onAddChar} />
        <Key label="Borrar" onClick={onDelete} />
      </div>
    </section>
  );
};

export default Keyboard;
