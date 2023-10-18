import React from "react";
import UnarchiveButton from "./UnarchiveButton";
import DeleteButton from "./DeleteButton";

const ArchivedNotesList = ({ notes, onUnarchive, onDelete }) => {
  return (
    <div>
      <h1 className="mb-3">Daftar Arsip Catatan</h1>
      {notes.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-3 g-2">
          {notes.map((note) => (
            <div key={note.id} className="col mb-3">
              <div className={`card w-100 h-100 bg-secondary text-white`}>
                <div className="card-body">
                  <h2 className="card-title">{note.title}</h2>
                  <p className="card-text">{note.body}</p>
                  <div className="d-flex justify-content-between">
                    <UnarchiveButton onClick={() => onUnarchive(note.id)} />
                    <DeleteButton onClick={() => onDelete(note.id, true)} />
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
  );
};

export default ArchivedNotesList;
