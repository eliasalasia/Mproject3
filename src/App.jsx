import { useEffect, useState } from 'react';
import './index.css';
import Nav from './Components/Nav';
import Card from './Components/Card';

function App() {
  const [dates, setDate] = useState([]);
  const [filtered, setFiltered] = useState([])

  const getData = async () => {
    const rs = await fetch('stays.json');
    const rsJson = await rs.json();
    setDate(rsJson);
    setFiltered(rsJson)
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="stays-container container">
      <Nav dates={dates} setFiltered={setFiltered} />
     
      <ul className="listings stay-list">
        {filtered.map((stay, index) => (
          <Card key={index} stay={stay} />
        ))}
      </ul>
    </div>
  );
}

export default App;