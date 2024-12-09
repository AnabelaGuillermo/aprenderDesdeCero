import React from "react";
import ItemCard from "../components/HomeStuffView/ItemCard";
import ColorButtons from "../components/HomeView/ColorButtons";
import { bodyView } from "../data/body.js";

import "../css/VegetablesView.css";

function BodyView() {
  return (
    <section className="container mt-5 text-center">
      <h1>Partes del cuerpo</h1>
      <p className="mb-5">
        Haz clic en una parte del cuerpo para escuchar su nombre.
      </p>
      <article className="vegetables-content">
        {bodyView.Cuerpo.map((cuerpo, index) => (
          <ItemCard key={index} item={cuerpo} />
        ))}
      </article>
      <article className="mt-5 mb-2">
        <hr />
        <ColorButtons />
      </article>
    </section>
  );
}

export default BodyView;
