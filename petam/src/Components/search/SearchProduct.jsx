import React, { useState } from "react";
import "../Content.css";
import "./Search.css";

function SearchProduct() {
  return (
    <form
      //   onSubmit={handleSubmit}
      className="headerContainer "
    >
      <input
        placeholder="제품명..."
        // value={searchWord}
        // onChange={handleChange}
        name="name"
        className="search "
      />
      <button type="submit" className="button search-button">
        검색
      </button>
    </form>
  );
}

export default SearchProduct;
