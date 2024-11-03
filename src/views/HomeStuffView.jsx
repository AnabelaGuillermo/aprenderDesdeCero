import React from "react";
import Dropdown from "../components/HomeStuffView/Dropdown";
import { data } from "../data";

import "../css/HomeStuffView.css";

function App() {
  return (
    <section className="container homeStuff mt-5">
      <h1>Cosas de la casa</h1>
      <p className="mb-5">Despliega y haz clic en el elemento para escuchar su nombre.</p>
      <Dropdown title="Cocina ↓" items={data.Cocina} />
      <Dropdown title="Living Comedor ↓" items={data.LivingComedor} />
      <Dropdown title="Cuarto ↓" items={data.Cuarto} />
      <Dropdown title="Baño ↓" items={data.Baño} />
      <Dropdown title="Lavadero ↓" items={data.Lavadero} />
      <Dropdown title="Patio ↓" items={data.Patio} />
    </section>
  );
}

export default App;
