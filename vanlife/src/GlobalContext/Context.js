import React, { createContext, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState("");
    const [FavVans, setFavVans] = useState([]); 
    const[filteredData,setfilteredData]=useState([]);
    const [ReviewSet, setReviewSet] = useState([]); 
    const [searchParams,setSearchParams]=useSearchParams();
    
    const [RentVans, setRentVans] = useState([
        {
            selectedVan: {
               "id": "1",
               "title": "Voyage Camper",
               "image": "https://vanlifetrader.com/wp-content/uploads/2024/01/DSC04233-Enhanced-NR-new-590x394.jpg",
               "type": "Camper Van",
               "price": 200,
            },
            days: 5, 
            type: '+'
        },
        {
            selectedVan: {
                "id": "7",
                "title": "Freedom Traveller",
                "image": "https://www.autotrader.com/wp-content/uploads/2022/03/1989-dodge-b250.jpg",
                "type": "Conversion Van",
                "price": 220
             },
             days: 3, 
             type: '+'
        }
    ]);

    useEffect(() => {
        setSearchParams({ type: filter});
          
                const result = filter
                    ? data.filter((van) => van.type === filter)
                    : data;

                    setfilteredData(result);
            
      
     console.log(filteredData)
        
    }, [filter]); 

    function addReview(review) {
        setReviewSet((prevSet) => [...prevSet, review]);
      
    }
    console.log("Updated ReviewSet:", ReviewSet); 
    function addFavourite(Favbuttonstate, id) {
        setFavVans((prevVans) => {
            const selectedVan = data.find((van) => van.id === id);

            if (Favbuttonstate) {
                return selectedVan && !prevVans.some((van) => van.id === id)
                    ? [...prevVans, selectedVan]
                    : prevVans;
            } else {
                return prevVans.filter((van) => van.id !== id);
            }
        });
    }

    function addRentVans(id, days) {
        setRentVans((prevVans) => {
            const selectedVan = data.find((van) => van.id === id);
            const existingVan = prevVans.find((van) => van.selectedVan.id === id);

            if (!existingVan || existingVan.days !== days) {
                return [...prevVans, { selectedVan, days, type: '-' }];
            }

            return prevVans;
        });
    }

    return (
        <Context.Provider value={{ data, setFilter, setData, FavVans, addFavourite, RentVans, addRentVans, addReview, ReviewSet,searchParams,setSearchParams,filteredData }}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
