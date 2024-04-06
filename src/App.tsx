import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./components/Navbar/Navbar";
import Character from "./components/Pages/Character";
import Episodes from "./components/Pages/Episodes";
import Favorites from "./components/Pages/Favorites";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  const [fetchedData, setFetchedData] = useState({ info: {}, results: [] });
  const [pageContent, setPageContent] = useState("Characters");
  const [showFavorites, setShowFavorites] = useState(false);

  let characterApi = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  const fetchCharacters = async () => {
    try {
      let response = await fetch(characterApi);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      let data = await response.json();
      setFetchedData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, [characterApi]);

  const handleFilterChange = (event: any) => {
    const { name, value } = event.target;
    if (name === "status") {
      setStatus(value);
    } else if (name === "gender") {
      setGender(value);
    } else if (name === "species") {
      setSpecies(value);
    }
    setPageNumber(1);
  };

  return (
    <div className="App">
      <div className="container-fluid my-2">
        <div className="row">
          <div className="col-4">
            <h1 className="text-center">Rick & Morty Wiki🪐</h1>
          </div>
          <div className="col-8">
            <Navbar
              setPageContent={setPageContent}
              fetchCharacters={fetchCharacters}
              setShowFavorites={setShowFavorites}
            />
          </div>
        </div>
      </div>
      {pageContent === "Characters" && (
        <>
          <Character
            setPageNumber={setPageNumber}
            setSearch={setSearch}
            handleFilterChange={handleFilterChange}
            fetchedData={fetchedData}
            search={search}
            pageNumber={pageNumber}
          />
        </>
      )}
      {pageContent === "Episodes" && (
        <>
          <Episodes />
        </>
      )}
      <Favorites
        show={showFavorites}
        handleClose={() => setShowFavorites(false)}
      />
    </div>
  );
}

export default App;
