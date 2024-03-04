import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Search = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <input
        type="text"
        className="form-control mx-2"
        style={{ maxWidth: "400px" }}
        placeholder="Search for characters..."
        aria-label="Search"
      />
      <button className="btn btn-primary" type="button">
        Search
      </button>
    </div>
  );
};

export default Search;
