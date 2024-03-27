import React, { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import EpisodeLists from "../EpisodeLists/EpisodeLists";

const Episodes = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedEpisodeId, setSelectedEpisodeId] = useState("");
  const [selectedEpisodeName, setSelectedEpisodeName] = useState("");

  const episodesApi = `https://rickandmortyapi.com/api/episode/${selectedEpisodeId}`;

  const fetchEpisodeData = async () => {
    try {
      const response = await fetch(episodesApi);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const characterUrls = data.characters;
      const charactersData = await Promise.all(
        characterUrls.map(async (url) => {
          const characterResponse = await fetch(url);
          if (!characterResponse.ok) {
            throw new Error("Network response for character was not ok");
          }
          return characterResponse.json();
        })
      );
      setCharacters(charactersData);
      setSelectedEpisodeName(data.name); //
    } catch (error) {
      console.error("Error fetching episode data:", error);
    }
  };

  useEffect(() => {
    if (selectedEpisodeId) {
      fetchEpisodeData();
    }
  }, [selectedEpisodeId]);

  const handleSelectEpisode = (episodeId) => {
    setSelectedEpisodeId(episodeId);
  };

  return (
    <div>
      <div className="my-5">
        <div className="row">
          <EpisodeLists onSelectEpisode={handleSelectEpisode} />
          <div className="col-10 my-5">
            <h2>Selected Episode: {selectedEpisodeName}</h2>{" "}
            <Cards characters={characters} search="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
