import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Search from "./components/Search/Search";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import Navbar from "./components/Navbar/Navbar";

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
      <div className="container-fluid my-2">
        <div className="row">
          <div className="col-4">
            <h1 className="text-center">Rick & Morty Wiki🪐</h1>
          </div>
          <div className="col-8">
            <Navbar />
          </div>
        </div>
      </div>
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />
      {/* <div className="container-fluid"></div> */}
      <div className="my-5">
        <div className="row">
          <div className="col-2">
            <Filters />
          </div>
          <div className="col-10">
            <Cards characters={fetchedData.results} search={search} />
          </div>
        </div>
      </div>
      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        info={fetchedData.info}
      />
    </div>
  );
}

export default App;
