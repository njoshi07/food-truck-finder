import React, { useState } from 'react';

const FoodTruckDetail = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default FoodTruckDetail;
