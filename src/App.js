import React, { useState } from "react";
import AllNotes from "./components/AllNotes";
import CreateNote from "./components/CreateNote";
import ImportantNotes from "./components/ImportantNotes";

const App = () => {
  const [notes, setNotes] = useState([]);

  const createNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const toogleNote = (id) => {
    const newNotes = notes.slice();
    const index = newNotes.findIndex((note) => note.id === id);
    const noteNeedToChange = notes[index];

    const newNoteWithStatus = {
      ...noteNeedToChange,
      isImportant: !noteNeedToChange.isImportant,
    };

    newNotes[index] = newNoteWithStatus;
    setNotes(newNotes);
  };

  return (
    <div className="container mt-3 p-3">
      <CreateNote createNote={createNote} />
      <hr />
      <ImportantNotes notes={notes} toogleNote={toogleNote} />
      <hr />
      <AllNotes notes={notes} toogleNote={toogleNote} />
    </div>
  );
};

export default App;
