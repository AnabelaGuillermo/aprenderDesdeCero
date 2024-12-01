import React from "react";
import Dropdown from "../components/HomeStuffView/Dropdown";
import ColorButtons from "../components/HomeView/ColorButtons";
import { foodView } from "../data/food";

import "../css/HomeStuffView.css";

function FoodView() {
  return (
    <section className="container homeStuff mt-5">
      <h1>Comidas y bebidas</h1>
      <p className="mb-5">
        Despliega y haz clic en la comida o bebida que desees para escuchar su
        nombre.
      </p>
      <article>
        <Dropdown
          title="Desayuno / Merienda ↓"
          items={foodView.DesayunoMerienda}
        />
        <Dropdown title="Almuerzo / Cena ↓" items={foodView.AlmuerzoCena} />
        <Dropdown title="Bebidas ↓" items={foodView.Bebidas} />
        <Dropdown title="Postres ↓" items={foodView.Postres} />
        <Dropdown title="Agregados ↓" items={foodView.Agregados} />
      </article>
      <article className="mt-5 mb-2">
        <hr />
        <ColorButtons />
      </article>
    </section>
  );
}

export default FoodView;
