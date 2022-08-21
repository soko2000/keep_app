import React, { useState } from "react";

function Note(props) {

function handledlt()
{
  props.delt(props.id);
}

const [done , setdone] = useState(false);
function handleCheck()
{
  setdone(!done);
}


  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p style = {{textDecoration : done && "line-through"}}>{props.content}</p>
      <input value = "done" type = "checkbox" onClick={handleCheck} style = {{margin : "10px auto"}}/>
      <button onClick = {handledlt} >DELETE</button>
    </div>
  );
}

export default Note;
