import React from "react";
import "./css/HomeGrid.css";
import PhotoGrid from"./images/Photogrid.png"
function HomeGrid() {
  return(<div className="HomeGrid">
    <div className="Grid">
        <img src={PhotoGrid} alt="PhotoGrid"></img>
    </div>
    <div className="PhotoGird-text">
        <h1> 1M+ stories rejoicing with Nature</h1>
    </div>
  </div>)
}

export default HomeGrid;
