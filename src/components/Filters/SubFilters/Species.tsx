import React from "react";

const Species = ({ handleFilterChange }: { handleFilterChange: any }) => {
  return (
    <div>
      <div className="radio-group">
        <label>
          <input
            className="form-check-input me-2 radio-button"
            type="radio"
            name="species"
            value="human"
            onChange={handleFilterChange}
          />
          Human
        </label>
      </div>
      <div className="radio-group">
        <label>
          <input
            className="form-check-input me-2 radio-button"
            type="radio"
            name="species"
            value="alien"
            onChange={handleFilterChange}
          />
          Alien
        </label>
      </div>
      <div className="radio-group">
        <label>
          <input
            className="form-check-input me-2 radio-button"
            type="radio"
            name="species"
            value="animal"
            onChange={handleFilterChange}
          />
          Animal
        </label>
      </div>
      <div className="radio-group">
        <label>
          <input
            className="form-check-input me-2 radio-button"
            type="radio"
            name="species"
            value="crononenberg"
            onChange={handleFilterChange}
          />
          Crononenberg
        </label>
      </div>
      <div className="radio-group">
        <label>
          <input
            className="form-check-input me-2 radio-button"
            type="radio"
            name="species"
            value="disease"
            onChange={handleFilterChange}
          />
          Disease
        </label>
      </div>
      <div className="radio-group">
        <label>
          <input
            className="form-check-input me-2 radio-button"
            type="radio"
            name="species"
            value="humanoid"
            onChange={handleFilterChange}
          />
          Humanoid
        </label>
      </div>
      <div className="radio-group">
        <label>
          <input
            className="form-check-input me-2 radio-button"
            type="radio"
            name="species"
            value="poopybutthole"
            onChange={handleFilterChange}
          />
          Poopybutthole
        </label>
      </div>
      <div className="radio-group">
        <label>
          <input
            className="form-check-input me-2 radio-button"
            type="radio"
            name="species"
            value="robot"
            onChange={handleFilterChange}
          />
          Robot
        </label>
      </div>
    </div>
  );
};

export default Species;
