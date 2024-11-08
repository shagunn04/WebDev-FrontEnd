import React from "react";
import "./css/FavVans.css";
import { useNavigate } from "react-router-dom";

function FanVansBar({ id, image, title, price }) {
    const navigate = useNavigate();

    // Navigate to the "ExploreVans" page when clicking on the main card
    const handleCardClick = () => {
        navigate(`/vans/ExploreVans/${id}`);
    };

    
    const handleRentClick = (event) => {
        event.stopPropagation(); 
        navigate(`/Host/FavVans/RentVan/${id}`);
    };

    return (
        <div className="FavVansBar" onClick={handleCardClick}>
            <div className="FavVan-image">
                <img src={image} alt="Van" />
            </div>
            <div className="FavVan-text">
                <h1>{title}</h1>
                <h1>
                    ${price}
                    <span style={{ color: "black", fontWeight: "bold" }}> /day</span>
                </h1>
                {/* Button to rent the van */}
                <button onClick={handleRentClick}>Rent this Van</button>
            </div>
        </div>
    );
}

export default FanVansBar;
