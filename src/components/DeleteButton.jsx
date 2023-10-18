import React from "react";

const DeleteButton = ({ onClick }) => {
  return (
    <button className="btn btn-danger custom-delete-btn" onClick={onClick}>
      Hapus
    </button>
  );
};

export default DeleteButton;
