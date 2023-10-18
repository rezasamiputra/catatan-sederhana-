import React from "react";

const DeleteButton = ({ onClick }) => {
  return (
    <button className="btn btn-danger" onClick={onClick}>
      Hapus
    </button>
  );
};

export default DeleteButton;
