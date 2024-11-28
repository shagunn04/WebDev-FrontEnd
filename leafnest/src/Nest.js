import React, { useContext } from "react";
import { Context } from "./GlobalContext/Context.js";
import Card from "./Card.js";
import "./css/Nest.css";
import FilterButton from "./FilterButtons.js";
import '@fortawesome/fontawesome-free/css/all.css';


function Nest() {
  const { filteredPlants,toggleFilter,searchData,handleFavClick } = useContext(Context);
  
  const PlantCard = filteredPlants?.map((plant) => (
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
      addtoCart={plant.addtoCart}
    />
  ));

  
  const priceButtons = ["0-250", "250-500", "500-750", "750-1000"].map((price) => (
    <FilterButton key={price} category="price" value={price} />
  ));
  

  const sunlightButtons = ["Partial", "Full", "Moderate"].map((sunlight) => (
    <FilterButton key={sunlight} category="sunlight" value={sunlight} />
  ));

  const wateringNeedsButtons = ["Low", "Moderate", "High"].map((need) => (
    <FilterButton key={need} category="watering" value={need} />
  ));

  const sizeButtons = ["Small", "Medium", "Big"].map((size) => (
    <FilterButton key={size} category="size" value={size} />
  ));

  const maintenanceButtons = ["low", "medium", "high"].map((maintenance) => (
    <FilterButton key={maintenance} category="maintenance" value={maintenance} />
  ));

  const floweringButtons = ["Flowering", "Non-Flowering"].map((flowering) => (
    <FilterButton key={flowering} category="flowering" value={flowering} />
  ));

  return (<div>
<div className="searchFilter">
  <div className="search-wrapper">
    <input
      type="text"
      placeholder="Title/Benefits"
      onChange={(e) => searchData(e.target.value)}
      className="search-input"
    />
    <i className="fas fa-search search-icon"></i>
  </div>
</div>


    <div className="Nest-container">
      <div className="Nest-filter-bar">
        <h1>Filter</h1>

        <div className="Filter">
          <h2>Price</h2>
          <div className="Filter-Buttons">{priceButtons}</div>
        </div>

        <div className="Filter">
          <h2>Sunlight</h2>
          <div className="Filter-Buttons">{sunlightButtons}</div>
        </div>

        <div className="Filter">
          <h2>Watering Needs</h2>
          <div className="Filter-Buttons">{wateringNeedsButtons}</div>
        </div>

        <div className="Filter">
          <h2>Size</h2>
          <div className="Filter-Buttons">{sizeButtons}</div>
        </div>

        <div className="Filter">
          <h2>Maintenance</h2>
          <div className="Filter-Buttons">{maintenanceButtons}</div>
        </div>

        <div className="Filter">
          <h2>Type</h2>
          <div className="Filter-Buttons">{floweringButtons}</div>
        </div>


        <button className="Clear-filter" onClick={()=>toggleFilter(null,"")}>Clear All Filter</button>
      </div>

      {/* Cards Section */}
      <div className="Card-List">{PlantCard}</div>
      </div>
    </div>
  );
}

export default Nest;
