import React from 'react';
import Key from './Key';

const Keyboard = ({ onAddChar, onDelete }) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const specialChars = [' ', '.', ',', 'Borrar'];

  return (
    <section>
      <article className="alphabet">
        {alphabet.map(char => (
          <Key key={char} label={char} onClick={onAddChar} />
        ))}
      </article>
      <article className="special-keys">
        <Key label="Espacio" onClick={onAddChar} />
        <Key label="." onClick={onAddChar} />
        <Key label="," onClick={onAddChar} />
        <Key label="Borrar" onClick={onDelete} />
      </article>
    </section>
  );
};

export default Keyboard;
