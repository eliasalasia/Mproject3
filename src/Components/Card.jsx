import React from 'react';
import star from '../assets/star.png'
const Card = ({ stay }) => {
  return (
    
    <li className="stay-item">

      
      <img className="stay-image" src={stay.photo} alt={stay.title} />
      <div className="stay-info">
        
          <p>
            {stay.superHost ? 'SuperHost' : true } {stay.type}  {stay.beds ? `Beds: ${stay.beds}` : ''} 
            <img className="star" src={star} alt="Star"/>
        <span>{stay.rating}</span>
          </p>
      </div>
      <h3>{stay.title}</h3>
    </li>
  );
};

export default Card;