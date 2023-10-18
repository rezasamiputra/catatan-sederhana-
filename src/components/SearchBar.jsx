import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <div>
      <h1 className="mb-3">Cari Catatan</h1>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Cari catatan"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
