import React from "react";

const ArchiveButton = ({ onClick }) => {
  return (
    <button className="btn btn-success" onClick={onClick}>
      Arsipkan
    </button>
  );
};

export default ArchiveButton;
