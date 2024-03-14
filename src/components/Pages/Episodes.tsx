import React, { useState, useEffect } from "react";
import Cards from "../Cards/Cards";

const Episodes = () => {
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
        characterUrls.map(async (url) => {
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
      <h2>Characters in Episode 1</h2>
      <Cards characters={characters} search="" />
    </div>
  );
};

export default Episodes;
