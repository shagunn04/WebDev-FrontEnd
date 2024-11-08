import React,{useEffect} from "react"
import Sidebar from "./Sidebar"
import Editor from "./Editor"
import "./style.css"
import Split from "react-split"
import {nanoid} from "nanoid"



function App() {
  const [notes, setNotes] = React.useState(JSON.parse(localStorage.getItem("notes")) || [])
  const [currentNoteId, setCurrentNoteId] = React.useState(
      (notes[0] && notes[0].id) || ""
  )
  
  useEffect(()=>{
      localStorage.setItem("notes",JSON.stringify(notes));
  },[notes]);
  
  useEffect(()=>{
      const storedNotes=JSON.parse(localStorage.getItem("notes"));
      if(storedNotes && storedNotes.length>0)
      {
          setNotes(storedNotes);
      }
  },[])
  function createNewNote() {
      const newNote = {
          id: nanoid(),
          body: "Type here"
      }
      setNotes(prevNotes => [newNote, ...prevNotes])
      setCurrentNoteId(newNote.id)
  }
  
  function updateNote(text) {
    setNotes(oldNotes =>   {
    const updatedNotes= oldNotes.map(oldNote => 
               oldNote.id === currentNoteId
              ? { ...oldNote, body : text }
              : oldNote
      );
       const updatedNote=updatedNotes.find(note=>note.id===currentNoteId);
      const otherNotes=updatedNotes.filter(note=>note.id!==currentNoteId);
      
      return [updatedNote,...otherNotes];
      
      });
      
     
  }
  function deleteNote()
  {
      setNotes(oldNotes => {
          if(oldNotes.length==1)
          {
              return [];
          }
          else{
              const newNotes=oldNotes.filter((note)=>note.id!==currentNoteId);
              return [...newNotes];
          }
      
      });
  
  }
  function findCurrentNote() {
      return notes.find(note => {
          return note.id === currentNoteId
      }) || notes[0]
  }
  
  return (
      <main>
      {
          notes.length > 0 
          ?
          <Split 
              sizes={[30, 70]} 
              direction="horizontal" 
              className="split"
          >
              <Sidebar
                  notes={notes}
                  currentNote={findCurrentNote()}
                  setCurrentNoteId={setCurrentNoteId}
                  newNote={createNewNote}
                  deleteNote={deleteNote}
              />
              {
                  currentNoteId && 
                  notes.length > 0 &&
                  <Editor 
                      currentNote={findCurrentNote()} 
                      updateNote={updateNote} 
                  />
              }
          </Split>
          :
          <div className="no-notes">
              <h1>You have no notes</h1>
              <button 
                  className="first-note" 
                  onClick={createNewNote}
              >
                  Create one now
              </button>
          </div>
          
      }
      </main>
  )
}

export default App;
