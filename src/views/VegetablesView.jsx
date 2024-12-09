import React from "react";
import ItemCard from "../components/HomeStuffView/ItemCard";
import ColorButtons from "../components/HomeView/ColorButtons";
import { vegetablesView } from "../data/vegetables";

import "../css/VegetablesView.css";

function VegetablesView() {
  return (
    <section className="container mt-5 text-center">
      <h1>Verduras</h1>
      <p className="mb-5">Haz clic en una verdura para escuchar su nombre.</p>
      <article className="vegetables-content">
        {vegetablesView.Vegetales.map((vegetable, index) => (
          <ItemCard key={index} item={vegetable} />
        ))}
      </article>
      <article className="mt-5 mb-2">
        <hr />
        <ColorButtons />
      </article>
    </section>
  );
}

export default VegetablesView;
