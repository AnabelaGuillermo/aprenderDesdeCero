import React from "react";
import SyllableDivider from "../components/SyllablesView/SyllableDivider";
import ColorButtons from "../components/HomeView/ColorButtons";

import "../css/SyllablesView.css";

function Syllables() {
  return (
    <section>
      <article className="syllable container d-flex justify-content-center mt-5">
      <SyllableDivider />
      </article>
      <article className="mt-5 mb-2 container">
        <hr />
        <ColorButtons />
      </article>
    </section>
  );
}

export default Syllables;
