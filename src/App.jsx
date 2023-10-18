import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ArchiveButton from "./components/ArchiveButton";
import UnarchiveButton from "./components/UnarchiveButton";
import DeleteButton from "./components/DeleteButton";

const getRandomColor = (isArchived) => {
  const colors = isArchived
    ? ["bg-warning", "bg-info", "bg-secondary", "bg-light"]
    : ["bg-primary", "bg-success", "bg-danger", "bg-dark"];
  return colors[Math.floor(Math.random() * colors.length)];
};

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
          <h1 className="mb-3">Cari Catatan</h1>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Cari catatan"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <h1 className="mb-3">Tambah Catatan</h1>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Judul"
            value={newNote.title}
            onChange={handleTitleChange}
            maxLength="50"
          />
          <small className="text-muted">
            {titleCharacterCount} / 50 karakter
          </small>
          <textarea
            className="form-control mb-2"
            placeholder="Isi Catatan"
            value={newNote.body}
            onChange={(e) => setNewNote({ ...newNote, body: e.target.value })}
            style={{ height: "165px" }}
          />
          <button className="btn btn-primary" onClick={addNote}>
            Tambah
          </button>
        </div>
        <div className="col-md-8">
          <h1 className="mb-3">Daftar Catatan Aktif</h1>
          {filteredNotes.length > 0 ? (
            <div className="row row-cols-1 row-cols-md-3 g-2">
              {filteredNotes.map((note) => (
                <div key={note.id} className="col mb-3">
                  <div className={`card w-100 h-100 ${getRandomColor()}`}>
                    <div className="card-body">
                      <h2 className="card-title">{note.title}</h2>
                      <p className="card-text">{note.body}</p>
                      <div className="d-flex justify-content-between">
                        {note.archived ? (
                          <UnarchiveButton
                            onClick={() => unarchiveNote(note.id)}
                          />
                        ) : (
                          <ArchiveButton onClick={() => archiveNote(note.id)} />
                        )}
                        <DeleteButton
                          onClick={() => deleteNote(note.id, note.archived)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>Tidak ada catatan aktif.</p>
          )}
          <h1 className="mb-3">Daftar Arsip Catatan</h1>
          {filteredArchivedNotes.length > 0 ? (
            <div className="row row-cols-1 row-cols-md-3 g-2">
              {filteredArchivedNotes.map((note) => (
                <div key={note.id} className="col mb-3">
                  <div className={`card w-100 h-100 ${getRandomColor()}`}>
                    <div className="card-body">
                      <h2 className="card-title">{note.title}</h2>
                      <p className="card-text">{note.body}</p>
                      <div className="d-flex justify-content-between">
                        <UnarchiveButton
                          onClick={() => unarchiveNote(note.id)}
                        />
                        <DeleteButton
                          onClick={() => deleteNote(note.id, true)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>Tidak ada catatan arsip.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
