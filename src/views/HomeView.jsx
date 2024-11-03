import React from "react";
import "../css/HomeView.css";
import ColorButtons from "../components/HomeView/ColorButtons";

const HomeView = () => {
  return (
    <>
      <section className="portadaHome">
        <h1 className="tituloHome">Aprender desde cero</h1>
        <img src="/colors.png" alt="Imagen de papeles de colores." />
        <ColorButtons />
      </section>
    </>
  );
};

export default HomeView;
