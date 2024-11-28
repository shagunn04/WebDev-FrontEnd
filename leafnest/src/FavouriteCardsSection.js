import React from "react";
import { Context } from "./GlobalContext/Context"
import { useContext } from "react"
import FavouritePlantCard from "./FavouritePlantCard";
import "./css/FavouriteCardsSection.css"
import noFavourite from "./images/No favourite.png"

function FavouriteCardsSection()
{
    const {favPlants}=useContext(Context);
    const favPlantCards = favPlants.map((favPlant) => {
        return <FavouritePlantCard key={favPlant.id} {...favPlant} />;
      });
    console.log(favPlants)
    return(<div className="FavouritePlantSection">
        <div className="FavPlantSection">
           {favPlantCards.length!=0?favPlantCards:
           <img src={noFavourite} alt="favPlantCardsisEmptyPic"
           style={{
           marginLeft:"800px",
           width:"400px",
           marginTop:"140px"
           }}></img>}</div>
           </div>)
}

export default FavouriteCardsSection;