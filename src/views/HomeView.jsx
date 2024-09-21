import React from "react";

import "../css/HomeView.css";

const HomeView = () => {
  return (
    <>
      <section className="container-fluid portadaHome">
        <article class="overlay"></article>
        <h1 className="tituloHome">Aprender de cero</h1>
        <img
          src="../../public/colors.jpg"
          alt="Imagen de papeles de colores"
          className="portadaCubos"
        />
      </section>
    </>
  );
};

export default HomeView;
