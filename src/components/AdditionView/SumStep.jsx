import React from "react";

const SumStep = ({ step, n1, n2, partialSum, carry }) => {
  return (
    <div>
      <p>
        <strong>Paso {step}:</strong>
      </p>
      <p>
        Suma: <span className="highlight">{n1}</span> +{" "}
        <span className="highlight">{n2}</span> ={" "}
        <span className="highlight">{partialSum}</span>
      </p>
    </div>
  );
};

export default SumStep;
