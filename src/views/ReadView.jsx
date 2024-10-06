import React from "react";
import Stories from "../components/ReadView/Stories.jsx";
import "../css/ReadView.css";

const stories = [
  "En una fría tarde de otoño, una anciana miraba por la ventana. Su única compañía, una enredadera, había perdido casi todas sus hojas. Una noche, una hoja resistió al viento y se aferró al tallo. La anciana sonrió, creyendo que la hoja vivía por ella. Al amanecer, la hoja se desprendió, pero la anciana, al verla caer, comprendió que a veces, el amor también significa dejar ir.",
  "Cada noche, el faro iluminaba la costa, guiando a los barcos perdidos. Una tormenta se desató, oscureciendo el cielo. Los marineros, aterrados, buscaban la luz. Un rayo partió el cielo y, en ese instante, el faro brilló con más fuerza que nunca. Los barcos encontraron su camino a casa. El farero, satisfecho, sonrió, sabiendo que su luz había salvado vidas, una vez más.",
  "Eran las diez de la noche cuando Clara llegó a la estación. Se despidió de su ciudad, sabiendo que nunca volvería. El tren llegó y ella subió, el sonido de las puertas cerrándose resonó como un eco en su corazón. A medida que el tren avanzaba, miró por la ventana, dejando atrás recuerdos. En su mente, solo había espacio para nuevos comienzos y sueños por cumplir.",
  "En un jardín escondido, una mariposa dorada revoloteaba entre las flores. Un niño, fascinado por su belleza, decidió seguirla. La mariposa lo guió a un claro donde brillaba un lago mágico. Al tocar el agua, el niño deseó un mundo lleno de amistad y amor. La mariposa sonrió y, con un aleteo, desapareció, dejando una estela de luz. Desde ese día, el niño nunca estuvo solo.",
  "En un pueblo olvidado, el viento contaba historias a quienes se detenían a escuchar. Un anciano, sentado en un banco, escuchaba con atención. Hablaba de amores perdidos, aventuras lejanas y risas compartidas. Cada día, el anciano sonreía, recordando su juventud. Cuando el viento cesó, él cerró los ojos y suspiró, sintiendo que, aunque el tiempo pasara, las historias siempre vivirían en su corazón.",
  "Cada noche, Julia miraba al cielo deseando un cambio. Una noche, vio una estrella fugaz y cerró los ojos. 'Quiero ser valiente', susurró. Al día siguiente, decidió inscribirse en un concurso de poesía. Con cada palabra, su voz se fortalecía. Cuando llegó la noche del concurso, miró al público y, con un suspiro profundo, leyó su poema. Al final, una ovación resonó; Julia había encontrado su valentía.",
  "En el fondo del bosque, había un jardín secreto que florecía en silencio. Una niña, curiosa y aventurera, lo descubrió un día. Las flores brillaban con colores que nunca había visto. En el centro, una fuente susurraba secretos de la naturaleza. La niña, fascinada, prometió cuidar del jardín. Desde entonces, cada semana regresaba, llevando semillas y sueños, sabiendo que en ese rincón del mundo, la magia nunca acabaría.",
  "Un día, mientras limpiaba el desván, Ana encontró una carta amarilla, olvidada por el tiempo. Al abrirla, leyó palabras de amor de su abuela a un amor perdido. Con lágrimas en los ojos, sintió la tristeza y la pasión de aquel momento. Decidió llevar la carta a la tumba de su abuela, dejando una flor blanca. En ese instante, comprendió que el amor trasciende el tiempo y la distancia.",
  "En una playa dorada, un niño solitario jugaba en el agua. Un delfín apareció, saltando con alegría. El niño, asombrado, se acercó y, juntos, nadaron entre las olas. El delfín le mostró un mundo submarino lleno de colores y risas. Al final del día, el delfín se despidió, prometiendo volver. El niño, con el corazón lleno de felicidad, supo que había hecho un amigo para toda la vida.",
  "Cada noche, Sofía salía al balcón y miraba la luna. Un viejo cuento decía que si le contabas tus sueños, la luna te ayudaría a cumplirlos. Una noche, decidió confiarle su deseo de ser artista. Con cada palabra, la luna brillaba más. Pasaron los años, y un día, Sofía presentó su primera exposición. Al ver su obra, miró al cielo y sonrió, sabiendo que la luna había cumplido su promesa.",
];

function Read() {
  return (
    <section className="Read text-center container mt-5">
      <h1>Cuentos Cortos</h1>
      <p className="mb-5">Haz clic en reproducir para que el cuento sea leído en voz alta. También puedes hacer clic sobre una palabra para escucharla.</p>
      <hr />
      {stories.map((text, index) => (
        <React.Fragment key={index}>
          <Stories text={text} />
          {index < stories.length - 1 && <hr />}
        </React.Fragment>
      ))}
    </section>
  );
}

export default Read;
