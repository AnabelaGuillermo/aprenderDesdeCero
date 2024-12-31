import React from "react";

const Result = ({ subtraction }) => {
  return (
    <div className="mt-3">
      {subtraction !== null && <h2>El resultado es: {subtraction}</h2>}
    </div>
  );
};

export default Result;