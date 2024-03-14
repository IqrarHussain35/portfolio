// Accordion.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Accordion = ({ title, items  }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-2">
    <div className="cursor-pointer" onClick={toggleAccordion}>
      <p className="bg-cyan-800 bg-opacity-25 p-2 rounded">{title}</p>
    </div>
    {isOpen && (
      <ul className="ml-4">
        {items .map((item, index) => (
         <a href={item.id} key={index} > <li  className="py-1 cursor-pointer">{item.subTitle}</li></a>
        ))}
      </ul>

    )}
  </div>
  );
};

export default Accordion;
