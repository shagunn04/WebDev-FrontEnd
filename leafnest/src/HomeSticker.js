import React from "react";
import FreeDelievery from "./images/FreeDelieverysticker.png";
import Ecofriendly from "./images/Ecosticker.png";
import Days from "./images/30Dayssticker.png";
import Expert from "./images/Expertstciker.png";
import "./css/HomeSticker.css";

function HomeSticker() {
  return (
    <div className="Homesticker">
      <h1>Benefits of buying from us</h1>
      <div className="stickers-container">
        <div className="FreeDelievery">
          <img src={FreeDelievery} alt="freedelievery" />
          <h1>Free Delivery</h1>
        </div>
        <div className="EcoFriendly">
          <img src={Ecofriendly} alt="EcoFriendly" />
          <h1>Eco Delivery</h1>
        </div>
        <div className="Days">
          <img src={Days} alt="30Days" />
          <h1>30 Days Guarantee</h1>
        </div>
        <div className="Expert">
          <img src={Expert} alt="Expert" />
          <h1>Expert Tips & Solutions</h1>
        </div>
      </div>
    </div>
  );
}

export default HomeSticker;
