import React, { useEffect, useState } from "react";

const EpisodeLists = () => {
  const [fetchedData, setFetchedData] = useState({ info: {}, results: [] });
  const [allEpisodes, setAllEpisodes] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState("");

  const episodeListsApi = `https://rickandmortyapi.com/api/episode`;

  const fetchAllEpisodes = async () => {
    try {
      let response = await fetch(episodeListsApi);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      let data = await response.json();
      const totalPages = data.info.pages;

      const episodes = [];
      for (let page = 1; page <= totalPages; page++) {
        const pageResponse = await fetch(`${episodeListsApi}/?page=${page}`);
        if (!pageResponse.ok) {
          throw new Error("Network response was not ok");
        }
        const pageData = await pageResponse.json();
        episodes.push(...pageData.results);
      }
      setAllEpisodes(episodes);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchAllEpisodes();
  }, []);

  const handleEpisodeChange = (event) => {
    setSelectedEpisode(event.target.value);
  };

  return (
    <div className="col-2">
      <div className="text-center fw-bold fs-4 mb-3">Episode Lists</div>
      <div className="filter-container">
        <select
          className="form-select"
          value={selectedEpisode}
          onChange={handleEpisodeChange}
        >
          <option value="">Select an episode</option>
          {allEpisodes.map((episode) => (
            <option key={episode.id} value={episode.id}>
              {episode.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default EpisodeLists;
