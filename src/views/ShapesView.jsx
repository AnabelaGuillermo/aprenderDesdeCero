import React from "react";
import ItemCard from "../components/HomeStuffView/ItemCard";
import ColorButtons from "../components/HomeView/ColorButtons";
import { shapesView } from "../data/shapes.js";

import "../css/VegetablesView.css";

function ShapesView() {
  return (
    <section className="container mt-5 text-center">
      <h1>Formas</h1>
      <p className="mb-5">Haz clic en una forma para escuchar su nombre.</p>
      <article className="vegetables-content">
        {shapesView.Formas.map((formas, index) => (
          <ItemCard key={index} item={formas} />
        ))}
      </article>
      <article className="mt-5 mb-2">
        <hr />
        <ColorButtons />
      </article>
    </section>
  );
}

export default ShapesView;
