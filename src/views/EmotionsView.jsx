import React from "react";
import ItemCard from "../components/HomeStuffView/ItemCard";
import ColorButtons from "../components/HomeView/ColorButtons";
import { emotionsView } from "../data/emotions.js";

import "../css/VegetablesView.css";

function EmotionsView() {
  return (
    <section className="container mt-5 text-center">
      <h1>Emociones</h1>
      <p className="mb-5">Haz clic en una emoción para escuchar su nombre.</p>
      <article className="vegetables-content">
        {emotionsView.Emociones.map((emociones, index) => (
          <ItemCard key={index} item={emociones} />
        ))}
      </article>
      <article className="mt-5 mb-2">
        <hr />
        <ColorButtons />
      </article>
    </section>
  );
}

export default EmotionsView;
