import React, { useContext, useState } from "react";
import { Context } from "./GlobalContext/Context";
import "./css/CartCard.css"; // Link to the CSS file
import { FaTrash, FaHeart, FaHeartBroken } from 'react-icons/fa';
import { isRouteErrorResponse } from "react-router-dom";


function CartCard({ plantId, image, Title, price, qty }) {
  const { plantData, setPlantData, cart, setCart, handleFavClick, favPlants,filteredPlants,setFilteredPlants,recentlyViewed ,setRecentlyViewed} =
    useContext(Context);
  const [plantQty, setPlantQty] = useState(qty);

  function handleIncrementQtyClick() {
    const plant = plantData.find((plant) => plant.id === plantId);
    if (plant && plant.qty > 0) {
      setPlantQty(plantQty + 1);
      const updatedPlantData = plantData.map((plant) =>
        plant.id === plantId ? { ...plant, qty: plant.qty - 1 } : plant
      );
      setPlantData(updatedPlantData);setFilteredPlants(updatedPlantData);
      const updatedCart = cart.map((item) =>
        item.id === plantId ? { ...item, qty: item.qty + 1 } : item
      );
      setCart(updatedCart);
      const isInRecentlyViewed=recentlyViewed.some((plant)=>plant.id==plantId);
      if(isInRecentlyViewed)
      {
        const updatedPlantData = recentlyViewed.map((plant) =>
          plant.id === plantId ? { ...plant, qty: plant.qty - 1 } : plant
        );
        setRecentlyViewed(updatedPlantData);
      }
    } else {
      alert("Stock not available!");
    }
  }

  function handleDecrementQtyClick() {
    if (plantQty > 1) {
      setPlantQty(plantQty - 1);
      const updatedPlantData = plantData.map((plant) =>
        plant.id === plantId ? { ...plant, qty: plant.qty + 1 } : plant
      );
      setPlantData(updatedPlantData);
      setFilteredPlants(updatedPlantData);
      const updatedCart = cart.map((item) =>
        item.id === plantId ? { ...item, qty: item.qty - 1 } : item
      );
      setCart(updatedCart);
      const isInRecentlyViewed=recentlyViewed.some((plant)=>plant.id==plantId);

      if(isInRecentlyViewed)
      {
        const updatedPlantData = recentlyViewed.map((plant) =>
          plant.id === plantId ? { ...plant, qty: plant.qty + 1 } : plant
        );
        setRecentlyViewed(updatedPlantData);
      }
    } else {
      alert("Quantity cannot be less than 1!");
    }
  }

  function handleDeleteClick() {
   
    const CartPlant = cart.find((item) => item.id === plantId);
  
   
    if (CartPlant) {
      
      const updatedPlantData = plantData.map((plant) =>
        plant.id === plantId ? { ...plant, qty: plant.qty + CartPlant.qty } : plant
      );
  
      
      const updatedCart = cart.filter((plant) => plant.id !== plantId);
  
      
      setCart(updatedCart);
      setPlantData(updatedPlantData);
      setFilteredPlants(updatedPlantData); 
    }
  
    const isInRecentlyViewed=recentlyViewed.some((plant)=>plant.id==plantId);
    if(isInRecentlyViewed)
    {
      const updatedRecentData = recentlyViewed.map((plant) =>
        plant.id === plantId ? { ...plant, qty: plant.qty + CartPlant.qty } : plant
      );
      setRecentlyViewed(updatedRecentData);
    }
    
  }
  

  const isInFav = favPlants.some((plant) => plant.id === plantId);
  const favbuttonText = isInFav ? "Remove from Favourites" : "Add to Favourites";

  function handleAddToFavoritesClick() {
    handleFavClick(isInFav, plantId);
  }

  return (
    <div className="CartCard">
      <div className="CartCard-img">
        <img src={image} alt="CartCard-img" />
      </div>
      <div className="CartCard-info">
        <h1>{Title}</h1>
        <h2>₹{price}</h2>
      </div>
      <div className="CartCard-qty">
        <button className="qty-button" onClick={handleDecrementQtyClick}>-</button>
        <h1>{plantQty}</h1>
        <button className="qty-button" onClick={handleIncrementQtyClick}>+</button>
      </div>
      <div className="CartCard-action">
        <button onClick={handleDeleteClick}><FaTrash/> Remove from Cart</button>
        <button onClick={handleAddToFavoritesClick}><FaHeart/>{favbuttonText}</button>
      </div>
    </div>
  );
}

export default CartCard;
