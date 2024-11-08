import React, { useEffect,useContext } from "react";
import Card from "./Card";
import "./css/ExploreVans.css"
import { Context } from "./GlobalContext/Context";
function ExploreVans() {
    const { data, setFilter,setData } = useContext(Context); 

   
   
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/vans");
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const Cards = data.map((van) => (
        <Card key={van.id} id={van.id} image={van.image} type={van.type} price={van.price} title={van.title} />
    ));
    console.log(Cards)

    return (
        <div className="Explore-Vans">
            <div className="Filter-Buttons">
                <button onClick={() => setFilter("Camper Van")}>Camper Van</button>
                <button onClick={() => setFilter("Luxury Van")}>Luxury Van</button>
                <button onClick={() => setFilter("Minivan")}>Mini Van</button>
                <button onClick={() => setFilter("Off-Road Van")}>Off-Road Van</button>
                <button onClick={() => setFilter("Family Van")}>Family Van</button>
                <button onClick={() => setFilter("Compact Van")}>Compact Van</button>
                <button onClick={() => setFilter("Conversion Van")}>Conversion Van</button>
                <button onClick={() => setFilter("Retro Van")}>Retro Van</button>
                <div className="Clear">
                <button onClick={() => setFilter("")}>Clear all Filters</button>
                </div>
            </div>
            <div className="cards-container">{Cards}</div>
        </div>
    );
}

export default ExploreVans;
