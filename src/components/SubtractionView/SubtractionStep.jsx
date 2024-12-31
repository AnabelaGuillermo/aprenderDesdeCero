import React from "react";

const SubtractionStep = ({ step, n1, n2, partialDifference, borrow }) => {
  return (
    <div>
      <p>
        <strong>Paso {step}:</strong>
      </p>
      <p>
        Resta: <span className="highlight">{n1}</span> -{" "}
        <span className="highlight">{n2}</span> ={" "}
        <span className="highlight">{partialDifference}</span>
      </p>
    </div>
  );
};

export default SubtractionStep;