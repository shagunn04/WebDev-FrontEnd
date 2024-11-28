import React, { useContext, useState,useEffect } from "react";
import { Context } from "./GlobalContext/Context";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./css/FavouritePlantCard.css";
import {v4 as uuidv4} from "uuid"

function FavouritePlantCard({
  id,
  Title,
  image,
  benefits,
  dateAdded,
  timeAdded,
  sunlight,
  maintenance,
  watering,
  size,
  description,
  price
}) {
    console.log(id)
   
  const { favPlants, handleFavClick,addNote,currentNoteId,setCurrentNoteId, handleCartClick,cart } = useContext(Context);
  const [quickState, setQuickState] = useState(false);
  const [isExpanded,setExpanded]=useState(false);
 
  const [showNoteDialog, setShowNoteDialog] = useState(false);
  const [showSavedMessage, setShowSavedMessage] = useState(false);
 
  const [note, setNote] = useState({
    id: "",
    tag: "",
    text: "",
    noteDate:"",
    noteTime:"",
    Title:Title,
    price:price,
    image:image,
    done:false
  });

  const card_plant = favPlants.find((plant) => plant.id === id);
  const favButtonText = card_plant ? "Remove from favourites" : "Add to favourites";
  

  const cart_plant=cart.find((plant)=>plant.id===id);
  const cartButtonText=cart_plant?"Remove from Cart":"Add to Cart";

  function handleFavClickInCard() {
    const isInFav = favPlants.some((plant) => plant.id === id);
    handleFavClick(isInFav, id);
  }
  

  function handleCartClickInCard()
  {
    const isInCart=cart.some((plant)=>plant.id=id);
    handleCartClick(isInCart,id);
  }

  function handleClick() {
    setExpanded(prevState=>!prevState)
    setQuickState((prevState) => !prevState);
  }

  function handleNoteDialogToggle() {
    setShowNoteDialog((prevState) => !prevState);
  }


  function handleNoteChange(e) {
    const { name, value } = e.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

 
  function handleNoteSubmit(e) {
    e.preventDefault();
    const current = new Date();
    
    if (note.tag && note.text) {
        console.log("currentId",currentNoteId);
        const newNote = {
            ...note,
            id: currentNoteId,
            noteDate: current.toLocaleDateString(),
            noteTime: current.toLocaleTimeString(),
        };

        
        addNote(newNote);

      
        setCurrentNoteId(currentNoteId+1
        );

        
        setNote({
            ...note,
            id: currentNoteId, 
            tag: "",
            text: "",
            noteDate:"",
            noteTime:"",
             done:false
        });

      
        setShowSavedMessage(true);

        setTimeout(() => setShowSavedMessage(false), 2000);
    }
}

 

  return (
    <div className={`FavouritePlantCard ${isExpanded ? "expanded" : ""}`}>
      <div className="Image">
        <img src={image} alt="Plant-Image" />
        <div className="View-Buttons">
          <button onClick={handleClick}>Quick View</button>
          <NavLink to={`/Nest/PlantCard/${id}`}>
            <button>View</button>
          </NavLink>
        </div>
      </div>
      <div className="FavouritePlantCard-header">
        <div className="FavouritePlantCard-header-price-Title">
          <h1>{Title}</h1>
          <h2>₹ {price}</h2>
        </div>
        <div className="FavouritePlantCard-Button">
          <button onClick={handleFavClickInCard} className="FavButton">
            <FaTrash /> {favButtonText}
          </button>
          <button className="CartButton" onClick={handleCartClickInCard}>
        <FaShoppingCart /> {cartButtonText}
          </button>
        </div>
      </div>
      <div className="FavouritePlantCard-Content">
        <h1>Added on {dateAdded} at {timeAdded}</h1>
        <button onClick={handleNoteDialogToggle}>Add a Note</button>
        {showNoteDialog && (
          <div className="NoteDialog">
            <form onSubmit={handleNoteSubmit}>
              <div className="NoteDialog-options">
                <label>
                  <select
                    name="tag"
                    value={note.tag}
                    onChange={handleNoteChange}
                  >
                    <option value="">Select Tag</option>
                    <option value="Watering">Watering</option>
                    <option value="Fertilising">Fertilising</option>
                    <option value="Repotting">Repotting</option>
                    <option value="Pruning">Pruning</option>
                    <option value="Trimming">Trimming</option>
                    <option value="Pest Control">Pest Control</option>
                    <option value="AeratingSoil">AeratingSoil</option>
                    <option value="Munching">Munching</option>
                  </select>
                </label>
                <h3>Write your Note below</h3>
                <textarea
                  name="text"
                  placeholder="Enter your note here"
                  value={note.text}
                  onChange={handleNoteChange}
                />
                <button type="submit">Save Note</button>
              </div>
                 {/* Show the message when a note is saved */}
        {showSavedMessage && (
          <div className="note-saved-message">Note has been saved!</div>
        )}
            </form>
          </div>
        )}

        {quickState && (
          <div className="tags">
            <p>{description}</p>
            <button>{sunlight} sunlight</button>
            <button>{maintenance} maintenance</button>
            <button>{watering} watering</button>
            <button>{benefits}</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default FavouritePlantCard;
