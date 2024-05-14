import { useEffect, useState } from 'react';
import './index.css'


function App() {
  const [dates, setDate] = useState([])
  const getData = async () => {
    const rs = await fetch('stays.json')
    const rsJson= await rs.json()
    setDate(rsJson)
  }
  
  useEffect(() =>{
    getData()
  },[])


  return (
    <div className="stays-container">
      <ul>
        {dates.map((stay, index) => (
          <li className="stay-item" key={index}>
            <img className="stay-image" src={stay.photo} alt={stay.title} />
            <div className="stay-info">
              <ul>
                <li>{stay.title}</li>
                <li>{stay.city}, {stay.country}</li>
                <li>
                  {stay.superHost ? 'SuperHost' : ''}
                  {stay.rating ? `Rating: ${stay.rating}/5` : ''}
                  {stay.maxGuests ? `Max guests: ${stay.maxGuests}` : ''}
                  {stay.type ? `Type: ${stay.type}` : ''}
                  {stay.beds ? `Beds: ${stay.beds}` : ''}
                </li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
