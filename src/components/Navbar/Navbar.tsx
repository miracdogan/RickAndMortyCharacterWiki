import React from "react";

function Navbar() {
  return (
    <div>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Characters
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Episodes
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Locations
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
