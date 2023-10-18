// ArchivedNotesList.js
import React from "react";
import { showFormattedDate } from "../utils/initialData";
import DeleteButton from "./DeleteButton";
import UnarchiveButton from "./UnarchiveButton";

const ArchivedNotesList = ({
  notes,
  onUnarchive,
  onDelete,
  showFormattedDate,
}) => {
  return (
    <div>
      <h1 className="mb-3">Daftar Arsip Catatan</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {notes.map((note) => (
          <div key={note.id} className="col">
            <div className={`card w-100 h-100 bg-secondary text-white`}>
              <div className="card-body">
                <h3 className="card-title">{note.title}</h3>
                <p className="card-text">
                  <small className="text-muted">
                    Created at: {showFormattedDate(note.createdAt)}
                  </small>
                </p>
                <p className="card-text">{note.body}</p>
              </div>
              <div className="d-flex justify-content-around">
                <UnarchiveButton onClick={() => onUnarchive(note.id)} />
                <DeleteButton onClick={() => onDelete(note.id, true)} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArchivedNotesList;
