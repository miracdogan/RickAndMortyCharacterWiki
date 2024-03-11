import React from "react";

const Gender = ({ handleFilterChange }: { handleFilterChange: any }) => {
  return (
    <div>
      <div className="radio-group">
        <label>
          <input
            className="form-check-input me-2 radio-button"
            type="radio"
            name="gender"
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
            value="female"
            onChange={handleFilterChange}
          />
          Female
        </label>
      </div>
    </div>
  );
};

export default Gender;
