import React from "react";
import "./css/HomeLetterCard.css"
function HomeLetterCard({ title, experience, rating }) {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={index < rating ? "star-filled" : "star-empty"}>
      ★
    </span>
  ));

  return (
    <div className="HomeLetterCard">
     
        <div className="HomeLetterCard-header">
          <h1>{title}</h1>
          <div className="HomeLetterCard-stars">{stars}</div>
          <p>{experience}</p>
        </div>
     

    </div>
  );
}

export default HomeLetterCard;
