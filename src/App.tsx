import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Search from "./components/Search/Search";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [fetchedData, setFetchedData] = useState({ info: {}, results: [] });

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function () {
      try {
        let response = await fetch(api);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        let data = await response.json();
        setFetchedData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center my-5">Rick & Morty Wiki🪐</h1>
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />
      <div className="container my-5">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
          <div className="col-9">
            <Cards characters={fetchedData.results} search={search} />
          </div>
        </div>
      </div>
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}

export default App;
