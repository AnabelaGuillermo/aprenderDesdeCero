import React from 'react';
import Dropdown from '../components/HomeStuffView/Dropdown';
import { data } from '../data';

function App() {
  return (
    <section className="container">
      <h1>Cosas de la casa</h1>
      <Dropdown title="Cocina" items={data.Cocina} />
      <Dropdown title="Living Comedor" items={data.LivingComedor} />
      <Dropdown title="Cuarto" items={data.Cuarto} />
      <Dropdown title="Baño" items={data.Baño} />
      <Dropdown title="Lavaro" items={data.Lavadero} />
      <Dropdown title="Patio" items={data.Patio} />
    </section>
  );
}

export default App;
