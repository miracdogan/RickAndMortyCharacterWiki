import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Search = ({
  setSearch,
  setPageNumber,
}: {
  setSearch: Function;
  setPageNumber: Function;
}) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <input
        type="text"
        className="form-control mx-2"
        style={{ maxWidth: "400px" }}
        placeholder="Search for characters..."
        onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
