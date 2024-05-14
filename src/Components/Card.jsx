import React from 'react';

const Card = ({ stay }) => {
  return (
    <li className="stay-item">
      <img className="stay-image" src={stay.photo} alt={stay.title} />
      <div className="stay-info">
        <ul>
          <li>{stay.title}</li>
          <li>{stay.city}, {stay.country}</li>
          <li>
            {stay.superHost ? 'SuperHost' : ''} {stay.rating ? `Rating: ${stay.rating}/5` : ''} {stay.maxGuests ? `Max guests: ${stay.maxGuests}` : ''} {stay.type ? `Type: ${stay.type}` : ''} {stay.beds ? `Beds: ${stay.beds}` : ''}
          </li>
        </ul>
      </div>
    </li>
  );
};

export default Card;