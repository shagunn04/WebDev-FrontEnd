import React from "react";
import './css/Card.css';
import {Link} from "react-router-dom"
function Card({ id, image, type, price, title }) {
  return (
    <Link to={`/vans/ExploreVans/${id}`} className="Card">
      <div className="Card-img">
        <img src={image} alt="Card-img" />
      </div>
      <div className="Card-content">
        <h3 className="Card-title">{title}</h3>
        <h4 className="Card-price">{price}/day</h4>
      </div>
      <button className="Card-type">
        <h3>{type}</h3>
      </button>
    </Link>
  );
}

export default Card;
