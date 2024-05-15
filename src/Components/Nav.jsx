import React, { useState } from 'react';
import logo from '../image/logo.png'; // Importa la imagen del logo
import lupa from '../image/lupa.png'


const Nav = ({dates, setFiltered}) => {
  const [search, setSearch] = useState('')
 function filterData() {
  if (search.trim() !== '') {
    const rs = dates.filter(dat => dat.city.toLowerCase().includes(search.toLowerCase()))
    setFiltered(rs)
  } else {
    setFiltered(dates)
  }
  
 }

  return (
    <nav>
      <a href="#" className="logo">
        <img src={logo} alt="airbnb logo" className="logo-image" /> 
      </a>
      <div className='inputs'>
        <input className='locationInput' type="text" placeholder='LOCATION' value={search} onChange={(e)=> setSearch((e.target.value))}/>
        <input className='guestsInput' type="text" placeholder='Add Guests' />
        <button className='btn' onClick={filterData}>
          <img src={lupa} alt="search" />
        </button>
      </div>
    </nav>
  );
};

export default Nav;