import React, { useEffect, useContext } from "react";
import Card from "./Card";
import "./css/ExploreVans.css";
import { Context } from "./GlobalContext/Context";

function ExploreVans() {
    const { data, setData, filteredData, toggleFilter, searchParams } = useContext(Context);
    const typeFilters = searchParams.getAll("type"); 
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
    }, [setData]);
    console.log(typeFilters)
    const usedData = typeFilters.length === 0? data : filteredData;
    const Cards = usedData.map((van) => (
        <Card key={van.id} id={van.id} image={van.image} type={van.type} price={van.price} title={van.title} />
    ));

    return (
        <div className="Explore-Vans">
            <div className="Filter-Buttons">
                {["Camper Van", "Luxury Van", "Minivan", "Off-Road Van", "Family Van", "Compact Van", "Conversion Van", "Retro Van"].map((typeofVan) => (
                    <button
                        key={typeofVan}
                        className={typeFilters.includes(typeofVan) ? "active" : ""}
                        onClick={() => toggleFilter(typeofVan)}
                    >
                        {typeofVan}
                    </button>
                ))}
                <div className="Clear">
                    <button onClick={() => toggleFilter("")}>Clear all Filters</button>
                </div>
            </div>
            <div className="cards-container">{Cards}</div>
        </div>
    );
}

export default ExploreVans;
