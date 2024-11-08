import React, { useContext, useState } from "react";
import { Context } from "./GlobalContext/Context";
import { useParams } from "react-router-dom";
import "./css/RentVan.css";
import { Link } from "react-router-dom";

function RentVan() {
    const { addRentVans } = useContext(Context);
    const [days, setDays] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false); 
    
    const { id } = useParams();

    const handleSubmit = (event) => {
        event.preventDefault();

        
        if (days > 0) {
           
            addRentVans(id, days);
            setIsSubmitted(true);
            
        } else {
           
            setIsSubmitted(false); 
        }
    };

    return (
        <form onSubmit={handleSubmit}>
          <Link to="/Host/FavVans" style={{ textDecoration: 'none' }}>
  <h1 style={{
    marginLeft: 20,    
    fontSize: 25, 
    fontFamily: 'serif', 
    color: 'black'
  }}> ← Back to FavVans</h1>
</Link>
            <div className="RentVan-page">
                
                
                {isSubmitted && (
                    <div className="success-message">
                        Van Added!
                    </div>
                )}

                <h1>Buckle up your Van</h1>
                
                
                <label htmlFor="DaysRented"></label>
                <input
                    id="DaysRented"
                    name="RentDays"
                    placeholder="Enter the no. of days"
                    value={days}
                    onChange={(e) => setDays(e.target.value)}
                />

               
                <button type="submit" disabled={days <= 0}> 
                    I'm ready for VanLife
                </button>

               
              
                
            </div>
        </form>
    );
}

export default RentVan;
