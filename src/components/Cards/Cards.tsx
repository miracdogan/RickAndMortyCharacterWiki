import React from "react";
import "./Cards.css";

const Cards = ({
  characters,
  search,
}: {
  characters: any[];
  search: string;
}) => {
  let badgeClass = "";

  const filteredCharacters = characters.filter((character: any) =>
    character.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="row">
      {filteredCharacters.length > 0 ? (
        filteredCharacters.map((character: any, index: any) => {
          if (character) {
            if (character.status === "Dead") {
              badgeClass = "bg-danger";
            } else if (character.status === "Alive") {
              badgeClass = "bg-success";
            } else {
              badgeClass = "bg-secondary";
            }

            return (
              <div className="card my-1 ms-1 col-2" key={index}>
                <div className="position-relative">
                  <img
                    src={character.image}
                    alt="CharacterImage"
                    className="img-fluid"
                  />
                  <div className={`position-absolute badge ${badgeClass}`}>
                    {character.status}
                  </div>
                </div>
                <div className="content mt-2">
                  <div className="text-center fs-4 fw-semibold">
                    {character.name}
                  </div>
                  <div className="my-3">
                    <div className="text-center">Last Location📍</div>
                    <div className="text-center fs-5">
                      {character.location.name}
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })
      ) : (
        <div className="col-3">No Characters Found...</div>
      )}
    </div>
  );
};

export default Cards;
