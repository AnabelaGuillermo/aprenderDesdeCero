import React from "react";
import ItemCard from "../components/HomeStuffView/ItemCard";
import ColorButtons from "../components/HomeView/ColorButtons";
import { animalsView } from "../data/animals.js";

import "../css/VegetablesView.css";

function AnimalsView() {
  return (
    <section className="container mt-5 text-center">
      <h1>Animales</h1>
      <p className="mb-5">Haz clic en un animal para escuchar su nombre.</p>
      <article className="vegetables-content">
        {animalsView.Animales.map((animales, index) => (
          <ItemCard key={index} item={animales} />
        ))}
      </article>
      <article className="mt-5 mb-2">
        <hr />
        <ColorButtons />
      </article>
    </section>
  );
}

export default AnimalsView;
