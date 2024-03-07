import React from "react";

const Filters = ({ handleFilterChange }) => {
  return (
    <div className="col-2">
      <div className="text-center fw-bold fs-4 mb-2">Filter</div>
      <div
        className="form-check"
        style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", padding: "10px" }}
      >
        <div className="d-flex align-items-center ">
          <input
            className="form-check-input me-2"
            type="radio"
            name="status"
            id="alive"
            value="alive"
            onChange={handleFilterChange}
          />
          <label className="form-check-label" htmlFor="alive">
            Alive
          </label>
        </div>
      </div>
      <div
        className="form-check"
        style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", padding: "10px" }}
      >
        <div className="d-flex align-items-center">
          <input
            className="form-check-input me-2 "
            type="radio"
            name="status"
            id="dead"
            value="dead"
            onChange={handleFilterChange}
          />
          <label className="form-check-label" htmlFor="dead">
            Dead
          </label>
        </div>
      </div>
      <div
        className="form-check"
        style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", padding: "10px" }}
      >
        <div className="d-flex align-items-center">
          <input
            className="form-check-input me-2"
            type="radio"
            name="status"
            id="unknown"
            value="unknown"
            onChange={handleFilterChange}
          />
          <label className="form-check-label" htmlFor="unknown">
            Unknown
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
