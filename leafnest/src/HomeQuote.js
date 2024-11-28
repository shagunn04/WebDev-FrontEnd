
import React, { useEffect, useState } from "react";
import "./css/HomeQuote.css";
import bgimage1 from "./images/bgimage1.jpg";
import bgimage2 from "./images/bgimage2.jpg";
import bgimage3 from "./images/bgimage3.jpg";


function HomeQuote()
{
    const bgimages = [bgimage1, bgimage2, bgimage3];
    const [bgimage, setBgimage] = useState(bgimages[0]);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setBgimage((prevImage) => {
          const currentIndex = bgimages.indexOf(prevImage);
          const nextIndex = (currentIndex + 1) % bgimages.length;console.log(nextIndex);
          return bgimages[nextIndex];
        });
      }, 50000); 
  
      return () => clearInterval(interval); 
    }, []);
     
    return (
      <div
        className="HomePage"
       
      >
        <div className="HomeQuote"  style={{ backgroundImage: `url(${bgimage})` }}>
          <h1>
            “Look deep into nature, and then you will understand everything better."
          </h1>
          <h1> -Albert Einstein</h1>
        </div>
        
  
      
        
      </div>)
}

export default HomeQuote;
