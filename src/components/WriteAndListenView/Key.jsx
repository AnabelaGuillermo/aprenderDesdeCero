import React from 'react';

const Key = ({ label, onClick }) => {
  return (
    <button onClick={() => onClick(label)}>
      {label}
    </button>
  );
};

export default Key;
