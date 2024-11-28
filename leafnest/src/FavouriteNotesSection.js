import React, { useContext } from "react";
import { Context } from "./GlobalContext/Context";
import FavouriteNoteCard from "./FavouriteNoteCard";
import "./css/FavNotes.css"
import notesGif from"./images/notes-gif.gif"

function FavouriteNotesSection() {
    const { filteredNotes } = useContext(Context);
    console.log("filtered",filteredNotes)
    const FavouriteNotesList = filteredNotes.map((favNote) => {
      
        return (
            <FavouriteNoteCard
                key={favNote.id} 
                id={favNote.id}
                tag={favNote.tag}
                text={favNote.text}
                noteDate={favNote.noteDate}
                noteTime={favNote.noteTime}
                price={favNote.price}
                Title={favNote.Title}
                image={favNote.image}
                done={favNote.done}
            />
        );
    });

    console.log(FavouriteNotesList);

    return (
        <div className={FavouriteNotesList.length === 0 ? "noNotes" : "FavNotesSection"}>
        {FavouriteNotesList.length === 0 ? (
          <div>
            <h1>Still thinking about adding a new note ??</h1>
            <img src={notesGif} alt="No notes available" className="notesGif" />
          </div>
        ) : (
          FavouriteNotesList
        )}
      </div>
      
    );
}

export default FavouriteNotesSection;
