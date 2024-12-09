import React from 'react';

const Result = ({ sum }) => {
  return (
    <div>
      {sum !== null && (
        <h2>El resultado de la suma es: {sum}</h2>
      )}
    </div>
  );
};

export default Result;