import React, { useContext, useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Context } from "./GlobalContext/Context.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faTint, faTools, faShoppingBasket, faHeart, faArrowLeft, faArrowRight, faV } from "@fortawesome/free-solid-svg-icons";
import "./css/Card.css";
import { Link } from "react-router-dom";
import Card from "./Card.js";
import "./css/NestPlantCard.css"
function NestPlantCard() {
  const { filteredPlants, plantData,handleFavClick,favPlants,handleCartClick,cart} = useContext(Context);
  const { id } = useParams();
  const [relatedProducts, setRelatedProducts] = useState([]);
  const relatedProductsRef = useRef(null);
  const [cartAdded, setCartAdded] = useState(false);
  const [favAdded, setFavAdded] = useState(false);
  



  const card_plant=favPlants.some((plant)=>plant.id==parseInt(id));
  const FavbuttonText=card_plant ? "Remove from favourites" : "Add to favourites";


  const cart_plant=cart.find((plant)=>plant.id==parseInt(id));
  const cartButtonText=cart_plant?"Remove from Cart":"Add to Cart";


  function handleCartClickInCard() {
    const isInCart = cart.some((plant) => plant.id === parseInt(id));
    if (!isInCart) {
      setCartAdded(true);  // Trigger animation
      setTimeout(() => setCartAdded(false), 700); // Reset after animation duration
    }
    handleCartClick(isInCart, parseInt(id));
  }
  
  function handleFavClickinNestPlantCard() {
    const isInFav = favPlants.some((plant) => plant.id === parseInt(id));
    if (!isInFav) {
      setFavAdded(true);  // Trigger animation
      setTimeout(() => setFavAdded(false), 700); // Reset after animation duration
    }
    handleFavClick(isInFav, parseInt(id));
  }
  
  const [plant, setPlant] = useState({
    Title: "",
    image: "",
    price: 0,
    sunlight: "",
    watering: "",
    size: "",
    maintenance: "",
    benefits: "",
    description: "",
    flowering: "",
    info: "",
    tips: "",
    qty: 0,
  });

  useEffect(() => {
    const herb = filteredPlants.find((plant) => plant.id == parseInt(id));
    if (herb) {
      setPlant({
        Title: herb.Title,
        image: herb.image,
        price: herb.price,
        sunlight: herb.sunlight,
        watering: herb.watering,
        size: herb.size,
        maintenance: herb.maintenance,
        benefits: herb.benefits,
        description: herb.description,
        flowering: herb.flowering,
        info: herb.info,
        tips: herb.tips,
        qty: herb.qty,
      });
      console.log(herb.id)
      const relatedProductsList = plantData.filter((plant) => {
        console.log(plant.id)
        return (

          plant.id !== herb.id &&
          (plant.maintenance === herb.maintenance ||
            plant.sunlight === herb.sunlight &&
            plant.watering === herb.watering ||
          Math.abs(plant.price - herb.price) < 50 &&
          plant.flowering === herb.flowering ||
          plant.benefits === herb.benefits)
        );
      });

      setRelatedProducts(relatedProductsList);
    }
  }, [filteredPlants, plantData, id]);

  const RelatedProducts = relatedProducts.map((plant) => {
    return (
      <Card
        key={plant.id}
        id={plant.id}
        img={plant.image}
        Title={plant.Title}
        Price={plant.price}
        Benefit={plant.benefits}
        description={plant.description}
        qty={plant.qty}
        maintenance={plant.maintenance}
        sunlight={plant.sunlight}
        watering={plant.watering}
      />
    );
  });

  // Scroll functions
  const scrollLeft = () => {
    if (relatedProductsRef.current) {
      relatedProductsRef.current.scrollBy({ left: -240, behavior: "smooth" }); // 
    }
  };

  const scrollRight = () => {
    if (relatedProductsRef.current) {
      relatedProductsRef.current.scrollBy({ left: 240, behavior: "smooth" }); // Scroll right by 4 card widths
    }
    console.log("hit")
  };

  const caringtips = plant.tips.split("//").map(item => {
    const keyValue = item.split(':');
    if (keyValue.length === 2) {
      return { [keyValue[0].trim()]: keyValue[1].trim() };
    } else {
      return null;
    }
  }).filter(Boolean);
  console.log(relatedProducts)
  return (
    <div className="Nest-Plant">
      <div className="Back-Link">
        <Link to="/Nest">
          ←Back to Nest
        </Link>
      </div>
      <div className="Nest-Plant-Card">
        <div className="Nest-Plant-Image">
          <img src={plant.image} alt="plant-image" />
        </div>
        <div className="Nest-Plant-Header">
          <h1>{plant.Title}</h1>
          <div className="Nest-Plant-Buttons">
            <button className="sunlight-button">
              <FontAwesomeIcon icon={faSun} />
              {plant.sunlight} Sunlight
            </button>
            <button className="watering-button">
              <FontAwesomeIcon icon={faTint} />
              {plant.watering} Watering
            </button>
            <button className="maintenance-button">
              <FontAwesomeIcon icon={faTools} />
              {plant.maintenance} Maintenance
            </button>
          </div>

        </div>
        <div className="Nest-Plant-body">
         <h1 className="price"> ₹ {plant.price}</h1>
          <p>{plant.info}</p>
          {plant.qty <= 10 && <h2 className="qty">Only {plant.qty} left in stock</h2>}
          <div className="Nest-Plant-Action">
          <button 
  className={`cart-button ${cartAdded ? "button-added" : ""}`} 
  onClick={handleCartClickInCard}
>
  <FontAwesomeIcon icon={faShoppingBasket} />
  {cartButtonText}
</button>

<button 
  className={`favourite-button ${favAdded ? "button-added" : ""}`} 
  onClick={handleFavClickinNestPlantCard}
>
  <FontAwesomeIcon icon={faHeart} />
  {FavbuttonText}
</button>

          </div>
          <div className="Caring-Tips">
            <h1>Tips to Care</h1>
            <ul>
              {caringtips.map((tip, index) => {
                const [key, value] = Object.entries(tip)[0];
                return (
                  <li key={index}>
                    <strong>{key}:</strong> {value}
                  </li>
                );
              })}
            </ul>
          </div>

          <h1 className="Related-Products-Header">Related Products</h1>
          <div className="Related-Products" ref={relatedProductsRef}>
           
            {RelatedProducts}
          </div>
          
          <div className="scroll-buttons">
            <button onClick={scrollLeft}>
              <FontAwesomeIcon icon={faArrowLeft} />
              
            </button>
            <button onClick={scrollRight}>
              <FontAwesomeIcon icon={faArrowRight} />
              
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NestPlantCard;
