import React, { useContext } from "react";
import { Context } from "./GlobalContext/Context";
import FanVansBar from "./FavVansBar";
import "./css/FavVans.css"
function FavVans() {
    const { FavVans } = useContext(Context);

    const FavVansCard = FavVans.map((Van) => (
        <FanVansBar key={Van.id} id={Van.id} title={Van.title} price={Van.price} image={Van.image} />
    ));

    return (
        <div className="FavVans">
            <h1>Your Favourites</h1>
            <div className="FavVans-List">
                {FavVansCard}
            </div>
        </div>
    );
}

export default FavVans;
