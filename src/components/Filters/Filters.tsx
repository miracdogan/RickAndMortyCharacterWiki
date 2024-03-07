// Filters.tsx

import React from "react";
import "./Filters.css"; // Oluşturduğumuz CSS dosyasını içe aktarın

const Filters = ({ handleFilterChange }) => {
  return (
    <div className="col-2">
      <div className="text-center fw-bold fs-4 mb-2">Filters</div>
      <div className="filter-container">
        <div className="radio-group">
          <label>
            <input
              className="form-check-input me-2 radio-button"
              type="radio"
              name="status"
              id="alive"
              value="alive"
              onChange={handleFilterChange}
            />
            Alive
          </label>
        </div>
        <div className="radio-group">
          <label>
            <input
              className="form-check-input me-2 radio-button"
              type="radio"
              name="status"
              id="dead"
              value="dead"
              onChange={handleFilterChange}
            />
            Dead
          </label>
        </div>
        <div className="radio-group">
          <label>
            <input
              className="form-check-input me-2 radio-button"
              type="radio"
              name="status"
              id="unknown"
              value="unknown"
              onChange={handleFilterChange}
            />
            Unknown
          </label>
        </div>
        <hr />
        <div className="radio-group">
          <label>
            <input
              className="form-check-input me-2 radio-button"
              type="radio"
              name="gender"
              id="male"
              value="male"
              onChange={handleFilterChange}
            />
            Male
          </label>
        </div>
        <div className="radio-group">
          <label>
            <input
              className="form-check-input me-2 radio-button"
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={handleFilterChange}
            />
            Female
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
