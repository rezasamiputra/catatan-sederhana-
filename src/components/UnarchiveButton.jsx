import React from "react";

const UnarchiveButton = ({ onClick }) => {
  return (
    <button className="btn btn-warning" onClick={onClick}>
      Batal Arsip
    </button>
  );
};

export default UnarchiveButton;
