import React from "react";

const Note = ({ note, toogleNote }) => {
  return (
    <div className="card m-3">
      <div className="card-header">{note.date}</div>
      <div className="card-body">{note.note}</div>
      <button className="btn" onClick={() => toogleNote(note.id)}>
        {note.isImportant ? "Remove from Important" : "Add to important"}
      </button>
    </div>
  );
};

export default Note;
