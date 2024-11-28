import React from "react";
import "./css/Home.css";
import "./css/HomeGrid.css"; 
import HomeQuote from "./HomeQuote"; 
import HomeGrid from "./HomeGrid";
import HomeBlog from "./HomeBlog";
import HomeLetters from "./HomeLetters";
import HomeSticker from "./HomeSticker";
import "./css/Home.css"
function Home() {
  return (
    <div className="HomePage">
      <HomeQuote />
      <HomeGrid/>
      <HomeBlog/>
      <HomeLetters/>
      <HomeSticker/>
    </div>
  );
}

export default Home;
