import React from "react";
import "./Filters.css"; // Oluşturduğumuz CSS dosyasını içe aktarın

const Filters = ({ handleFilterChange }: { handleFilterChange: any }) => {
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
        <hr />
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
        <hr />
        <div className="radio-group">
          <label>
            <input
              className="form-check-input me-2 radio-button"
              type="radio"
              name="type"
              value="Human"
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
              name="type"
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
              name="type"
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
              name="type"
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
              name="type"
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
              name="type"
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
              name="type"
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
              name="type"
              value="robot"
              onChange={handleFilterChange}
            />
            Robot
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
