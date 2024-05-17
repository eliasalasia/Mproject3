import './Card.css'
import star from '../assets/star.png';


function Card({ stay }) {

  return (


    <div className="card-container">
      <figure className='figure-card'>
        <img className='image-class'
          src={stay.photo}
          alt={stay.title} />
      </figure>
      <div className="ratings">
        <div className="rating">
          <img className="star-icon" src={star} alt="Star icon" />
          <span>{stay.rating}</span>
        </div>
        <p className="type">{stay.type} · {stay.beds ? `beds ${stay.beds}`: ''}</p>
        {stay.superHost && <div className="superhost">SUPER HOST</div>}
      </div>
      <h2 className="title">{stay.title}</h2>
    </div>




  )
}

export default Card