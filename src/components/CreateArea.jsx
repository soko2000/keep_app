import React, { useState } from "react";

function CreateArea(props) {
  const [note, noteState] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    noteState((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    props.add(note);
    noteState({ title: "", content: "" });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
