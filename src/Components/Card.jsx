import React from 'react';

const Card = ({ stay }) => {
  return (
    <li className="stay-item">
      <img className="stay-image" src={stay.photo} alt={stay.title} />
      <div className="stay-info">
      
          <p>
            {stay.superHost ? 'SuperHost' : true} {stay.type} {stay.beds ? `Beds: ${stay.beds}` : ''}
            <h3>{stay.title}</h3>
          </p>
      </div>
    </li>
  );
};

export default Card;