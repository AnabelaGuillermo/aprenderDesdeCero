import React from "react";
import { Link } from "react-router-dom";

import '../../css/ColorButtons.css'

const ColorButtons = () => {
  return (
    <article className="colorButtonsHome">
      <Link to="/Abecedario" className="btn red-btn">Abecedario</Link>
      <Link to="/Escribe y escucha" className="btn blue-btn">Escribe y escucha</Link>
      <Link to="/Lectura en voz alta" className="btn green-btn">Lectura en voz alta</Link>
      <Link to="/Sílabas" className="btn orange-btn">Sílabas</Link>
      <Link to="/Números" className="btn lightblue-btn">Números</Link>
      <Link to="/Colores" className="btn purple-btn">Colores</Link>
      <Link to="/Frutas" className="btn red-btn">Frutas</Link>
      <Link to="/Verduras" className="btn green-btn">Verduras</Link>
      <Link to="/Cosas de la casa" className="btn blue-btn">Cosas de la casa</Link>
      <Link to="/Formas" className="btn orange-btn">Formas</Link>
    </article>
  );
};

export default ColorButtons;
