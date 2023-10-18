// ActiveNotesList.js
import React from "react";
import { showFormattedDate } from "../utils/initialData";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";

const ActiveNotesList = ({ notes, onArchive, onDelete, showFormattedDate }) => {
  return (
    <div>
      <h1 className="mb-3">Daftar Catatan Aktif</h1>
      {notes.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-3 g-2">
          {notes.map((note) => (
            <div key={note.id} className="col mb-3">
              <div className={`card w-100 h-100 bg-light text-dark`}>
                <div className="card-body">
                  <h3 className="card-title">{note.title}</h3>
                  <p className="card-text">
                    <small className="text-muted">
                      Created at: {showFormattedDate(note.createdAt)}
                    </small>
                  </p>
                  <p className="card-text">{note.body}</p>
                </div>
                <div className="d-flex justify-content-around mb-2">
                  <ArchiveButton onClick={() => onArchive(note.id)} />
                  <DeleteButton onClick={() => onDelete(note.id, false)} />
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
