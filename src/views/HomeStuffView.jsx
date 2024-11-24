import React from "react";
import Dropdown from "../components/HomeStuffView/Dropdown";
import { homeStuff } from "../data/homeStuff";

import "../css/HomeStuffView.css";

function App() {
  return (
    <section className="container homeStuff mt-5">
      <h1>Cosas de la casa</h1>
      <p className="mb-5">Despliega y haz clic en el elemento para escuchar su nombre.</p>
      <Dropdown title="Cocina ↓" items={homeStuff.Cocina} />
      <Dropdown title="Living Comedor ↓" items={homeStuff.LivingComedor} />
      <Dropdown title="Cuarto ↓" items={homeStuff.Cuarto} />
      <Dropdown title="Baño ↓" items={homeStuff.Baño} />
      <Dropdown title="Lavadero ↓" items={homeStuff.Lavadero} />
      <Dropdown title="Patio ↓" items={homeStuff.Patio} />
    </section>
  );
}

export default App;
