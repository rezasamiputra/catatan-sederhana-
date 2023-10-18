import React from "react";

const UnarchiveButton = ({ onClick }) => {
  return (
    <button className="btn btn-warning custom-unarchive-btn" onClick={onClick}>
      Batal Arsip
    </button>
  );
};

export default UnarchiveButton;
