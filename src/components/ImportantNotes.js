import React from "react";
import Note from "./Note";

const ImportantNotes = ({ notes, toogleNote }) => {
  return (
    <div className="importantNotes m-3">
      <h3>All Important Notes</h3>
      <div className="row">
        {notes
          .filter((note) => note.isImportant === true)
          .map((note) => (
            <Note note={note} key={note.id} toogleNote={toogleNote} />
          ))}
      </div>
    </div>
  );
};

export default ImportantNotes;
