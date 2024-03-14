import React, { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import Filters from "../Filters/Filters";
import EpisodeLists from "../EpisodeLists/EpisodeLists";

const Episodes = (handleFilterChange) => {
  const [characters, setCharacters] = useState([]);
  const episodesApi = "https://rickandmortyapi.com/api/episode/1";

  const fetchEpisodeData = async () => {
    try {
      const response = await fetch(episodesApi);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const characterUrls = data.characters;
      const charactersData = await Promise.all(
        characterUrls.map(async (url: any) => {
          const characterResponse = await fetch(url);
          if (!characterResponse.ok) {
            throw new Error("Network response for character was not ok");
          }
          return characterResponse.json();
        })
      );
      setCharacters(charactersData);
    } catch (error) {
      console.error("Error fetching episode data:", error);
    }
  };

  useEffect(() => {
    fetchEpisodeData();
  }, [episodesApi]);

  return (
    <div>
      <div className="my-5">
        <div className="row">
          <EpisodeLists />
          <div className="col-10 my-5">
            <Cards characters={characters} search="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
