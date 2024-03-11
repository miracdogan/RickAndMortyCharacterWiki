import React from "react";

const Status = ({ handleFilterChange }: { handleFilterChange: any }) => {
  return (
    <div>
      <div className="radio-group">
        <label>
          <input
            className="form-check-input me-2 radio-button"
            type="radio"
            name="status"
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
            value="unknown"
            onChange={handleFilterChange}
          />
          Unknown
        </label>
      </div>
    </div>
  );
};

export default Status;
