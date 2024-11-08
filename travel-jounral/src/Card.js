import React from "react";
import "./Style.css";
import image from "./Mount-Fuji.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Card(props) {
    return (
        <div className="card">
            <div className="image-section">
                <img src={props.image} alt={props.Title} />
            </div>
            <div className="content-section">
                <h1 className="title">{props.Title}</h1>
                <div className="location">
                    <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
                    <h3 className="country">{props.Country}</h3>
                    <a href={props.Link} className="map-link">View on Google Maps</a>
                </div>
                <div className="duration">
                    <h4>{props.Start} - {props.End}</h4>
                </div>
                <p className="description">
                {props.Description}
                </p>
            </div>
        </div>
    );
}

export default Card;
