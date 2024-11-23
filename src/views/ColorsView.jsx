import React from "react";
import ColorSquare from "../components/ColorsView/ColorSquare";
import "../css/ColorsView.css";

const colors = [
  { name: "Rojo", colorCode: "#FF0000" },
  { name: "Azul", colorCode: "#0000FF" },
  { name: "Verde", colorCode: "#00FF00" },
  { name: "Amarillo", colorCode: "#FFFF00" },
  { name: "Naranja", colorCode: "#FFA500" },
  { name: "Blanco", colorCode: "#FFFFFF" },
  { name: "Negro", colorCode: "#000000" },
  { name: "Violeta", colorCode: "#8A2BE2" },
  { name: "Celeste", colorCode: "#87CEEB" },
  { name: "Gris", colorCode: "#808080" },
  { name: "Rosa", colorCode: "#FFC0CB" },
  { name: "Marrón", colorCode: "#562B05" },
];

const ColorsView = () => {
  return (
    <section className="container colors mt-5">
      <h1>Colores</h1>
      <p>Haz clic para escuchar el nombre del color.</p>
      <div className="color-container">
        {colors.map((color) => (
          <ColorSquare key={color.name} color={color} />
        ))}
      </div>
    </section>
  );
};

export default ColorsView;
