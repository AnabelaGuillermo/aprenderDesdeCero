import React, { useState } from 'react';
import ItemCard from './ItemCard';

function Dropdown({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-button">
        {title}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {items.map((item, index) => (
            <ItemCard key={index} item={item} />
          ))}
        </div>
      )}
    </article>
  );
}

export default Dropdown;
