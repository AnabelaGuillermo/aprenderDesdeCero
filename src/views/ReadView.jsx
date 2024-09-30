import React from "react";
import Stories from "../components/ReadView/Stories.jsx";

const stories = [
  "En una fría tarde de otoño, una anciana miraba por la ventana. Su única compañía, una enredadera, había perdido casi todas sus hojas. Una noche, una hoja resistió al viento y se aferró al tallo. La anciana sonrió, creyendo que la hoja vivía por ella. Al amanecer, la hoja se desprendió, pero la anciana, al verla caer, comprendió que a veces, el amor también significa dejar ir.",
  "Cada noche, el faro iluminaba la costa, guiando a los barcos perdidos. Una tormenta se desató, oscureciendo el cielo. Los marineros, aterrados, buscaban la luz. Un rayo partió el cielo y, en ese instante, el faro brilló con más fuerza que nunca. Los barcos encontraron su camino a casa. El farero, satisfecho, sonrió, sabiendo que su luz había salvado vidas, una vez más.",
  "Eran las diez de la noche cuando Clara llegó a la estación. Se despidió de su ciudad, sabiendo que nunca volvería. El tren llegó y ella subió, el sonido de las puertas cerrándose resonó como un eco en su corazón. A medida que el tren avanzaba, miró por la ventana, dejando atrás recuerdos. En su mente, solo había espacio para nuevos comienzos y sueños por cumplir.",
  "En un jardín escondido, una mariposa dorada revoloteaba entre las flores. Un niño, fascinado por su belleza, decidió seguirla. La mariposa lo guió a un claro donde brillaba un lago mágico. Al tocar el agua, el niño deseó un mundo lleno de amistad y amor. La mariposa sonrió y, con un aleteo, desapareció, dejando una estela de luz. Desde ese día, el niño nunca estuvo solo.",
  "En un pueblo olvidado, el viento contaba historias a quienes se detenían a escuchar. Un anciano, sentado en un banco, escuchaba con atención. Hablaba de amores perdidos, aventuras lejanas y risas compartidas. Cada día, el anciano sonreía, recordando su juventud. Cuando el viento cesó, él cerró los ojos y suspiró, sintiendo que, aunque el tiempo pasara, las historias siempre vivirían en su corazón.",
];

function Read() {
  return (
    <div className="Read">
      <h1>Cuentos Cortos</h1>
      {stories.map((text, index) => (
        <Stories key={index} text={text} />
      ))}
    </div>
  );
}

export default Read;
