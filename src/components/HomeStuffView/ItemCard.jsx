import React from 'react';

function ItemCard({ item }) {
  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(item.name);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="item-card" onClick={speak}>
      <img src={item.image} alt={item.name} className="item-image" />
      <p>{item.name}</p>
    </div>
  );
}

export default ItemCard;
