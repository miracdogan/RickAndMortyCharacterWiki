import React from "react";

function Navbar({ setPageContent, fetchCharacters, setShowFavorites }) {
  const handleCharactersClick = () => {
    setPageContent("Characters");
    fetchCharacters();
  };

  const handleFavoritesClick = () => {
    setPageContent("Favorites");
    setShowFavorites(true);
  };

  return (
    <div>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a
            className="nav-link active"
            href="#"
            onClick={handleCharactersClick}
          >
            Characters
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="#"
            onClick={() => setPageContent("Episodes")}
          >
            Episodes
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={handleFavoritesClick}>
            Favorites
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
