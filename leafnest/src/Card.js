import React, { useState ,useContext} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faTint, faTools, faShoppingBasket, faHeart } from "@fortawesome/free-solid-svg-icons";
import "./css/Card.css";
import { NavLink } from "react-router-dom";
import { Context } from "./GlobalContext/Context";
function Card({ id,img, Title, Benefit, Price, description, qty, maintenance, watering, sunlight,addtoCart }) {
  const [quickState, setQuickState] = useState(false);
  const {handleFavClick,favPlants,cart,handleCartClick,addtoRecentlyViewed} = useContext(Context);
  function handleClick() {
    setQuickState((prevState) => !prevState);
  }

  

  const card_plant=favPlants.find((plant)=>plant.id==id);
 
  const favButtonText = card_plant ? "Remove from favourites" : "Add to favourites";
  

  const cart_plant=cart.find((plant)=>plant.id===id);
  const cartButtonText=cart_plant?"Remove from Cart":"Add to Cart";

  function handleCartClickInCard()
  {
    const isInCart=cart.some((plant)=>plant.id==id);
    handleCartClick(isInCart,id);
  }

  function handleFavClickInCard() {
    const isInFav = favPlants.some((plant) => plant.id == id);
    console.log("isinFav",isInFav);
    handleFavClick(isInFav, id);
  }
  
  return (
    <div className="Card">
      <div className="Card-image">
        <img src={img} alt="Plant Image" />
      </div>
      <div className="Card-info">
        <div className="Card-header">
          <h1>{Title}</h1>
          <div className="Card-header-buttons">
          <div className="Quick-View">
            <button onClick={handleClick}>Quick View</button>
          </div>
          <div className="View">
          <NavLink to={`/Nest/PlantCard/${id}`}>
          <button onClick={()=>addtoRecentlyViewed(id)}>View</button>
          </NavLink>
          </div>
          </div>
        </div>
        <div className="Card-text">
          <h2>₹ {Price}</h2>
          <button>{Benefit}</button>
        </div>

        {quickState && (
          <div className="QuickView-info">
            <p>{description}</p>
            <div className="QuickView-Buttons">
            <button className="sunlight-button">
              <FontAwesomeIcon icon={faSun} />
              {sunlight} Sunlight
            </button>
            <button className="watering-button">
              <FontAwesomeIcon icon={faTint} />
              {watering} Watering
            </button>
            <button className="maintenance-button">
              <FontAwesomeIcon icon={faTools} />
              {maintenance} Maintenance
            </button>
            </div>
            {qty <= 10 && qty>0 && <h2 style={{color: "red",
            fontSize:"2rem",
            fontFamily:"Georgia"
                
            }}>{qty} left in stock</h2>}

            
           
            {qty==0 ?<h2 style={{color: "red",
            fontSize:"2rem",
            fontFamily:"Georgia"
                
            }}>Out of stock</h2>:<button className="cart-button" onClick={handleCartClickInCard}>
              <FontAwesomeIcon icon={faShoppingBasket} />
             {cartButtonText}
            </button>}
            <button className="favourite-button" onClick={handleFavClickInCard}>
              <FontAwesomeIcon icon={faHeart} />
              {favButtonText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
