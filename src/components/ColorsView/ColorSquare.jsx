import React from "react";
import PropTypes from "prop-types";

const ColorSquare = ({ color }) => {
  const handleClick = () => {
    const utterance = new SpeechSynthesisUtterance(color.name);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div
      className="color-square"
      style={{ backgroundColor: color.colorCode }}
      onClick={handleClick}
    >
      <p>{color.name}</p>
    </div>
  );
};

ColorSquare.propTypes = {
  color: PropTypes.shape({
    name: PropTypes.string.isRequired,
    colorCode: PropTypes.string.isRequired,
  }).isRequired,
};

export default ColorSquare;
