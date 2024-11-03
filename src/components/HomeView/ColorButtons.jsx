import React from "react";
import { Link } from "react-router-dom";

import '../../css/ColorButtons.css'

const ColorButtons = () => {
  return (
    <article className="colorButtonsHome">
      <Link to="/Abecedario" className="btn red-btn">Abecedario</Link>
      <Link to="/Escribe y escucha" className="btn blue-btn">Escribe y escucha</Link>
      <Link to="/Lectura en voz alta" className="btn green-btn">Lectura en voz alta</Link>
      <Link to="/Números" className="btn lightblue-btn">Números</Link>
      <Link to="/Colores" className="btn purple-btn">Colores</Link>
      <Link to="/Cosas de la casa" className="btn orange-btn">Cosas de la casa</Link>
    </article>
  );
};

export default ColorButtons;
