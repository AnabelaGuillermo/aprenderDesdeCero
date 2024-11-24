import React from "react";
import ItemCard from "../components/HomeStuffView/ItemCard";
import { vegetablesView } from "../data/vegetables";

import "../css/VegetablesView.css";

function VegetablesView() {
  return (
    <section className="container mt-5 text-center">
      <h1>Verduras</h1>
      <p className="mb-5">Haz clic en una verdura para escuchar su nombre.</p>
      <div className="vegetables-content">
        {vegetablesView.Vegetales.map((vegetable, index) => (
          <ItemCard key={index} item={vegetable} />
        ))}
      </div>
    </section>
  );
}

export default VegetablesView;
