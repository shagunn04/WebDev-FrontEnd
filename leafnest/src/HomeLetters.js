import React, { useContext, useRef } from "react";
import { Context } from "./GlobalContext/Context";
import HomeLetterCard from "./HomeLetterCard";
import "./css/HomeLetters.css";

function HomeLetters() {
  const { Letters } = useContext(Context);

  const letterListRef = useRef(null); // Create a ref for the list container

  // Scroll left function
  const scrollLeft = () => {
    if (letterListRef.current) {
      letterListRef.current.scrollBy({ left: -300, behavior: 'smooth' }); // Scroll left by 300px
    }
  };

  // Scroll right function
  const scrollRight = () => {
    if (letterListRef.current) {
      letterListRef.current.scrollBy({ left: 300, behavior: 'smooth' }); // Scroll right by 300px
    }
  };

  const letterList = Letters.map((letter) => {
    return (
        letter.public&&
      <HomeLetterCard
        key={letter.id} // Ensure each element has a unique key
        title={letter.Title}
        experience={letter.Experience}
        rating={letter.Rating}
      />
    );
  });
  const emptyClass = Letters.length === 0 ? "empty" : "";
  return (
    <div className="HomeLetters">
      <div className="HomeLetters-Header">
        <h1>Your Trust</h1>
      </div>
      <div className={`HomeLetters-List ${emptyClass}`} ref={letterListRef}>
      {letterList}
      </div>
      <div className="scroll-buttons">
        <button onClick={scrollLeft}>←</button> {/* Left scroll button */}
        <button onClick={scrollRight}>→</button> {/* Right scroll button */}
      </div>
    </div>
  );
}

export default HomeLetters;
