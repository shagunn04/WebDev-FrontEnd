import React from "react";
import './css/Vans.css';
import { Link } from "react-router-dom";

function Vans() {
    return (
        <div className="Vans">
            <div className="Vans-Opening">
                <h1>You got the travel plans, we got the travel vans</h1>
                <p>
                    Add adventure to your life by joining the <strong>#VANLIFE</strong> movement. Rent the perfect van to make your perfect road trip.
                </p>
            </div>
            <Link to="/Vans/ExploreVans">
                <button>Find your Van</button>
            </Link>
        </div>
    ); 
}

export default Vans;
