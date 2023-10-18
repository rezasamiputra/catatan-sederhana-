import React from "react";

const NoteForm = ({
  title,
  onTitleChange,
  titleCharacterCount,
  body,
  onBodyChange,
  onAddNote,
}) => {
  return (
    <div>
      <h1 className="mb-3">Tambah Catatan</h1>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Judul"
        value={title}
        onChange={onTitleChange}
        maxLength="50"
      />
      <small className="text-muted">{titleCharacterCount} / 50 karakter</small>
      <textarea
        className="form-control mb-2"
        placeholder="Isi Catatan"
        value={body}
        onChange={onBodyChange}
        style={{ height: "165px" }}
      />
      <button className="btn btn-primary" onClick={onAddNote}>
        Tambah
      </button>
    </div>
  );
};

export default NoteForm;
