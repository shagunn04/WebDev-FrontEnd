import React from "react"
import image from "./Aboutimage.jpg"
import "./css/About.css"
function About()
{
   return(<div className="About">
     <img src={image} alt="cover-img"></img>
     <h1>Don't squeeze in a sedan when you could relax in a van</h1>
     <div className="About-para">
      <p>Our mission is to enliven your road trip with the perfect travel van rental.Our Vans are recertified before each trip to ensure your travel plans can go off without a hitch.(Hitch costs extra 😊)
      </p>
      <br></br>
      <p>Our team is full of Vanilla enthusiasts who know firsthand the magic of touring the world on 4 wheels.
      </p>
     </div>
     <div className="About-Explore">
        <h1>Your destination is waiting. Your Van is Ready</h1>
        <button className="explore-button">Explore your Vans</button>
     </div>

   </div>)

}
export default About;