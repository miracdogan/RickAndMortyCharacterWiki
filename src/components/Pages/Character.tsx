import React from "react";
import Cards from "../Cards/Cards";
import Filters from "../Filters/Filters";
import Search from "../Search/Search";
import Pagination from "../Pagination/Pagination";

const Character = ({
  setPageNumber,
  setSearch,
  handleFilterChange,
  fetchedData,
  search,
  pageNumber,
}) => {
  return (
    <div>
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />
      <div className="my-5">
        <div className="row">
          <Filters handleFilterChange={handleFilterChange} />
          <div className="col-10 my-5">
            <Cards characters={fetchedData.results} search={search} />
          </div>
        </div>
      </div>
      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        info={fetchedData.info}
      />
    </div>
  );
};

export default Character;
