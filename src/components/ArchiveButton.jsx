import React from "react";

const ArchiveButton = ({ onClick }) => {
  return (
    <button className="btn btn-success custom-archive-btn" onClick={onClick}>
      Arsipkan
    </button>
  );
};

export default ArchiveButton;
