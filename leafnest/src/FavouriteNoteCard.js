import React,{useContext} from "react";
import { FaTrashAlt } from "react-icons/fa"; // Trash icon
import { FaCheck } from "react-icons/fa"; // Check icon
import "./css/FavouriteNoteCard.css";
import { Context } from "./GlobalContext/Context";
function FavouriteNoteCard({ id, tag, text, noteDate, noteTime, price, Title, image,done}) {
    console.log("done",done)
  const {RemoveFavouriteNote,MarkFavNoteDone}=useContext(Context);
  const applyStyle = () => {
    if (tag === "Watering") {
      return { backgroundColor: "#0d2ae8"}; 
    } else if (tag === "Fertilising") {
      return { backgroundColor: "#23a9ab"};
    } else if(tag=="Repotting"){
      return { backgroundColor: "#32cd32" }; 
    }
    else if(tag=="Pruning"){
        return { backgroundColor: "#0f918f" }; 
      }
      else if(tag=="Trimming"){
        return { backgroundColor: "#c53f53" }; 
      }
      else if(tag=="Pest Control"){
        return { backgroundColor: "#ff1493" }; 
      }
      else if(tag=="AeratingSoil"){
        return { backgroundColor: "#1e90ff" }; 
      }
      else{
        return { backgroundColor: "#ff6347" }; 
      }


      
  };
  
  const cardClass = done ? "dimmed FavouriteNoteCard" : "FavouriteNoteCard";


  return (
    <div className={cardClass}>
      <div className="FavouriteNoteCard-left">
        <img src={image} alt="note-plant-image" />
        <h1>{Title}</h1>
        <h2>₹ {price}</h2>
      </div>
      <div className="FavouriteNoteCard-right">
       
        <button className="tag-button" style={applyStyle()}>{tag}</button>

       
        <p>{text}</p>

        
        <h1>Added this on {noteDate} at {noteTime}</h1>

        
        <div className="button-container">
          <button onClick={() => RemoveFavouriteNote(id)} className="trash-btn">
            <FaTrashAlt /> Trash
          </button>

          <button onClick={() => MarkFavNoteDone(id,tag)} className="done-btn">
            <FaCheck /> {done?"Mark as UnDone":"Mark as done"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default FavouriteNoteCard;
