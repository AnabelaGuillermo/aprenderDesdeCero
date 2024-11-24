import React from "react";
import ItemCard from "../components/HomeStuffView/ItemCard";
import ColorButtons from "../components/HomeView/ColorButtons";
import { fruitView } from "../data/fruits.js";

import "../css/VegetablesView.css";

function FruitView() {
  return (
    <section className="container mt-5 text-center">
      <h1>Frutas</h1>
      <p className="mb-5">Haz clic en una fruta para escuchar su nombre.</p>
      <article className="vegetables-content">
        {fruitView.Frutas.map((frutas, index) => (
          <ItemCard key={index} item={frutas} />
        ))}
      </article>
      <article className="mt-5 mb-2">
        <hr />
        <ColorButtons />
      </article>
    </section>
  );
}

export default FruitView;
