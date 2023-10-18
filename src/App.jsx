import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/SearchBar";
import NoteForm from "./components/NoteForm";
import ActiveNotesList from "./components/ActiveNotesList";
import ArchivedNotesList from "./components/ArchivedNotesList";

const App = () => {
  // Initial Data
  const initialNotes = [
    {
      id: 1,
      title: "Babel",
      body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
      archived: false,
      createdAt: "2022-04-14T04:27:34.572Z",
    },
  ];

  const [notes, setNotes] = useState(initialNotes);
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [newNote, setNewNote] = useState({
    id: +new Date(),
    title: "",
    body: "",
    archived: false,
    createdAt: new Date().toISOString(),
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [titleCharacterCount, setTitleCharacterCount] = useState(0);

  useEffect(() => {
    setTitleCharacterCount(newNote.title.length);
  }, [newNote.title]);

  const addNote = () => {
    if (newNote.title.trim() === "" || newNote.body.trim() === "") {
      alert("Judul dan isi catatan tidak boleh kosong.");
      return;
    }

    setNotes([...notes, newNote]);
    setNewNote({
      id: +new Date(),
      title: "",
      body: "",
      archived: false,
      createdAt: new Date().toISOString(),
    });
  };

  const deleteNote = (id, isArchived) => {
    if (isArchived) {
      const updatedArchivedNotes = archivedNotes.filter(
        (note) => note.id !== id
      );
      setArchivedNotes(updatedArchivedNotes);
    } else {
      const updatedNotes = notes.filter((note) => note.id !== id);
      setNotes(updatedNotes);
    }
  };

  const archiveNote = (id) => {
    const updatedNotes = notes.filter((note) => {
      if (note.id === id) {
        setArchivedNotes([...archivedNotes, note]);
        return false;
      }
      return true;
    });
    setNotes(updatedNotes);
  };

  const unarchiveNote = (id) => {
    const updatedArchivedNotes = archivedNotes.filter((note) => note.id !== id);
    const unarchivedNote = archivedNotes.find((note) => note.id === id);
    setArchivedNotes(updatedArchivedNotes);
    setNotes([...notes, unarchivedNote]);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredArchivedNotes = archivedNotes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTitleCharacterCount(value.length);
    if (value.length <= 50) {
      setNewNote({ ...newNote, title: value });
    }
  };

  return (
    <div className={`container my-5 `}>
      <div className="row">
        <div className="col-md-4">
          <SearchBar
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <NoteForm
            title={newNote.title}
            onTitleChange={handleTitleChange}
            titleCharacterCount={titleCharacterCount}
            body={newNote.body}
            onBodyChange={(e) =>
              setNewNote({ ...newNote, body: e.target.value })
            }
            onAddNote={addNote}
          />
        </div>
        <div className="col-md-8">
          <ActiveNotesList
            notes={filteredNotes}
            onArchive={archiveNote}
            onDelete={deleteNote}
          />
          <ArchivedNotesList
            notes={filteredArchivedNotes}
            onUnarchive={unarchiveNote}
            onDelete={deleteNote}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
