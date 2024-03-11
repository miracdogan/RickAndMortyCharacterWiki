import "./Filters.css";
import Gender from "./SubFilters/Gender";
import Species from "./SubFilters/Species";
import Status from "./SubFilters/Status";

const Filters = ({ handleFilterChange }: { handleFilterChange: any }) => {
  return (
    <div className="col-2">
      <div className="text-center fw-bold fs-4 mb-3">Filters</div>
      <div className="filter-container">
        <Status handleFilterChange={handleFilterChange} />
        <hr />
        <Gender handleFilterChange={handleFilterChange} />
        <hr />
        <Species handleFilterChange={handleFilterChange} />
      </div>
    </div>
  );
};

export default Filters;
