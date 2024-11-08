import React, { useContext, useState, useEffect } from "react";
import { Context } from "./GlobalContext/Context";
import { FaStar } from "react-icons/fa";
import "./css/ReviewCard.css";

function ReviewCard({ id, title, Rating, Review, OneWord }) {
  const { RentVans } = useContext(Context);

  const [crit, setcrit] = useState({
    id: id,
    image: "",
    VanName: "",
    Vanprice: "",
    title: title,
    Rating: Rating,
    Review: Review,
    OneWord: OneWord,
    VanType: "",
  });

  useEffect(() => {
    const matchedVan = RentVans.find((van) => van.selectedVan.id === id);
    if (matchedVan) {
      setcrit((prevcrit) => ({
        ...prevcrit,
        image: matchedVan.selectedVan.image,
        VanName: matchedVan.selectedVan.title,
        VanType: matchedVan.selectedVan.type,
        Vanprice: matchedVan.selectedVan.price,
      }));
    }
  }, [id, RentVans]);

  // Function to render stars based on the rating
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          color={i <= crit.Rating ? "gold" : "lightgray"} // Display gold for filled stars and lightgray for empty ones
        />
      );
    }
    return stars;
  };

  return (
    <div className="Review">
      <div className="Van-details">
        <div className="Van-image">
          <img src={crit.image} alt="Van-image" />
        </div>
        <div className="Van-Content">
          <h1>{crit.VanName}</h1>
          <h1>$ {crit.Vanprice} / day</h1>
        </div>
        <div className="Van-Type">
          <button>{crit.VanType}</button>
        </div>
      </div>
      <div className="Comment">
        <div className="Title-Rating">
          <h1>{crit.title}</h1>
          <div className="Rating-Stars">{renderStars()}</div>
        </div>
        <div className="Elaborate-Word">
          <p>{crit.Review}</p>
          <button>{crit.OneWord}</button>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
