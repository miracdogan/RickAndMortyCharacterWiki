import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Search from "./components/Search/Search";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);

  console.log(fetchedData);
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center my-5">Rick & Morty Wiki</h1>
      <Search />

      <div className="container my-5">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
