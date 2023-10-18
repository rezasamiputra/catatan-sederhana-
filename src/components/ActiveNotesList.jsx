import React from "react";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";

const ActiveNotesList = ({ notes, onArchive, onDelete }) => {
  return (
    <div>
      <h1 className="mb-3">Daftar Catatan Aktif</h1>
      {notes.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-3 g-2">
          {notes.map((note) => (
            <div key={note.id} className="col mb-3">
              <div className={`card w-100 h-100 bg-light text-dark`}>
                <div className="card-body">
                  <h2 className="card-title">{note.title}</h2>
                  <p className="card-text">{note.body}</p>
                  <div className="d-flex justify-content-between">
                    <ArchiveButton onClick={() => onArchive(note.id)} />
                    <DeleteButton onClick={() => onDelete(note.id, false)} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Tidak ada catatan aktif.</p>
      )}
    </div>
  );
};

export default ActiveNotesList;
