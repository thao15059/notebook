import React from "react";
import Note from "./Note";

const AllNotes = ({ notes, toogleNote }) => {
  console.log(notes);
  return (
    <div className="m-3">
      <h3>All Notes</h3>
      <div className="row">
        {notes.map((note) => (
          <Note key={note.id} note={note} toogleNote={toogleNote} />
        ))}
      </div>
    </div>
  );
};

export default AllNotes;
