import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, notesState] = useState([]);

  function addNote(note) {
    notesState((prev) => {
      return [...prev, note];
    });
  }

  function delte(id)
  {
    notesState((prev) =>{
      return prev.filter((item,index) => {
        return id!==index;
      })
    });
  }

  return (
    <div>
      <Header />
      <CreateArea add={addNote} />
      {notes.map((item,index) => {
        return <Note delt = {delte} key={index} id ={index} title={item.title} content={item.content} />;
      })}

      <Footer />
    </div>
  );
}

export default App;
