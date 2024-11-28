import React, { createContext, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Data from "../database/db.js";
import gratitudeBadge from "../images/Gratitudebadge.png"
export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [plantData, setPlantData] = useState([]); 
  const [filteredPlants, setFilteredPlants] = useState([]); 
  const [searchParams, setSearchParams] = useSearchParams();
  const [favPlants, setFavPlants] = useState([]);
  console.log("favplants in context", favPlants);
  const [notes, setnote] = useState([]);
  const [filteredNotes, setFilterNotes] = useState([]);
  const [currentNoteId, setCurrentNoteId] = useState(0);
  const [cart, setCart] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const[Letters,setLetter]=useState([]);
  const [badges,setBadges]=useState([]);
  const[blogs,setBlogs]=useState([]);


  function sortBlogs(type,order)
  {
    let sortedBlogs = [...blogs]; 

    if (type === "Date") {
      
      sortedBlogs.sort((a, b) => {
        const dateA = new Date(a.Date); 
        const dateB = new Date(b.Date); 

        if (order === "LH") {
         
          return dateA - dateB;
        } else {
          return dateB - dateA;
        }
      });
    } else if (type === "Views") {
     
      sortedBlogs.sort((a, b) => {
        const viewsA = a.Views; 
        const viewsB = b.Views; 

        if (order === "LH") {
         
          return viewsA - viewsB;
        } else {
        
          return viewsB - viewsA;
        }
      });
    }

   
    setBlogs(sortedBlogs);
  }

  function addLetter(Letter)
  {
     if(Letter.Rating>=3)
     {
      setLetter((prevLetters)=>[
        ...prevLetters,
        Letter
      ]);
     }
     setBadges((prevBadges)=>[
      ...prevBadges,
      {
        type:"gratitude",
        img : gratitudeBadge
      }
     ]
     )
  }



  console.log("Letters are",Letters)
  console.log(badges)

  
   function addBlog(newblog)
   {
       console.log("yes");
       const updatedblogs=[...blogs,newblog];
       setBlogs(updatedblogs);
   }
console.log("blogs",blogs);


  useEffect(() => {
    setPlantData(Data);
    setFilteredPlants(Data);
  }, []);

  function addtoRecentlyViewed(plantId) {
    const isInRecentlyViewed = recentlyViewed.some((plant) => plant.id === plantId);

    if (!isInRecentlyViewed) {
      const recentlyViewed_Plant = plantData.find((plant) => plant.id === plantId);
      const updatedRecentlyViewed = [recentlyViewed_Plant, ...recentlyViewed];

      if (updatedRecentlyViewed.length > 7) {
        updatedRecentlyViewed.pop();
      }

      setRecentlyViewed(updatedRecentlyViewed);
    }
  }

  console.log("recently", recentlyViewed);

  function handleCartClick(isInCart, plantId) {
    const currentDateTime = new Date();
    const dateAdded = currentDateTime.toLocaleDateString();
    const timeAdded = currentDateTime.toLocaleTimeString();
    console.log("plantId ", plantId);
    console.log("isinacart", isInCart);
    
    if (isInCart) {
      const CartPlant = cart.find((item) => item.id === plantId);
      const updatedCartPlants = cart.filter((plant) => plant.id !== plantId);
      setCart(updatedCartPlants);

      const updatedPlantData = plantData.map((plant) =>
        plant.id === plantId
          ? {
              ...plant,
              qty: plant.qty + CartPlant.qty, // Increment quantity
            }
          : plant
      );
      
      const recentlyViewed_Plant=recentlyViewed.find((plant)=>plant.id==plantId);
      if(recentlyViewed_Plant)
      {
        const updatedRecentData = recentlyViewed.map((plant) =>
          plant.id === plantId
            ? {
                ...plant,
                qty: plant.qty + CartPlant.qty, 
              }
            : plant
        );
        setRecentlyViewed(updatedRecentData);
      }

      setPlantData(updatedPlantData);
      setFilteredPlants(updatedPlantData);
    } else {
      const plantToAdd = plantData.find((plant) => plant.id === plantId);
      const recentlyViewed_Plant=recentlyViewed.find((plant)=>plant.id==plantId);
      const updatedPlantData = plantData.map((plant) =>
        plant.id === plantId
          ? {
              ...plant,
              qty: plant.qty - 1, 
            }
          : plant
      );
      if(recentlyViewed_Plant)
      {
        const updatedRecentData = recentlyViewed.map((plant) =>
          plant.id === plantId
            ? {
                ...plant,
                qty: plant.qty - 1,
              }
            : plant
        );
        setRecentlyViewed(updatedRecentData);
      }
      setPlantData(updatedPlantData);
      setFilteredPlants(updatedPlantData);
      
      const plantWithTimestamp = {
        ...plantToAdd,
        qty: 1,
        dateAdded,
        timeAdded,
      };
      setCart((prevCart) => [...prevCart, plantWithTimestamp]);
    }
  }

  function filterNotes(filter) {
    if (filter === "") {
      setFilterNotes(notes);
    } else {
      const newFilteredNotes = notes.filter((note) => {
        console.log("note.tag==filter", note.tag, filter);
        return note.tag === filter;
      });
      setFilterNotes(newFilteredNotes);
    }
  }

  function MarkFavNoteDone(id, tag) {
    console.log("notes", notes);
    console.log("id", id);
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, done: !note.done } : note
    );
    setnote(updatedNotes);
    const newFilteredNotes = notes.filter((note) => {
      return note.tag === tag;
    });
    setFilterNotes(newFilteredNotes);
  }

  function addNote(newNote) {
    const updatedNotes = [...notes, newNote];
    setnote(updatedNotes);
    
    
  }
  console.log("notes", notes);

  function RemoveFavouriteNote(id) {
    const newNotes = notes.filter((note) => note.id !== id);
    setnote(newNotes);
    setFilterNotes(newNotes);
  }

  function handleFavClick(state, plantId) {
    const currentDateTime = new Date();
    const dateAdded = currentDateTime.toLocaleDateString();
    const timeAdded = currentDateTime.toLocaleTimeString();

    if (state) {
      const updatedFavPlants = favPlants.filter((plant) => plant.id !== plantId);
      setFavPlants(updatedFavPlants);
    } else {
      const plantToAdd = plantData.find((plant) => plant.id === plantId);
      if (plantToAdd) {
        const plantWithTimestamp = {
          ...plantToAdd,
          dateAdded,
          timeAdded,
        };
        setFavPlants([...favPlants, plantWithTimestamp]);
      }
    }
  }

  console.log(favPlants);

  function searchData(value) {
    const l = value.length;
    const searchFilter = Data.filter(
      (plant) =>
        plant.Title.substring(0, l).toLowerCase() === value.toLowerCase() ||
        plant.benefits.substring(0, l).toLowerCase() === value.toLowerCase()
    );

    setFilteredPlants(searchFilter);
  }

  function toggleFilter(category, value) {
    if (category === null) {
      setFilteredPlants(plantData);
      setSearchParams("");
    } else if (category === "price") {
      const [min, max] = value.split("-").map(Number);

      const filtersWithoutPrice = Object.fromEntries(
        [...searchParams].filter(([key]) => key !== "minPrice" && key !== "maxPrice")
      );

      const currentMinPrice = searchParams.get("minPrice");
      const currentMaxPrice = searchParams.get("maxPrice");

      if (currentMinPrice === String(min) && currentMaxPrice === String(max)) {
        setSearchParams(filtersWithoutPrice);
      } else {
        setSearchParams({
          ...filtersWithoutPrice,
          minPrice: min,
          maxPrice: max,
        });
      }
    } else {
      const currentFilters = searchParams.getAll(category);
      const filtersWithoutCategory = Object.fromEntries(
        [...searchParams].filter(([key]) => key !== category)
      );

      if (currentFilters.includes(value)) {
        const updatedFilters = currentFilters.filter((item) => item !== value);
        setSearchParams({ ...filtersWithoutCategory, [category]: updatedFilters });
      } else {
        setSearchParams({ ...filtersWithoutCategory, [category]: [...currentFilters, value] });
      }
    }
  }

  useEffect(() => {
    const filters = Object.fromEntries([...searchParams]);

    const minPrice = parseInt(filters.minPrice) || 0;
    const maxPrice = parseInt(filters.maxPrice) || Infinity;

    const filtered = Data.filter((plant) => {
      const matchesFilters = Object.keys(filters).every((key) => {
        if (key === "minPrice" || key === "maxPrice") return true;

        let filterValues = filters[key];
        if (!Array.isArray(filterValues)) {
          filterValues = [filterValues];
        }

        return filterValues.some((value) => plant[key] === value);
      });

      const matchesPrice = plant.price >= minPrice && plant.price <= maxPrice;

      return matchesFilters && matchesPrice;
    });

    setFilteredPlants(filtered);
  }, [searchParams]);

  return (
    <Context.Provider
      value={{
        filteredPlants,
        toggleFilter,
        searchData,
        plantData,
        handleFavClick,
        favPlants,
        addNote,
        filteredNotes,
        setFilterNotes,
        filterNotes,
        RemoveFavouriteNote,
        MarkFavNoteDone,
        currentNoteId,
        setCurrentNoteId,
        handleCartClick,
        cart,
        setPlantData,
        setCart,
        setFilteredPlants,
        addtoRecentlyViewed,
        recentlyViewed,setRecentlyViewed,addLetter,Letters,
        blogs,addBlog,setBlogs,sortBlogs
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
